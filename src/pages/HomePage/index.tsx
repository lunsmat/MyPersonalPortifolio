import React from 'react';

import { Container } from './styles';
import IntroductionSection from '../../components/IntroductionSection';
import AboutSection from '../../components/AboutSection';
import ServicesSection from '../../components/ServicesSection';
import SkillsSection from '../../components/SkillsSection';

const HomePage: React.FC = () => {
  return (
      <Container>
          <IntroductionSection />
          <AboutSection />
          <ServicesSection />
          <SkillsSection />
      </Container>
  );
}

export default HomePage;
