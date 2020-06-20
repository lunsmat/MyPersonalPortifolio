import styled from 'styled-components';

interface Props {
    background: string;
}

export const Container = styled.div<Props>`
    width: 100%;
    margin: 10px;
    overflow: hidden;
    padding: 10px 50px;
    background: ${props => props.background};
    position: relative;
    min-height: 370px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #FFF;

    * {
        z-index: 1;
    }

    h4 {
        font-size: 24px;
        margin: 20px 0;
        text-transform: uppercase;
    }

    p {
        font-size: 16px;
        padding: 15px;
        text-align: center;
    }

    svg {
        position:absolute;
        bottom: 0;
        right: 0;
        z-index: 0;
    }
`;
