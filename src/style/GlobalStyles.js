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

    h1 {
        font-size: 4rem;
    }

    p {
        font-size: 2.2rem;
        line-height: 1.5;
        letter-spacing: ${stylesConfig.bodyTextLetterSpacing};
        color: ${stylesConfig.bodyFontColor};
    }

    a {
        text-decoration: none;
        color: ${stylesConfig.bodyFontColor};
        font-size: 3rem;
        letter-spacing: ${stylesConfig.bodyTextLetterSpacing};
    }
`;

export default GlobalStyles;
