import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  html {
    overflow-x: hidden;
  }

  body {
    background: ${(props) => props.theme.colors.background};
    font-family: ${(props) => props.theme.fonts.primary};
    overflow-x: hidden;
    position: relative;
  }

  button {
    background: none;
    border: none;
    font: inherit;
    outline: inherit;
  }
`;
