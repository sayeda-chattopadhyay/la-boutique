import { useCartContext } from "../../CartContext";
// import { StyledCart } from "../styles/Cart.styled";
import { StyledCheckoutCard } from "../styles/CheckoutCard.styled";

const CheckoutCard = () => {
  const cart = useCartContext();

  console.log("Items in the cart:", cart.items);

  return (
    <StyledCheckoutCard>
      <div className="card-container">
        {cart.items.map((item) => (
          <div key={item.id} className="product-wrap">
            <div className="product-image">
              <img src={item.imageUrl} alt={item.title} />
            </div>
            <div className="product-details">
              <h5>{item.title}</h5>
              <h6>Quantity: {item.quantity}</h6>
            </div>
            <div>Nok {(item.discountedPrice * item.quantity).toFixed(2)}</div>
          </div>
        ))}
        <hr />
        <div className="total-cost">
          Total : Nok {cart.getTotalCost().toFixed(2)}
        </div>
      </div>
    </StyledCheckoutCard>
  );
};

export default CheckoutCard;
