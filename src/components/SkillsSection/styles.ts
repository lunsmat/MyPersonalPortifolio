import styled from 'styled-components';
import { Section } from "../SectionComponents";

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

interface Props {
    listStyle: string;
}

export const Container = styled(Section)<Props>`
    rotate: 7deg;

    .body {
        display: flex;
        flex-wrap: wrap;

        .historyNavigation {
            background: #161D26;
            width: 340px;
            min-height: 320px;
            position: relative;
            padding-bottom:25px;
            margin: 10px;

            div:nth-child(1) {
                background: #0ABEAD;
                width: 42px;
                height: 100%;
                position: absolute;
                z-index: 0;
                left: 0;
                top: 0;
            }

            div:nth-child(2) {
                z-index: 1;

                * {
                    position: relative;
                    z-index: 1;
                }

                span {
                    display: flex;
                    align-items: center;
                    padding: 4px 7px;
                    margin: 25px 30px 0 5px;
                    color: #FFF;
                    height: 40px;
                    border-radius: 20px;
                    font-size: 14px;
                    font-weight: 600;
                    transition: all ease .5s;

                    &.active {
                        background: #0ABEAD;
                    }

                    svg {
                        color: #FFF;
                        margin-right: 10px;
                        overflow: visible;
                        padding: 10px;
                        height: 40px;
                        width: 40px;
                        background: #0ABEAD;
                        border-radius: 50%;
                    }
                }
            }
        }

        .history {
            margin: 10px;
            min-width: 340px;
            flex: 1px;
            border-left: 2px solid #0ABEAD;
            margin-left: 20px;

            ul {
                display: none;
                flex-direction: column;
                margin: 30px 16px;
                list-style-image: url(${props => props.listStyle});

                &.active {
                    display: flex;
                }

                li {
                    flex-direction: column;
                    padding: 0 15px;
                    margin-bottom: 25px;

                    h5 {
                        margin-bottom: 3px;
                        font-size: 20px;
                        color: #F57F17;
                        text-transform: uppercase;
                    }

                    strong {
                        font-size: 16px;
                        font-weight: 600;
                        margin-bottom: 7px;
                    }

                    p {
                        margin-top: 5px;
                    }
                }
            }
        }
    }
`;
