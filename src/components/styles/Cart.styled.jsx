import styled from "styled-components";

export const StyledCart = styled.div`
  width: 100%;
  margin: 50px auto 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  .cart-container {
     margin: 0 auto 10px;

  }

  .cart-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 0 auto;
    padding: 20px;
    border: 0.5px solid #ccc;
    // background-color: light-yellow;
    gap: 30px;
    margin-bottom: 10px;
  }

  .cart-item > div {
    flex: 1;
  }

  .cart-item img {
    width: 200px;
    height: 200px;
    object-fit: cover;
  }

  .cart-item h3 {
    margin: 0;
  }

  .cart-item p {
    margin: 5px 0;
  }

  .big-text {
    font-size: 18px;
    font-weight: bold;
  }

  .btn {
    display: flex;
    align-items: center;
  }

  .cart-item .btn {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
    margin-top: 10px;
  }

  .big-text {
    font-size: 20px;
    font-weight: bold;
  }

  .btn-icon {
    border: none;
    background-color: white;
    color: black;
    cursor: pointer;
    border-radius: 50%;
    font-size: 20px;
  }

  .total-cost {
    float: right;
    margin-right: 120px;
    font-size: 28px;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    .cart-container {
      flex-direction: column;
    }

    .cart-item {
      flex-direction: column;
      align-items: flex-start;
    }

    .cart-item img {
      width: 100%;
      height: auto;
      margin-right: 0;
      margin-bottom: 10px;
    }

    .cart-item .btn {
      justify-content: flex-start;
    }
    .remove-btn {
      font-size: 20px;
      background-color: red;
    }

    .checkout {
      border: 2px solid #ccc;
    }
  }
`;
