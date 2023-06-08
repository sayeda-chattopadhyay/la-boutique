import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

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

Link,
.back-link{
  text-decoration: none;
}

.back-link{
  margin-top: 100px;
  color: ${({ theme }) => theme.colors.text};
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
  
.cart-icon{
  font-size: 1.5rem;
}

.modal-text{
  color: black
}

`;

export default GlobalStyles;
