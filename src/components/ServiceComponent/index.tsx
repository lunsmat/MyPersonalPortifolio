import React from 'react';

import { Container } from './styles';
import { PropsService } from '../ServicesSection/ServicesInfos';

interface Props {
    service: PropsService;
    key: number
}

interface PropsShapes {
    color: string;
}

const Shapes: React.FC<PropsShapes> = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="369.919" height="223.59" viewBox="0 0 369.919 223.59">
        <path id="Shape" style={{fill: props.color}} className="cls-1" d="M449,2700.557s15.007-66.794,51.8-54.34,43.02,57.737,121.7,13.585,95.662-58.3,124.531-23.774,71.888-34.53,71.888-34.53v223.59H449Z" transform="translate(-449 -2601.498)"/>
        </svg>
    );
}

const ServiceComponent: React.FC<Props> = ({ service }) => {
  return (
      <Container background={service.topColor}>
          <img src={service.image} className="icon" alt="" />
          <h4>{service.title}</h4>
          <p>{service.body}</p>
          <Shapes color={service.downColor} />
      </Container>
  );
}

export default ServiceComponent;
