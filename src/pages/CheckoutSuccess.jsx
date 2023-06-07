import React from "react";
import { Link } from "react-router-dom";

const CheckoutSuccess = () => {
  return (
    <div>
      <h1>Thank you for your purchase</h1>
      <Link to="/">
        <button>Continue Shopping</button>
      </Link>
    </div>
  );
};

export default CheckoutSuccess;
