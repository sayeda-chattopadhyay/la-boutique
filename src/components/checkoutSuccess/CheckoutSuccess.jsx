import { StyledSuccessCheckout } from "../styles/SuccessCheckout";
import { StyledButton } from "../styles/Button.styled";
import { Link } from "react-router-dom";

const CheckoutSuccess = () => {
  return (
    <StyledSuccessCheckout>
      <div className="wrapper">
        <h1>Thank you for your purchase</h1>
        <Link to="/">
          <StyledButton>Continue Shopping</StyledButton>
        </Link>
      </div>
    </StyledSuccessCheckout>
  );
};

export default CheckoutSuccess;
