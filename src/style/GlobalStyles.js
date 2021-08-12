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
        scroll-padding-top: 16rem;

        ${'' /* scroll bar styles that will work on Firefox */}
        scrollbar-width: auto;
        scrollbar-color: ${stylesConfig.colorPrimary} #2b293b;

        @media only screen and (max-width: ${stylesConfig.bpExtraSmall}) {
            font-size: 50%;
	    }

        @media only screen and (min-width: ${stylesConfig.bpSmall}) {
            font-size: 67%;
	    }

        @media only screen and (min-width: ${stylesConfig.bpMedium}) {
            font-size: 72%;
	    }

        @media only screen and (min-width: ${stylesConfig.bpExtraLarge}) {
            font-size: 90%;
	    }
    }

    body {
        font-size: 2rem;
        font-family: 'Nunito Sans', sans-serif;
        background-color: ${stylesConfig.bodyBackgroundColor};
    }

    h1, h2, h3, h4 {
        font-family: 'Poppins', sans-serif;
        color: ${stylesConfig.headingFontColor};
        line-height: 1.3;
    }

    h1 {
        font-size: 4.2rem;
    }

    h2 {
        font-size: 3.4rem;
    }

    h3 {
        font-size: 2.6rem;
    }

    h4 {
        font-size: 2.2rem;
    }

    p {
        font-size: 1.8rem;
        line-height: 1.55;
        letter-spacing: ${stylesConfig.bodyTextLetterSpacing};
        color: ${stylesConfig.bodyFontColor};

        &::selection {
            background-color: ${stylesConfig.colorPrimary};
            color: #eee;
        }
    }

    a {
        display: inline-block;
        text-decoration: none;
        color: ${stylesConfig.bodyFontColor};
        letter-spacing: ${stylesConfig.bodyTextLetterSpacing};
    }

    .active-link {
        color: ${stylesConfig.colorPrimaryLight};
    }

    ${'' /* scrollbar styles that will work on Chrome, Edge, and Safari */}
        ::-webkit-scrollbar {
            width: 1.5rem;
        }

        ::-webkit-scrollbar-track {
        background-image: linear-gradient(to bottom, #2b293b, ${stylesConfig.bodyBackgroundColor});
        }

        ::-webkit-scrollbar-thumb {
            background-image: linear-gradient(
                to bottom,
                ${stylesConfig.colorPrimaryLight},
                ${stylesConfig.colorPrimary}
            );
            box-shadow: ${stylesConfig.glowEffect};
            border-radius: 10rem;
        }
`;

export default GlobalStyles;
