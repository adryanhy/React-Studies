
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './contato.css'; 

const Contato = () => {
    return (
        <div className="contato-container">
            <div className="contato-foto">
                <img src="./src/assets/ft-minha.png" alt="" />
            </div>
            <div className="contato-info">
                <h1>Sobre Mim</h1>
                <p>
                    Olá! Eu sou Adryan, um desenvolvedor inspirado a criar aplicações web modernas e eficientes. 
                    Tenho experiência em React, NodeJS, MongoDB e outras tecnologias web.
                </p>
                <div className="contato-links">
                    <a href="https://www.linkedin.com/in/adryan-andre-a2677a225/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                    <a href="https://github.com/adryanhy" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contato;
