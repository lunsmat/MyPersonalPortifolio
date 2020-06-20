import React, { useState } from 'react';

import { Container, ContainerSection } from './styles';
import { SectionHeader } from '../SectionComponents';
import { FaDesktop, FaLaptopCode, FaMobileAlt, FaDatabase, FaComment } from 'react-icons/fa';
import { BsFillGearFill } from 'react-icons/bs';
import ListStyle from '../../styles/assets/images/ListStyleBlue.png';

const ResumeSection: React.FC = () => {
    const [skill, setSkill] = useState('backend');

    return (
        <ContainerSection>
            <Container listStyle={ListStyle} id="skills">
                <SectionHeader>
                    <h3>Programing Skills</h3>
                    <p>My Skills In Programming</p>
                    <div className="separator">
                        <div /><span /><div />
                    </div>
                </SectionHeader>
                <div className="body">
                    <div className="historyNavigation">
                        <div />
                        <div>
                            <span onClick={() => setSkill('backend')} className={skill === 'backend' ? 'active' : ''}><BsFillGearFill /> Backend Skill</span>
                            <span onClick={() => setSkill('database')} className={skill === 'database' ? 'active' : ''}><FaDatabase/> Database Skill</span>
                            <span onClick={() => setSkill('frontend')} className={skill === 'frontend' ? 'active' : ''}><FaLaptopCode /> Frontend Skill</span>
                            <span onClick={() => setSkill('mobile')} className={skill === 'mobile' ? 'active' : ''}><FaMobileAlt /> Mobile Skill</span>
                            <span onClick={() => setSkill('desktop')} className={skill === 'desktop' ? 'active' : ''}><FaDesktop size={20} /> Desktop Skill</span>
                            <span onClick={() => setSkill('principles')} className={skill === 'principles' ? 'active' : ''}><FaComment size={20} /> Programming Principles</span>
                        </div>
                    </div>
                    <div className="history">
                        <ul className={skill === 'backend' ? 'active' : ''}>
                            <li>
                                <h5>Lorem Ispum</h5>
                                <strong>Lorem Ipsum Sir Adomet</strong>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum quae, quaerat sequi ad reprehenderit laboriosam totam amet temporibus pariatur veniam expedita dolore accusamus incidunt aut. Molestias quam expedita excepturi itaque.</p>
                            </li>


                            <li>
                                <h5>Lorem Ispum</h5>
                                <strong>Lorem Ipsum Sir Adomet</strong>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum quae, quaerat sequi ad reprehenderit laboriosam totam amet temporibus pariatur veniam expedita dolore accusamus incidunt aut. Molestias quam expedita excepturi itaque.</p>
                            </li>
                        </ul>

                        <ul className={skill === 'database' ? 'active' : ''}>
                            <li>
                                <h5>Lorem Ispum</h5>
                                <strong>Lorem Ipsum Sir Adomet</strong>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum quae, quaerat sequi ad reprehenderit laboriosam totam amet temporibus pariatur veniam expedita dolore accusamus incidunt aut. Molestias quam expedita excepturi itaque.</p>
                            </li>


                            <li>
                                <h5>Lorem Ispum</h5>
                                <strong>Lorem Ipsum Sir Adomet</strong>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum quae, quaerat sequi ad reprehenderit laboriosam totam amet temporibus pariatur veniam expedita dolore accusamus incidunt aut. Molestias quam expedita excepturi itaque.</p>
                            </li>
                        </ul>

                        <ul className={skill === 'frontend' ? 'active' : ''}>
                            <li>
                                <h5>Lorem Ispum</h5>
                                <strong>Lorem Ipsum Sir Adomet</strong>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum quae, quaerat sequi ad reprehenderit laboriosam totam amet temporibus pariatur veniam expedita dolore accusamus incidunt aut. Molestias quam expedita excepturi itaque.</p>
                            </li>


                            <li>
                                <h5>Lorem Ispum</h5>
                                <strong>Lorem Ipsum Sir Adomet</strong>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                            </li>
                        </ul>

                        <ul className={skill === 'mobile' ? 'active' : ''}>
                            <li>
                                <h5>Lorem Ispum</h5>
                                <strong>Lorem Ipsum Sir Adomet</strong>
                                <p>Voluptatum quae, quaerat sequi ad reprehenderit laboriosam totam amet temporibus pariatur veniam expedita dolore accusamus incidunt aut. Molestias quam expedita excepturi itaque.</p>
                            </li>


                            <li>
                                <h5>Lorem Ispum</h5>
                                <strong>Lorem Ipsum Sir Adomet</strong>
                                <p>Voluptatum quae, quaerat sequi ad reprehenderit laboriosam totam amet temporibus pariatur veniam expedita dolore accusamus incidunt aut. Molestias quam expedita excepturi itaque.</p>
                            </li>
                        </ul>

                        <ul className={skill === 'desktop' ? 'active' : ''}>
                            <li>
                                <h5>Lorem Ispum</h5>
                                <strong>Lorem Ipsum Sir Adomet</strong>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                            </li>


                            <li>
                                <h5>Lorem Ispum</h5>
                                <strong>Lorem Ipsum Sir Adomet</strong>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                            </li>
                        </ul>

                        <ul className={skill === 'principles' ? 'active' : ''}>
                            <li>
                                <h5>Lorem Ispum</h5>
                                <strong>Lorem Ipsum Sir Adomet</strong>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum quae, quaerat sequi ad reprehenderit laboriosam totam amet temporibus pariatur veniam expedita dolore accusamus incidunt aut.</p>
                            </li>


                            <li>
                                <h5>Lorem Ispum</h5>
                                <strong>Lorem Ipsum Sir Adomet</strong>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum quae, quaerat sequi ad reprehenderit laboriosam totam amet temporibus pariatur veniam expedita dolore accusamus incidunt aut.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </ContainerSection>
    );
}

export default ResumeSection;
