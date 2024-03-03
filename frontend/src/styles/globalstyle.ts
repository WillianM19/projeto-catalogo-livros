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
    font-family: "Poppins", cursive;
    color: #35323d;
  }
`;
