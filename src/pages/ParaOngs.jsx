import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer.jsx';
import './ParaOngs.css';

const navLinkStyle = { color: 'inherit', textDecoration: 'none' };
const ctaLinkStyle = { display: 'inline-block', textDecoration: 'none' };

const PARAONGS_FIELDS = [
  { key: 'nome_ong', label: 'Nome da ONG', type: 'text', required: true },
  { key: 'cnpj', label: 'CNPJ', type: 'text', required: true },
  { key: 'area_atuacao', label: 'Área de atuação principal', type: 'text', required: true },
  { key: 'cidade', label: 'Estado e cidade de atuação', type: 'text', required: true },
  { key: 'ano_fundacao', label: 'Ano de fundação', type: 'text', required: true },
  { key: 'beneficiados', label: 'Número aproximado de beneficiados', type: 'text', required: true },
  { key: 'nome_responsavel', label: 'Nome do responsável pelo cadastro', type: 'text', required: true },
  { key: 'cargo', label: 'Cargo', type: 'text', required: true },
  { key: 'email', label: 'E-mail institucional', type: 'email', required: true },
  { key: 'telefone', label: 'Telefone / WhatsApp', type: 'tel', required: true },
  { key: 'site', label: 'Site ou rede social da ONG (se houver)', type: 'url', required: false },
  {
    key: 'tipo_apoio',
    label: 'Tipo de apoio de interesse (financeiro · suprimentos · ambos · a definir)',
    type: 'select',
    required: true,
    options: ['Financeiro', 'Suprimentos', 'Ambos', 'A definir'],
  },
  {
    key: 'descricao',
    label: 'Descrição do trabalho — descreva brevemente o que a ONG faz, quem atende e como opera',
    type: 'textarea',
    required: true,
    isFull: true,
  },
];

const emptyParaOngs = Object.fromEntries(PARAONGS_FIELDS.map((f) => [f.key, '']));

export default function ParaOngs() {
  const [values, setValues] = useState(emptyParaOngs);
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const handleChange = (key) => (e) => {
    setValues((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setFeedback(null);
    const fields = {};
    for (const f of PARAONGS_FIELDS) {
      fields[f.label] = values[f.key];
    }
    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formType: 'paraongs', fields }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok) {
        setFeedback({ type: 'success', message: 'Mensagem enviada. Nossa equipe retorna em breve.' });
        setValues(emptyParaOngs);
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
    <div className="page-para-ongs">
      <h2 className="sr-only">Wireframe da página Para ONGs — Instituto Brasil Te Ama — critérios, formulário de cadastro e FAQ</h2>

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
          <Link to="/para-ongs" className="nav-active" style={navLinkStyle}>Para ONGs</Link>
        </div>
        <Link to="/contato" className="nav-cta" style={ctaLinkStyle}>Quero ser parceiro</Link>
      </nav>

      <div className="hero">
        <div className="hero-eyebrow">Para ONGs institucionais</div>
        <h1 className="hero-headline">Sua ONG pode receber apoio da rede Brasil Te Ama.</h1>
        <p className="hero-sub">O Instituto Brasil Te Ama identifica ONGs institucionais sérias, verifica sua atuação e direciona os recursos gerados pelo Programa Selo para organizações que já estão na ponta — preservando sua autonomia e protagonismo.</p>
        <div className="hero-actions">
          <a href="#form" className="btn-primary" style={{ display: 'inline-block', textDecoration: 'none' }}>Cadastrar minha ONG</a>
          <a href="#criterios" className="btn-ghost" style={{ display: 'inline-block', textDecoration: 'none' }}>Entender os critérios ↓</a>
        </div>
      </div>

      <div className="section">
        <div className="section-label">Bloco 1 — O que o Instituto oferece às ONGs</div>
        <div className="oferta-grid">
          <div className="oferta-card">
            <div className="oferta-icon">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 2v14M2 9h14" stroke="#7B1C3E" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </div>
            <div className="oferta-title">Apoio financeiro ou estrutural</div>
            <div className="oferta-text">Recursos gerados pelo Programa Selo Brasil Te Ama são direcionados a ONGs cadastradas — em formato financeiro ou de suprimentos, conforme definido caso a caso.</div>
            <div className="oferta-nota">Tipo e volume de apoio definidos após análise institucional. O cadastro não garante apoio imediato.</div>
          </div>
          <div className="oferta-card">
            <div className="oferta-icon">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="6" stroke="#7B1C3E" strokeWidth="1.2"/><path d="M6 9l2 2 4-4" stroke="#7B1C3E" strokeWidth="1.2" strokeLinecap="round"/></svg>
            </div>
            <div className="oferta-title">Visibilidade institucional</div>
            <div className="oferta-text">ONGs apoiadas são mencionadas nas comunicações públicas do Instituto — no site, relatórios e materiais de divulgação do programa, com critério e respeito.</div>
            <div className="oferta-nota">Somente após formalização da parceria e autorização expressa da ONG.</div>
          </div>
          <div className="oferta-card">
            <div className="oferta-icon">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 9l4 4 8-8" stroke="#7B1C3E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <div className="oferta-title">Chancela de parceria</div>
            <div className="oferta-text">A associação ao Instituto Brasil Te Ama e ao OSJ Knights of Malta confere credibilidade adicional à ONG junto a doadores, parceiros e órgãos públicos.</div>
            <div className="oferta-nota">Uso da chancela regulado por termo específico — não é automático.</div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-label">Bloco 2 — Como funciona o processo</div>
        <div className="passos">
          <div className="passo">
            <div className="passo-num">1</div>
            <div>
              <div className="passo-title">Preenchimento do formulário de cadastro</div>
              <div className="passo-desc">A ONG preenche o formulário desta página com dados institucionais, área de atuação e descrição do trabalho realizado. Nenhum documento é exigido nesta etapa — apenas informações básicas para uma primeira avaliação.</div>
            </div>
          </div>
          <div className="passo">
            <div className="passo-num">2</div>
            <div>
              <div className="passo-title">Análise institucional pelo Instituto</div>
              <div className="passo-desc">O Instituto Brasil Te Ama avalia o cadastro com base nos critérios públicos de elegibilidade — CNPJ ativo, atuação compatível, ausência de irregularidade grave e disposição para prestação de contas. A análise é conduzida pela equipe interna.</div>
            </div>
          </div>
          <div className="passo">
            <div className="passo-num">3</div>
            <div>
              <div className="passo-title">Retorno e próximos passos</div>
              <div className="passo-desc">O Instituto retorna com parecer em até 15 dias úteis. ONGs aprovadas na triagem inicial avançam para uma conversa mais aprofundada sobre formato, volume e condições do apoio. ONGs não aprovadas recebem retorno com orientação quando possível.</div>
            </div>
          </div>
          <div className="passo">
            <div className="passo-num">4</div>
            <div>
              <div className="passo-title">Formalização e acompanhamento</div>
              <div className="passo-desc">Com a aprovação, é assinado um termo de parceria que define as condições do apoio, as obrigações de prestação de contas e os canais de comunicação entre o Instituto e a ONG. O acompanhamento é periódico.</div>
            </div>
          </div>
        </div>
      </div>

      <div className="section" id="criterios">
        <div className="section-label">Bloco 3 — Critérios de elegibilidade</div>
        <div className="elegibilidade">
          <div>
            <div className="elegivel-title">Critérios obrigatórios</div>
            <div className="elegivel-item"><div className="dot-ok"></div><div className="elegivel-text">CNPJ ativo e regular, sem restrições cadastrais graves</div></div>
            <div className="elegivel-item"><div className="dot-ok"></div><div className="elegivel-text">Atuação comprovada em área compatível com os valores do Instituto</div></div>
            <div className="elegivel-item"><div className="dot-ok"></div><div className="elegivel-text">Ausência de histórico público de irregularidade grave ou desvio de recursos</div></div>
            <div className="elegivel-item"><div className="dot-ok"></div><div className="elegivel-text">Abertura para prestação de contas junto ao Instituto</div></div>
            <div className="elegivel-item"><div className="dot-ok"></div><div className="elegivel-text">Capacidade de receber apoio e aplicá-lo de forma verificável</div></div>
          </div>
          <div>
            <div className="elegivel-title">Critérios que aumentam a prioridade</div>
            <div className="elegivel-item"><div className="dot-ok"></div><div className="elegivel-text">Histórico de atuação consistente e tempo de existência relevante</div></div>
            <div className="elegivel-item"><div className="dot-ok"></div><div className="elegivel-text">Presença pública verificável — site, redes sociais ou relatórios</div></div>
            <div className="elegivel-item"><div className="dot-ok"></div><div className="elegivel-text">Cobertura geográfica estratégica ou complementar às ONGs já apoiadas</div></div>
            <div className="elegivel-item"><div className="dot-ok"></div><div className="elegivel-text">Alinhamento temático com as frentes prioritárias do Instituto</div></div>
            <div className="elegivel-title" style={{ marginTop: '1rem' }}>Situações que impedem a aprovação</div>
            <div className="elegivel-item"><div className="dot-no"></div><div className="elegivel-text">CNPJ inativo ou com irregularidade grave não sanada</div></div>
            <div className="elegivel-item"><div className="dot-no"></div><div className="elegivel-text">Histórico de desvio de recursos ou irregularidade institucional documentada</div></div>
            <div className="elegivel-item"><div className="dot-no"></div><div className="elegivel-text">Atuação incompatível com os valores do Instituto Brasil Te Ama</div></div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-label">Bloco 4 — O que a ONG assume ao se cadastrar</div>
        <div className="compromissos-grid">
          <div className="comp-card">
            <div className="comp-titulo">Prestação de contas periódica</div>
            <div className="comp-texto">A ONG compromete-se a fornecer informações sobre a aplicação dos recursos recebidos — no formato e na periodicidade definidos no termo de parceria.</div>
          </div>
          <div className="comp-card">
            <div className="comp-titulo">Comunicação responsável</div>
            <div className="comp-texto">O nome e a marca do Instituto Brasil Te Ama só podem ser associados ao trabalho da ONG com autorização prévia e nos termos definidos pelo Instituto.</div>
          </div>
          <div className="comp-card">
            <div className="comp-titulo">Conduta pública compatível</div>
            <div className="comp-texto">A ONG mantém conduta pública alinhada aos valores da rede — respeito, transparência e dignidade das pessoas atendidas em todas as suas comunicações.</div>
          </div>
          <div className="comp-card">
            <div className="comp-titulo">Autonomia preservada</div>
            <div className="comp-texto">O Instituto não interfere na gestão ou nas decisões internas da ONG. A parceria se limita ao apoio acordado e ao acompanhamento dos recursos direcionados.</div>
          </div>
        </div>
      </div>

      <div className="form-section" id="form">
        <div className="form-title">Formulário de cadastro de ONG</div>
        <div className="form-sub">Preencha os dados abaixo. O cadastro não garante apoio imediato — é o início de uma avaliação institucional. Nossa equipe retorna em até 15 dias úteis.</div>
        <form className="form-grid" onSubmit={handleSubmit} noValidate>
          {PARAONGS_FIELDS.map((f) => (
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
                  {f.options.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
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
            {submitting ? 'Enviando…' : 'Enviar cadastro →'}
          </button>
          <div className="form-note">O envio deste formulário não garante aprovação ou apoio imediato. O Instituto Brasil Te Ama avaliará o cadastro com base nos critérios públicos de elegibilidade e retornará em até 15 dias úteis. · atendimento@institutobrasilteama.org · (61) 3321-2535</div>
        </form>
      </div>

      <div className="section">
        <div className="section-label">Bloco 6 — FAQ para ONGs</div>
        <div className="faq-item">
          <div className="faq-q">O cadastro garante que minha ONG receberá apoio?</div>
          <div className="faq-a">Não. O formulário de cadastro inicia uma avaliação institucional. Somente após análise, aprovação e assinatura do termo de parceria a ONG passa a integrar formalmente a rede e pode receber recursos.</div>
        </div>
        <div className="faq-item">
          <div className="faq-q">Que tipo de apoio o Instituto oferece?</div>
          <div className="faq-a">O apoio pode ser financeiro, em suprimentos ou de outra natureza — conforme as necessidades da ONG e a disponibilidade de recursos do programa em cada ciclo. O formato é definido após a aprovação e conversas com a equipe do Instituto.</div>
        </div>
        <div className="faq-item">
          <div className="faq-q">O Instituto interfere na gestão da minha ONG?</div>
          <div className="faq-a">Não. A parceria se limita ao apoio acordado e ao acompanhamento da aplicação dos recursos. O Instituto preserva a autonomia e o protagonismo de cada ONG parceira.</div>
        </div>
        <div className="faq-item">
          <div className="faq-q">Minha ONG precisa ter CEBAS para se cadastrar?</div>
          <div className="faq-a">Não é obrigatório. O Instituto avalia a regularidade documental e a atuação real da ONG — CEBAS e outros títulos são considerados na priorização, mas não são pré-requisitos absolutos para o cadastro.</div>
        </div>
        <div className="faq-item">
          <div className="faq-q">Posso usar o nome do Instituto em minhas comunicações após o cadastro?</div>
          <div className="faq-a">Não. O uso do nome, da marca e de qualquer elemento do Instituto Brasil Te Ama depende de autorização prévia e é regulado pelo termo de parceria. O cadastro não autoriza nenhum uso público da associação.</div>
        </div>
        <div className="faq-item">
          <div className="faq-q">Em quanto tempo recebo retorno após o cadastro?</div>
          <div className="faq-a">O Instituto Brasil Te Ama retorna em até 15 dias úteis após o recebimento do cadastro. ONGs que avançarem na avaliação inicial serão convidadas para uma conversa mais aprofundada.</div>
        </div>
        <div className="faq-item">
          <div className="faq-q">Como é feito o acompanhamento após a aprovação?</div>
          <div className="faq-a">O acompanhamento é definido no termo de parceria — com periodicidade, formato de prestação de contas e canal de comunicação entre o Instituto e a ONG. O Instituto não interfere na operação, mas acompanha a aplicação dos recursos.</div>
        </div>
      </div>

      <div className="section" style={{ borderBottom: 'none' }}>
        <div className="section-label">CTA — Empresas que querem apoiar</div>
        <div className="cta-selo">
          <div>
            <h3>Sua empresa pode gerar os recursos que chegam aqui</h3>
            <p>Ao aderir ao Programa Selo Brasil Te Ama, empresas parceiras criam o fluxo de apoio que chega às ONGs cadastradas — com transparência, critério e prestação de contas.</p>
          </div>
          <Link to="/contato" className="cta-selo-btn" style={ctaLinkStyle}>Quero ser parceiro →</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
