import styled from "styled-components";

export const StyledContactForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;

  & > div {
    margin-bottom: 30px;
  }

  & > div label {
    font-weight: bold;
    margin-bottom: 30px;
  }

  input,
  textarea {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;
  }

  p {
    margin-top: 5px;
    color: green;
  }

  input[type="submit"] {
    padding: 10px 20px;
    background-color: #c2c0f9;
    color: ${({ theme }) => theme.colors.body};
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;

    &:hover {
      background-color: red;
    }
  }

  input[type="submit"]:hover {
    background-color: red;
  }
`;
