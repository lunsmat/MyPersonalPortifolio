import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        border: 0;
        box-sizing: border-box;
    }
    body{
        font-family: 'Poppins', sans-serif;
        font-size: 14px;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        color: #95A5C6;
        background-color: #161D26;
        overflow-x: hidden;
    }
    html, body, #root{
        height: 100%;
    }
`;
