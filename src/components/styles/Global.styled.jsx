import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 20px;
  font-family: "Poppins";
  
}

p {
  margin: 20px 0;
}


`;

export default GlobalStyles;
