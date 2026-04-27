import { Link } from 'react-router-dom';
import Footer from '../components/Footer.jsx';
import './Contato.css';

const navLinkStyle = { color: 'inherit', textDecoration: 'none' };
const ctaLinkStyle = { display: 'inline-block', textDecoration: 'none' };

export default function Contato() {
  return (
    <div className="page-contato">
      <h2 className="sr-only">Wireframe da página Contato — Instituto Brasil Te Ama — formulário segmentado em 5 tipos de contato com dados confirmados</h2>

      <nav className="nav">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="nav-logo">
            <div className="logo-box">IBtA</div>
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
          <div className="segmento segmento-active">
            <div className="segmento-icon">🤝</div>
            <div className="segmento-label">Quero ser parceiro</div>
            <div className="segmento-sub">Programa Selo Brasil Te Ama</div>
          </div>
          <div className="segmento">
            <div className="segmento-icon">🏢</div>
            <div className="segmento-label">Parceria institucional</div>
            <div className="segmento-sub">Governo, ordem ou org.</div>
          </div>
          <div className="segmento">
            <div className="segmento-icon">🌿</div>
            <div className="segmento-label">Minha ONG quer apoio</div>
            <div className="segmento-sub">Cadastro de ONGs</div>
          </div>
          <div className="segmento">
            <div className="segmento-icon">📰</div>
            <div className="segmento-label">Imprensa</div>
            <div className="segmento-sub">Jornalistas e veículos</div>
          </div>
          <div className="segmento">
            <div className="segmento-icon">💬</div>
            <div className="segmento-label">Dúvidas gerais</div>
            <div className="segmento-sub">Outras mensagens</div>
          </div>
        </div>

        <div className="form-layout">
          <div className="form-box">
            <div className="form-title">Quero ser parceiro — Programa Selo Brasil Te Ama</div>
            <div className="form-sub">Preencha os dados abaixo. Nossa equipe entrará em contato em até 5 dias úteis para apresentar o programa e entender se faz sentido para os dois lados.</div>
            <div className="form-grid">
              <div className="form-field">Nome da empresa</div>
              <div className="form-field">CNPJ</div>
              <div className="form-field">Segmento de atuação</div>
              <div className="form-field">Produto ou serviço principal</div>
              <div className="form-field">Nome do responsável</div>
              <div className="form-field">Cargo</div>
              <div className="form-field">E-mail corporativo</div>
              <div className="form-field">Telefone / WhatsApp</div>
              <div className="form-field form-field-full" style={{ minHeight: '64px' }}>Mensagem (opcional)</div>
              <div className="form-submit">Enviar solicitação →</div>
              <div className="form-note">Ao enviar, você concorda que o Instituto Brasil Te Ama entre em contato. Nenhum compromisso é assumido antes da assinatura do Termo de Adesão. · atendimento@institutobrasilteama.org</div>
            </div>
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
