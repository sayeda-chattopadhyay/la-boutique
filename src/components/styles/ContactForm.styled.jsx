import styled from "styled-components";

export const StyledContactForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  border: 1px solid #ccc;
  padding: 20px;

  & > div {
    margin-bottom: 30px;
  }

  input,
  textarea {
    margin-top: 5px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;
    color: ${({ theme }) => theme.colors.body};
  }

  p {
    margin-top: 5px;
    color: #c2c0f9; // error message color
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
      background-color: #8e8be2;
      transform: scale(0.98);
    }
  }
`;
