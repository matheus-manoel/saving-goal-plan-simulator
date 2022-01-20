import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    background: ${(props) => props.theme.colors.background};
    font-family: ${(props) => props.theme.fonts.primary};
  }

  button {
    background: none;
    border: none;
    font: inherit;
    outline: inherit;
  }
`;
