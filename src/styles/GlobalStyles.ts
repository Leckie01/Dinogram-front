import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Sen from "../assets/fonts/Sen-Regular.ttf";
import theme from "./theme";

const GlobalStyles = createGlobalStyle`
  @font-face {
      font-family: "Sen";
      src: local("Sen"), url(${Sen}) format("truetype");
      font-weight: 400;
      font-style: normal;
    }
    ${reset}

    body {
      background-color: ${theme.lightGreyBG};

    }
    
    a {
      color: inherit;
      text-decoration: none;
    }
`;

export default GlobalStyles;
