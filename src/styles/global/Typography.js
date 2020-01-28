import { createGlobalStyle } from 'styled-components';
import { mediaMin } from '../MediaQueries';

const GlobalStyles = createGlobalStyle`
  html, body {
    font-size: 100%;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  a:hover {
    text-decoration: none;
    ${mediaMin.tabletLandscape`
      text-decoration: underline;
    `}  
  }

  a:visited {
    color: inherit;
  }

  a:hover: {
    color: inherit;
  }

  a:active {
    color: inherit;
  }

  div, h1, h2, h3, h4, h5, h6, li, p, button, input {
    font-family: 'Apercu';
    font-weight: normal;
  }

  .uppercase {
    text-transform: uppercase;
  }
`;

export default GlobalStyles;
