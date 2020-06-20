import React from 'react';

import { Container } from './styles';
import { SectionHeader } from '../SectionComponents';
import Photo from '../../styles/assets/images/Photo.png';
import ListStyle from '../../styles/assets/images/ListStyleOrange.png';

const AboutUsSection: React.FC = () => {
  return (
      <Container id="about" listStyle={ListStyle}>
          <SectionHeader>
              <h3>About</h3>
              <p>What We Provide To You?</p>
              <div className="separator">
                  <div /><span /><div />
              </div>
          </SectionHeader>
          <div className="sectionBody">
            <div className="photo">
                <img src={Photo} alt=""/>
            </div>
            <div>
                <h4>Why Choose Me?</h4>
                <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>

                <h5>Here Is Few Features: </h5>
                <ul>
                    <li>Application Programming Interface Maden With Node.Js Or Laravel(PHP)</li>
                    <li>Websites Maden With Javascript's Frameworks And Libraries (Bootstap, ReactJs, VueJs)</li>
                    <li>Mobile Apps Maden With The React Native(JS) Or Flutter(Dart)</li>
                    <li>Desktop Apps Maden With .Net Framework(C#) Or Electron(JS)</li>
                    <li>Suport In Deploy Of The Apps</li>
                </ul>

                <div className="buttons">
                    <a href="mailto:luan.farias_bvs@outlook.com">Hire Me</a>
                    <a href="https://">Get Resume</a>
                </div>
            </div>
          </div>
      </Container>
  );
}

export default AboutUsSection;
