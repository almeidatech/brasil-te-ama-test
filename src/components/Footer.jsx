import { Link } from 'react-router-dom';
import './Footer.css';

const linkStyle = { textDecoration: 'none' };

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-grid">
        <div>
          <div className="site-footer-brand-name">Instituto Brasil Te Ama</div>
          <div className="site-footer-brand-cnpj">CNPJ: 49.458.362/0001-10 · Brasília, DF</div>
          <div className="site-footer-brand-note">O Instituto Brasil Te Ama é uma organização humanitária sem fins lucrativos. Para informações sobre enquadramentos legais da parceria, entre em contato com nossa equipe.</div>
          <div className="site-footer-contact">
            atendimento@institutobrasilteama.org<br/>
            (61) 3321-2535 · (61) 98498-1100
          </div>
        </div>
        <div>
          <div className="site-footer-col-title">Institucional</div>
          <Link to="/" className="site-footer-link" style={linkStyle}>Home</Link>
          <Link to="/sobre" className="site-footer-link" style={linkStyle}>Sobre</Link>
          <Link to="/lideranca" className="site-footer-link" style={linkStyle}>Liderança</Link>
          <Link to="/transparencia" className="site-footer-link" style={linkStyle}>Transparência</Link>
          <Link to="/para-ongs" className="site-footer-link" style={linkStyle}>Para ONGs</Link>
        </div>
        <div>
          <div className="site-footer-col-title">Programa</div>
          <Link to="/selo" className="site-footer-link" style={linkStyle}>Selo Brasil Te Ama</Link>
          <Link to="/projetos" className="site-footer-link" style={linkStyle}>Projetos</Link>
          <Link to="/noticias" className="site-footer-link" style={linkStyle}>Notícias</Link>
          <Link to="/contato" className="site-footer-link" style={linkStyle}>Contato</Link>
        </div>
      </div>
      <div className="site-footer-bottom">
        <div className="site-footer-copy">© 2022–2026 Instituto Brasil Te Ama · Todos os direitos reservados</div>
        <div className="site-footer-contact">
          <span style={{ color: 'rgba(255,255,255,0.3)', marginRight: '8px' }}>Redes sociais:</span>
          <span className="annotation pending" style={{ fontSize: '9px' }}>confirmar handles</span>
        </div>
      </div>
    </footer>
  );
}
