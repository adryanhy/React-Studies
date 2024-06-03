import React from 'react';
import PropTypes from 'prop-types';
import './CardAnime.css';

const CardAnime = ({ imageSrc, text }) => {
  return (
    <div className="image-with-text-container">
      <img src={imageSrc} alt={text} className="image" />
      <p className="text">{text}</p>
    </div>
  );
};

CardAnime.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default CardAnime;