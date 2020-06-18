import React from 'react';
import { FaGithub, FaLinkedinIn, FaRebel, FaWhatsapp } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

import { Container } from './styles';

const Footer: React.FC = () => {
    return (
        <Container>
            <div>
                <div>
                    <span>© All rights reserved.</span>
                </div>
                <div id="socialMedias">
                    <a className="inverted" href="https://www.github.com/Luan-Farias" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                    <span onClick={() => alert("Yes, I'm part of Rebel Alliance")}><FaRebel /></span>
                    <a href="https://www.github.com/Luan-Farias" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                    <a href="https://wa.me/5591992812696?text=Hello, I want to speak with you about a job" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
                    <a href="mailto:luan.farias_bvs@outlook.com" target="_blank" rel="noopener noreferrer"><FiMail /></a>

                </div>
            </div>
        </Container>
    );
}

export default Footer;
