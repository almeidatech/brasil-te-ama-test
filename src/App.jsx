import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Sobre from './pages/Sobre.jsx';
import Lideranca from './pages/Lideranca.jsx';
import Selo from './pages/Selo.jsx';
import Projetos from './pages/Projetos.jsx';
import Noticias from './pages/Noticias.jsx';
import Transparencia from './pages/Transparencia.jsx';
import ParaOngs from './pages/ParaOngs.jsx';
import Contato from './pages/Contato.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/lideranca" element={<Lideranca />} />
      <Route path="/selo" element={<Selo />} />
      <Route path="/projetos" element={<Projetos />} />
      <Route path="/noticias" element={<Noticias />} />
      <Route path="/transparencia" element={<Transparencia />} />
      <Route path="/para-ongs" element={<ParaOngs />} />
      <Route path="/contato" element={<Contato />} />
    </Routes>
  );
}
