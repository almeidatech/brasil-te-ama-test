import { Link } from 'react-router-dom';
import Footer from '../components/Footer.jsx';
import './Noticias.css';

const navLinkStyle = { color: 'inherit', textDecoration: 'none' };
const ctaLinkStyle = { display: 'inline-block', textDecoration: 'none' };

export default function Noticias() {
  return (
    <div className="page-noticias">
      <h2 className="sr-only">Wireframe da página Notícias — Instituto Brasil Te Ama — posts do site atual categorizados e clipping de imprensa</h2>

      <nav className="nav">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="nav-logo">
            <div className="logo-box">IBtA</div>
            <div className="logo-name">Instituto Brasil Te Ama</div>
          </div>
        </Link>
        <div className="nav-links">
          <Link to="/" style={navLinkStyle}>Home</Link><Link to="/sobre" style={navLinkStyle}>Sobre</Link><Link to="/lideranca" style={navLinkStyle}>Liderança</Link><Link to="/selo" style={navLinkStyle}>Selo Brasil Te Ama</Link>
          <Link to="/projetos" style={navLinkStyle}>Projetos</Link><Link to="/noticias" className="nav-active" style={navLinkStyle}>Notícias</Link><Link to="/transparencia" style={navLinkStyle}>Transparência</Link><Link to="/contato" style={navLinkStyle}>Contato</Link>
        </div>
        <Link to="/contato" className="nav-cta" style={ctaLinkStyle}>Quero ser parceiro</Link>
      </nav>

      <div className="hero">
        <div className="hero-eyebrow">Notícias e atualizações</div>
        <h1 className="hero-headline">O que o Instituto está fazendo — em tempo real.</h1>
        <p className="hero-sub">Ações em campo, parcerias, eventos e cobertura de imprensa. Tudo documentado, com data e responsável identificado.</p>
      </div>

      <div className="section">
        <div className="aviso-box">
          <div className="aviso-title">O que foi aproveitado do site atual</div>
          <div className="aviso-text">O site atual tem 9 posts publicados no blog entre abril e julho de 2025 — todos com conteúdo real, datas reais e ações verificáveis. Todos foram aproveitados, recategorizados e enriquecidos com metadados. Nenhum foi descartado. Os 4 links de imprensa confirmados (Defensoria DF, Agência Brasília, Metrópoles, Lo Scudo) foram adicionados como seção dedicada de clipping.</div>
        </div>
        <div className="filtros">
          <div className="filtro filtro-active">Todas</div>
          <div className="filtro">Ações em campo</div>
          <div className="filtro">Parcerias</div>
          <div className="filtro">Eventos</div>
          <div className="filtro">Imprensa</div>
        </div>

        <div className="section-label">Destaque — notícia principal</div>
        <div className="card-destaque">
          <div className="card-destaque-img">
            foto da ação<br/>Rodoviária · DF
            <span className="annotation ready" style={{ fontSize: '9px', marginTop: '4px' }}>foto no site atual</span>
          </div>
          <div className="card-destaque-body">
            <span className="card-cat cat-acoes">Ações em campo</span>
            <div className="card-title">Dia de Cidadania e Solidariedade na Rodoviária do Plano Piloto: DPDF e Brasil Te Ama em Ação</div>
            <div className="card-resumo">No dia 21 de maio de 2025, a Rodoviária do Plano Piloto foi palco da Quarta do Cidadão, promovida pela Defensoria Pública do DF em parceria com o Instituto Brasil Te Ama — levando serviços de cidadania, justiça e cuidado diretamente à população.</div>
            <div className="card-meta">
              <span>21 mai 2025</span>
              <span className="card-fonte">Ações em campo</span>
              <span className="card-origem">aproveitado do site atual</span>
            </div>
            <a href="https://institutobrasilteama.org/2025/05/22/dia-de-cidadania-e-solidariedade-na-rodoviaria-do-plano-piloto-dpdf-e-brasil-te-ama-em-acao/" target="_blank" rel="noopener noreferrer" className="card-link" style={{ textDecoration: 'none' }}>Ler mais →</a>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-label">Notícias recentes — todos os posts do site atual (2025)</div>
        <div className="cards-grid">

          <div className="card">
            <div className="card-img">foto do evento<br/><span className="annotation ready" style={{ fontSize: '9px' }}>foto no site atual</span></div>
            <div className="card-body">
              <span className="card-cat cat-eventos">Eventos</span>
              <div className="card-title">Lançamento do Instituto Brasil Te Ama reúne convidados especiais</div>
              <div className="card-resumo">Jantar de lançamento realizado na residência de Franco Nicoletti e Shirin Vafaein — noite de elegância, diálogo e engajamento social.</div>
              <div className="card-meta"><span>27 mai 2025</span><span className="card-origem">aproveitado</span></div>
              <a href="https://institutobrasilteama.org/2025/05/27/lancamento-do-instituto-brasil-te-ama-reune-convidados-especiais-em-noite-memoravel/" target="_blank" rel="noopener noreferrer" className="card-link" style={{ textDecoration: 'none' }}>Ler mais →</a>
            </div>
          </div>

          <div className="card">
            <div className="card-img">foto da ação<br/><span className="annotation ready" style={{ fontSize: '9px' }}>foto no site atual</span></div>
            <div className="card-body">
              <span className="card-cat cat-parcerias">Parcerias</span>
              <div className="card-title">23ª Edição do Dia da Mulher — parceria com Defensoria Pública do DF</div>
              <div className="card-resumo">Evento grandioso e transformador em parceria com a DPDF — mais de 1.000 serviços oferecidos à população feminina do DF.</div>
              <div className="card-meta"><span>5 mai 2025</span><span className="card-origem">aproveitado</span></div>
              <a href="https://institutobrasilteama.org/2025/05/05/elementor-421/" target="_blank" rel="noopener noreferrer" className="card-link" style={{ textDecoration: 'none' }}>Ler mais →</a>
            </div>
          </div>

          <div className="card">
            <div className="card-img">foto da ação<br/><span className="annotation ready" style={{ fontSize: '9px' }}>foto no site atual</span></div>
            <div className="card-body">
              <span className="card-cat cat-acoes">Ações em campo</span>
              <div className="card-title">Ação Social em Arrozal — cidadania e cuidado à comunidade do Córrego</div>
              <div className="card-resumo">10 de maio de 2025 — parceria com DETRAN, DPDF, CAESB, GDF, Instituto Verônica Rodrigues e Secretaria de Desenvolvimento Social.</div>
              <div className="card-meta"><span>11 mai 2025</span><span className="card-origem">aproveitado</span></div>
              <a href="https://institutobrasilteama.org/2025/05/11/acao-humanitaria-em-arrozal-df/" target="_blank" rel="noopener noreferrer" className="card-link" style={{ textDecoration: 'none' }}>Ler mais →</a>
            </div>
          </div>

          <div className="card">
            <div className="card-img">foto da entrevista<br/><span className="annotation ready" style={{ fontSize: '9px' }}>foto no site atual</span></div>
            <div className="card-body">
              <span className="card-cat cat-imprensa">Imprensa</span>
              <div className="card-title">Instituto Brasil Te Ama na Rádio Sucesso — lançamento oficial</div>
              <div className="card-resumo">11 de abril de 2025 — lançamento do Instituto no programa É Só Subindo, da Rádio Sucesso — primeira aparição pública na mídia.</div>
              <div className="card-meta"><span>11 abr 2025</span><span className="card-origem">aproveitado</span></div>
              <a href="https://institutobrasilteama.org/2025/04/11/instituto-brasil-te-ama-na-radio-sucesso/" target="_blank" rel="noopener noreferrer" className="card-link" style={{ textDecoration: 'none' }}>Ler mais →</a>
            </div>
          </div>

          <div className="card">
            <div className="card-img">foto do atleta<br/><span className="annotation ready" style={{ fontSize: '9px' }}>foto no site atual</span></div>
            <div className="card-body">
              <span className="card-cat cat-eventos">Eventos</span>
              <div className="card-title">Encontro Inspirador com o Atleta Edilson</div>
              <div className="card-resumo">Atleta amador de 75 anos compartilha conquistas em competições de corrida — medalhas e vitórias em Goiás apresentadas à equipe do Instituto.</div>
              <div className="card-meta"><span>15 jul 2025</span><span className="card-origem">aproveitado</span></div>
              <a href="https://institutobrasilteama.org/2025/07/15/encontro-inspirador-com-o-atleta-edilson/" target="_blank" rel="noopener noreferrer" className="card-link" style={{ textDecoration: 'none' }}>Ler mais →</a>
            </div>
          </div>

          <div className="card">
            <div className="card-img">foto do evento<br/><span className="annotation pending" style={{ fontSize: '9px' }}>foto a confirmar</span></div>
            <div className="card-body">
              <span className="card-cat cat-eventos">Eventos</span>
              <div className="card-title">21ª Edição do World Police & Fire Games</div>
              <div className="card-resumo">Participação institucional do Instituto Brasil Te Ama na 21ª edição do evento internacional.</div>
              <div className="card-meta"><span>27 jul 2025</span><span className="card-origem">aproveitado</span></div>
              <a href="https://institutobrasilteama.org/2025/07/27/21a-edicao-do-world-police-fire/" target="_blank" rel="noopener noreferrer" className="card-link" style={{ textDecoration: 'none' }}>Ler mais →</a>
            </div>
          </div>

          <div className="card">
            <div className="card-img">foto<br/><span className="annotation pending" style={{ fontSize: '9px' }}>pendente</span></div>
            <div className="card-body">
              <span className="card-cat cat-acoes">Ações em campo</span>
              <div className="card-title">Homenagem ao Dia das Mães — Instituto Brasil Te Ama</div>
              <div className="card-resumo">Celebração do Dia das Mães com mensagem institucional de reconhecimento e cuidado.</div>
              <div className="card-meta"><span>11 mai 2025</span><span className="card-origem">aproveitado</span></div>
              <a href="https://institutobrasilteama.org/2025/05/11/homenagem-ao-dia-das-maes-instituto-brasil-te-ama/" target="_blank" rel="noopener noreferrer" className="card-link" style={{ textDecoration: 'none' }}>Ler mais →</a>
            </div>
          </div>

          <div className="card">
            <div className="card-img">foto<br/><span className="annotation pending" style={{ fontSize: '9px' }}>pendente</span></div>
            <div className="card-body">
              <span className="card-cat cat-acoes">Ações em campo</span>
              <div className="card-title">Atleta amador de 75 anos brilha em competições de corrida em Goiás</div>
              <div className="card-resumo">Edilson da Costa Dias conquista 1º lugar no Circuito Anapolino — história de superação apoiada pelo Instituto.</div>
              <div className="card-meta"><span>1 abr 2025</span><span className="card-origem">aproveitado</span></div>
              <a href="https://institutobrasilteama.org/2025/04/01/atleta-amador-de-75-anos-brilha-em-competicoes-de-corrida-e-conquista-duas-vitorias-em-goias/" target="_blank" rel="noopener noreferrer" className="card-link" style={{ textDecoration: 'none' }}>Ler mais →</a>
            </div>
          </div>

        </div>
      </div>

      <div className="section">
        <div className="section-label">Clipping de imprensa — cobertura externa confirmada</div>
        <div className="imprensa-grid">
          <a href="https://www.defensoria.df.gov.br/parceria-entre-dpdf-e-instituto-brasil-te-ama-amplia-servicos-da-quarta-do-cidadao-com-assistencia-odontologica/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
            <div className="imprensa-card">
              <div className="imprensa-source">Defensoria Pública do DF · Institucional</div>
              <div className="imprensa-title">Parceria entre DPDF e Instituto Brasil Te Ama amplia serviços da Quarta do Cidadão com assistência odontológica</div>
              <div className="imprensa-meta">defensoria.df.gov.br · 2025 <span className="annotation ready" style={{ marginLeft: '4px' }}>link confirmado</span></div>
            </div>
          </a>
          <a href="https://www.agenciabrasilia.df.gov.br/w/servicos-do-evento-quarta-do-cidadao-sao-ampliados-com-assistencia-odontologica" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
            <div className="imprensa-card">
              <div className="imprensa-source">Agência Brasília · Governo do DF</div>
              <div className="imprensa-title">Serviços do evento Quarta do Cidadão são ampliados com assistência odontológica</div>
              <div className="imprensa-meta">agenciabrasilia.df.gov.br · 2025 <span className="annotation ready" style={{ marginLeft: '4px' }}>link confirmado</span></div>
            </div>
          </a>
          <a href="https://www.metropoles.com/distrito-federal/quarta-do-cidadao-reune-servicos-para-homens-vulneraveis" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
            <div className="imprensa-card">
              <div className="imprensa-source">Metrópoles · Grande imprensa</div>
              <div className="imprensa-title">Quarta do Cidadão reúne serviços para homens vulneráveis</div>
              <div className="imprensa-meta">metropoles.com · 2025 <span className="annotation ready" style={{ marginLeft: '4px' }}>link confirmado</span></div>
            </div>
          </a>
          <a href="https://loscudomagazine.it" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
            <div className="imprensa-card">
              <div className="imprensa-source">Lo Scudo Magazine · Internacional</div>
              <div className="imprensa-title">25 artigos publicados — trajetória e projetos do Instituto Brasil Te Ama</div>
              <div className="imprensa-meta">loscudomagazine.it · 2024–2026 <span className="annotation ready" style={{ marginLeft: '4px' }}>confirmado</span></div>
            </div>
          </a>
          <a href="https://www.ultimahoraonline.com.br/noticia/fundador-franco-nicoletti-e-presidente-shirin-vafaein-explica-como-o-instituto-brasil-te-ama-conecta-quem-pode-ajudar-a-quem-precisa" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
            <div className="imprensa-card">
              <div className="imprensa-source">Última Hora Online</div>
              <div className="imprensa-title">Fundador Franco Nicoletti e presidente Shirin Vafaein explicam como o Instituto conecta quem pode ajudar a quem precisa</div>
              <div className="imprensa-meta">ultimahoraonline.com.br <span className="annotation ready" style={{ marginLeft: '4px' }}>link confirmado</span></div>
            </div>
          </a>
          <div className="imprensa-card">
            <div className="imprensa-source">Rádio Sucesso</div>
            <div className="imprensa-title">Instituto Brasil Te Ama no programa É Só Subindo — lançamento oficial em entrevista ao vivo</div>
            <div className="imprensa-meta">Rádio Sucesso · abr/2025 <span className="annotation pending" style={{ marginLeft: '4px' }}>link a confirmar</span></div>
          </div>
        </div>
      </div>

      <div className="section" style={{ borderBottom: 'none' }}>
        <div className="section-label">Atualizações e responsável editorial</div>
        <div className="cta-newsletter">
          <div className="cta-newsletter-text">
            <h3>Fique por dentro das ações do Instituto</h3>
            <p>Acompanhe projetos, parcerias e resultados diretamente no seu e-mail.<br/>
            <span className="annotation pending" style={{ fontSize: '9px' }}>responsável pela atualização contínua — a definir pela equipe</span></p>
          </div>
          <div className="cta-newsletter-form">
            <div className="cta-newsletter-input">seu@email.com.br</div>
            <button className="cta-newsletter-btn">Assinar →</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
