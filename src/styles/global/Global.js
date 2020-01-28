import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html, body, #root, .App {
    width: 100%;
    height: 100%;
  }
  body, #root {
    margin: 0;
    padding: 0;

  }
`;

export default GlobalStyles;
