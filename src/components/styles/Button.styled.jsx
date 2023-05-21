import styled from "styled-components";

export const StyledButton = styled.button`
  border-radius: 4px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  padding: 10px 20px;
  background-color: #c2c0f9;
  // background-color: #ea6e7c;
  // background-color: #818f3b;
  // background-color: #f7b7ca;
  color: #2b3452;

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;
