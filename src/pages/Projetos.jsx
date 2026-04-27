import { Link } from 'react-router-dom';
import Footer from '../components/Footer.jsx';
import './Projetos.css';

const navLinkStyle = { color: 'inherit', textDecoration: 'none' };
const ctaLinkStyle = { display: 'inline-block', textDecoration: 'none' };

export default function Projetos() {
  return (
    <div className="page-projetos">
      <h2 className="sr-only">Wireframe da página Projetos — Instituto Brasil Te Ama — 11 projetos organizados por frente de atuação com indicação de origem do conteúdo</h2>

      <nav className="nav">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="nav-logo">
            <img src="/images/logo.png" alt="Instituto Brasil Te Ama" className="logo-img" />
            <div className="logo-name">Instituto Brasil Te Ama</div>
          </div>
        </Link>
        <div className="nav-links">
          <Link to="/" style={navLinkStyle}>Home</Link><Link to="/sobre" style={navLinkStyle}>Sobre</Link><Link to="/lideranca" style={navLinkStyle}>Liderança</Link><Link to="/selo" style={navLinkStyle}>Selo Brasil Te Ama</Link>
          <Link to="/projetos" className="nav-active" style={navLinkStyle}>Projetos</Link>
          <Link to="/noticias" style={navLinkStyle}>Notícias</Link><Link to="/transparencia" style={navLinkStyle}>Transparência</Link><Link to="/contato" style={navLinkStyle}>Contato</Link>
        </div>
        <Link to="/contato" className="nav-cta" style={ctaLinkStyle}>Quero ser parceiro</Link>
      </nav>

      <div className="hero">
        <div className="hero-eyebrow">Projetos e frentes de atuação</div>
        <h1 className="hero-headline">Ações concretas, documentadas e com impacto verificável.</h1>
        <p className="hero-sub">O Instituto Brasil Te Ama atua em 10 frentes de atuação no Brasil e no exterior. Cada projeto tem descrição clara do problema enfrentado, da ação realizada e do público beneficiado.</p>
      </div>

      <div className="section">
        <div className="section-label">Filtros por frente de atuação</div>
        <div className="aviso-box">
          <div className="aviso-title">O que foi aproveitado do site atual</div>
          <div className="aviso-text">O site atual em institutobrasilteama.org/category/projetos/ tem 9 projetos com textos reais publicados em março/2024. Os títulos, descrições de "O que é?" e "Para que serve?" foram aproveitados como base, reescritos no tom institucional aprovado e organizados por frente de atuação. Nenhum foi descartado — todos foram migrados e enriquecidos. 2 projetos novos foram adicionados com base nos documentos e na cobertura do Lo Scudo Magazine.</div>
        </div>
        <div className="filtros">
          <div className="filtro filtro-active">Todos</div>
          <div className="filtro">Assistência social</div>
          <div className="filtro">Direitos humanos</div>
          <div className="filtro">Saúde e prevenção</div>
          <div className="filtro">Educação e capacitação</div>
          <div className="filtro">Meio ambiente</div>
          <div className="filtro">Internacional</div>
          <div className="filtro">Parceria institucional</div>
        </div>
      </div>

      <div className="section">
        <div className="section-label">Projetos com evidência pública confirmada — publicar no lançamento</div>
        <div className="projetos-grid">

          <div className="projeto-card">
            <div className="projeto-img">
              <img src="/images/cidadania-02.jpg" alt="Atendimento direto a pessoas em vulnerabilidade extrema no DF" />
            </div>
            <div className="projeto-body">
              <span className="projeto-status status-confirmado">Ativo · confirmado</span>
              <span className="projeto-badge badge-novo" style={{ marginLeft: '4px' }}>novo</span>
              <div className="projeto-frente">Assistência social · DF</div>
              <div className="projeto-title">Pobreza extrema no Distrito Federal</div>
              <div className="projeto-desc">Atendimento direto a mais de 1.000 pessoas em situação de vulnerabilidade extrema por mês, com distribuição de alimentos, vestuário e suprimentos básicos.</div>
              <div className="projeto-meta">
                <span className="projeto-local">Brasília · DF</span>
                <span className="projeto-fonte">Lo Scudo Magazine</span>
              </div>
            </div>
          </div>

          <div className="projeto-card">
            <div className="projeto-img">
              <img src="/images/nigeria.jpg" alt="Poço d'água — Reino de Idado-Ijesa, Nigéria" />
            </div>
            <div className="projeto-body">
              <span className="projeto-status status-confirmado">Ativo · confirmado</span>
              <span className="projeto-badge badge-novo" style={{ marginLeft: '4px' }}>novo</span>
              <div className="projeto-frente">Acesso à água · Internacional</div>
              <div className="projeto-title">Poço d'água na Nigéria</div>
              <div className="projeto-desc">Financiamento e construção de poço de água potável em parceria com a Família Real do Reino de Idado-Ijesa, levando acesso à água a comunidades carentes.</div>
              <div className="projeto-meta">
                <span className="projeto-local">Nigéria · Reino de Idado-Ijesa</span>
                <span className="projeto-fonte">Lo Scudo Magazine</span>
              </div>
            </div>
          </div>

          <div className="projeto-card">
            <div className="projeto-img">
              foto do evento · MPDF<br/>
              <span className="annotation pending" style={{ fontSize: '9px' }}>pendente</span>
            </div>
            <div className="projeto-body">
              <span className="projeto-status status-confirmado">Ativo · confirmado</span>
              <span className="projeto-badge badge-novo" style={{ marginLeft: '4px' }}>novo</span>
              <div className="projeto-frente">Direitos humanos · DF</div>
              <div className="projeto-title">Giornata della Donna — MPDF</div>
              <div className="projeto-desc">Evento de empoderamento feminino realizado em parceria com o Ministério Público do DF, promovendo direitos, visibilidade e protagonismo das mulheres.</div>
              <div className="projeto-meta">
                <span className="projeto-local">Brasília · DF</span>
                <span className="projeto-fonte">Lo Scudo Magazine</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="section">
        <div className="section-label">Projetos migrados do site atual — reescritos no tom aprovado</div>
        <div className="projetos-grid">

          <div className="projeto-card">
            <div className="projeto-img">
              foto da ação<br/>
              <span className="annotation pending" style={{ fontSize: '9px' }}>pendente</span>
            </div>
            <div className="projeto-body">
              <span className="projeto-status status-em-andamento">Em andamento</span>
              <span className="projeto-badge badge-aproveitado" style={{ marginLeft: '4px' }}>aproveitado</span>
              <div className="projeto-frente">Assistência social · Saúde</div>
              <div className="projeto-title">Projeto Salvando Vidas</div>
              <div className="projeto-desc">Ações de promoção da dignidade humana — capacitação profissional, empreendedorismo e apoio a jovens de baixa renda. Parceria com estado e agentes individuais.</div>
              <div className="projeto-meta">
                <span className="projeto-local">Brasil · DF</span>
                <span className="projeto-fonte">Site atual · mar/2024</span>
              </div>
            </div>
          </div>

          <div className="projeto-card">
            <div className="projeto-img">
              foto da ação<br/>
              <span className="annotation pending" style={{ fontSize: '9px' }}>pendente</span>
            </div>
            <div className="projeto-body">
              <span className="projeto-status status-em-andamento">Em andamento</span>
              <span className="projeto-badge badge-aproveitado" style={{ marginLeft: '4px' }}>aproveitado</span>
              <div className="projeto-frente">Idosos · Saúde digital</div>
              <div className="projeto-title">Programa Viver — Envelhecimento Ativo e Saudável</div>
              <div className="projeto-desc">Promoção da educação, saúde e mobilidade física para idosos por meio da tecnologia — inclusão digital e social, autoestima e interação comunitária.</div>
              <div className="projeto-meta">
                <span className="projeto-local">Brasil</span>
                <span className="projeto-fonte">Site atual · mar/2024</span>
              </div>
            </div>
          </div>

          <div className="projeto-card">
            <div className="projeto-img">
              foto da ação<br/>
              <span className="annotation pending" style={{ fontSize: '9px' }}>pendente</span>
            </div>
            <div className="projeto-body">
              <span className="projeto-status status-em-andamento">Em andamento</span>
              <span className="projeto-badge badge-aproveitado" style={{ marginLeft: '4px' }}>aproveitado</span>
              <div className="projeto-frente">Direitos humanos · Criança</div>
              <div className="projeto-title">Programa Nacional de Localização de Desaparecidos</div>
              <div className="projeto-desc">Ampliação da divulgação sobre crianças desaparecidas e suporte à implementação do Cadastro Nacional de Crianças e Adolescentes Desaparecidos.</div>
              <div className="projeto-meta">
                <span className="projeto-local">Nacional</span>
                <span className="projeto-fonte">Site atual · mar/2024</span>
              </div>
            </div>
          </div>

          <div className="projeto-card">
            <div className="projeto-img">
              foto da ação<br/>
              <span className="annotation pending" style={{ fontSize: '9px' }}>pendente</span>
            </div>
            <div className="projeto-body">
              <span className="projeto-status status-em-andamento">Em andamento</span>
              <span className="projeto-badge badge-aproveitado" style={{ marginLeft: '4px' }}>aproveitado</span>
              <div className="projeto-frente">Educação · Geração de renda</div>
              <div className="projeto-title">Projeto Nação Empreendedora</div>
              <div className="projeto-desc">Capacitação em empreendedorismo, cooperativismo e agricultura familiar para comunidades tradicionais — geração de renda com preservação cultural e igualdade étnico-racial.</div>
              <div className="projeto-meta">
                <span className="projeto-local">Brasil · comunidades tradicionais</span>
                <span className="projeto-fonte">Site atual · mar/2024</span>
              </div>
            </div>
          </div>

          <div className="projeto-card">
            <div className="projeto-img">
              foto da ação<br/>
              <span className="annotation pending" style={{ fontSize: '9px' }}>pendente</span>
            </div>
            <div className="projeto-body">
              <span className="projeto-status status-em-andamento">Em andamento</span>
              <span className="projeto-badge badge-aproveitado" style={{ marginLeft: '4px' }}>aproveitado</span>
              <div className="projeto-frente">Moradia · Assistência social</div>
              <div className="projeto-title">Projeto Moradia para Populações em Risco e em Situação de Rua</div>
              <div className="projeto-desc">Ações voltadas à redução do déficit habitacional e ao apoio a populações em situação de rua ou em áreas de risco — dignidade como premissa.</div>
              <div className="projeto-meta">
                <span className="projeto-local">Brasil</span>
                <span className="projeto-fonte">Site atual · mar/2024</span>
              </div>
            </div>
          </div>

          <div className="projeto-card">
            <div className="projeto-img">
              foto da ação<br/>
              <span className="annotation pending" style={{ fontSize: '9px' }}>pendente</span>
            </div>
            <div className="projeto-body">
              <span className="projeto-status status-em-andamento">Em andamento</span>
              <span className="projeto-badge badge-aproveitado" style={{ marginLeft: '4px' }}>aproveitado</span>
              <div className="projeto-frente">Saúde · Prevenção</div>
              <div className="projeto-title">Projeto de Prevenção ao Uso de Álcool e Outras Drogas</div>
              <div className="projeto-desc">Ações de prevenção, informação e suporte a pessoas e comunidades em situação de vulnerabilidade relacionada ao uso de substâncias psicoativas.</div>
              <div className="projeto-meta">
                <span className="projeto-local">Brasil</span>
                <span className="projeto-fonte">Site atual · mar/2024</span>
              </div>
            </div>
          </div>

          <div className="projeto-card">
            <div className="projeto-img">
              foto da ação<br/>
              <span className="annotation pending" style={{ fontSize: '9px' }}>pendente</span>
            </div>
            <div className="projeto-body">
              <span className="projeto-status status-em-andamento">Em andamento</span>
              <span className="projeto-badge badge-aproveitado" style={{ marginLeft: '4px' }}>aproveitado</span>
              <div className="projeto-frente">Saúde · Infância</div>
              <div className="projeto-title">Programa Criança Protegida</div>
              <div className="projeto-desc">Clínicas multidisciplinares especializadas no atendimento integral de crianças e adolescentes — desenvolvimento social, físico e afetivo com cuidado e prevenção.</div>
              <div className="projeto-meta">
                <span className="projeto-local">Brasil</span>
                <span className="projeto-fonte">Site atual · mar/2024</span>
              </div>
            </div>
          </div>

          <div className="projeto-card">
            <div className="projeto-img">
              foto da ação<br/>
              <span className="annotation pending" style={{ fontSize: '9px' }}>pendente</span>
            </div>
            <div className="projeto-body">
              <span className="projeto-status status-em-andamento">Em andamento</span>
              <span className="projeto-badge badge-aproveitado" style={{ marginLeft: '4px' }}>aproveitado</span>
              <div className="projeto-frente">Educação · Mulheres</div>
              <div className="projeto-title">A Inclusão de Todos é o Futuro que Queremos</div>
              <div className="projeto-desc">Curso de capacitação de entes públicos e privados para o trabalho com mulheres — "Mulher, Capacitar para Melhor Cuidar" — formação profissional e protagonismo feminino.</div>
              <div className="projeto-meta">
                <span className="projeto-local">Brasil</span>
                <span className="projeto-fonte">Site atual · mar/2024</span>
              </div>
            </div>
          </div>

          <div className="projeto-card">
            <div className="projeto-img">
              foto da ação<br/>
              <span className="annotation pending" style={{ fontSize: '9px' }}>pendente</span>
            </div>
            <div className="projeto-body">
              <span className="projeto-status status-em-andamento">Em andamento</span>
              <span className="projeto-badge badge-aproveitado" style={{ marginLeft: '4px' }}>aproveitado</span>
              <div className="projeto-frente">Conferências · Parceria institucional</div>
              <div className="projeto-title">Apoio à Realização de Conferências Nacionais e Internacionais</div>
              <div className="projeto-desc">Financiamento e suporte à realização de conferências pela vida humana, pela família e pela infância — espaços de debate de políticas públicas com sociedade civil e governo.</div>
              <div className="projeto-meta">
                <span className="projeto-local">Nacional · Internacional</span>
                <span className="projeto-fonte">Site atual · mar/2024</span>
              </div>
            </div>
          </div>

        </div>
        <div className="update-strip">Novos projetos sendo documentados e adicionados — fichas completas em elaboração pela equipe. <span className="annotation pending">total de projetos formalizados a preencher antes do lançamento</span></div>
      </div>

      <div className="section" style={{ borderBottom: 'none' }}>
        <div className="section-label">CTA — Apoiar os projetos</div>
        <div className="cta-selo">
          <div>
            <h3>Sua empresa pode apoiar estes projetos</h3>
            <p>Ao aderir ao Programa Selo Brasil Te Ama, sua empresa contribui diretamente para as frentes de atuação do Instituto — com transparência, critério e prestação de contas periódica.</p>
          </div>
          <Link to="/contato" className="cta-selo-btn" style={ctaLinkStyle}>Quero ser parceiro →</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
