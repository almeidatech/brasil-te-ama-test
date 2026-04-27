import { Link } from 'react-router-dom';
import Footer from '../components/Footer.jsx';
import './Lideranca.css';

const navLinkStyle = { color: 'inherit', textDecoration: 'none' };
const ctaLinkStyle = { display: 'inline-block', textDecoration: 'none' };

export default function Lideranca() {
  return (
    <div className="page-lideranca">
      <h2 className="sr-only">Wireframe da página Liderança — bios completas de Franco Nicoletti e Shirin Vafaein com títulos oficiais e linha do tempo de reconhecimentos</h2>

      <nav className="nav">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="nav-logo">
            <div className="logo-box">IBtA</div>
            <div className="logo-name">Instituto Brasil Te Ama</div>
          </div>
        </Link>
        <div className="nav-links">
          <Link to="/" style={navLinkStyle}>Home</Link><Link to="/sobre" style={navLinkStyle}>Sobre</Link>
          <Link to="/lideranca" className="nav-active" style={navLinkStyle}>Liderança</Link>
          <Link to="/selo" style={navLinkStyle}>Selo Brasil Te Ama</Link><Link to="/projetos" style={navLinkStyle}>Projetos</Link><Link to="/noticias" style={navLinkStyle}>Notícias</Link><Link to="/transparencia" style={navLinkStyle}>Transparência</Link><Link to="/contato" style={navLinkStyle}>Contato</Link>
        </div>
        <Link to="/contato" className="nav-cta" style={ctaLinkStyle}>Quero ser parceiro</Link>
      </nav>

      <div className="hero">
        <div className="hero-eyebrow">Liderança institucional</div>
        <h1 className="hero-headline">As pessoas que fundaram e conduzem o Instituto Brasil Te Ama.</h1>
        <p className="hero-sub">Trajetórias construídas sobre compromisso humanitário, experiência internacional e vínculo com a OSJ Knights of Malta — Cavaleiros de Malta.</p>
      </div>

      <div className="lider-section">
        <div className="section-label">S.E. Dr. Franco Nicoletti — Fundador</div>
        <div className="lider-header">
          <div className="lider-foto">
            <div className="lider-foto-initials">FN</div>
            <span>Foto com vestimenta da Ordem</span>
            <span className="annotation pending">pendente — alta res.</span>
          </div>
          <div>
            <div className="lider-nome">S.E. Dr. Franco Nicoletti</div>
            <div className="lider-cargo">Fundador — Instituto Brasil Te Ama</div>
            <div className="lider-ordem">
              Gran Priore do Brasil<br/>
              Confederação dos Gran Priori Autônomos OSJ Cavalieri di Malta<br/>
              Membro do Supremo Gran Consiglio da Confederação Internacional
            </div>
            <div className="lider-tags">
              <span className="lider-tag">Doutor em Direito — Northwestern, Chicago</span>
              <span className="lider-tag">Veterano US Air Force — Vietnã</span>
              <span className="lider-tag">+40 anos como CEO internacional</span>
              <span className="lider-tag">Italiano radicado no Brasil</span>
              <span className="lider-tag">Prêmio Humanitário · Tivoli, 2026</span>
              <span className="lider-tag">Melhor Empreendedor do Ano · Brasil, 2024</span>
            </div>
            <div className="lider-quote">
              "A riqueza deve ser usada para ajudar os outros, criando um círculo virtuoso de apoio e desenvolvimento."
              <div className="lider-quote-author">— S.E. Dr. Franco Nicoletti, Fundador do Instituto Brasil Te Ama</div>
            </div>
          </div>
        </div>

        <div className="bio-section">
          <div className="bio-label">Bio completa</div>
          <div className="bio-text">
            <p>S.E. Dr. Franco Nicoletti nasceu na Itália e construiu uma trajetória marcada pela convergência entre excelência empresarial, serviço militar e compromisso humanitário. Radicado no Brasil, é o fundador do Instituto Brasil Te Ama e exerce o cargo de Gran Priore do Brasil na Confederação dos Gran Priori Autônomos OSJ Cavalieri di Malta — integrando também o Supremo Gran Consiglio da Confederação Internacional.</p>
            <p>Sua formação inclui graduação em Direito com especialização em Administração Societária pela Universidade Northwestern de Chicago, Illinois, EUA, além de formação militar como piloto pela Escola de Piloto da US Air Force e Brevê de Capitão e Instrutor Náutico pelo I.M.S.O. do Reino Unido. Veterano de guerra do Vietnã, Nicoletti construiu sobre essa base uma carreira empresarial de mais de 40 anos como CEO e acionista majoritário em múltiplos setores — incluindo duas fábricas de produtos militares certificados pelo Ministério da Defesa brasileiro, uma fábrica de máquinas para reciclagem e o Grupo Nicoletti, com sedes na Espanha, Reino Unido, Brasil, Malta, África do Sul e Paraguai. É também CEO do mercado sul-americano da PFM Medicale, da Alemanha.</p>
            <p>Reconhecido como Melhor Empreendedor do Ano no Brasil em setembro de 2024, Nicoletti direciona sua visão estratégica e seus recursos para impacto humanitário concreto. Ele idealizou e fundou o Instituto Brasil Te Ama com a missão de levar ajuda humanitária a quem sofre por pobreza, perseguições, desastres naturais ou conflitos. Sob sua liderança, o Instituto já beneficiou mais de mil pessoas em um único mês no Distrito Federal, financiou a construção de um poço de água potável em parceria com a Família Real do Reino de Idado-Ijesa, na Nigéria, e consolidou parcerias institucionais com o Escritório do Defensor Público e outras organizações relevantes.</p>
            <p>Em março de 2026, recebeu o Prêmio Humanitário das mãos de Monsignor Casolini, Reitor da Igreja de San Silvestro em Tivoli, Itália — um colar com o símbolo da Cruz da Ordem, insígnia de alto valor espiritual e cavaleiresco.</p>
          </div>
        </div>

        <div className="conquistas-grid">
          <div className="conquista-card">
            <div className="conquista-label">Formação acadêmica</div>
            <div className="conquista-value">Direito · Adm. Societária<br/>Northwestern, Chicago, EUA</div>
          </div>
          <div className="conquista-card">
            <div className="conquista-label">Formação militar</div>
            <div className="conquista-value">Piloto US Air Force<br/>Brevê Capitão — I.M.S.O., UK</div>
          </div>
          <div className="conquista-card">
            <div className="conquista-label">Experiência empresarial</div>
            <div className="conquista-value">+40 anos como CEO<br/>6 países de operação</div>
          </div>
          <div className="conquista-card">
            <div className="conquista-label">Prêmio 2024</div>
            <div className="conquista-value">Melhor Empreendedor<br/>do Ano no Brasil</div>
          </div>
          <div className="conquista-card">
            <div className="conquista-label">Prêmio 2026</div>
            <div className="conquista-value">Prêmio Humanitário<br/>Tivoli, Itália</div>
          </div>
          <div className="conquista-card">
            <div className="conquista-label">Cargo na Ordem</div>
            <div className="conquista-value">Gran Priore do Brasil<br/>OSJ Cavalieri di Malta</div>
          </div>
        </div>
      </div>

      <div className="lider-divider"></div>

      <div className="lider-section">
        <div className="section-label">Shirin Vafaein — Presidente</div>
        <div className="lider-header">
          <div className="lider-foto" style={{ background: '#f0eaf5' }}>
            <div className="lider-foto-initials" style={{ background: '#5a1230' }}>SV</div>
            <span>Foto institucional formal</span>
            <span className="annotation pending">pendente — alta res.</span>
          </div>
          <div>
            <div className="lider-nome">Shirin Vafaein</div>
            <div className="lider-cargo" style={{ color: '#5a1230' }}>Presidente — Instituto Brasil Te Ama</div>
            <div className="lider-ordem">
              Dama di Gran Croce — Dama de Gran Cruz<br/>
              Embaixatriz para as Relações Humanitárias<br/>
              Gran Priorato Autônomo do Brasil — OSJ Knights of Malta
            </div>
            <div className="lider-tags">
              <span className="lider-tag">Dama di Gran Croce · OSJ Knights of Malta</span>
              <span className="lider-tag">Direitos humanos</span>
              <span className="lider-tag">Empoderamento feminino</span>
              <span className="lider-tag">Gestão de parcerias institucionais</span>
              <span className="annotation pending" style={{ fontSize: '9px', marginLeft: '2px' }}>formação acadêmica — a complementar</span>
            </div>
            <div className="lider-quote" style={{ borderColor: '#5a1230', background: '#f0eaf5' }}>
              "Queremos construir uma rede em que cada cidadão se sinta parte ativa e responsável pelo bem-estar coletivo."
              <div className="lider-quote-author">— Shirin Vafaein, Presidente do Instituto Brasil Te Ama</div>
            </div>
          </div>
        </div>

        <div className="bio-section">
          <div className="bio-label">Bio completa</div>
          <div className="bio-text">
            <p>Shirin Vafaein é a Presidente do Instituto Brasil Te Ama e Embaixatriz para as Relações Humanitárias do Gran Priorato Autônomo do Brasil da Confederação Internacional OSJ Knights of Malta. Portadora do título de Dama di Gran Croce — Dama de Gran Cruz, é a principal executiva do Instituto, responsável por traduzir a missão humanitária da organização em ações concretas, programas estruturados e parcerias institucionais de impacto real.</p>
            <p>Desde o lançamento do Instituto em 2025, Shirin conduziu a expansão das frentes de atuação para áreas que incluem assistência a pessoas em situação de rua, defesa dos direitos humanos em parceria com o Escritório do Defensor Público do Distrito Federal, empoderamento feminino por meio de iniciativas como a participação na Giornata della Donna em conjunto com o MPDF, e projetos humanitários internacionais na Nigéria. Sob sua liderança, o Instituto chegou a beneficiar mais de mil pessoas em um único mês no Distrito Federal.</p>
            <p style={{ color: 'var(--gray-mid)', fontStyle: 'italic', fontSize: '12px' }}>Formação acadêmica e trajetória profissional anterior ao Instituto — a complementar por Shirin Vafaein antes do lançamento.</p>
          </div>
        </div>

        <div className="conquistas-grid">
          <div className="conquista-card">
            <div className="conquista-label">Cargo no Instituto</div>
            <div className="conquista-value">Presidente<br/>desde o lançamento em 2025</div>
          </div>
          <div className="conquista-card">
            <div className="conquista-label">Título na Ordem</div>
            <div className="conquista-value">Dama di Gran Croce<br/>Dama de Gran Cruz</div>
          </div>
          <div className="conquista-card">
            <div className="conquista-label">Função na Ordem</div>
            <div className="conquista-value">Embaixatriz — Relações Humanitárias<br/>Gran Priorato do Brasil</div>
          </div>
          <div className="conquista-card">
            <div className="conquista-label">Aprovação de adesões</div>
            <div className="conquista-value">Responsável pela análise e aprovação de empresas parceiras do Selo</div>
          </div>
          <div className="conquista-card">
            <div className="conquista-label">Formação acadêmica</div>
            <div className="conquista-value annotation pending" style={{ display: 'block' }}>a complementar</div>
          </div>
          <div className="conquista-card">
            <div className="conquista-label">Trajetória anterior</div>
            <div className="conquista-value annotation pending" style={{ display: 'block' }}>a complementar</div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-label">Bloco 3 — Linha do tempo de reconhecimentos (12 marcos 2024–2026)</div>
        <div className="timeline">
          <div className="tl-item">
            <div className="tl-dot"></div>
            <div className="tl-date">Jan · 2024 <span className="tl-who tl-who-franco">Franco Nicoletti</span></div>
            <div className="tl-title">Máquina de reciclagem do Grupo Nicoletti apresentada internacionalmente</div>
            <div className="tl-source">Lo Scudo Magazine</div>
          </div>
          <div className="tl-item">
            <div className="tl-dot"></div>
            <div className="tl-date">Mar · 2024 <span className="tl-who tl-who-franco">Franco Nicoletti</span></div>
            <div className="tl-title">Financiamento de poço d'água na Nigéria — parceria com família real do Reino de Idado-Ijesa</div>
            <div className="tl-source">Lo Scudo Magazine</div>
          </div>
          <div className="tl-item">
            <div className="tl-dot"></div>
            <div className="tl-date">Abr · 2024 <span className="tl-who tl-who-franco">Franco Nicoletti</span></div>
            <div className="tl-title">Acordo com Vimac-Capra para parceria agroalimentar</div>
            <div className="tl-source">Lo Scudo Magazine</div>
          </div>
          <div className="tl-item">
            <div className="tl-dot"></div>
            <div className="tl-date">Set · 2024 <span className="tl-who tl-who-franco">Franco Nicoletti</span></div>
            <div className="tl-title">Prêmio Melhor Empreendedor do Ano no Brasil</div>
            <div className="tl-source">Lo Scudo Magazine</div>
          </div>
          <div className="tl-item">
            <div className="tl-dot"></div>
            <div className="tl-date">Out · 2024 <span className="tl-who tl-who-franco">Franco Nicoletti</span></div>
            <div className="tl-title">Cerimônia de investidura — nomeações da Confederação OSJ Cavalieri di Malta</div>
            <div className="tl-source">Lo Scudo Magazine</div>
          </div>
          <div className="tl-item">
            <div className="tl-dot"></div>
            <div className="tl-date">Abr · 2025 <span className="tl-who tl-who-inst">Instituto</span></div>
            <div className="tl-title">Lançamento oficial do Instituto Brasil Te Ama</div>
            <div className="tl-desc">Jantar com convidados especiais — marco público da fundação do programa.</div>
            <div className="tl-source">Lo Scudo Magazine</div>
          </div>
          <div className="tl-item">
            <div className="tl-dot tl-dot-shirin"></div>
            <div className="tl-date" style={{ color: '#5a1230' }}>Mai · 2025 <span className="tl-who tl-who-shirin">Shirin Vafaein</span></div>
            <div className="tl-title">Instituto Brasil Te Ama e MPDF unidos pela Giornata della Donna</div>
            <div className="tl-desc">Evento de empoderamento feminino no DF.</div>
            <div className="tl-source">Lo Scudo Magazine</div>
          </div>
          <div className="tl-item">
            <div className="tl-dot"></div>
            <div className="tl-date">Jun · 2025 <span className="tl-who tl-who-inst">Instituto</span></div>
            <div className="tl-title">Instituto destacado pelo Lo Scudo como modelo solidário para o Brasil</div>
            <div className="tl-source">Lo Scudo Magazine</div>
          </div>
          <div className="tl-item">
            <div className="tl-dot"></div>
            <div className="tl-date">Ago · 2025 <span className="tl-who tl-who-franco">Franco Nicoletti</span></div>
            <div className="tl-title">Visita institucional na Sicília — acordos humanitários internacionais</div>
            <div className="tl-source">Lo Scudo Magazine</div>
          </div>
          <div className="tl-item">
            <div className="tl-dot"></div>
            <div className="tl-date">Jan · 2026 <span className="tl-who tl-who-franco">Franco Nicoletti</span></div>
            <div className="tl-title">Reconhecimento formal pela família real nigeriana</div>
            <div className="tl-source">Lo Scudo Magazine</div>
          </div>
          <div className="tl-item">
            <div className="tl-dot"></div>
            <div className="tl-date">Jan · 2026 <span className="tl-who tl-who-inst">Instituto</span></div>
            <div className="tl-title">Ação humanitária no Brasil — gesto de cuidado que se torna esperança</div>
            <div className="tl-source">Lo Scudo Magazine</div>
          </div>
          <div className="tl-item">
            <div className="tl-dot"></div>
            <div className="tl-date">Mar · 2026 <span className="tl-who tl-who-franco">Franco Nicoletti</span></div>
            <div className="tl-title">Prêmio Humanitário recebido de Monsignor Casolini em Tivoli, Itália</div>
            <div className="tl-desc">Colar com o símbolo da Cruz da Ordem — insígnia de alto valor espiritual e cavaleiresco.</div>
            <div className="tl-source">Lo Scudo Magazine</div>
          </div>
        </div>
      </div>

      <div className="section" style={{ borderBottom: 'none' }}>
        <div className="section-label">Bloco 4 — CTA</div>
        <div className="cta-selo">
          <div>
            <h3>Sua empresa pode fazer parte desta rede</h3>
            <p>O Selo Brasil Te Ama conecta empresas a uma rede do bem com respaldo institucional internacional. Conheça o programa e solicite uma conversa com nossa equipe.</p>
          </div>
          <Link to="/selo" className="cta-selo-btn" style={ctaLinkStyle}>Quero ser parceiro →</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
