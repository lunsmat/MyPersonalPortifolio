import styled from 'styled-components';

import { Section } from "../SectionComponents";

export const Container = styled(Section)`
    .body {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;

        div {
            min-width: 320px;
            max-width: 360px;
        }
    }
`;
