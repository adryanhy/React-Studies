import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header.tsx';
import CardGrid from './components/card-grid/CardGrid.tsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/animes" element={<Animes />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}
const Home = () => <div>
  Bem-vindo à minha vitrine de melhores animes!
  <CardGrid></CardGrid>
</div>;
const Animes = () => <div>Lista de animes</div>;
const Sobre = () => <div>Sobre nós</div>;
const Contato = () => <div>Contato</div>;

export default App;

