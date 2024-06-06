import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header.tsx';
import Footer from './components/footer/Footer.jsx';
import CardGrid from './components/card-grid/CardGrid.jsx';
import Boss from './components/pages/bosses.jsx';
import Botao from './components/botao/Botao.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bosses" element={<Boss />} />
          </Routes>
        </div>
      </Router>
      <Footer>
      <div>
          <p>&copy; 2024 Meu Site. Todos os direitos reservados.</p>
        </div>
      </Footer>
    </>
  )
}
const Home = () => <div>
  <h2>Melhores bosses da serie souls (na nossa opinião)</h2>
  <CardGrid></CardGrid>
  <Botao></Botao>
</div>;

export default App;

