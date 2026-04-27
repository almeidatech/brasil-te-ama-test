import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer.jsx';
import './Selo.css';

const navLinkStyle = { color: 'inherit', textDecoration: 'none' };
const ctaLinkStyle = { display: 'inline-block', textDecoration: 'none' };

const SELO_FIELDS = [
  { key: 'nome_empresa', label: 'Nome da empresa', type: 'text', required: true },
  { key: 'cnpj', label: 'CNPJ', type: 'text', required: true },
  { key: 'segmento', label: 'Segmento de atuação', type: 'text', required: true },
  { key: 'produto', label: 'Produto ou serviço onde aplicaria o selo', type: 'text', required: true },
  { key: 'nome_responsavel', label: 'Nome do responsável', type: 'text', required: true },
  { key: 'cargo', label: 'Cargo', type: 'text', required: true },
  { key: 'email', label: 'E-mail corporativo', type: 'email', required: true },
  { key: 'telefone', label: 'Telefone / WhatsApp', type: 'tel', required: true },
  {
    key: 'mensagem',
    label: 'Mensagem (opcional) — conte brevemente sobre sua empresa e seu interesse no programa',
    type: 'textarea',
    required: false,
    isFull: true,
  },
];

const emptySelo = Object.fromEntries(SELO_FIELDS.map((f) => [f.key, '']));

export default function Selo() {
  const [values, setValues] = useState(emptySelo);
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
    for (const f of SELO_FIELDS) {
      fields[f.label] = values[f.key];
    }
    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formType: 'selo', fields }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok) {
        setFeedback({ type: 'success', message: 'Mensagem enviada. Nossa equipe retorna em breve.' });
        setValues(emptySelo);
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
    <div className="page-selo">
      <h2 className="sr-only">Wireframe da página Selo Brasil Te Ama — 7 blocos de conversão B2B com textos aprovados</h2>

      <nav className="nav">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="nav-logo">
            <img src="/images/logo.png" alt="Instituto Brasil Te Ama" className="logo-img" />
            <div className="logo-name">Instituto Brasil Te Ama</div>
          </div>
        </Link>
        <div className="nav-links">
          <Link to="/" style={navLinkStyle}>Home</Link><Link to="/sobre" style={navLinkStyle}>Sobre</Link><Link to="/lideranca" style={navLinkStyle}>Liderança</Link>
          <Link to="/selo" className="nav-active" style={navLinkStyle}>Selo Brasil Te Ama</Link>
          <Link to="/projetos" style={navLinkStyle}>Projetos</Link><Link to="/noticias" style={navLinkStyle}>Notícias</Link><Link to="/transparencia" style={navLinkStyle}>Transparência</Link><Link to="/contato" style={navLinkStyle}>Contato</Link>
        </div>
        <Link to="/contato" className="nav-cta" style={ctaLinkStyle}>Quero ser parceiro</Link>
      </nav>

      <div className="hero-selo">
        <div className="hero-badge">OSJ Knights of Malta · Cavaleiros de Malta</div>
        <p className="hero-eyebrow">Programa de parceria institucional</p>
        <h1 className="hero-headline">Sua empresa faz parte de uma rede do bem que também apoia você.</h1>
        <p className="hero-sub">O Selo Brasil Te Ama é o símbolo de uma rede de empresas que escolheram participar de uma visão de ajuda mútua — com parceria recíproca, transparência e respaldo internacional.</p>
        <div className="hero-actions">
          <a href="#form" className="btn-primary" style={{ display: 'inline-block', textDecoration: 'none' }}>Solicitar parceria</a>
          <a href="#como-funciona" className="btn-ghost" style={{ display: 'inline-block', textDecoration: 'none' }}>Entender como funciona ↓</a>
        </div>
      </div>

      <div className="hero-banner"><img src="/images/editorial-loscudo.jpg" alt="Selo Brasil Te Ama — rede de empresas parceiras" /></div>

      <div className="section">
        <div className="section-label">Bloco 1 — O que é o Selo</div>
        <div className="oque-grid">
          <div>
            <p className="oque-text">O Selo Brasil Te Ama é o símbolo de uma rede de empresas que escolheram participar de uma visão de ajuda mútua. Ao aderir ao programa, a empresa passa a integrar um ecossistema organizado pelo Instituto Brasil Te Ama, que chancela as parcerias e direciona os apoios gerados para ONGs institucionais no Brasil.</p>
            <br/>
            <p className="oque-text">Mais do que um selo aplicado em produtos, serviços ou comunicações, trata-se de um sinal de pertencimento — a marca passa a ser percebida como parte de uma rede institucional de impacto, que valoriza transparência, responsabilidade e respeito às pessoas atendidas.</p>
          </div>
          <div className="oque-callout">
            <div className="oque-callout-title">Sustentação estrutural</div>
            <p className="oque-callout-text">O programa é sustentado pelo OSJ Knights of Malta — Cavaleiros de Malta — o que confere legitimidade internacional, governança sólida e compromisso de longo prazo com as ações humanitárias no Brasil e no exterior.</p>
            <br/>
            <div className="oque-callout-title" style={{ marginTop: '8px' }}>Aprovação por</div>
            <p className="oque-callout-text">Shirin Vafaein — Presidente do Instituto Brasil Te Ama<br/>Dama di Gran Croce · OSJ Knights of Malta</p>
          </div>
        </div>
      </div>

      <div className="section" id="como-funciona">
        <div className="section-label">Bloco 2 — Como funciona (mecânica em 4 passos)</div>
        <div className="passos">
          <div className="passo">
            <div className="passo-num">1</div>
            <div>
              <div className="passo-title">Adesão ao programa</div>
              <div className="passo-desc">A empresa manifesta interesse, preenche o formulário de interesse e passa por análise institucional do Instituto. A aprovação é conduzida por Shirin Vafaein, Presidente do Instituto.</div>
            </div>
          </div>
          <div className="passo">
            <div className="passo-num">2</div>
            <div>
              <div className="passo-title">Assinatura do Termo de Parceria</div>
              <div className="passo-desc">Com a aprovação, a empresa recebe e assina o Termo de Adesão — documento formal com vigência de 12 meses que define os compromissos de ambas as partes: repasse, uso do selo e prestação de contas.</div>
            </div>
          </div>
          <div className="passo">
            <div className="passo-num">3</div>
            <div>
              <div className="passo-title">Aplicação do selo e repasse programado</div>
              <div className="passo-desc">A empresa recebe o kit digital e aplica o selo em produtos, serviços, ponto de venda ou site. A cada venda, uma fração previamente acordada é destinada ao Instituto. O consumidor não paga nada a mais — o valor já está na operação da empresa.</div>
              <div className="passo-note">Nota: nenhum valor específico de repasse é definido publicamente — os termos são estabelecidos no Termo de Adesão após o primeiro contato.</div>
            </div>
          </div>
          <div className="passo">
            <div className="passo-num">4</div>
            <div>
              <div className="passo-title">Impacto direto e negócio recíproco</div>
              <div className="passo-desc">O Instituto direciona os apoios gerados para ONGs verificadas, com prestação de contas periódica. E fecha o ciclo: o Instituto e as ONGs parceiras compram produtos e serviços das empresas do selo sempre que possível.</div>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-label">Bloco 3 — O diferencial: negócio recíproco</div>
        <div className="reciproco">
          <div className="reciproco-title">Mais do que apoiar — pertencer a uma rede que apoia você de volta</div>
          <p className="reciproco-text">No modelo tradicional de responsabilidade social, a empresa apenas doa. No Programa Selo Brasil Te Ama, a empresa também recebe. O Instituto e as ONGs parceiras dão preferência de compra às empresas do selo sempre que precisam adquirir produtos ou serviços.</p>
          <div className="reciproco-destaque">Exemplo: se o Instituto precisar adquirir materiais, uniformes ou suprimentos para suas ações humanitárias, dará preferência às empresas parceiras que utilizam o selo. A empresa apoia a rede — e a rede apoia a empresa. O ciclo se fecha.</div>
        </div>
      </div>

      <div className="section">
        <div className="section-label">Bloco 4 — Benefícios institucionais</div>
        <div className="beneficios-grid">
          <div className="beneficio-card">
            <div className="beneficio-icon">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="#7B1C3E" strokeWidth="1.2"/><path d="M5 8l2 2 4-4" stroke="#7B1C3E" strokeWidth="1.2" strokeLinecap="round"/></svg>
            </div>
            <div className="beneficio-title">Reputação</div>
            <div className="beneficio-text">Sua marca associada a uma rede institucional de impacto reconhecida internacionalmente pelos Cavaleiros de Malta.</div>
          </div>
          <div className="beneficio-card">
            <div className="beneficio-icon">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2l1.5 3 3.5.5-2.5 2.5.5 3.5L8 10l-3 1.5.5-3.5L3 5.5l3.5-.5z" stroke="#7B1C3E" strokeWidth="1.2" strokeLinejoin="round"/></svg>
            </div>
            <div className="beneficio-title">Pertencimento</div>
            <div className="beneficio-text">Participação em uma rede do bem com respaldo do OSJ Knights of Malta — com governança, critérios e transparência.</div>
          </div>
          <div className="beneficio-card">
            <div className="beneficio-icon">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2" y="4" width="12" height="9" rx="1.5" stroke="#7B1C3E" strokeWidth="1.2"/><path d="M5 4V3a3 3 0 016 0v1" stroke="#7B1C3E" strokeWidth="1.2"/></svg>
            </div>
            <div className="beneficio-title">Visibilidade</div>
            <div className="beneficio-text">Presença no site e nas comunicações do Instituto como parceiro oficial da rede.</div>
          </div>
          <div className="beneficio-card">
            <div className="beneficio-icon">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 10l4-4 3 3 5-6" stroke="#7B1C3E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <div className="beneficio-title">Negócio recíproco</div>
            <div className="beneficio-text">O Instituto e as ONGs parceiras dão preferência de compra às empresas do selo em suas aquisições.</div>
          </div>
          <div className="beneficio-card">
            <div className="beneficio-icon">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="3" y="2" width="10" height="13" rx="1.5" stroke="#7B1C3E" strokeWidth="1.2"/><path d="M6 6h4M6 9h4M6 12h2" stroke="#7B1C3E" strokeWidth="1.2" strokeLinecap="round"/></svg>
            </div>
            <div className="beneficio-title">Transparência</div>
            <div className="beneficio-text">Acesso a relatórios periódicos sobre o destino dos apoios e o impacto gerado pela rede.</div>
          </div>
          <div className="beneficio-card">
            <div className="beneficio-icon">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2v4l3 1.5" stroke="#7B1C3E" strokeWidth="1.2" strokeLinecap="round"/><circle cx="8" cy="8" r="6" stroke="#7B1C3E" strokeWidth="1.2"/></svg>
            </div>
            <div className="beneficio-title">Reconhecimento anual</div>
            <div className="beneficio-text">Comunicado de reconhecimento institucional anual aos parceiros ativos da rede.</div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-label">Bloco 5 — Quem pode aderir</div>
        <div className="elegibilidade">
          <div className="elegivel-col">
            <div className="elegivel-title">Empresas elegíveis</div>
            <div className="elegivel-item"><div className="dot-ok"></div><span>CNPJ ativo e regular</span></div>
            <div className="elegivel-item"><div className="dot-ok"></div><span>Qualquer porte — preferência para médias e pequenas empresas locais</span></div>
            <div className="elegivel-item"><div className="dot-ok"></div><span>Negócios B2C com produtos ou serviços de consumo</span></div>
            <div className="elegivel-item"><div className="dot-ok"></div><span>Alinhamento com os valores da rede (respeito, transparência, compromisso social)</span></div>
            <div className="elegivel-item"><div className="dot-ok"></div><span>Disponibilidade para cumprir os compromissos do Termo de Adesão</span></div>
          </div>
          <div className="elegivel-col">
            <div className="elegivel-title">Restrições de adesão</div>
            <div className="elegivel-item"><div className="dot-no"></div><span>Empresas com histórico de práticas incompatíveis com responsabilidade institucional</span></div>
            <div className="elegivel-item"><div className="dot-no"></div><span>Segmentos com risco reputacional para o programa (análise caso a caso)</span></div>
            <div className="elegivel-item"><div className="dot-no"></div><span>Grandes corporações com programas sociais próprios já estruturados</span></div>
            <div className="elegivel-item"><div className="dot-no"></div><span>Comunicação enganosa ou histórico de uso indevido de causas sociais</span></div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-label">Bloco 5b — Por que o Selo é diferente</div>
        <div className="comparativo">
          <div className="comp-header">
            <div className="comp-th">Modelo tradicional</div>
            <div className="comp-th destaque">Selo Brasil Te Ama</div>
            <div className="comp-th">Por que importa</div>
          </div>
          <div className="comp-row">
            <div className="comp-cell">Empresa pede doação ao cliente</div>
            <div className="comp-cell destaque">Repasse programado, sem onerar ninguém</div>
            <div className="comp-cell">O cliente não sente nada. A empresa contribui.</div>
          </div>
          <div className="comp-row">
            <div className="comp-cell">Campanhas pontuais e sazonais</div>
            <div className="comp-cell destaque">Rede contínua, relação de longo prazo</div>
            <div className="comp-cell">Impacto acumulado, não episódico.</div>
          </div>
          <div className="comp-row">
            <div className="comp-cell">Marcas agem isoladamente</div>
            <div className="comp-cell destaque">Pertencimento a ecossistema com governança</div>
            <div className="comp-cell">Credibilidade coletiva, não individual.</div>
          </div>
          <div className="comp-row">
            <div className="comp-cell">Foco em caridade unidirecional</div>
            <div className="comp-cell destaque">Rede de pertencimento com retorno real</div>
            <div className="comp-cell">A empresa apoia e também recebe.</div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-label">Bloco 6 — Governança do programa</div>
        <div className="gov-grid">
          <div className="gov-card">
            <div className="gov-label">Aprovação de adesões</div>
            <div className="gov-value">Shirin Vafaein<br/>Presidente do Instituto</div>
          </div>
          <div className="gov-card">
            <div className="gov-label">Vigência do termo</div>
            <div className="gov-value">12 meses<br/>com renovação formal</div>
          </div>
          <div className="gov-card">
            <div className="gov-label">Canal de contato</div>
            <div className="gov-value">atendimento@<br/>institutobrasilteama.org</div>
          </div>
          <div className="gov-card">
            <div className="gov-label">Acompanhamento</div>
            <div className="gov-value">Periódico — formato e frequência definidos no Termo</div>
          </div>
          <div className="gov-card">
            <div className="gov-label">Suspensão / cancelamento</div>
            <div className="gov-value">Por descumprimento, uso indevido ou risco reputacional</div>
          </div>
          <div className="gov-card">
            <div className="gov-label">Respaldo institucional</div>
            <div className="gov-value">OSJ Knights of Malta<br/>Cavaleiros de Malta</div>
          </div>
        </div>
        <div className="nota-juridica">O Selo Brasil Te Ama é um reconhecimento institucional de parceria. Não constitui certificação técnica nem garante benefício fiscal específico. Para questões tributárias ou jurídicas relacionadas à parceria, consulte profissional especializado. O Instituto Brasil Te Ama não presta consultoria fiscal e não se responsabiliza por interpretações tributárias individuais.</div>
      </div>

      <div className="section">
        <div className="section-label">Bloco 6b — FAQ (perguntas frequentes)</div>
        <div className="faq-item">
          <div className="faq-q">O consumidor paga mais ao comprar um produto com o selo?</div>
          <div className="faq-a">Não. O preço do produto é o mesmo. A fração destinada ao Instituto já está incorporada ao custo operacional da empresa — o cliente não é impactado.</div>
        </div>
        <div className="faq-item">
          <div className="faq-q">A empresa precisa criar um novo produto para usar o selo?</div>
          <div className="faq-a">Não. O selo pode ser aplicado em produtos ou serviços já existentes, em embalagens, ponto de venda, site ou comunicações — conforme os canais autorizados no Termo de Adesão.</div>
        </div>
        <div className="faq-item">
          <div className="faq-q">Como o Instituto sabe que a empresa realizou o repasse?</div>
          <div className="faq-a">As empresas parceiras enviam relatórios periódicos conforme a periodicidade e o formato definidos no Termo de Adesão. A transparência contratual é o mecanismo central de acompanhamento.</div>
        </div>
        <div className="faq-item">
          <div className="faq-q">O selo pode ser usado em qualquer campanha da empresa?</div>
          <div className="faq-a">Sim, nos canais autorizados. Campanhas de grande alcance, mídia paga ou materiais vinculados a produto específico exigem aprovação prévia do Instituto antes da publicação.</div>
        </div>
        <div className="faq-item">
          <div className="faq-q">Existe prazo mínimo de adesão?</div>
          <div className="faq-a">A vigência padrão do Termo de Adesão é de 12 meses, com renovação formal ao final do período. A empresa pode encerrar a parceria com aviso prévio, conforme as condições do Termo.</div>
        </div>
        <div className="faq-item">
          <div className="faq-q">Existe alguma questão fiscal associada à adesão?</div>
          <div className="faq-a">Questões sobre enquadramento fiscal são tratadas diretamente com nossa equipe e detalhadas no Termo de Adesão, após o primeiro contato formal. O Instituto não presta consultoria fiscal — recomendamos consulta ao departamento contábil ou jurídico da empresa.</div>
          <div className="faq-note">Nota: esta formulação está aprovada pelo guia de linguagem jurídica do programa.</div>
        </div>
        <div className="faq-item">
          <div className="faq-q">Para onde vão os recursos gerados pelo programa?</div>
          <div className="faq-a">Os apoios gerados são destinados a ONGs institucionais brasileiras selecionadas pelo Instituto com base em critérios públicos de elegibilidade. A lista de ONGs apoiadas e os relatórios de impacto são publicados periodicamente na página de Transparência.</div>
        </div>
      </div>

      <div className="form-section" id="form">
        <div className="form-title">Solicite uma conversa</div>
        <p className="form-sub">O primeiro contato não é uma triagem fria — é uma conversa real para entender se faz sentido para os dois lados. Preencha o formulário e nossa equipe retornará em até 5 dias úteis.</p>
        <form className="form-grid" onSubmit={handleSubmit} noValidate>
          {SELO_FIELDS.map((f) => (
            <label key={f.key} className={`form-field${f.isFull ? ' form-field-full' : ''}`}>
              <span className="form-field-label">{f.label}</span>
              {f.type === 'textarea' ? (
                <textarea
                  name={f.key}
                  value={values[f.key]}
                  onChange={handleChange(f.key)}
                  required={f.required}
                />
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
            {submitting ? 'Enviando…' : 'Enviar solicitação →'}
          </button>
          <div className="form-note">Ao enviar este formulário, você concorda que o Instituto Brasil Te Ama entre em contato para apresentar o programa. Nenhum compromisso é assumido antes da assinatura do Termo de Adesão. · atendimento@institutobrasilteama.org · (61) 3321-2535</div>
        </form>
        <div className="annotation pending" style={{ marginTop: '1rem' }}>Formulário: configurar envio para atendimento@institutobrasilteama.org via Elementor Forms ou plugin de e-mail</div>
      </div>
      <Footer />
    </div>
  );
}
