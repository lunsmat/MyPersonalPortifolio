import styled from 'styled-components';

export const Container = styled.footer`
    width: 100%;
    min-height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;

    div {
        width: 100%;
        max-width: 1140px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 40px;
        flex-wrap: wrap;

        @media screen and (max-width:768px) {
            flex-direction: column;
            justify-content: center !important;


        }

        div {
            flex: 1;
            display: flex;
            align-items: center;
            word-wrap: none;
            flex-direction: row;

            &#socialMedias {
                display: flex;
                justify-content: end;
                flex-wrap: nowrap;
                a, span {
                    display: flex;
                    width: 40px;
                    height: 40px;
                    align-items: center;
                    border-radius: 20px;
                    overflow: hidden;
                    margin: 10px;

                    svg {
                        width: 40px;
                        height: 40px;
                        padding: 5px;
                        background: #707070;
                        color: #161D26;

                        &:hover {
                            background: #0ABEAD;
                        }
                    }

                    &.inverted {
                        svg {
                            background: #161D26;
                            color: #707070;
                            padding: 0;

                            &:hover {
                                color: #0ABEAD;
                            }
                        }
                    }
                }

                @media screen and (max-width: 576px) {
                    a, span {
                        margin: 5px;
                        width: 30px;
                        height: 30px;
                    }
                }
            }
        }
    }
`;
