import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: Roboto;
    src: url('/media/fonts/Roboto-Thin.ttf') format("truetype");
    font-weight: 100;
      font-style: normal;
  }
  @font-face {
    font-family: Roboto;
    src: url('/media/fonts/Roboto-ThinItalic.ttf') format("truetype");
    font-weight: 100;
    font-style: italic;
  }

  @font-face {
    font-family: Roboto;
    src: url('/media/fonts/Roboto-Light.ttf') format("truetype");
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: Roboto;
    src: url('/media/fonts/Roboto-LightItalic.ttf') format("truetype");
    font-weight: 300;
    font-style: italic;
  }

  @font-face {
    font-family: Roboto;
    src: url('/media/fonts/Roboto-Regular.ttf') format("truetype");
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: Roboto;
    src: url('/media/fonts/Roboto-RegularItalic.ttf') format("truetype");
    font-weight: 400;
    font-style: italic;
  }

  @font-face {
    font-family: Roboto;
    src: url('/media/fonts/Roboto-Medium.ttf') format("truetype");
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: Roboto;
    src: url('/media/fonts/Roboto-MediumItalic.ttf') format("truetype");
    font-weight: 500;
    font-style: italic;
  }

  @font-face {
    font-family: Roboto;
    src: url('/media/fonts/Roboto-Bold.ttf') format("truetype");
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: Roboto;
    src: url('/media/fonts/Roboto-BoldItalic.ttf') format("truetype");
    font-weight: 700;
    font-style: italic;
  }

  @font-face {
    font-family: Roboto;
    src: url('/media/fonts/Roboto-Black.ttf') format("truetype");
    font-weight: 900;
    font-style: normal;
  }
  @font-face {
    font-family: Roboto;
    src: url('/media/fonts/Roboto-BlackItalic.ttf') format("truetype");
    font-weight: 900;
    font-style: italic;
  }

  body {
    margin: 0;
    padding: 0;
    background: white;
    color: black;
    font-size: 14px;
    color: ${({ theme }) => theme.body.textColor};
    background-color: ${({ theme }) => theme.body.backgroundColor};
    transition: background-color 0.3s ease;
    transition: color 0.3s ease;
  }
  
  * {
    font-family: Roboto;
    box-sizing: border-box;
  }
`
