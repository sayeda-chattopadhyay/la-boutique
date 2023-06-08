import React from "react";
import { Link } from "react-router-dom";

import { useContext } from "react";
import { CartContext } from "../../CartContext";

const CheckoutSuccess = () => {
  const cart = useContext(CartContext);

  const handleContinueShopping = () => {
    cart.clearCart();
  };

  return (
    <div>
      {" "}
      <h1>Thank you for your purchase</h1>
      <Link to="/">
        <button onClick={handleContinueShopping}>Continue Shopping</button>
      </Link>
    </div>
  );
};

export default CheckoutSuccess;
