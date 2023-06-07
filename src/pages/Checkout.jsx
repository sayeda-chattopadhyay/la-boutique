
import FormPayment from "../components/formPayment/FormPayment";
//import CartComponent from "../components/cart/CartComponent";
import { StyledCheckout } from "../components/styles/Checkout.styled";
import CheckoutCard from "../components/checkout/CheckoutCard";

const Checkout = () => {
  return (
    <>
    <h1>Checkout</h1>
      <StyledCheckout>
        <div className="checkout-wrap">
        <div className="payment-form">
        <h3>Payment Details</h3>
          <FormPayment />
        </div>
        <div className="order-summary">
        <h3>Order Summary</h3>
          <CheckoutCard />
        </div>
        </div>
      </StyledCheckout>
    </>
  );
};

export default Checkout;
