import styled from "styled-components";

export const StyledProductCard = styled.div`
 //border: 0.2px solid #fff;
margin: 0 auto;
padding: 20px;


  // border: 0.2px solid #fff;
  // max-width: 400px;
  // width: 100%;
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // justify-content: center;
  // margin: 30px auto 10px;

  .card-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    max-width: 1200px;
    margin: 20 auto;
    padding: 20px;
    gap: 40px;
    shadow: 0 0 10px rgba(255, 255, 255, 0.3);
  }

  .card-wrapper > div {
    flex: 1;
  }

  .card-image {
    width: 100%;
    overflow: hidden;
    margin: 0 auto;
  }
  .productCard-price{
    display: flex;
    flex-direction: row;
    gap: 20px;
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

 

  @media (max-width: ${({ theme }) => theme.mobile}) {
    .card-wrapper {
      flex-direction: column;
    }
  }
`;
