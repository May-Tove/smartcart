import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Poppins', sans-serif;
    }
        
    html {
        --color-primary: orange;
        --color-secondary: #F4A224;
        --color-light: #f6f6f2;
        --color-dark: #F4A224;
        --color-black: black;
        --color-text-light: white;
        --color-text: #454545;
        --color-grey: #EFEFE9;
    }
    
    body {
        background: white;
    }

    main {
        min-height: 100vh;
        width: 90vw;
        margin: 0 auto;
        padding: 2rem 0 2rem 0;

        @media screen and (min-width: 768px){
            width: 80vw;
        }
    }

    a{
        color: var(--color-text);
    }

`;

export default GlobalStyle;
