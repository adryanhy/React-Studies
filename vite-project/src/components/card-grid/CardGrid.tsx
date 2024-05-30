import React from 'react';
import './CardGrid.css'; 

const CardGrid = () => {
    const cards = [
        { id: 1, image: './src/assets/one-piece.png', alt: 'Imagem 1' },
        { id: 2, image: './src/assets/jjk.png', alt: 'Imagem 2' },
        { id: 3, image: './src/assets/demon-slayer.png', alt: 'Imagem 3' },
        { id: 4, image: './src/assets/shingeki.png', alt: 'Imagem 4' },
        
    ];
    const cards2 = [
        { id: 1, image: './src/assets/one-piece.png', alt: 'Imagem 1' },
        { id: 2, image: './src/assets/jjk.png', alt: 'Imagem 2' },
        { id: 3, image: './src/assets/demon-slayer.png', alt: 'Imagem 3' },
        { id: 4, image: './src/assets/shingeki.png', alt: 'Imagem 4' },
        
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

export default CardGrid;