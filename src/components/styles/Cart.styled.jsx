import styled from "styled-components";

export const StyledCart = styled.div`
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px auto 10px;
  background-color: skyblue;

  .main-cart-section {
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: green;
    width: 90%;
  }

  .cart-total-para {
    margin-bottom: 20px;
  }

  .cart-total-para h1 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  .total-items {
    font-size: 16px;
    // color: #888;
  }

  .total-items-count {
    font-weight: bold;
  }

  .cart-items {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px auto;
    border: 1px solid #ccc;
    width: 90%;
    background-color: yellow;
  }

  .cart-items-container {
    width: 90%;
    margin: 20px auto;
    border-bottom: 1px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 40px;
    gap: 30px;
    background-color: red;

    & > div {
      flex: 1;
    }
    @media (max-width: ${({ theme }) => theme.mobile}) {
      flex-direction: column;
    }
  }

  .product-img {
    width: 250px;
    height: 250px;
    margin-right: 10px;
    border: 1px solid #ccc;
  }

  .product-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .title {
    flex-basis: 100%;
    margin-bottom: 10px;
  }

  .title h2 {
    // font-size: 18px;
    margin-bottom: 5px;
  }

  .title p {
    // font-size: 14px;
    color: #888;
    margin-bottom: 10px;
  }

  .add-minus-quantity {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-right: 10px;
  }

  .add-minus-quantity input[type="text"] {
    width: 50px;
    text-align: center;
  }

  .price {
    font-size: 16px;
    font-weight: bold;
    margin-right: 10px;
  }

  .remove-item {
    cursor: pointer;
    // color: #888;
    font-size: 18px;
  }

 
  }
`;
