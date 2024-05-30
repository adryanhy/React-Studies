import React from 'react';
import './ImageGrid.css';

const ImageGrid = ({ items }) => {
  return (
    <div className="grid-container">
      {items.map((item, index) => (
        <div key={index} className="grid-item">
          <img src={item.image} alt={item.text} className="grid-image" />
          <p className="grid-text">{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
