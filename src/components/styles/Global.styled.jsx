import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap");


// :root {
//   --primary: #bc4123;
//   --secondary: #2b3452;
// }

body {
  margin: 0;
  padding: 20px;
  font-family: "Poppins", sans-serif;
  background: ${({ theme }) => theme.colors.body};
}
* {
  color: #fff;
  margin: 0;
}
p {
  opacity: 0.8;
  margin: 20px 0;
}

img {
  max-width: 100%;
  height: auto;
}

`;

export default GlobalStyles;
