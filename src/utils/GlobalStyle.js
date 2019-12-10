import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { ThemeDefault } from '../theme';

/**
 * Style global of the iframe which display component
 */
export const GlobalStyle = createGlobalStyle`
    ${normalize};

    body,
    main,
    header,
    footer,
    section,
    article,
    aside,
    div,
    form,
    ::before,
    ::after {
        display: block;
        box-sizing: border-box;
    }

    body {
        @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
        font-family: 'Roboto', sans-serif;
    }
`;