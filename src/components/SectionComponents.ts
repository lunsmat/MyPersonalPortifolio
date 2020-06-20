import styled from 'styled-components';

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 30px 0;
`;

export const SectionHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h3 {
        display: inline;
        font-size: 36px;
        color: #0ABEAD;
    }
    p {
        margin: 5px 0;
    }


    .separator {
        height: 30px;
        display: flex;
        align-items: center;
        div {
            height: 1px;
            background: #0ABEAD;
            width: 70px;
        }
        span {
            background: #0ABEAD;
            height: 8px;
            width: 40px;
            border-radius: 10px;
        }
    }
`;


