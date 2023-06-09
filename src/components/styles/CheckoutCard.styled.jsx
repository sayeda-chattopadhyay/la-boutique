import styled from "styled-components";

export const StyledCheckoutCard = styled.div`
 

  .card-container {
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
    text-align: center;

    h3 {
      margin-bottom: 20px;
    }

    .product-wrap {
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-bottom: 10px;
      border: 1px solid #ccc;
      padding: 10px;

      .product-wrap > div {
        flex: 1;
      }

      .product-image {
        margin-right: 10px;

        img {
          width: 80px;
          height: 80px;
          object-fit: cover;
        }
      }

      .product-details {
        flex: 1;

        h5 {
          margin-bottom: 10px;
        }

        h6 {
          margin-bottom: 10px;
        }
      }

      .big-text {
        font-weight: bold;
      }
    }

    .total-cost {
      margin-top: 20px;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
      .product-wrap {
        flex-direction: column;
        width: 100%;
        margin-bottom: 20px;
      }

      .product-wrap img{
        margin-bottom: 20px;
      }
    }
  }
`;

//************ */
