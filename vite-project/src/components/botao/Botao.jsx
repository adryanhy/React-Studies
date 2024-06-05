import React from 'react';
import { Link } from 'react-router-dom';
import './Botao.css'

const Botao = () => (
    <Link to="/bosses">
        <button className="boss-button">Ver mais</button>
    </Link>
);

export default Botao