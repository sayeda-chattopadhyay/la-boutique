import styled from "styled-components";

export const StyledCard = styled.div`
  border: 1px solid #fff;
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 30px auto 10px;

  .card-image {
    width: 100%;
    overflow: hidden;
    margin: 0 auto;
  }

  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
`;
