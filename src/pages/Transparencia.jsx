import { Link } from 'react-router-dom';
import Footer from '../components/Footer.jsx';
import './Transparencia.css';

const navLinkStyle = { color: 'inherit', textDecoration: 'none' };
const ctaLinkStyle = { display: 'inline-block', textDecoration: 'none' };

export default function Transparencia() {
  return (
    <div className="page-transparencia">
      <h2 className="sr-only">Wireframe da página Transparência — Instituto Brasil Te Ama — indicadores de impacto, parceiros, critérios de ONGs e política de prestação de contas</h2>

      <nav className="nav">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="nav-logo">
            <img src="/images/logo.png" alt="Instituto Brasil Te Ama" className="logo-img" />
            <div className="logo-name">Instituto Brasil Te Ama</div>
          </div>
        </Link>
        <div className="nav-links">
          <Link to="/" style={navLinkStyle}>Home</Link><Link to="/sobre" style={navLinkStyle}>Sobre</Link><Link to="/lideranca" style={navLinkStyle}>Liderança</Link><Link to="/selo" style={navLinkStyle}>Selo Brasil Te Ama</Link>
          <Link to="/projetos" style={navLinkStyle}>Projetos</Link><Link to="/noticias" style={navLinkStyle}>Notícias</Link>
          <Link to="/transparencia" className="nav-active" style={navLinkStyle}>Transparência</Link>
          <Link to="/contato" style={navLinkStyle}>Contato</Link>
        </div>
        <Link to="/contato" className="nav-cta" style={ctaLinkStyle}>Quero ser parceiro</Link>
      </nav>

      <div className="hero">
        <div className="hero-eyebrow">Transparência e prestação de contas</div>
        <h1 className="hero-headline">Onde o dinheiro vai, quem é apoiado e como sabemos que funciona.</h1>
        <p className="hero-sub">O Instituto Brasil Te Ama publica regularmente os dados de impacto, os parceiros confirmados e os critérios de seleção de ONGs. Transparência não é complemento — é a base de tudo.</p>
      </div>

      <div className="section">
        <div className="section-label">Compromisso público</div>
        <div className="compromisso">
          <div className="compromisso-title">Nossa política de transparência</div>
          <p className="compromisso-text">O Instituto Brasil Te Ama publica relatórios periódicos sobre o destino dos apoios recebidos e o impacto das ações apoiadas. Nosso compromisso é com a comunicação clara, a prestação de contas responsável e o respeito às organizações e às pessoas que integram esta rede. Erros identificados em dados publicados são corrigidos publicamente — a transparência inclui a disposição de corrigir.</p>
        </div>
      </div>

      <div className="section">
        <div className="section-label">Bloco 1 — Painel de indicadores de impacto</div>
        <div className="indicadores-grid">
          <div className="indicador">
            <div className="ind-num">+1.000</div>
            <div className="ind-label">pessoas beneficiadas por mês no Distrito Federal</div>
            <div className="ind-fonte">Lo Scudo Magazine · 2024–2025</div>
          </div>
          <div className="indicador">
            <div className="ind-num">2</div>
            <div className="ind-label">países com atuação operacional confirmada</div>
            <div className="ind-fonte">Brasil e Nigéria</div>
          </div>
          <div className="indicador">
            <div className="ind-num">4</div>
            <div className="ind-label">países com presença institucional</div>
            <div className="ind-fonte">Brasil, Nigéria, Itália, Alemanha</div>
          </div>
          <div className="indicador">
            <div className="ind-num">10</div>
            <div className="ind-label">frentes de atuação ativas identificadas</div>
            <div className="ind-fonte">Lo Scudo Magazine · jun/2025</div>
          </div>
          <div className="indicador">
            <div className="ind-num">2022</div>
            <div className="ind-label">ano de fundação formal do Instituto</div>
            <div className="ind-fonte">CNPJ: 49.458.362/0001-10</div>
          </div>
          <div className="indicador">
            <div className="ind-num ind-pending">a preencher</div>
            <div className="ind-label">total histórico de beneficiados</div>
            <span className="ind-pending">Shirin / Franco — levantar</span>
          </div>
          <div className="indicador">
            <div className="ind-num ind-pending">a preencher</div>
            <div className="ind-label">número de projetos formalizados</div>
            <span className="ind-pending">Shirin — confirmar</span>
          </div>
          <div className="indicador">
            <div className="ind-num ind-pending">a preencher</div>
            <div className="ind-label">empresas parceiras ativas</div>
            <span className="ind-pending">equipe — levantar</span>
          </div>
        </div>
        <div className="annotation pending" style={{ marginTop: '4px' }}>Indicadores com "a preencher" não aparecem no site — ficam ocultos até validação interna</div>
      </div>

      <div className="section">
        <div className="section-label">Bloco 2 — Cobertura geográfica confirmada</div>
        <div className="geo-grid">
          <div className="geo-card">
            <div className="geo-tipo">Atuação operacional</div>
            <div className="geo-flag">Brasil — Distrito Federal</div>
            <div className="geo-desc">Sede principal · todos os projetos domésticos · +1.000 pessoas/mês beneficiadas</div>
          </div>
          <div className="geo-card">
            <div className="geo-tipo">Atuação operacional · Internacional</div>
            <div className="geo-flag">Nigéria — Reino de Idado-Ijesa</div>
            <div className="geo-desc">Projeto poço d'água · parceria com família real · reconhecimento formal jan/2026</div>
          </div>
          <div className="geo-card">
            <div className="geo-tipo">Presença institucional</div>
            <div className="geo-flag">Itália — Tivoli, Sicília, Piacenza</div>
            <div className="geo-desc">Premiação humanitária · visitas e acordos · 2024–2026</div>
          </div>
          <div className="geo-card">
            <div className="geo-tipo">Presença institucional</div>
            <div className="geo-flag">Alemanha — Giessen</div>
            <div className="geo-desc">Apresentação do Projeto Nigéria · julho de 2024</div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-label">Bloco 3 — Ações de destaque com evidência publicável</div>
        <div className="acoes-list">
          <div className="acao-item">
            <div className="acao-num">01</div>
            <div>
              <div className="acao-title">Mais de 1.000 pessoas beneficiadas em um único mês no DF</div>
              <div className="acao-desc">Atendimento direto à população em situação de vulnerabilidade extrema no Distrito Federal — distribuição de alimentos, vestuário e suprimentos básicos.</div>
              <div className="acao-meta"><span className="acao-local">Brasília · DF · 2024–2025</span><span className="acao-fonte">Lo Scudo Magazine</span><span className="annotation ready">publicável</span></div>
            </div>
          </div>
          <div className="acao-item">
            <div className="acao-num">02</div>
            <div>
              <div className="acao-title">Financiamento de poço d'água na Nigéria — parceria com família real</div>
              <div className="acao-desc">Construção de poço de água potável no Reino de Idado-Ijesa — ação reconhecida formalmente pela família real nigeriana em janeiro de 2026.</div>
              <div className="acao-meta"><span className="acao-local">Nigéria · mar/2024</span><span className="acao-fonte">Lo Scudo Magazine</span><span className="annotation ready">publicável</span></div>
            </div>
          </div>
          <div className="acao-item">
            <div className="acao-num">03</div>
            <div>
              <div className="acao-title">Lançamento oficial do Instituto Brasil Te Ama</div>
              <div className="acao-desc">Jantar de lançamento com convidados especiais — marco público da fundação e do início das operações do programa.</div>
              <div className="acao-meta"><span className="acao-local">Brasil · abr/2025</span><span className="acao-fonte">Lo Scudo Magazine</span><span className="annotation ready">publicável</span></div>
            </div>
          </div>
          <div className="acao-item">
            <div className="acao-num">04</div>
            <div>
              <div className="acao-title">Giornata della Donna com MPDF — empoderamento feminino no DF</div>
              <div className="acao-desc">Evento em parceria com o Ministério Público do DF para promoção dos direitos das mulheres — mais de 1.000 serviços oferecidos.</div>
              <div className="acao-meta"><span className="acao-local">Brasília · DF · mai/2025</span><span className="acao-fonte">Lo Scudo Magazine</span><span className="annotation ready">publicável</span></div>
            </div>
          </div>
          <div className="acao-item">
            <div className="acao-num">05</div>
            <div>
              <div className="acao-title">Premiação humanitária — Monsignor Casolini, Tivoli, Itália</div>
              <div className="acao-desc">S.E. Dr. Franco Nicoletti recebe o Prêmio Humanitário das mãos de Monsignor Casolini, Reitor da Igreja de San Silvestro em Tivoli — colar com o símbolo da Cruz da Ordem.</div>
              <div className="acao-meta"><span className="acao-local">Tivoli · Itália · mar/2026</span><span className="acao-fonte">Lo Scudo Magazine</span><span className="annotation ready">publicável</span></div>
            </div>
          </div>
          <div className="acao-item">
            <div className="acao-num">06</div>
            <div>
              <div className="acao-title">Quarta do Cidadão — DPDF e Instituto em parceria no DF</div>
              <div className="acao-desc">Parceria com a Defensoria Pública do DF para ampliar os serviços da Quarta do Cidadão, incluindo assistência odontológica para população vulnerável.</div>
              <div className="acao-meta"><span className="acao-local">Brasília · DF · mai/2025</span><span className="acao-fonte">Defensoria DF · Agência Brasília · Metrópoles</span><span className="annotation ready">publicável</span></div>
            </div>
          </div>
          <div className="acao-item">
            <div className="acao-num">07</div>
            <div>
              <div className="acao-title">Reconhecimento formal pela família real nigeriana</div>
              <div className="acao-desc">O Principado de Santa Ágata, o Odo-Oko Idado Ijesa e o Reino de Idado-Ijesa agradecem formalmente à família Nicoletti pela contribuição ao desenvolvimento dos territórios.</div>
              <div className="acao-meta"><span className="acao-local">Nigéria · jan/2026</span><span className="acao-fonte">Lo Scudo Magazine</span><span className="annotation ready">publicável</span></div>
            </div>
          </div>
          <div className="acao-item">
            <div className="acao-num">08</div>
            <div>
              <div className="acao-title">Ação social em Arrozal — 7 parceiros institucionais</div>
              <div className="acao-desc">Ação no Córrego do Arrozal com DETRAN, DPDF, CAESB, GDF, Instituto Verônica Rodrigues e Secretaria de Desenvolvimento Social — cidadania e cuidado à comunidade.</div>
              <div className="acao-meta"><span className="acao-local">Brasília · DF · mai/2025</span><span className="acao-fonte">Site Instituto</span><span className="annotation ready">publicável</span></div>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-label">Bloco 4 — Parceiros institucionais confirmados</div>
        <div className="parceiros-grid">
          <div className="parceiro">
            <div className="parceiro-tipo">Institucional público · DF</div>
            <div className="parceiro-nome">Defensoria Pública do DF</div>
            <div className="parceiro-proj">Quarta do Cidadão · assistência jurídica e odontológica</div>
          </div>
          <div className="parceiro">
            <div className="parceiro-tipo">Institucional público · DF</div>
            <div className="parceiro-nome">MPDF — Ministério Público do DF</div>
            <div className="parceiro-proj">Giornata della Donna · empoderamento feminino</div>
          </div>
          <div className="parceiro">
            <div className="parceiro-tipo">Internacional · Nigéria</div>
            <div className="parceiro-nome">Família Real — Reino de Idado-Ijesa</div>
            <div className="parceiro-proj">Poço d'água · desenvolvimento territorial</div>
          </div>
          <div className="parceiro">
            <div className="parceiro-tipo">Ordem · Cooperação internacional</div>
            <div className="parceiro-nome">Gran Priorato d'Italia dell'OSMTH</div>
            <div className="parceiro-proj">Protocolo inter-ordens · cooperação humanitária</div>
          </div>
          <div className="parceiro">
            <div className="parceiro-tipo">Empresarial</div>
            <div className="parceiro-nome">Vimac-Capra</div>
            <div className="parceiro-proj">Parceria agroalimentar · 2024</div>
          </div>
          <div className="parceiro">
            <div className="parceiro-tipo">Comunicação</div>
            <div className="parceiro-nome">Bucaneiros</div>
            <div className="parceiro-proj">Parceiro de comunicação e sites</div>
          </div>
        </div>
        <div className="annotation ready" style={{ marginTop: '10px' }}>Todos autorizaram menção pública de nomes e logos — confirmado</div>
      </div>

      <div className="section">
        <div className="section-label">Bloco 5 — ONGs apoiadas</div>
        <div className="ongs-placeholder">
          <div className="ongs-title">ONGs apoiadas pelo programa</div>
          <p className="ongs-text">Esta seção será publicada assim que as fichas das ONGs parceiras forem formalizadas pela equipe. O Instituto Brasil Te Ama divulga a lista de ONGs apoiadas conforme sua política de transparência — somente ONGs com parceria formalizada e ativa são mencionadas publicamente.</p>
          <div className="annotation pending" style={{ marginTop: '12px' }}>Fichas de ONGs a preencher — Bloco 1 do Registro de ONGs · responsável: equipe interna</div>
        </div>
      </div>

      <div className="section">
        <div className="section-label">Bloco 6 — Critérios de seleção de ONGs</div>
        <p style={{ fontSize: '13px', color: 'var(--color-text-primary)', lineHeight: 1.75, marginBottom: '1.25rem' }}>O Instituto Brasil Te Ama direciona apoios exclusivamente a ONGs institucionais com atuação comprovada, critérios de governança definidos e compromisso com a dignidade das pessoas atendidas. Os critérios de seleção e acompanhamento estão documentados e disponíveis para consulta mediante solicitação formal.</p>
        <div className="criterios-grid">
          <div>
            <div className="criterio-col-title">Critérios obrigatórios (alto peso)</div>
            <div className="criterio-item"><div className="criterio-dot-alto"></div><div className="criterio-text">CNPJ ativo e regular, sem restrições cadastrais graves <span className="criterio-peso">· obrigatório</span></div></div>
            <div className="criterio-item"><div className="criterio-dot-alto"></div><div className="criterio-text">Atuação comprovada em área compatível com os valores do Instituto <span className="criterio-peso">· alto</span></div></div>
            <div className="criterio-item"><div className="criterio-dot-alto"></div><div className="criterio-text">Ausência de histórico público de irregularidade grave ou desvio de recursos <span className="criterio-peso">· obrigatório</span></div></div>
            <div className="criterio-item"><div className="criterio-dot-alto"></div><div className="criterio-text">Abertura para prestação de contas junto ao Instituto <span className="criterio-peso">· alto</span></div></div>
            <div className="criterio-item"><div className="criterio-dot-alto"></div><div className="criterio-text">Capacidade de receber apoio e aplicá-lo de forma verificável <span className="criterio-peso">· alto</span></div></div>
          </div>
          <div>
            <div className="criterio-col-title">Critérios de priorização (médio peso)</div>
            <div className="criterio-item"><div className="criterio-dot-med"></div><div className="criterio-text">Tempo de existência e histórico de atuação consistente <span className="criterio-peso">· médio</span></div></div>
            <div className="criterio-item"><div className="criterio-dot-med"></div><div className="criterio-text">Presença pública verificável — site, redes sociais, relatórios <span className="criterio-peso">· médio</span></div></div>
            <div className="criterio-item"><div className="criterio-dot-med"></div><div className="criterio-text">Cobertura geográfica relevante — nacional, regional ou estratégica <span className="criterio-peso">· médio</span></div></div>
            <div className="criterio-item"><div className="criterio-dot-med"></div><div className="criterio-text">Alinhamento temático com as áreas prioritárias do programa <span className="criterio-peso">· médio</span></div></div>
            <div className="criterio-item"><div className="criterio-dot-med"></div><div className="criterio-text">Diversidade geográfica em relação às ONGs já apoiadas <span className="criterio-peso">· médio</span></div></div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-label">Bloco 7 — Política de atualização e correção de dados</div>
        <div className="politica-box">
          <div className="politica-title">Como mantemos os dados atualizados</div>
          <p className="politica-text">O Instituto Brasil Te Ama publica relatórios periódicos com indicadores atualizados. Em caso de erro identificado em dado já publicado, o procedimento é: identificar e registrar internamente com data e responsável, corrigir o dado no canal onde foi publicado e, se o erro puder gerar interpretação equivocada, publicar nota de correção com clareza. O Instituto não oculta erros — a transparência inclui a disposição de corrigir informações de forma aberta.</p>
        </div>
      </div>

      <div className="section">
        <div className="section-label">Bloco 8 — Relatório de impacto</div>
        <div className="relatorio-box">
          <div className="relatorio-icon">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="3" y="2" width="16" height="18" rx="2" stroke="#7B1C3E" strokeWidth="1.2"/><path d="M7 7h8M7 11h8M7 15h5" stroke="#7B1C3E" strokeWidth="1.2" strokeLinecap="round"/></svg>
          </div>
          <div style={{ flex: 1 }}>
            <div className="relatorio-title">Relatório consolidado de impacto</div>
            <p className="relatorio-text">Documento com todos os indicadores, ações realizadas, ONGs apoiadas e evidências de impacto — publicado periodicamente pelo Instituto Brasil Te Ama.</p>
            <div className="annotation pending" style={{ marginTop: '6px' }}>Relatório em elaboração — publicação prevista após conclusão dos formulários internos de impacto</div>
          </div>
          <button className="relatorio-btn" style={{ opacity: 0.5 }}>Em breve</button>
        </div>
      </div>

      <div className="section">
        <div className="section-label">Bloco 9 — FAQ de transparência</div>
        <div className="faq-item">
          <div className="faq-q">Com que frequência os relatórios são publicados?</div>
          <div className="faq-a">O Instituto Brasil Te Ama publica atualizações de indicadores conforme o calendário institucional — com relatório consolidado anual e atualizações eventuais quando há ação ou resultado relevante a comunicar.</div>
        </div>
        <div className="faq-item">
          <div className="faq-q">Onde posso ver os valores arrecadados pelo programa?</div>
          <div className="faq-a">Os relatórios contêm dados agregados sobre os apoios gerados e direcionados, sem individualização por empresa ou ONG — respeitando a confidencialidade dos parceiros. Empresas parceiras têm acesso ao histórico da própria parceria diretamente com o Instituto.</div>
        </div>
        <div className="faq-item">
          <div className="faq-q">Como sei que as ONGs apoiadas são legítimas?</div>
          <div className="faq-a">Cada ONG passa por análise documental e institucional antes de ser incluída no programa. Os critérios de seleção são públicos e estão disponíveis nesta página. ONGs com parceria formalizada e ativa são publicadas na lista de ONGs apoiadas.</div>
        </div>
        <div className="faq-item">
          <div className="faq-q">Como posso denunciar irregularidades?</div>
          <div className="faq-a">O Instituto disponibiliza canal de contato direto para denúncias e dúvidas sobre a aplicação dos recursos. Entre em contato pelo e-mail atendimento@institutobrasilteama.org — todas as comunicações são analisadas pela direção do Instituto.</div>
        </div>
        <div className="faq-item">
          <div className="faq-q">O programa tem certificação ou auditoria independente?</div>
          <div className="faq-a">O Selo Brasil Te Ama é um reconhecimento institucional de parceria — não constitui certificação técnica nem auditoria independente. O acompanhamento é realizado pelo próprio Instituto com base nos critérios e mecanismos definidos nos documentos oficiais do programa.</div>
        </div>
        <div className="nota-juridica" style={{ marginTop: '1rem' }}>
          As informações disponibilizadas neste site têm finalidade exclusivamente institucional e informativa. O Selo Brasil Te Ama é um reconhecimento de parceria institucional e não constitui certificação técnica, auditoria independente ou garantia de benefício legal específico. Questões relativas a enquadramento fiscal, tributário ou jurídico devem ser avaliadas individualmente por profissional competente. O Instituto Brasil Te Ama não se responsabiliza por interpretações que extrapolem o conteúdo explicitamente descrito em seus documentos oficiais.
        </div>
      </div>

      <div className="section" style={{ borderBottom: 'none' }}>
        <div className="section-label">Bloco 10 — CTA Para ONGs</div>
        <div className="cta-ongs">
          <div>
            <h3>Sua ONG pode receber apoio da rede</h3>
            <p>ONGs institucionais com atuação comprovada podem se cadastrar para receber recursos gerados pelo Selo Brasil Te Ama — com critérios claros e respeito à sua autonomia.</p>
          </div>
          <button className="cta-ongs-btn">Cadastrar minha ONG →</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
