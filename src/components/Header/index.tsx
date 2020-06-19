import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';

import { Container } from './styles';

const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Container menuOpen={menuOpen}>
            <div>
                <h1 title="Luan Farias">LF.</h1>
                <FiMenu
                    id="menuOpener"
                    color={menuOpen ? '#0ABEAD' : '#1F2935'}
                    onClick={() => setMenuOpen(!menuOpen)}
                />
                <nav>
                    <a className="active" onClick={() => setMenuOpen(false)} href="#home">Home</a>
                    <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
                    <a href="#resume" onClick={() => setMenuOpen(false)}>Resume</a>
                    <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
                    <a href="#portifolio" onClick={() => setMenuOpen(false)}>Portifolio</a>
                    <a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
                    <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
                </nav>
            </div>
        </Container>
    );
}

export default Header;
