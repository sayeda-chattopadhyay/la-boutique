import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer};
  width: 100%;
  padding: 100px 0 60px;
  margin-top: 150px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  ul {
    list-style: none;
  }

  ul li {
    margin-bottom: 16px;
  }

  p {
    text-align: right;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    text-align: center;
    ul {
      padding: 0;
    }
    p {
      text-align: center;
    }
  }
`;
