import { createGlobalStyle } from 'styled-components';
import stylesConfig from './stylesConfig';

const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    html {
        font-size: 62.5%;
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

    body {
        font-size: 2rem;
        font-family: 'Nunito Sans', sans-serif;
        background-color: black;
        background-image: ${stylesConfig.backgroundGradient};
    }

    h1, h2, h3 {
        font-family: 'Poppins', sans-serif;
        color: ${stylesConfig.headingFontColor};
        line-height: 1.3;
    }

    p {
        line-height: 1.5;
        letter-spacing: 0.2px;
        color: ${stylesConfig.bodyFontColor};
    }
`;

export default GlobalStyles;
