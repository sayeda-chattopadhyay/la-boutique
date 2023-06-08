import { StyledSuccessCheckout } from "../styles/SuccessCheckout";
import { StyledButton } from "../styles/Button.styled";
import { Link } from "react-router-dom";
import { useEffect } from "react";

import { useContext } from "react";
import { CartContext } from "../../CartContext";

const CheckoutSuccess = () => {
  const cart = useContext(CartContext);

  useEffect(() => {
    cart.clearCart();
  }, [cart]);

  // const handleContinueShopping = () => {
  //   cart.clearCart();
  // };

  return (
    <StyledSuccessCheckout>
      <div className="wrapper">
        <h1>Thank you for your purchase</h1>
        <Link to="/">
          {/* <StyledButton onClick={handleContinueShopping}>Continue Shopping</StyledButton> */}
          <StyledButton>Continue Shopping</StyledButton>
        </Link>
      </div>
    </StyledSuccessCheckout>
  );
};

export default CheckoutSuccess;
