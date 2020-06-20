import styled from 'styled-components';

import { Section } from '../SectionComponents';

interface Props {
    listStyle: string;
}

export const ContainerSection = styled.div`
    background: #1F2935;
    rotate: -7deg;
    width: 200vw;
    margin: 75px 0;
    margin-left: -50vw;
    padding: 50px 50vw;
    display: flex;
    align-items: center;

    section {
        max-width: 1040px;
    }
`;

export const Container = styled(Section)<Props>`
    rotate: 7deg;

    .body {
        display: flex;
        flex-wrap: wrap;

        div.price {
            background: #161D26;
            flex: 1;
            margin: 10px;
            min-width: 320px;
            display:flex;
            flex-direction: column;
            align-items: center;
            padding-bottom: 40px;

            &:nth-child(1) {
                .header {
                    background: #FF6331;
                }

                a {
                    background: #FF6331;
                    box-shadow: 0 10px 15px #FF6331AA;
                }

            }
            &:nth-child(2) {
                .header {
                    background: #803AFB;
                }

                a {
                    background: #803AFB;
                    box-shadow: 0 10px 15px #803AFBAA;
                }
            }
            &:nth-child(3) {
                .header {
                    background: #F5276C;
                }

                a {
                    background: #F5276C;
                    box-shadow: 0 10px 15px #F5276CAA;
                }
            }

            .header {
                display: flex;
                flex-direction: column;
                align-items: center;
                margin: 0;
                padding: 20px 0;
                width: 100%;
                color: #FFF;

                h4 {
                    font-size: 28px;
                    font-weight: 600;
                }

                span {
                    font-size: 20px;
                    margin-bottom: 10px;
                }

            }
            .list {
                padding: 40px 0;
                list-style-image: url(${props => props.listStyle});

                li {
                    padding: 10px 0;
                }
            }

            a {
                color: #FFF;
                padding: 10px 20px;
                border-radius: 20px;
                text-decoration: none;
            }
        }
    }
`;
