import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --teslaColor : black;
    }
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family:"Rubik" , sans-serif;
        color: black;
    }
    body{
        width: 100%;
        overflow-x: hidden;
    }
`;

export default GlobalStyle