import styled from 'styled-components';

import { Section } from "../SectionComponents";

export const Container = styled(Section)`
    .body {
        display: flex;
        flex-direction: column;

        .nav {
            ul {
                display:flex;
                list-style: none;
                margin: 0 20px;
                flex-wrap: wrap;
                align-items: center;
                justify-content: center;

                li {
                    text-align: center;
                    color: #FFF;
                    margin: 5px 15px;
                    padding: 5px 25px;
                    border-radius: 15px;
                    cursor: pointer;

                    &.active {
                        background: #0ABEAD;
                    }
                }
            }
        }

        .works {
            margin-top:20px;
            display: flex;
            align-items: center;
            justify-content: center;

            ul {
                display: none;
                flex-wrap: wrap;
                margin-top: 10px;
                list-style:none;

                &.active {
                    display: flex;
                }

                li {
                    display:flex;
                    min-height: 400px;
                    width: 340px;
                    background-size: cover;
                    margin: 10px;
                    box-shadow: 0 0 30px #0ABEAD77;

                    div {
                        width: 100%;
                        height: 100%;
                        background: #0009;
                        display: none;
                        flex-direction: column;
                        align-items: center;
                        padding: 30px;

                        h5 {
                            color: #FF6331;
                            font-size: 20px;
                            margin: 15px 0;
                        }

                        small {
                            font-size:12px;
                            color:#FFC50C;
                        }

                        p {
                            margin: 10px 0;
                            color: #FFF;
                        }

                        a {
                            padding: 5px 20px;
                            background: #0ABEAD;
                            border-radius: 15px;
                            margin: 15px 0;
                            color: #FFF;
                            text-decoration: none;
                        }

                        @media screen and  (max-width: 768px) {
                            display: flex;
                        }
                    }

                    &:hover div {
                        display: flex;
                    }
                }
            }
        }
    }
`;
