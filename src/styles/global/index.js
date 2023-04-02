import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Poppins', sans-serif;
    }
        
    html {
        --color-primary: #0192D9;
        --color-secondary: #eef8fd;
        --color-light: #f6f6f2;
        --color-white: #fff;
        --color-black: black;
        --color-text-light: white;
        --color-text: #454545;
        --color-text-muted: grey;
        --color-grey: #EFEFE9;
        --box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
        --border-radius: 5px;
    }
    
    body {
        background: var(--color-light);
        color: var(--color-text);
    }

    .main-global-styling {
        min-height: 100vh;
        width: 90vw;
        max-width: 1100px;
        margin: 0 auto;
        padding: 2rem 0 2rem 0;
    }

    a{
        color: var(--color-text);

        &:hover, &:focus{
            color: var(--color-primary);
        }
    }

    input, textarea{
        border: none;
        font-size: 16px;
        padding: 0.3rem;
        border-radius: var(--border-radius);
        border: 0.2px solid lightgrey;
    }

`;

export default GlobalStyle;
