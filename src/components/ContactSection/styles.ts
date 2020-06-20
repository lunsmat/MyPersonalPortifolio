import styled from 'styled-components';

import { Section } from "../SectionComponents";

interface Props {
    background: string;
}

export const Container = styled(Section)<Props>`
    min-width: 100%;

    .background {
        width: 100%;
        background-image: url(${props => props.background});
        background-size: cover;
        background-position: center;
        display: flex;
        align-items: center;
        justify-content:center;

        #backgroundColor {
            width: 100%;
            padding: 50px 0;
            background-color: rgba(0, 0, 0, .81);
            display: flex;
            align-items: center;
            justify-content:center;

            .body {
                padding: 10px;
                width: 100%;
                max-width: 992px;
                display: flex;
                align-items: center;
                justify-content: flex-end;

                form {
                    display: flex;
                    flex-direction: column;
                    padding: 25px;
                    background: #1F2935;
                    width: 100%;
                    max-width: 550px;
                    border-radius:10px;

                    h4 {
                        font-size: 28px;
                        color: #0ABEAD;
                        margin:10px 0;
                    }

                    input, textarea {
                        background: #161D26;
                        margin: 10px 0;
                        padding: 15px 20px;
                        border-radius: 12px;
                        box-shadow: 0 0 30px #0ABEAD77;

                        &::placeholder {
                            color: #95A5C6;
                            font-family: 'Poppins';
                        }
                    }

                    textarea {
                        resize: none;
                        height: 150px;
                    }

                    button {
                        margin: 10px 0;
                        padding: 15px 20px;
                        border-radius: 12px;
                        background: #0ABEAD;
                        color: #FFF;
                    }
                }
            }
        }
    }
`;

