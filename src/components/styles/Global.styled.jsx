import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

// @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap");


* {
  box-sizing: border-box;
}

body {
  background: ${({ theme }) => theme.colors.body};
  margin: 0;
  padding: 20px;
  font-family: "Poppins", sans-serif;
  font-size: 1.15rem;
}
* {
  color: ${({ theme }) => theme.colors.text};
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

input,
  textarea {
    margin-top: 5px auto 0;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;
    color: ${({ theme }) => theme.colors.body};
  }
`;

export default GlobalStyles;
