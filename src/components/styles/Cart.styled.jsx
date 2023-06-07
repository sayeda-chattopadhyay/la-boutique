
import styled from "styled-components";

export const StyledCart = styled.div`


  .cart-container {
   max-width: 1200px;
   margin: 0 auto;
   padding: 20px;
   border: 1px solid #ccc;
   display: flex;
   flex-wrap: wrap;
  }

  .cart-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  }

  .cart-item img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    margin-right: 10px;
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
  

  .big-text{
    font-size: 20px;
    font-weight: bold;
  }

  .btn-icon{
    border: none;
    background-color: white;
    color: black;
    cursor: pointer;
    border-radius: 50%;
    font-size: 20px;
  }


  /* Media query for small screens */
  @media (max-width: 768px) {
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
    .remove-btn{
      font-size: 20px;
      background-color: red;
    }
`;
