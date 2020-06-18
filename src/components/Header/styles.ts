import styled from 'styled-components';

interface Props {
    menuOpen: boolean;
}

export const Container = styled.header<Props>`
    width: 100%;
    height: 100px;
    background: #1F2935;
    display:flex;
    justify-content: center;

    div {
        width: 100%;
        height: 100%;
        max-width: 1140px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 40px;

        h1 {
            flex: 1;
            color: #0ABEAD;
            font-size: 63px;
        }

        #menuOpener {
            width: 40px;
            height: 40px;
            margin: 10px;
            border-radius: 10px;
            padding: 5px;
            background: #95A5C6;
            cursor: pointer;
            display: none;
        }

        nav {
            display: flex;
            flex: 1;

            a {
                color: #95A5C6;
                flex: 1;
                text-decoration: none;
                margin: 10px;
                padding: 5px;
                transition: all ease .5s;

                &.active, &:hover {
                    color: #0ABEAD;
                }
            }
        }

        @media screen and (max-width: 992px) {
            h1 {
                flex: 0;
                padding-right: 40px;
            }

            @media screen and (max-width: 768px) {
                #menuOpener {
                    display: inline-block;
                }

                nav {
                    display: ${props => setTimeout(() => {
                         return props.menuOpen ? 'flex' : 'none'
                    })};
                    background: #161D26;
                    position: absolute;
                    top: 100px;
                    right: ${props => props.menuOpen ? 0 : '100vw'};
                    flex-direction: column;
                    width: 100%;
                    transition: all ease 2s;

                    a {
                        border-bottom: 1px solid #95A5C6;
                        margin:0;
                        padding: 15px 0px;
                        font-size: 16px;
                        text-align: center;
                    }
                }
            }
        }
    }
`;
