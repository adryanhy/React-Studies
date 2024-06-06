import React from 'react';
import PropTypes from 'prop-types';
import './CardAnime.css';

const CardAnime = ({ imageSrc, link }) => {
  return (
    <div className="card-anime">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={imageSrc} alt="Anime" />
      </a>
    </div>
  );
};

CardAnime.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default CardAnime;