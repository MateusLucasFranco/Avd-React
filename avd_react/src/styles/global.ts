import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0px;
        box-sizing: border-box;
    }

    body {
        background: #577aa9;
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Roboto' sans-serif;
        font-weight: 400;
    }

    button {
        cursor: pointer;
    }

    .react-modal-overlay {
    }
    .react-modal-content {
        
    }
`