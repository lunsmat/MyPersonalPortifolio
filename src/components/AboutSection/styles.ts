import styled from 'styled-components';

import { Section } from "../SectionComponents";

interface Props {
    listStyle: string;
}

export const Container = styled(Section)<Props>`
    .sectionBody {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        margin: 10px;
        background-color: #1F2935;

        div {
            flex: 1;
            min-width: 340px;
            height: 100%;

            &.photo {
                display: flex;
                align-items: center;
                justify-content: center;
                overflow: hidden;
                padding: 10px;

                img {
                    width: 100%;
                    border-radius: 10px;
                }
            }

            &:nth-child(2) {
                padding: 20px;

                h4 {
                    padding-bottom: 15px;
                    font-size: 20px;
                }

                p {
                    font-size: 14px;
                    padding-right: 10px;
                }

                h5 {
                    font-size: 18px;
                    padding: 15px 0;
                }

                ul {
                    padding: 0 10px;
                    list-style-image: url(${props => props.listStyle});

                    li {
                        margin-bottom: 10px;
                    }
                }

                .buttons {
                    margin-top: 25px;
                    margin-right:10px;
                    display: flex;

                    a {
                        width: 140px;
                        height: 40px;
                        line-height: 40px;
                        border-radius: 20px;
                        text-align: center;
                        margin: 12px;
                        color: #FFF;
                        text-decoration: none;
                        font-weight: 600;

                        &:nth-child(1) {
                            margin-left: 0;
                            background: #0ABEAD;
                        }
                        &:nth-child(2) {
                            margin-right: 0;
                            background: #F57F17;
                        }
                    }
                }
            }
        }
    }
`;
