import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header.tsx';
import CardGrid from './components/card-grid/CardGrid.tsx';
import Contato from './components/pages/contato.tsx';
import ImageGrid from './components/image-grid/ImageGrid.tsx';

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
  {/* <ImageGrid items={items} /> */}
</div>;
const Animes = () => <div>Lista de animes</div>;

export default App;

