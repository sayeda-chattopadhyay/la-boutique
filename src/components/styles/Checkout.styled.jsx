import styled from "styled-components";

export const StyledCheckout = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  .checkout-wrap {
    //border: 1px solid #ddd;
    max-width: 1000px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: start;
    margin: 100px auto;
  }

  .payment-form {
    flex: 1;
    margin-bottom: 20px;
  }

  .order-summary {
    flex: 1;
  }

  h1 {
    width: 100%;
    margin: 50px auto 50px;
    text-align: center;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    .checkout-wrap {
      flex-direction: column;
      flex-direction: column-reverse;
      gap: 60px;
      align-items: center;
    }
  }
`;
