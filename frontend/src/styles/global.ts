import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Roboto;
    src: url('/fonts/Roboto-Thin.ttf') format("truetype");
    font-weight: 100;
      font-style: normal;
  }
  @font-face {
    font-family: Roboto;
    src: url('/fonts/Roboto-ThinItalic.ttf') format("truetype");
    font-weight: 100;
    font-style: italic;
  }

  @font-face {
    font-family: Roboto;
    src: url('/fonts/Roboto-Light.ttf') format("truetype");
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: Roboto;
    src: url('/fonts/Roboto-LightItalic.ttf') format("truetype");
    font-weight: 300;
    font-style: italic;
  }

  @font-face {
    font-family: Roboto;
    src: url('/fonts/Roboto-Regular.ttf') format("truetype");
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: Roboto;
    src: url('/fonts/Roboto-RegularItalic.ttf') format("truetype");
    font-weight: 400;
    font-style: italic;
  }

  @font-face {
    font-family: Roboto;
    src: url('/fonts/Roboto-Medium.ttf') format("truetype");
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: Roboto;
    src: url('/fonts/Roboto-MediumItalic.ttf') format("truetype");
    font-weight: 500;
    font-style: italic;
  }

  @font-face {
    font-family: Roboto;
    src: url('/fonts/Roboto-Bold.ttf') format("truetype");
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: Roboto;
    src: url('/fonts/Roboto-BoldItalic.ttf') format("truetype");
    font-weight: 700;
    font-style: italic;
  }

  @font-face {
    font-family: Roboto;
    src: url('/fonts/Roboto-Black.ttf') format("truetype");
    font-weight: 900;
    font-style: normal;
  }
  @font-face {
    font-family: Roboto;
    src: url('/fonts/Roboto-BlackItalic.ttf') format("truetype");
    font-weight: 900;
    font-style: italic;
  }

  body {
    margin: 0;
    padding: 0;
    background: white;
    color: black;
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.3s linear;
    font-size: 14px;
  }

  * {
    box-sizing: border-box;
  }
`
