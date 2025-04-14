import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    @font-face {
    font-family: "Oswald-Bold";
    src:
        local("Oswald-Bold"),
        url("../../assets/Fonts/Oswald-Bold.ttf") format("truetype");
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        font-family: "Oswald-Bold";
    }

    body {
        background-color: whitesmoke;
    }

`;
