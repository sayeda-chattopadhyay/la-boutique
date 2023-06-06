import styled from "styled-components";

export const StyledBanner = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 5px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  height: 100vh;

  p {
    max-width: 500px;
  }

  .banner-image {
    width: 100%;
    max-width: 600px;
    height: auto;
    overflow: hidden;
    margin: 0 auto;
  }

  img {
    width: 100%;
    height: auto;
    max-height: 100%;
    object-fit: cover;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    flex-direction: column-reverse;
  }
`;
