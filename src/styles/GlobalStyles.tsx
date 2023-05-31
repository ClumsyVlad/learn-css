import { createGlobalStyle } from "styled-components"

import { normalize } from "./normalize"
import { Colors, theme } from "./theme"
import { FontWeights } from "./typography"

export const GlobalStyles = createGlobalStyle`
  ${normalize}
  ${theme}

  :root {
    line-height: 1.5;
    font-weight: ${FontWeights.regular};
    color: ${Colors.mainDark};
    background-color: ${Colors.mainLight};

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  html, body {
    margin: 0;
    height: 100%;
    min-height: 100%;
    min-height: -webkit-fill-available;
  }

  body {
    max-width: 100%;
    text-size-adjust: 100%;
    overflow-x: hidden;
    overscroll-behavior-y: none;
    font-family: 'Roboto Mono', sans-serif;
    font-stretch: 100%;
    font-weight: ${FontWeights.regular};
  }

  #root {
    display: grid;
    grid-template-columns: 248px 1fr;
    min-height: 100%;
    min-height: -webkit-fill-available;
  }

  button, a {
    cursor: pointer;
  }

  ul {
    margin: 0;
  }
`
