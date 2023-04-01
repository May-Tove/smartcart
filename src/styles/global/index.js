import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Poppins', sans-serif;
    }
        
    html {
        --color-primary: #1aa7ec;
        --color-secondary: #F4A224;
        --color-light: #f6f6f2;
        --color-dark: #F4A224;
        --color-black: black;
        --color-text-light: white;
        --color-text: #454545;
        --color-grey: #EFEFE9;
        --box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
    }
    
    body {
        background: var(--color-light);
        color: var(--color-text);
    }

    .main-global-styling {
        min-height: 100vh;
        width: 90vw;
        margin: 0 auto;
        padding: 2rem 0 2rem 0;

        @media screen and (min-width: 768px){
            width: 80vw;
        }

        @media screen and (min-width: 1440px){
            width: 70vw;
        }
    }

    a{
        color: var(--color-text);

        &:hover{
            color: var(--color-primary);
        }
    }

    input, textarea{
        border: none;
        font-size: 16px;
        padding: 0.3rem;
        border-radius: 10px;
        border: 0.2px solid lightgrey;
    }

`;

export default GlobalStyle;
