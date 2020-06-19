import React from 'react';

import { Container } from './styles';
import Photo from '../../styles/assets/images/MyPhoto.png';
import Shape from '../../styles/assets/images/Shape.png';

const MainSection: React.FC = () => {
  return (
      <Container id="home" background={Shape}>
          <div className="containers" id="initialApresentation">
              <div className="container">
                    <h2>Hello, I'm <span>Luan Farias</span></h2>
                    <h2>FullStack Developer</h2>
                    <span className="technologies">Backend/ Frontend/ Mobile/ Desktop</span>
                    <div className="buttons">
                        <a href="mailto:luan.farias_bvs@outlook.com">Hire Me</a>
                        <a href="htpps://" download>Get Resume</a>
                    </div>
              </div>
          </div>
          <div id="apresentationPhoto" className="containers">
              <div className="container">
                <img src={Photo} alt="" title="My Personal Photo" />
              </div>
          </div>
      </Container>
  );
}

export default MainSection;
