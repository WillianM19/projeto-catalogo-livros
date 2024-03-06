import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`


  @font-face {
    font-family: "Poppins";
    src: url('fonts/Poppins.ttf')
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Poppins", system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #35323d;
  }

  a {
    text-decoration: none;
    color: inherit;
    line-height: inherit;
  }
`;
