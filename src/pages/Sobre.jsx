import { Link } from 'react-router-dom';
import Footer from '../components/Footer.jsx';
import './Sobre.css';

const navLinkStyle = { color: 'inherit', textDecoration: 'none' };
const ctaLinkStyle = { display: 'inline-block', textDecoration: 'none' };

export default function Sobre() {
  return (
    <div className="page-sobre">
      <h2 className="sr-only">Wireframe da página Sobre — Instituto Brasil Te Ama — missão, visão, valores, linha do tempo e atuação geográfica</h2>

      <nav className="nav">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="nav-logo">
            <div className="logo-box">IBtA</div>
            <div className="logo-name">Instituto Brasil Te Ama</div>
          </div>
        </Link>
        <div className="nav-links">
          <Link to="/" style={navLinkStyle}>Home</Link>
          <Link to="/sobre" className="nav-active" style={navLinkStyle}>Sobre</Link>
          <Link to="/lideranca" style={navLinkStyle}>Liderança</Link><Link to="/selo" style={navLinkStyle}>Selo Brasil Te Ama</Link>
          <Link to="/projetos" style={navLinkStyle}>Projetos</Link><Link to="/noticias" style={navLinkStyle}>Notícias</Link><Link to="/transparencia" style={navLinkStyle}>Transparência</Link><Link to="/contato" style={navLinkStyle}>Contato</Link>
        </div>
        <Link to="/contato" className="nav-cta" style={ctaLinkStyle}>Quero ser parceiro</Link>
      </nav>

      <div className="hero">
        <div className="hero-eyebrow">Sobre o Instituto</div>
        <h1 className="hero-headline">Uma organização humanitária que articula redes, não que age sozinha.</h1>
        <p className="hero-sub">Fundado em 29 de dezembro de 2022, o Instituto Brasil Te Ama conecta empresas, ONGs e parceiros institucionais em torno de ações humanitárias concretas — com critério, transparência e respaldo da OSJ Knights of Malta, Cavaleiros de Malta.</p>
      </div>

      <div className="section">
        <div className="section-label">Bloco 1 — Apresentação e vínculo com os Cavaleiros de Malta</div>
        <div className="apresentacao-grid">
          <div>
            <p className="apresentacao-text">O Instituto Brasil Te Ama nasceu para articular uma rede do bem — empresas, organizações e pessoas que acreditam em apoio estruturado a quem mais precisa. Em vez de atuar isoladamente, o Instituto chancela parcerias, direciona apoios e fortalece ONGs institucionais que já estão presentes em territórios de vulnerabilidade no Brasil.</p>
            <br/>
            <p className="apresentacao-text">Com apoio estrutural do OSJ Knights of Malta, Cavaleiros de Malta, o Instituto trabalha para transformar solidariedade em resultados concretos, com critérios, responsabilidade e prestação de contas.</p>
            <br/>
            <p className="apresentacao-text">O papel central do Instituto não é substituir as iniciativas que já existem, mas conectá-las: identificar ONGs institucionais sérias, chancelar parcerias, organizar apoios e facilitar a cooperação entre empresas, organizações e atores públicos.</p>
          </div>
          <div className="cavaleiros-card">
            <div className="cavaleiros-title">OSJ Knights of Malta — Cavaleiros de Malta</div>
            <p className="cavaleiros-text">O Instituto Brasil Te Ama conta com o apoio estrutural da Ordem Soberana e Militar de São João de Jerusalém, Rodes e Malta — OSJ Knights of Malta. Essa parceria institucional confere legitimidade internacional, governança sólida e compromisso de longo prazo com as ações humanitárias no Brasil e no exterior.</p>
            <div className="cavaleiros-logo">
              Logo OSJ Knights of Malta<br/>
              <span className="annotation pending" style={{ fontSize: '9px' }}>inserir logo oficial</span>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-label">Bloco 2 — Missão, Visão e Valores</div>
        <div className="mvv-grid">
          <div className="mvv-card" style={{ background: 'var(--bordo)', borderRightColor: 'rgba(255,255,255,0.1)' }}>
            <div className="mvv-tag" style={{ color: 'rgba(255,255,255,0.6)' }}>Missão</div>
            <div className="mvv-title" style={{ color: 'white' }}>Levar ajuda humanitária a quem sofre por pobreza, perseguições, desastres ou conflitos.</div>
            <div className="mvv-text" style={{ color: 'rgba(255,255,255,0.65)' }}>Com foco especial nas populações em situação de vulnerabilidade extrema, preservando sempre a dignidade das pessoas atendidas.</div>
          </div>
          <div className="mvv-card">
            <div className="mvv-tag">Visão</div>
            <div className="mvv-title">Combater causas estruturais das desigualdades — promover direitos humanos e trabalho digno.</div>
            <div className="mvv-text">Contribuir na construção de uma agenda positiva na garantia dos direitos humanos e na promoção da dignidade humana como base de nossa sociedade.</div>
          </div>
          <div className="mvv-card">
            <div className="mvv-tag">Valores</div>
            <div className="mvv-valores">
              <div className="mvv-valor"><div className="mvv-dot"></div>Ética</div>
              <div className="mvv-valor"><div className="mvv-dot"></div>Comprometimento</div>
              <div className="mvv-valor"><div className="mvv-dot"></div>Capacidade Crítica</div>
              <div className="mvv-valor"><div className="mvv-dot"></div>Cidadania</div>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-label">Bloco 3 — Frentes de atuação</div>
        <div className="atuacao-grid">
          <div className="atuacao-card">
            <div className="atuacao-num">01</div>
            <div><div className="atuacao-title">Pobreza extrema e insegurança alimentar</div><div className="atuacao-text">Distribuição de alimentos, assistência básica e atendimento a populações em vulnerabilidade extrema no DF. Mais de 1.000 pessoas beneficiadas por mês.</div></div>
          </div>
          <div className="atuacao-card">
            <div className="atuacao-num">02</div>
            <div><div className="atuacao-title">Acesso à água potável e saneamento</div><div className="atuacao-text">Financiamento de poço d'água em parceria com a família real do Reino de Idado-Ijesa, na Nigéria.</div></div>
          </div>
          <div className="atuacao-card">
            <div className="atuacao-num">03</div>
            <div><div className="atuacao-title">Empoderamento feminino e direitos das mulheres</div><div className="atuacao-text">Giornata della Donna em parceria com o Ministério Público do DF — promoção de direitos e visibilidade para mulheres em situação de vulnerabilidade.</div></div>
          </div>
          <div className="atuacao-card">
            <div className="atuacao-num">04</div>
            <div><div className="atuacao-title">Direitos humanos e acesso à justiça</div><div className="atuacao-text">Parceria com o Escritório do Defensor Público do DF para ampliação dos serviços da Quarta do Cidadão, incluindo assistência odontológica.</div></div>
          </div>
          <div className="atuacao-card">
            <div className="atuacao-num">05</div>
            <div><div className="atuacao-title">Apoio a pessoas em situação de rua</div><div className="atuacao-text">Atendimento direto com distribuição de alimentos, vestuário e suprimentos básicos para população de rua no Distrito Federal.</div></div>
          </div>
          <div className="atuacao-card">
            <div className="atuacao-num">06</div>
            <div><div className="atuacao-title">Meio ambiente e inovação</div><div className="atuacao-text">Iniciativas de reflorestamento, sensibilização ambiental e desenvolvimento de máquina de reciclagem pelo Grupo Nicoletti.</div></div>
          </div>
          <div className="atuacao-card">
            <div className="atuacao-num">07</div>
            <div><div className="atuacao-title">Conflitos e emergências humanitárias</div><div className="atuacao-text">Acompanhamento e apoio a populações em contextos de conflito, desastre e emergência — frente de atuação internacional do Instituto.</div></div>
          </div>
          <div className="atuacao-card">
            <div className="atuacao-num">08</div>
            <div><div className="atuacao-title">Parcerias institucionais e Selo Brasil Te Ama</div><div className="atuacao-text">Programa de parceria com empresas do setor privado que destinam apoio a ONGs por meio do Selo Brasil Te Ama — a frente de sustentabilidade do Instituto.</div></div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-label">Bloco 4 — Parceiros institucionais confirmados</div>
        <div className="parceiros-grid">
          <div className="parceiro-card">
            <div className="parceiro-logo">logo <span className="annotation pending" style={{ fontSize: '9px' }}>inserir</span></div>
            <div className="parceiro-tipo">Institucional público</div>
            <div className="parceiro-nome">Defensoria Pública do DF</div>
          </div>
          <div className="parceiro-card">
            <div className="parceiro-logo">logo <span className="annotation pending" style={{ fontSize: '9px' }}>inserir</span></div>
            <div className="parceiro-tipo">Institucional público</div>
            <div className="parceiro-nome">MPDF — Ministério Público do DF</div>
          </div>
          <div className="parceiro-card">
            <div className="parceiro-logo">logo <span className="annotation pending" style={{ fontSize: '9px' }}>inserir</span></div>
            <div className="parceiro-tipo">Internacional</div>
            <div className="parceiro-nome">Família Real — Reino de Idado-Ijesa, Nigéria</div>
          </div>
          <div className="parceiro-card">
            <div className="parceiro-logo">logo <span className="annotation pending" style={{ fontSize: '9px' }}>inserir</span></div>
            <div className="parceiro-tipo">Ordem / Cooperação</div>
            <div className="parceiro-nome">Gran Priorato d'Italia dell'OSMTH</div>
          </div>
          <div className="parceiro-card">
            <div className="parceiro-logo">logo <span className="annotation pending" style={{ fontSize: '9px' }}>inserir</span></div>
            <div className="parceiro-tipo">Empresarial</div>
            <div className="parceiro-nome">Vimac-Capra</div>
          </div>
          <div className="parceiro-card">
            <div className="parceiro-logo">logo <span className="annotation pending" style={{ fontSize: '9px' }}>inserir</span></div>
            <div className="parceiro-tipo">Parceiro de comunicação</div>
            <div className="parceiro-nome">Bucaneiros</div>
          </div>
        </div>
        <div className="annotation ready" style={{ marginTop: '10px' }}>Todos os parceiros autorizaram menção pública de nomes e logos — confirmado</div>
      </div>

      <div className="section">
        <div className="section-label">Bloco 5 — Atuação geográfica</div>
        <div className="geo-grid">
          <div>
            <div className="geo-col-title">Atuação operacional</div>
            <div className="geo-item">
              <div className="geo-flag">BR</div>
              <div><div className="geo-pais">Brasil — Distrito Federal</div><div className="geo-tipo">Sede principal · todos os projetos domésticos</div></div>
            </div>
            <div className="geo-item">
              <div className="geo-flag">NG</div>
              <div><div className="geo-pais">Nigéria — Reino de Idado-Ijesa</div><div className="geo-tipo">Projeto poço d'água · parceria com família real</div></div>
            </div>
          </div>
          <div>
            <div className="geo-col-title">Presença institucional internacional</div>
            <div className="geo-item">
              <div className="geo-flag">IT</div>
              <div><div className="geo-pais">Itália — Tivoli, Sicília, Piacenza</div><div className="geo-tipo">Premiação humanitária · visitas institucionais · reuniões humanitárias</div></div>
            </div>
            <div className="geo-item">
              <div className="geo-flag">DE</div>
              <div><div className="geo-pais">Alemanha — Giessen</div><div className="geo-tipo">Apresentação do Projeto Nigéria · 2024</div></div>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-label">Bloco 6 — Linha do tempo (12 marcos 2024–2026)</div>
        <div className="timeline">
          <div className="tl-item">
            <div className="tl-dot"></div>
            <div className="tl-date">Jan · 2024</div>
            <div className="tl-title">Máquina de reciclagem do Grupo Nicoletti apresentada internacionalmente</div>
            <div className="tl-source">Fonte: Lo Scudo Magazine</div>
          </div>
          <div className="tl-item">
            <div className="tl-dot"></div>
            <div className="tl-date">Mar · 2024</div>
            <div className="tl-title">Financiamento de poço d'água na Nigéria — parceria com família real do Reino de Idado-Ijesa</div>
            <div className="tl-source">Fonte: Lo Scudo Magazine</div>
          </div>
          <div className="tl-item">
            <div className="tl-dot"></div>
            <div className="tl-date">Abr · 2024</div>
            <div className="tl-title">Acordo com Vimac-Capra para parceria agroalimentar</div>
            <div className="tl-source">Fonte: Lo Scudo Magazine</div>
          </div>
          <div className="tl-item">
            <div className="tl-dot"></div>
            <div className="tl-date">Set · 2024</div>
            <div className="tl-title">S.E. Dr. Franco Nicoletti recebe Prêmio Melhor Empreendedor do Ano no Brasil</div>
            <div className="tl-source">Fonte: Lo Scudo Magazine</div>
          </div>
          <div className="tl-item">
            <div className="tl-dot"></div>
            <div className="tl-date">Out · 2024</div>
            <div className="tl-title">Cerimônia de investidura — nomeações da Confederação OSJ Cavalieri di Malta</div>
            <div className="tl-source">Fonte: Lo Scudo Magazine</div>
          </div>
          <div className="tl-item">
            <div className="tl-dot"></div>
            <div className="tl-date">Abr · 2025</div>
            <div className="tl-title">Lançamento oficial do Instituto Brasil Te Ama</div>
            <div className="tl-desc">Jantar de lançamento com convidados especiais — marco público da fundação do programa.</div>
            <div className="tl-source">Fonte: Lo Scudo Magazine</div>
          </div>
          <div className="tl-item">
            <div className="tl-dot"></div>
            <div className="tl-date">Mai · 2025</div>
            <div className="tl-title">Instituto Brasil Te Ama e MPDF unidos pela Giornata della Donna</div>
            <div className="tl-desc">Evento de empoderamento feminino em parceria com o Ministério Público do DF.</div>
            <div className="tl-source">Fonte: Lo Scudo Magazine</div>
          </div>
          <div className="tl-item">
            <div className="tl-dot"></div>
            <div className="tl-date">Jun · 2025</div>
            <div className="tl-title">Instituto destacado pelo Lo Scudo como modelo solidário para o Brasil</div>
            <div className="tl-source">Fonte: Lo Scudo Magazine</div>
          </div>
          <div className="tl-item">
            <div className="tl-dot"></div>
            <div className="tl-date">Ago · 2025</div>
            <div className="tl-title">Visita institucional de Nicoletti na Sicília — acordos humanitários internacionais</div>
            <div className="tl-source">Fonte: Lo Scudo Magazine</div>
          </div>
          <div className="tl-item">
            <div className="tl-dot"></div>
            <div className="tl-date">Jan · 2026</div>
            <div className="tl-title">Reconhecimento formal pela família real nigeriana — ação humanitária celebrada</div>
            <div className="tl-source">Fonte: Lo Scudo Magazine</div>
          </div>
          <div className="tl-item">
            <div className="tl-dot"></div>
            <div className="tl-date">Jan · 2026</div>
            <div className="tl-title">Ação humanitária no Brasil — gesto de cuidado que se torna esperança</div>
            <div className="tl-source">Fonte: Lo Scudo Magazine</div>
          </div>
          <div className="tl-item">
            <div className="tl-dot"></div>
            <div className="tl-date">Mar · 2026</div>
            <div className="tl-title">Prêmio Humanitário recebido das mãos de Monsignor Casolini em Tivoli, Itália</div>
            <div className="tl-desc">Colar com o símbolo da Cruz da Ordem — insígnia de alto valor espiritual e cavaleiresco.</div>
            <div className="tl-source">Fonte: Lo Scudo Magazine</div>
          </div>
        </div>
      </div>

      <div className="section" style={{ borderBottom: 'none' }}>
        <div className="section-label">Bloco 7 — CTA para página de Liderança</div>
        <div className="cta-lideranca">
          <div className="cta-lideranca-text">
            <h3>Conheça quem lidera o Instituto</h3>
            <p>S.E. Dr. Franco Nicoletti e Shirin Vafaein — trajetória, títulos, reconhecimentos e a visão que orienta cada ação do Instituto Brasil Te Ama.</p>
          </div>
          <Link to="/lideranca" className="cta-lideranca-btn" style={ctaLinkStyle}>Conheça nossa liderança →</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
