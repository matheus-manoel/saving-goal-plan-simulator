import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      neutralWhite: string;
      blueGray100: string;
      blueGray300: string;
      blueGray400: string;
      blueGray600: string;
      blueGray900: string;
      brandColorPrimary: string;
      brandColorSecondary: string;
      background: string;
    };

    fonts: {
      primary: string;
      secondary: string;
      weights: {
        lighter: number;
        light: number;
        normal: number;
        bold: number;
      };
    };
  }
}
