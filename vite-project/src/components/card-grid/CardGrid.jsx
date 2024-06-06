import React from 'react';
import './CardGrid.css'; 
import { Link } from 'react-router-dom';
import Botao from '../botao/Botao';

const CardGrid = () => {
    const cards = [
        { id: 1, image: './src/assets/abyss-watcher.png', alt: 'Imagem 1' },
        { id: 2, image: './src/assets/blade-of-death.png', alt: 'Imagem 2' },
        { id: 3, image: './src/assets/malenia.png', alt: 'Imagem 3' },
        { id: 4, image: './src/assets/soul-of-cinder.png', alt: 'Imagem 4' },
        
    ];

    return (
        <div className="card-grid">
            {cards.map(card => (
                <div key={card.id} className="card">
                    <img src={card.image} alt={card.alt} />
                </div>
            ))}
            
        </div>
    );
    
};
    <Botao>
    <Link to="/bosses">
        <button className="boss-button">Go to Bosses</button>
    </Link>
    </Botao>

export default CardGrid;