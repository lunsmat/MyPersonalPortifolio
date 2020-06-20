import React, { useState } from 'react';

import { Container } from './styles';
import { SectionHeader } from '../SectionComponents';

import ProjectAll1 from '../../styles/assets/images/ProjectAll1.png'
import ProjectAll2 from '../../styles/assets/images/ProjectAll2.png'
import ProjectAll3 from '../../styles/assets/images/ProjectAll3.png'

const PortifolioSection: React.FC = () => {
    const [selected, setSelected] = useState('all');

    return (
        <Container id="portifolio">
            <SectionHeader>
                <h3>Portifolio</h3>
                <p>Check My Lastest Works</p>
                <div className="separator">
                    <div /><span /><div />
                </div>
            </SectionHeader>

            <div className="body">
                <div className="nav">
                    <ul>
                        <li className={selected === 'all' ? 'active' : ''}onClick={() => setSelected('all')}>All Work</li>

                        <li className={selected === 'backend' ? 'active' : ''}onClick={() => setSelected('backend')}>Backend</li>

                        <li className={selected === 'frontend' ? 'active' : ''}onClick={() => setSelected('frontend')}>Frontend</li>

                        <li className={selected === 'mobile' ? 'active' : ''}onClick={() => setSelected('mobile')}>Mobile</li>

                        <li className={selected === 'desktop' ? 'active' : ''}onClick={() => setSelected('desktop')}>Desktop</li>
                    </ul>
                </div>
                <div className="works">
                    <ul className={selected === 'all' ? 'active' : ''}onClick={() => setSelected('all')}>
                        <li style={{ backgroundImage: `url(${ProjectAll1})`}}>
                            <div>
                                <h5>Lorem Ipsum</h5>
                                <small>Lorem Ipsum Sir Adomet</small>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore reprehenderit saepe ullam eveniet dolore error odit, ratione fugit architecto quibusdam ipsa similique laboriosam, quam aspernatur neque! Esse atque possimus optio.</p>
                                <a href="https://github.com/Luan-Farias">See In Github</a>
                            </div>
                        </li>

                        <li style={{ backgroundImage: `url(${ProjectAll2})`}}>
                            <div>
                                <h5>Lorem Ipsum</h5>
                                <small>Lorem Ipsum Sir Adomet</small>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore reprehenderit saepe ullam eveniet dolore error odit, ratione fugit architecto quibusdam ipsa similique laboriosam, quam aspernatur neque! Esse atque possimus optio.</p>
                                <a href="https://github.com/Luan-Farias">See In Github</a>
                            </div>
                        </li>

                        <li style={{ backgroundImage: `url(${ProjectAll3})`}}>
                            <div>
                                <h5>Lorem Ipsum</h5>
                                <small>Lorem Ipsum Sir Adomet</small>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore reprehenderit saepe ullam eveniet dolore error odit, ratione fugit architecto quibusdam ipsa similique laboriosam, quam aspernatur neque! Esse atque possimus optio.</p>
                                <a href="https://github.com/Luan-Farias">See In Github</a>
                            </div>
                        </li>
                    </ul>

                    <ul className={selected === 'backend' ? 'active' : ''}onClick={() => setSelected('backend')}>
                        <li style={{ backgroundImage: `url(${ProjectAll2})`}}>
                            <div>
                                <h5>Lorem Ipsum</h5>
                                <small>Lorem Ipsum Sir Adomet</small>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore reprehenderit saepe ullam eveniet dolore error odit, ratione fugit architecto quibusdam ipsa similique laboriosam, quam aspernatur neque! Esse atque possimus optio.</p>
                                <a href="https://github.com/Luan-Farias">See In Github</a>
                            </div>
                        </li>

                        <li style={{ backgroundImage: `url(${ProjectAll1})`}}>
                            <div>
                                <h5>Lorem Ipsum</h5>
                                <small>Lorem Ipsum Sir Adomet</small>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore reprehenderit saepe ullam eveniet dolore error odit, ratione fugit architecto quibusdam ipsa similique laboriosam, quam aspernatur neque! Esse atque possimus optio.</p>
                                <a href="https://github.com/Luan-Farias">See In Github</a>
                            </div>
                        </li>

                        <li style={{ backgroundImage: `url(${ProjectAll3})`}}>
                            <div>
                                <h5>Lorem Ipsum</h5>
                                <small>Lorem Ipsum Sir Adomet</small>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore reprehenderit saepe ullam eveniet dolore error odit, ratione fugit architecto quibusdam ipsa similique laboriosam, quam aspernatur neque! Esse atque possimus optio.</p>
                                <a href="https://github.com/Luan-Farias">See In Github</a>
                            </div>
                        </li>
                    </ul>

                    <ul className={selected === 'frontend' ? 'active' : ''}onClick={() => setSelected('frontend')}>
                        <li style={{ backgroundImage: `url(${ProjectAll3})`}}>
                            <div>
                                <h5>Lorem Ipsum</h5>
                                <small>Lorem Ipsum Sir Adomet</small>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore reprehenderit saepe ullam eveniet dolore error odit, ratione fugit architecto quibusdam ipsa similique laboriosam, quam aspernatur neque! Esse atque possimus optio.</p>
                                <a href="https://github.com/Luan-Farias">See In Github</a>
                            </div>
                        </li>

                        <li style={{ backgroundImage: `url(${ProjectAll2})`}}>
                            <div>
                                <h5>Lorem Ipsum</h5>
                                <small>Lorem Ipsum Sir Adomet</small>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore reprehenderit saepe ullam eveniet dolore error odit, ratione fugit architecto quibusdam ipsa similique laboriosam, quam aspernatur neque! Esse atque possimus optio.</p>
                                <a href="https://github.com/Luan-Farias">See In Github</a>
                            </div>
                        </li>

                        <li style={{ backgroundImage: `url(${ProjectAll1})`}}>
                            <div>
                                <h5>Lorem Ipsum</h5>
                                <small>Lorem Ipsum Sir Adomet</small>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore reprehenderit saepe ullam eveniet dolore error odit, ratione fugit architecto quibusdam ipsa similique laboriosam, quam aspernatur neque! Esse atque possimus optio.</p>
                                <a href="https://github.com/Luan-Farias">See In Github</a>
                            </div>
                        </li>
                    </ul>
                    <ul className={selected === 'mobile' ? 'active' : ''}onClick={() => setSelected('mobile')}>
                        <li style={{ backgroundImage: `url(${ProjectAll1})`}}>
                            <div>
                                <h5>Lorem Ipsum</h5>
                                <small>Lorem Ipsum Sir Adomet</small>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore reprehenderit saepe ullam eveniet dolore error odit, ratione fugit architecto quibusdam ipsa similique laboriosam, quam aspernatur neque! Esse atque possimus optio.</p>
                                <a href="https://github.com/Luan-Farias">See In Github</a>
                            </div>
                        </li>

                        <li style={{ backgroundImage: `url(${ProjectAll3})`}}>
                            <div>
                                <h5>Lorem Ipsum</h5>
                                <small>Lorem Ipsum Sir Adomet</small>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore reprehenderit saepe ullam eveniet dolore error odit, ratione fugit architecto quibusdam ipsa similique laboriosam, quam aspernatur neque! Esse atque possimus optio.</p>
                                <a href="https://github.com/Luan-Farias">See In Github</a>
                            </div>
                        </li>

                        <li style={{ backgroundImage: `url(${ProjectAll2})`}}>
                            <div>
                                <h5>Lorem Ipsum</h5>
                                <small>Lorem Ipsum Sir Adomet</small>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore reprehenderit saepe ullam eveniet dolore error odit, ratione fugit architecto quibusdam ipsa similique laboriosam, quam aspernatur neque! Esse atque possimus optio.</p>
                                <a href="https://github.com/Luan-Farias">See In Github</a>
                            </div>
                        </li>
                    </ul>

                    <ul className={selected === 'desktop' ? 'active' : ''}onClick={() => setSelected('desktop')}>
                        <li style={{ backgroundImage: `url(${ProjectAll2})`}}>
                            <div>
                                <h5>Lorem Ipsum</h5>
                                <small>Lorem Ipsum Sir Adomet</small>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore reprehenderit saepe ullam eveniet dolore error odit, ratione fugit architecto quibusdam ipsa similique laboriosam, quam aspernatur neque! Esse atque possimus optio.</p>
                                <a href="https://github.com/Luan-Farias">See In Github</a>
                            </div>
                        </li>

                        <li style={{ backgroundImage: `url(${ProjectAll3})`}}>
                            <div>
                                <h5>Lorem Ipsum</h5>
                                <small>Lorem Ipsum Sir Adomet</small>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore reprehenderit saepe ullam eveniet dolore error odit, ratione fugit architecto quibusdam ipsa similique laboriosam, quam aspernatur neque! Esse atque possimus optio.</p>
                                <a href="https://github.com/Luan-Farias">See In Github</a>
                            </div>
                        </li>

                        <li style={{ backgroundImage: `url(${ProjectAll1})`}}>
                            <div>
                                <h5>Lorem Ipsum</h5>
                                <small>Lorem Ipsum Sir Adomet</small>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore reprehenderit saepe ullam eveniet dolore error odit, ratione fugit architecto quibusdam ipsa similique laboriosam, quam aspernatur neque! Esse atque possimus optio.</p>
                                <a href="https://github.com/Luan-Farias">See In Github</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </Container>
    );
}

export default PortifolioSection;
