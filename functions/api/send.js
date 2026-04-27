// Cloudflare Pages Function — POST /api/send
// Receives contact form submissions and relays them via ZeptoMail.

const SUBJECTS = {
  contato: 'Site IBtA · Contato — solicitação',
  selo: 'Site IBtA · Selo — solicitação de parceria',
  paraongs: 'Site IBtA · Para ONGs — cadastro',
};

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function isLikelyEmailKey(key) {
  const k = String(key || '').toLowerCase();
  return k.includes('e-mail') || k.includes('email') || k.includes('mail');
}

function isLikelyNameKey(key) {
  const k = String(key || '').toLowerCase();
  return k.includes('nome do respons') || k.includes('nome do responsável') || k.startsWith('nome ');
}

function buildHtmlBody(formType, fields, ip, subject, segmento) {
  const rows = Object.entries(fields)
    .map(([label, value]) => {
      const v = String(value ?? '').replace(/\n/g, '<br>');
      return `<tr><td style="padding:6px 12px;border:1px solid #e5e5e5;background:#fafafa;font-weight:600;vertical-align:top;width:240px;">${escapeHtml(label)}</td><td style="padding:6px 12px;border:1px solid #e5e5e5;vertical-align:top;">${escapeHtml(value).replace(/\n/g, '<br>')}</td></tr>`;
    })
    .join('');
  const ts = new Date().toISOString();
  const segmentoLine = segmento ? `<p style="margin:0 0 12px 0;"><b>Tipo de contato:</b> ${escapeHtml(segmento)}</p>` : '';
  return `<!doctype html><html><body style="font-family:Arial,Helvetica,sans-serif;color:#222;font-size:14px;">
<h2 style="margin:0 0 12px 0;">${escapeHtml(subject)}</h2>
${segmentoLine}<table style="border-collapse:collapse;width:100%;max-width:640px;">${rows}</table>
<p style="margin-top:16px;color:#888;font-size:11px;">Enviado em ${escapeHtml(ts)} · IP: ${escapeHtml(ip || 'desconhecido')} · formType: ${escapeHtml(formType)}</p>
</body></html>`;
}

function buildTextBody(formType, fields, ip, subject, segmento) {
  const lines = Object.entries(fields).map(([label, value]) => `${label}: ${value}`);
  const ts = new Date().toISOString();
  const head = [subject];
  if (segmento) head.push(`Tipo de contato: ${segmento}`);
  return [
    ...head,
    '',
    ...lines,
    '',
    `Enviado em ${ts} · IP: ${ip || 'desconhecido'} · formType: ${formType}`,
  ].join('\n');
}

function findReplyTo(fields) {
  let email = null;
  let name = null;
  for (const [k, v] of Object.entries(fields)) {
    if (!email && isLikelyEmailKey(k) && typeof v === 'string' && v.includes('@')) {
      email = v.trim();
    }
    if (!name && isLikelyNameKey(k) && typeof v === 'string' && v.trim()) {
      name = v.trim();
    }
  }
  if (!email) return null;
  return { address: email, name: name || email };
}

export async function onRequestPost({ request, env }) {
  let payload;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ ok: false, error: 'invalid' }, { status: 400 });
  }

  const { formType, fields, segmento } = payload || {};
  if (
    !formType ||
    !SUBJECTS[formType] ||
    !fields ||
    typeof fields !== 'object' ||
    Array.isArray(fields) ||
    Object.keys(fields).length === 0
  ) {
    return Response.json({ ok: false, error: 'invalid' }, { status: 400 });
  }

  const ip = request.headers.get('cf-connecting-ip') || '';
  let subject = SUBJECTS[formType];
  const segmentoStr = typeof segmento === 'string' && segmento.trim() ? segmento.trim().slice(0, 80) : '';
  if (formType === 'contato' && segmentoStr) {
    subject += ` · ${segmentoStr}`;
  }
  const htmlbody = buildHtmlBody(formType, fields, ip, subject, segmentoStr);
  const textbody = buildTextBody(formType, fields, ip, subject, segmentoStr);

  const body = {
    from: {
      address: 'noreply@institutobrasilteama.org',
      name: 'Site Instituto Brasil Te Ama',
    },
    to: [
      {
        email_address: {
          address: 'atendimento@institutobrasilteama.org',
          name: 'Atendimento IBtA',
        },
      },
    ],
    subject,
    htmlbody,
    textbody,
  };

  const replyTo = findReplyTo(fields);
  if (replyTo) {
    body.reply_to = [replyTo];
  }

  let zeptoRes;
  try {
    zeptoRes = await fetch('https://api.zeptomail.com/v1.1/email', {
      method: 'POST',
      headers: {
        Authorization: `Zoho-enczapikey ${env.ZEPTO_TOKEN}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(body),
    });
  } catch {
    return Response.json({ ok: false, error: 'network' }, { status: 502 });
  }

  if (!zeptoRes.ok) {
    let text = '';
    try {
      text = await zeptoRes.text();
    } catch {
      text = '';
    }
    const truncated = text.length > 500 ? text.slice(0, 500) + '…' : text;
    return Response.json(
      { ok: false, error: `${zeptoRes.status}: ${truncated}` },
      { status: 502 },
    );
  }

  return Response.json({ ok: true }, { status: 200 });
}

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      Allow: 'POST, OPTIONS',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
