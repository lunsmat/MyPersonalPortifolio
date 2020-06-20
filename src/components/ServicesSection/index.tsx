import React from 'react';

import { Container } from './styles';
import { SectionHeader } from '../SectionComponents';
import getServices from './ServicesInfos';
import ServiceComponent from '../ServiceComponent';

const ServicesSection: React.FC = () => {
    const services = getServices();
  return (
    <Container>
        <SectionHeader>
            <h3>Services</h3>
            <p>What We Provide To You ?</p>
            <div className="separator">
                <div /><span /><div />
            </div>
        </SectionHeader>
        <div className="body">
            {services.map((service, key) => <ServiceComponent key={key} service={service} />)}
        </div>
    </Container>
  );
}

export default ServicesSection;
