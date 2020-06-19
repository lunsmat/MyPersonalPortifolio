import React from 'react';

import { Container } from './styles';
import IntroductionSection from '../../components/IntroductionSection';

const HomePage: React.FC = () => {
  return (
      <Container>
          <IntroductionSection />
      </Container>
  );
}

export default HomePage;
