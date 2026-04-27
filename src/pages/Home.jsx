import { Link } from 'react-router-dom';
import Footer from '../components/Footer.jsx';
import './Home.css';

const navLinkStyle = { color: 'inherit', textDecoration: 'none' };
const ctaLinkStyle = { display: 'inline-block', textDecoration: 'none' };

export default function Home() {
  return (
    <div className="page-home">
      <h2 className="sr-only">Wireframe da página Home — Instituto Brasil Te Ama — estrutura completa com 9 blocos e textos aprovados</h2>

      <nav className="nav">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="nav-logo">
            <img src="/images/logo.png" alt="Instituto Brasil Te Ama" className="logo-img" />
            <div>
              <div className="logo-name">Instituto Brasil Te Ama</div>
              <div className="logo-sub">PNG logo ← substituir</div>
            </div>
          </div>
        </Link>
        <div className="nav-links">
          <Link to="/" style={navLinkStyle}>Home</Link><Link to="/sobre" style={navLinkStyle}>Sobre</Link><Link to="/lideranca" style={navLinkStyle}>Liderança</Link><Link to="/selo" style={navLinkStyle}>Selo</Link><Link to="/projetos" style={navLinkStyle}>Projetos</Link><Link to="/noticias" style={navLinkStyle}>Notícias</Link><Link to="/transparencia" style={navLinkStyle}>Transparência</Link><Link to="/contato" style={navLinkStyle}>Contato</Link>
        </div>
        <Link to="/contato" className="nav-cta" style={ctaLinkStyle}>Quero ser parceiro</Link>
      </nav>

      <div className="hero">
        <div style={{ maxWidth: '460px' }}>
          <div className="hero-eyebrow">OSJ Knights of Malta · Cavaleiros de Malta</div>
          <h1 className="hero-headline">Uma rede do bem que conecta empresas e ONGs. Com transparência e respaldo internacional.</h1>
          <p className="hero-subtitle">O Instituto Brasil Te Ama organiza uma rede do bem que conecta empresas parceiras e ONGs institucionais no Brasil, fortalecendo ações humanitárias com transparência e apoio estrutural dos Cavaleiros de Malta.</p>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <Link to="/contato" className="hero-cta" style={ctaLinkStyle}>Quero ser parceiro</Link>
            <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>ou conheça o Instituto ↓</span>
          </div>
        </div>
        <img src="/images/cidadania-01.jpg" alt="Quarta do Cidadão na Rodoviária do Plano Piloto — DPDF e Brasil Te Ama" className="hero-img" />
      </div>

      <div className="section">
        <div className="section-label">Bloco 2 — Credibilidade institucional</div>
        <div className="cred-row">
          <div className="cred-card">
            <div className="cred-label">Respaldo institucional</div>
            <div className="cred-value">OSJ Knights of Malta</div>
            <div className="cred-sub">Cavaleiros de Malta — apoio estrutural internacional</div>
          </div>
          <div className="cred-card">
            <div className="cred-label">Liderança</div>
            <div className="cred-value">S.E. Dr. Franco Nicoletti</div>
            <div className="cred-sub">Fundador · Gran Priore do Brasil</div>
            <div className="cred-sub" style={{ marginTop: '2px' }}>Shirin Vafaein · Presidente</div>
          </div>
          <div className="cred-card">
            <div className="cred-label">Impacto confirmado</div>
            <div className="cred-value">+1.000 pessoas/mês</div>
            <div className="cred-sub">beneficiadas no Distrito Federal</div>
            <div className="cred-sub" style={{ marginTop: '2px', fontSize: '9px', fontStyle: 'italic' }}>Fonte: Lo Scudo Magazine</div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-label">Bloco 3 — Apresentação institucional</div>
        <p style={{ fontSize: '15px', color: 'var(--color-text-primary)', lineHeight: 1.75, maxWidth: '560px', marginBottom: '1rem' }}>O Instituto Brasil Te Ama organiza uma rede institucional de impacto, chancela parceiros e direciona apoios a ONGs institucionais no Brasil, com sustentação estrutural do OSJ Knights of Malta, Cavaleiros de Malta.</p>
        <Link to="/sobre" style={{ fontSize: '12px', padding: '8px 16px', display: 'inline-block', textDecoration: 'none' }}>Conheça o Instituto →</Link>
      </div>

      <div className="section">
        <div className="section-label">Bloco 4 — Números de impacto</div>
        <div className="metrics-grid">
          <div className="metric">
            <div className="metric-num">+1.000</div>
            <div className="metric-lbl">pessoas beneficiadas por mês no DF</div>
            <div className="metric-note">fonte: Lo Scudo Magazine</div>
          </div>
          <div className="metric">
            <div className="metric-num">2</div>
            <div className="metric-lbl">países com atuação operacional</div>
            <div className="metric-note">Brasil e Nigéria</div>
          </div>
          <div className="metric">
            <div className="metric-num">2022</div>
            <div className="metric-lbl">ano de fundação formal</div>
            <div className="metric-note">CNPJ: 49.458.362/0001-10</div>
          </div>
          <div className="metric">
            <div className="metric-num">10</div>
            <div className="metric-lbl">frentes de atuação ativas</div>
            <div className="metric-note"><span className="annotation pending">total de projetos — preencher</span></div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-label">Bloco 5 — Projetos em destaque</div>
        <div className="projetos-grid">
          <div className="projeto-card">
            <div className="projeto-img"><img src="/images/cidadania-04.jpg" alt="Atendimento em situação de vulnerabilidade no DF" /></div>
            <div className="projeto-body">
              <div className="projeto-tag">Brasília · DF</div>
              <div className="projeto-title">Pobreza extrema no Distrito Federal</div>
              <div className="projeto-desc">Atendimento direto a mais de 1.000 pessoas em situação de vulnerabilidade social por mês.</div>
            </div>
          </div>
          <div className="projeto-card">
            <div className="projeto-img"><img src="/images/nigeria.jpg" alt="Construção do poço d'água — Reino de Idado-Ijesa, Nigéria" /></div>
            <div className="projeto-body">
              <div className="projeto-tag">Nigéria · Internacional</div>
              <div className="projeto-title">Poço d'água na Nigéria</div>
              <div className="projeto-desc">Construção de poço em parceria com a família real do Reino de Idado-Ijesa.</div>
            </div>
          </div>
          <div className="projeto-card">
            <div className="projeto-img">foto do evento · MPDF<br/><span className="annotation pending">pendente</span></div>
            <div className="projeto-body">
              <div className="projeto-tag">Empoderamento feminino</div>
              <div className="projeto-title">Giornata della Donna</div>
              <div className="projeto-desc">Evento em parceria com o MPDF para promoção dos direitos das mulheres no DF.</div>
            </div>
          </div>
        </div>
        <div style={{ marginTop: '12px' }}>
          <Link to="/projetos" style={{ fontSize: '12px', padding: '8px 16px', display: 'inline-block', textDecoration: 'none' }}>Ver todos os projetos →</Link>
        </div>
      </div>

      <div className="section">
        <div className="section-label">Bloco 6 — Programa Selo Brasil Te Ama</div>
        <div className="selo-block">
          <div>
            <div className="selo-title">Sua empresa na rede do bem</div>
            <p className="selo-text">O Selo Brasil Te Ama identifica empresas que fazem parte de uma rede do bem comprometida com o apoio a ONGs institucionais no Brasil. Por meio do Instituto, essas parcerias transformam atividade econômica em apoio humanitário estruturado — com respaldo dos Cavaleiros de Malta.</p>
            <div className="beneficios">
              <div className="beneficio-item"><div className="beneficio-dot"></div><span>Reputação associada a rede de impacto reconhecida internacionalmente</span></div>
              <div className="beneficio-item"><div className="beneficio-dot"></div><span>Negócio recíproco: o Instituto compra de empresas parceiras</span></div>
              <div className="beneficio-item"><div className="beneficio-dot"></div><span>Prestação de contas periódica sobre o destino dos apoios</span></div>
              <div className="beneficio-item"><div className="beneficio-dot"></div><span>O consumidor não paga nada a mais</span></div>
            </div>
          </div>
          <Link to="/contato" className="selo-cta" style={ctaLinkStyle}>Quero ser parceiro</Link>
        </div>
      </div>

      <div className="section">
        <div className="section-label">Bloco 7 — Clipping de imprensa</div>
        <div className="clipping-grid">
          <div className="clip-card">
            <div className="clip-source">Defensoria do DF · Institucional</div>
            <div className="clip-title">Parceria entre DPDF e Instituto Brasil Te Ama amplia serviços da Quarta do Cidadão</div>
            <div className="clip-tag">Assistência odontológica · 2025 <span className="annotation ready">link confirmado</span></div>
          </div>
          <div className="clip-card">
            <div className="clip-source">Agência Brasília · Governo DF</div>
            <div className="clip-title">Serviços do evento Quarta do Cidadão são ampliados com assistência odontológica</div>
            <div className="clip-tag">GDF · 2025 <span className="annotation ready">link confirmado</span></div>
          </div>
          <div className="clip-card">
            <div className="clip-source">Metrópoles · Grande imprensa</div>
            <div className="clip-title">Quarta do Cidadão reúne serviços para homens vulneráveis</div>
            <div className="clip-tag">Ações em campo <span className="annotation ready">link confirmado</span></div>
          </div>
          <div className="clip-card">
            <div className="clip-source">Lo Scudo Magazine · Internacional</div>
            <div className="clip-title">25 artigos publicados — trajetória e projetos do Instituto</div>
            <div className="clip-tag">2024–2026 · Evidência internacional <span className="annotation ready">confirmado</span></div>
          </div>
        </div>
        <div style={{ marginTop: '12px' }}>
          <Link to="/noticias" style={{ fontSize: '12px', padding: '8px 16px', display: 'inline-block', textDecoration: 'none' }}>Acesse todas as notícias →</Link>
        </div>
      </div>

      <div className="section">
        <div className="section-label">Bloco 8 — Liderança institucional</div>
        <div className="lideranca-grid">
          <div className="lider-card">
            <div className="lider-avatar"><img src="/images/nicoletti-horizontal.jpg" alt="S.E. Dr. Franco Nicoletti" /></div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div className="lider-nome">S.E. Dr. Franco Nicoletti</div>
              <div className="lider-cargo">Fundador — Instituto Brasil Te Ama</div>
              <div className="lider-ordem">Gran Priore do Brasil · OSJ Cavalieri di Malta<br/>Membro do Supremo Gran Consiglio</div>
              <div className="lider-quote">"A riqueza deve ser usada para ajudar os outros, criando um círculo virtuoso de apoio e desenvolvimento."</div>
              <div className="lider-img-note annotation pending">foto com vestimenta da Ordem — pendente</div>
            </div>
          </div>
          <div className="lider-card">
            <div className="lider-avatar" style={{ background: '#5a1230' }}>SV</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div className="lider-nome">Shirin Vafaein</div>
              <div className="lider-cargo">Presidente — Instituto Brasil Te Ama</div>
              <div className="lider-ordem">Dama di Gran Croce · Dama de Gran Cruz<br/>Embaixatriz para as Relações Humanitárias — Gran Priorato do Brasil</div>
              <div className="lider-quote">"Queremos construir uma rede em que cada cidadão se sinta parte ativa e responsável pelo bem-estar coletivo."</div>
              <div className="lider-img-note annotation pending">foto institucional formal — pendente</div>
            </div>
          </div>
        </div>
        <div style={{ marginTop: '12px' }}>
          <Link to="/lideranca" style={{ fontSize: '12px', padding: '8px 16px', display: 'inline-block', textDecoration: 'none' }}>Conheça nossa liderança →</Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
