import styled from 'styled-components';

interface Props {
    background: string;
}

export const Container = styled.section<Props>`
    min-height: calc(100vh - 100px);
    min-width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    background-image: url(${props => props.background});
    background-position: bottom;
    background-repeat: repeat-x;

    .containers {
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1;
        div.container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: start;
        }
    }

    #initialApresentation {
        h2 {
            color: #0ABEAD;

            span {
                color: #F57F17;
            }

            &:nth-child(2) {
                font-size: 32px;
                margin: 10px 0;
            }
        }

        .technologies {
            opacity: 70%;

        }

        .buttons {
            margin-top: 20px;
            margin-right:10px;
            display: flex;
            justify-content: space-between;

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
                    box-shadow: 0 10px 15px #0ABEADAA;
                }
                &:nth-child(2) {
                    margin-right: 0;
                    background: #F57F17;
                    box-shadow: 0 10px 15px #F57F17AA;
                }
            }
        }
    }

    #apresentationPhoto {
        div.container {
            padding: 10px;
            background: #707070;
            border-radius: 50%;
            max-width: 320px;

            img {
                width: 100%;
            }
        }
    }

    @media screen and (max-width: 768px) {
        flex-direction: column-reverse;
    }
`;
