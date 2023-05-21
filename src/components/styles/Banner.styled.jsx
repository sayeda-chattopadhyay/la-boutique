import styled from "styled-components";

export const StyledBanner = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 20px auto 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  //   border: 1px solid red;

  p {
    max-width: 500px;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    flex-direction: column-reverse;
  }
`;
