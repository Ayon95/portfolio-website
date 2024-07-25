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

        @supports (scrollbar-width: auto) {
            scrollbar-width: thin;
            scrollbar-color: hsl(${stylesConfig.colorPrimary}) #2b293b;
        }
    }

    body {
        font-size: 1.6rem;
        font-family: 'Work Sans', sans-serif;
        background-color: hsl(${stylesConfig.bodyBackgroundColor});
        background-image: ${stylesConfig.backgroundGradient};
    }

    h1, h2, h3, h4 {
        font-family: 'Poppins', sans-serif;
        color: ${stylesConfig.headingFontColor};
        line-height: 1.3;
    }

    h1 {
        font-size: clamp(4.6rem, 6vw, 6.4rem);
    }

    h2 {
        font-size: 3.4rem;
    }

    h3 {
        font-size: 2.6rem;
    }

    h4 {
        font-size: 2rem;
    }

    p {
        line-height: 1.55;
        letter-spacing: ${stylesConfig.bodyTextLetterSpacing};
        color: ${stylesConfig.bodyFontColor};

        &::selection {
            background-color: hsl(${stylesConfig.colorPrimary});
            color: #eee;
        }
    }

    a {
        display: inline-block;
        text-decoration: none;
        color: ${stylesConfig.bodyFontColor};
        letter-spacing: ${stylesConfig.bodyTextLetterSpacing};
    }

    ${'' /* Focus styles */}
    :focus:not(:focus-visible) {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid hsl(${stylesConfig.colorPrimaryLight} / 0.6);
        outline-offset: 5px;
    }

    .active-link {
        color: hsl(${stylesConfig.colorPrimaryLight});
    }

    .sr-only {
        position: absolute;
        top: auto;
        width: 1px;
        height: 1px;
        clip: rect(1px 1px 1px 1px); /* IE 6/7 */
        clip: rect(1px, 1px, 1px, 1px);
        overflow: hidden;
        white-space: nowrap;
    }

    ${'' /* scrollbar styles that will work on Safari and legacy versions of Chrome, Edge */}
    @supports selector(::-webkit-scrollbar) {
        ::-webkit-scrollbar {
            width: 1rem;
        }

        ::-webkit-scrollbar-track {
        background-color: #2b293b;
        }

        ::-webkit-scrollbar-thumb {
            background-color: hsl(${stylesConfig.colorPrimary})
        }
    }
`;

export default GlobalStyles;
