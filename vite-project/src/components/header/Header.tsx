import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <Link to="/" className="logo">
                    <img src="./src/assets/logo.png" alt="" />
                </Link>
                <nav className="nav">
                    <ul>
                        <li><Link to="/">Início</Link></li>
                        <li><Link to="/animes">Animes</Link></li>
                        <li><Link to="/sobre">Sobre</Link></li>
                        <li><Link to="/contato">Contato</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;