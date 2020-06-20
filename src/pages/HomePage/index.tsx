import React from 'react';

import { Container } from './styles';
import IntroductionSection from '../../components/IntroductionSection';
import AboutSection from '../../components/AboutSection';
import ServicesSection from '../../components/ServicesSection';

const HomePage: React.FC = () => {
  return (
      <Container>
          <IntroductionSection />
          <AboutSection />
          <ServicesSection />
      </Container>
  );
}

export default HomePage;
