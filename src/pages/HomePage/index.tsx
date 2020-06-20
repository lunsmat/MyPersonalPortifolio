import React from 'react';

import { Container } from './styles';
import IntroductionSection from '../../components/IntroductionSection';
import AboutSection from '../../components/AboutSection';

const HomePage: React.FC = () => {
  return (
      <Container>
          <IntroductionSection />
          <AboutSection />
      </Container>
  );
}

export default HomePage;
