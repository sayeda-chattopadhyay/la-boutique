import styled from "styled-components";

export const StyledCard = styled.div`
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 30px auto 10px;
  border-radius: 10px;
  border: 1px solid #ccc;
  padding: 20px;


  h3{
    margin-top: 10px;
  }

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

  .discount-percentage {
    position: absolute;
    background-color: red;
    color: #fff;
  }

  .link {
    text-decoration: none;
  }

.price{
  display: flex;
  justify-content: start;
  gap: 20px
}


  &:hover {
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
    transform: scale(1.02);
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;
