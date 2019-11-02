import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
    margin: 0;
  }
  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }
`;

const globalStyleVariables = {
  grey: '#b6b6b6',
  dimgrey: '#696969',
  darkgrey: '#e8e8e8',
  bg: '#fafafa'
}

export { GlobalStyle, globalStyleVariables };