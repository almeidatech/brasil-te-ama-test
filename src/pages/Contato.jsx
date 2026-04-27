import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer.jsx';
import './Contato.css';

const navLinkStyle = { color: 'inherit', textDecoration: 'none' };
const ctaLinkStyle = { display: 'inline-block', textDecoration: 'none' };

const SEGMENTOS = {
  parceiro: {
    label: 'Quero ser parceiro',
    sub: 'Programa Selo Brasil Te Ama',
    icon: '🤝',
    title: 'Quero ser parceiro — Programa Selo Brasil Te Ama',
    formSub: 'Preencha os dados abaixo. Nossa equipe entrará em contato em até 5 dias úteis para apresentar o programa e entender se faz sentido para os dois lados.',
    submit: 'Enviar solicitação →',
    fields: [
      { key: 'nome_empresa', label: 'Nome da empresa', type: 'text', required: true },
      { key: 'cnpj', label: 'CNPJ', type: 'text', required: true },
      { key: 'segmento', label: 'Segmento de atuação', type: 'text', required: true },
      { key: 'produto', label: 'Produto ou serviço principal', type: 'text', required: true },
      { key: 'nome_responsavel', label: 'Nome do responsável', type: 'text', required: true },
      { key: 'cargo', label: 'Cargo', type: 'text', required: true },
      { key: 'email', label: 'E-mail corporativo', type: 'email', required: true },
      { key: 'telefone', label: 'Telefone / WhatsApp', type: 'tel', required: true },
      { key: 'mensagem', label: 'Mensagem (opcional)', type: 'textarea', required: false, isFull: true },
    ],
  },
  institucional: {
    label: 'Parceria institucional',
    sub: 'Governo, ordem ou org.',
    icon: '🏢',
    title: 'Parceria institucional',
    formSub: 'Conte sobre a organização e o objetivo da parceria. Retornaremos em até 5 dias úteis.',
    submit: 'Enviar solicitação →',
    fields: [
      { key: 'nome_organizacao', label: 'Nome da organização', type: 'text', required: true },
      { key: 'tipo_organizacao', label: 'Tipo de organização', type: 'select', required: true,
        options: ['Governo', 'Ordem / instituição religiosa', 'ONG / org. social', 'Empresa / setor privado', 'Outro'] },
      { key: 'nome_responsavel', label: 'Nome do responsável', type: 'text', required: true },
      { key: 'cargo', label: 'Cargo', type: 'text', required: true },
      { key: 'email', label: 'E-mail', type: 'email', required: true },
      { key: 'telefone', label: 'Telefone / WhatsApp', type: 'tel', required: true },
      { key: 'mensagem', label: 'Descreva o objetivo da parceria', type: 'textarea', required: true, isFull: true },
    ],
  },
  ong: {
    label: 'Minha ONG quer apoio',
    sub: 'Cadastro de ONGs',
    icon: '🌿',
    title: 'Minha ONG quer apoio — pré-cadastro',
    formSub: 'Para cadastro completo, prefira a página Para ONGs. Aqui é um pré-cadastro rápido — retornaremos em até 15 dias úteis.',
    submit: 'Enviar pré-cadastro →',
    fields: [
      { key: 'nome_ong', label: 'Nome da ONG', type: 'text', required: true },
      { key: 'cnpj', label: 'CNPJ', type: 'text', required: true },
      { key: 'area_atuacao', label: 'Área de atuação principal', type: 'text', required: true },
      { key: 'cidade', label: 'Cidade / UF de atuação', type: 'text', required: true },
      { key: 'nome_responsavel', label: 'Nome do responsável', type: 'text', required: true },
      { key: 'cargo', label: 'Cargo', type: 'text', required: true },
      { key: 'email', label: 'E-mail institucional', type: 'email', required: true },
      { key: 'telefone', label: 'Telefone / WhatsApp', type: 'tel', required: true },
      { key: 'site', label: 'Site ou rede social (se houver)', type: 'url', required: false },
      { key: 'mensagem', label: 'Descrição do trabalho — o que faz, quem atende, como opera', type: 'textarea', required: true, isFull: true },
    ],
  },
  imprensa: {
    label: 'Imprensa',
    sub: 'Jornalistas e veículos',
    icon: '📰',
    title: 'Imprensa — pauta, entrevista ou material',
    formSub: 'Solicitações de pauta, entrevistas e materiais institucionais. Atendemos pedidos de imprensa em até 3 dias úteis.',
    submit: 'Enviar solicitação →',
    fields: [
      { key: 'nome_jornalista', label: 'Nome do jornalista', type: 'text', required: true },
      { key: 'veiculo', label: 'Veículo', type: 'text', required: true },
      { key: 'cargo', label: 'Cargo / função', type: 'text', required: false },
      { key: 'email', label: 'E-mail', type: 'email', required: true },
      { key: 'telefone', label: 'Telefone / WhatsApp', type: 'tel', required: true },
      { key: 'prazo', label: 'Prazo de fechamento (se houver)', type: 'text', required: false },
      { key: 'pauta', label: 'Pauta — descreva o tema, ângulo e o que precisa do Instituto', type: 'textarea', required: true, isFull: true },
    ],
  },
  duvidas: {
    label: 'Dúvidas gerais',
    sub: 'Outras mensagens',
    icon: '💬',
    title: 'Dúvidas gerais',
    formSub: 'Outras mensagens — retornaremos em até 5 dias úteis.',
    submit: 'Enviar mensagem →',
    fields: [
      { key: 'nome', label: 'Nome', type: 'text', required: true },
      { key: 'email', label: 'E-mail', type: 'email', required: true },
      { key: 'telefone', label: 'Telefone / WhatsApp (opcional)', type: 'tel', required: false },
      { key: 'assunto', label: 'Assunto', type: 'text', required: true },
      { key: 'mensagem', label: 'Mensagem', type: 'textarea', required: true, isFull: true },
    ],
  },
};

function emptyValues(fields) {
  return Object.fromEntries(fields.map((f) => [f.key, '']));
}

export default function Contato() {
  const [activeSegmento, setActiveSegmento] = useState('parceiro');
  const segmento = SEGMENTOS[activeSegmento];
  const [values, setValues] = useState(() => emptyValues(segmento.fields));
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const switchTo = (key) => {
    setActiveSegmento(key);
    setValues(emptyValues(SEGMENTOS[key].fields));
    setFeedback(null);
  };

  const handleChange = (key) => (e) => {
    setValues((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setFeedback(null);
    const fields = {};
    for (const f of segmento.fields) {
      fields[f.label] = values[f.key];
    }
    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formType: 'contato', segmento: segmento.label, fields }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok) {
        setFeedback({ type: 'success', message: 'Mensagem enviada. Nossa equipe retorna em breve.' });
        setValues(emptyValues(segmento.fields));
      } else {
        setFeedback({ type: 'error', message: 'Não foi possível enviar. Tente novamente em instantes ou escreva direto para atendimento@institutobrasilteama.org.' });
      }
    } catch {
      setFeedback({ type: 'error', message: 'Não foi possível enviar. Tente novamente em instantes ou escreva direto para atendimento@institutobrasilteama.org.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="page-contato">
      <h2 className="sr-only">Wireframe da página Contato — Instituto Brasil Te Ama — formulário segmentado em 5 tipos de contato com dados confirmados</h2>

      <nav className="nav">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="nav-logo">
            <img src="/images/logo.png" alt="Instituto Brasil Te Ama" className="logo-img" />
            <div className="logo-name">Instituto Brasil Te Ama</div>
          </div>
        </Link>
        <div className="nav-links">
          <Link to="/" style={navLinkStyle}>Home</Link><Link to="/sobre" style={navLinkStyle}>Sobre</Link><Link to="/lideranca" style={navLinkStyle}>Liderança</Link><Link to="/selo" style={navLinkStyle}>Selo Brasil Te Ama</Link>
          <Link to="/projetos" style={navLinkStyle}>Projetos</Link><Link to="/noticias" style={navLinkStyle}>Notícias</Link><Link to="/transparencia" style={navLinkStyle}>Transparência</Link>
          <Link to="/contato" className="nav-active" style={navLinkStyle}>Contato</Link>
        </div>
        <Link to="/contato" className="nav-cta" style={ctaLinkStyle}>Quero ser parceiro</Link>
      </nav>

      <div className="hero">
        <div className="hero-eyebrow">Fale com o Instituto</div>
        <h1 className="hero-headline">Entre em contato — nossa equipe responde em até 5 dias úteis.</h1>
        <p className="hero-sub">Selecione o tipo de contato abaixo para que possamos direcionar sua mensagem corretamente e responder com mais precisão.</p>
      </div>

      <div className="section">
        <div className="section-label">Selecione o tipo de contato</div>
        <div className="segmentos-grid">
          {Object.entries(SEGMENTOS).map(([key, seg]) => (
            <button
              key={key}
              type="button"
              className={`segmento${activeSegmento === key ? ' segmento-active' : ''}`}
              onClick={() => switchTo(key)}
            >
              <div className="segmento-icon">{seg.icon}</div>
              <div className="segmento-label">{seg.label}</div>
              <div className="segmento-sub">{seg.sub}</div>
            </button>
          ))}
        </div>

        <div className="form-layout">
          <div className="form-box">
            <div className="form-title">{segmento.title}</div>
            <div className="form-sub">{segmento.formSub}</div>
            <form className="form-grid" onSubmit={handleSubmit} noValidate>
              {segmento.fields.map((f) => (
                <label key={f.key} className={`form-field${f.isFull ? ' form-field-full' : ''}`}>
                  <span className="form-field-label">{f.label}</span>
                  {f.type === 'textarea' ? (
                    <textarea
                      name={f.key}
                      value={values[f.key]}
                      onChange={handleChange(f.key)}
                      required={f.required}
                    />
                  ) : f.type === 'select' ? (
                    <select
                      name={f.key}
                      value={values[f.key]}
                      onChange={handleChange(f.key)}
                      required={f.required}
                    >
                      <option value="">Selecione…</option>
                      {f.options.map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type={f.type}
                      name={f.key}
                      value={values[f.key]}
                      onChange={handleChange(f.key)}
                      required={f.required}
                    />
                  )}
                </label>
              ))}
              {feedback && (
                <div className={`form-feedback form-feedback-${feedback.type}`}>{feedback.message}</div>
              )}
              <button type="submit" className="form-submit" disabled={submitting}>
                {submitting ? 'Enviando…' : segmento.submit}
              </button>
              <div className="form-note">Ao enviar, você concorda que o Instituto Brasil Te Ama entre em contato. Nenhum compromisso é assumido antes da assinatura do Termo de Adesão. · atendimento@institutobrasilteama.org</div>
            </form>
          </div>

          <div className="sidebar">
            <div className="contact-card">
              <div className="contact-label">Telefones</div>
              <div className="contact-value">(61) 3321-2535</div>
              <div className="contact-value">(61) 98498-1100</div>
              <div className="contact-note">Seg a Sex · 9h às 18h · Brasília/DF</div>
            </div>
            <div className="contact-card">
              <div className="contact-label">E-mail</div>
              <div className="contact-value">atendimento@institutobrasilteama.org</div>
              <div className="contact-note">Resposta em até 5 dias úteis</div>
            </div>
            <div className="contact-card">
              <div className="contact-label">Localização</div>
              <div className="contact-value">Brasília · DF · Brasil</div>
              <div className="contact-note annotation pending">endereço completo — a confirmar para publicação</div>
            </div>
            <div className="contact-card">
              <div className="contact-label">CNPJ</div>
              <div className="contact-value">49.458.362/0001-10</div>
              <div className="contact-sub">Instituto Brasil Te Ama</div>
            </div>
            <div className="contact-card">
              <div className="contact-label">Redes sociais</div>
              <div className="contact-value annotation pending" style={{ display: 'block' }}>confirmar handles antes do lançamento</div>
            </div>
          </div>
        </div>
      </div>

      <div className="section" style={{ borderBottom: 'none' }}>
        <div className="section-label">Atalhos rápidos</div>
        <div className="atalhos-grid">
          <div className="atalho-card">
            <div className="atalho-icon">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 2l1.8 3.6L15 6.3l-3 2.9.7 4.1L9 11.4l-3.7 1.9.7-4.1-3-2.9 4.2-.7z" stroke="#7B1C3E" strokeWidth="1.2" strokeLinejoin="round"/></svg>
            </div>
            <div>
              <div className="atalho-title">Programa Selo Brasil Te Ama</div>
              <div className="atalho-text">Conheça o programa completo — como funciona, benefícios, formulário de interesse e FAQ.</div>
              <Link to="/selo" className="atalho-btn" style={{ display: 'inline-block', textDecoration: 'none' }}>Ver página do Selo →</Link>
            </div>
          </div>
          <div className="atalho-card">
            <div className="atalho-icon">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="6" stroke="#7B1C3E" strokeWidth="1.2"/><path d="M9 6v3l2 2" stroke="#7B1C3E" strokeWidth="1.2" strokeLinecap="round"/></svg>
            </div>
            <div>
              <div className="atalho-title">ONGs — cadastro e elegibilidade</div>
              <div className="atalho-text">Sua ONG pode receber apoio da rede. Veja os critérios e o formulário de cadastro.</div>
              <Link to="/para-ongs" className="atalho-btn" style={{ display: 'inline-block', textDecoration: 'none' }}>Ver página Para ONGs →</Link>
            </div>
          </div>
          <div className="atalho-card">
            <div className="atalho-icon">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="2" y="3" width="14" height="12" rx="2" stroke="#7B1C3E" strokeWidth="1.2"/><path d="M2 7h14" stroke="#7B1C3E" strokeWidth="1.2"/></svg>
            </div>
            <div>
              <div className="atalho-title">Transparência e relatórios</div>
              <div className="atalho-text">Indicadores de impacto, parceiros confirmados e política de prestação de contas.</div>
              <Link to="/transparencia" className="atalho-btn" style={{ display: 'inline-block', textDecoration: 'none' }}>Ver página Transparência →</Link>
            </div>
          </div>
          <div className="atalho-card">
            <div className="atalho-icon">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 2C5.13 2 2 5.13 2 9s3.13 7 7 7 7-3.13 7-7-3.13-7-7-7zm0 3v4l3 1.5" stroke="#7B1C3E" strokeWidth="1.2" strokeLinecap="round"/></svg>
            </div>
            <div>
              <div className="atalho-title">Liderança institucional</div>
              <div className="atalho-text">Conheça S.E. Dr. Franco Nicoletti e Shirin Vafaein — fundador e presidente do Instituto.</div>
              <Link to="/lideranca" className="atalho-btn" style={{ display: 'inline-block', textDecoration: 'none' }}>Ver página Liderança →</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
