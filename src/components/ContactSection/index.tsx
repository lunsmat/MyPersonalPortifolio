import React from 'react';

import { Container } from './styles';
import { SectionHeader } from '../SectionComponents';
import Background from '../../styles/assets/images/bg.jpg';

const ContactSection: React.FC = () => {
    return (
        <Container background={Background} id="contact">
            <SectionHeader>
                <h3>Contact</h3>
                <p>Let's Keep In Touch</p>
                <div className="separator">
                    <div /><span /><div />
                </div>
            </SectionHeader>
            <div className="background">
                <div id="backgroundColor">
                    <div className="body">
                        <form>
                            <h4>Get In Touch</h4>
                            <input type="text" name="name" placeholder="Your Name" />
                            <input type="email" name="email" placeholder="Your Email Adress" />
                            <input type="text" name="subject" placeholder="Subject" />
                            <input type="text" name="subject" placeholder="Subject" />
                            <input type="text" name="subject" placeholder="Subject" />
                            <textarea name="message" placeholder="Enter Your Message"></textarea>
                            <button>Submmit</button>
                        </form>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default ContactSection;
