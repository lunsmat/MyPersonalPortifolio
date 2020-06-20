import React from 'react';

import { ContainerSection, Container } from './styles';
import { SectionHeader } from '../SectionComponents';
import ListStyle from '../../styles/assets/images/ListStyleChecked.png'

const PricingSection: React.FC = () => {
    return (
        <ContainerSection id="pricing">
            <Container listStyle={ListStyle}>
                <SectionHeader>
                    <h3>Pricing</h3>
                    <p>Check My Services Package</p>

                    <div className="separator">
                        <div /><span /><div />
                    </div>
                </SectionHeader>

                <div className="body">
                    <div className="price">
                        <div className="header">
                            <h4>Basic</h4>
                            <span>$70</span>
                            <p>Only PSD Design</p>
                        </div>

                        <div className="list">
                            <ul>
                                <li>Graphic Design</li>
                                <li>Web Design</li>
                                <li>UI/UX Design</li>
                                <li>HTML5/CSS3</li>
                                <li>SEO Optimize</li>
                                <li>Business Develop</li>
                            </ul>
                        </div>

                        <a href="https://github.com/Luan-Farias">Choose Plan</a>
                    </div>
                    <div className="price">
                        <div className="header">
                            <h4>Standart</h4>
                            <span>$100</span>
                            <p>Only PSD Design</p>
                        </div>

                        <div className="list">
                            <ul>
                                <li>Graphic Design</li>
                                <li>Web Design</li>
                                <li>UI/UX Design</li>
                                <li>HTML5/CSS3</li>
                                <li>SEO Optimize</li>
                                <li>Business Develop</li>
                            </ul>
                        </div>

                        <a href="https://github.com/Luan-Farias">Choose Plan</a>
                    </div>
                    <div className="price">
                        <div className="header">
                            <h4>Premium</h4>
                            <span>$150</span>
                            <p>Only PSD Design</p>
                        </div>

                        <div className="list">
                            <ul>
                                <li>Graphic Design</li>
                                <li>Web Design</li>
                                <li>UI/UX Design</li>
                                <li>HTML5/CSS3</li>
                                <li>SEO Optimize</li>
                                <li>Business Develop</li>
                            </ul>
                        </div>

                        <a href="https://github.com/Luan-Farias">Choose Plan</a>
                    </div>
                </div>
            </Container>
        </ContainerSection>
    );
}

export default PricingSection;
