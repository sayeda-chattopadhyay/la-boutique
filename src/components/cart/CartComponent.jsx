import { StyledButton } from "../styles/Button.styled";
import { useCartContext } from "../../CartContext";
import { StyledCart } from "../styles/Cart.styled";
import { BsFillTrashFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function CartComponent() {
  const cart = useCartContext();

  console.log("Items in the cart:", cart.items);

  const handleIncrease = (id) => {
    cart.addOneToCart(id);
  };

  const handleDecrease = (id) => {
    cart.removeOneFromCart(id);
  };

  const handleRemove = (id) => {
    cart.deleteFromCart(id);
  };

  return (
    <StyledCart>
      <h1>Shopping Cart</h1>
      {cart.items.length === 0 ? (
        <div className="">
          <p>Your cart is empty.</p>
          <Link to={"/"}>
            <StyledButton>Go to Shopping </StyledButton>
          </Link>
        </div>
      ) : (
        <>
          <div className="cart-container">
            {cart.items.map((item) => (
              <div key={item.id} className="cart-item">
                <div>
                  <img src={item.imageUrl} alt={item.title} />
                </div>
                <div>
                  <h4>{item.title}</h4>
                  <hr />
                  <p>Price : Nok {item.discountedPrice}</p>
                  <p>Qty : {item.quantity}</p>
                  <hr />
                  <p>
                    <span className="big-text">Sub total : </span>Nok{" "}
                    {(item.discountedPrice * item.quantity).toFixed(2)}
                  </p>
                </div>

                <div className="btn">
                  <button
                    onClick={() => handleIncrease(item.id)}
                    className="btn-icon"
                  >
                    +
                  </button>
                  <p>{item.quantity}</p>
                  <button
                    onClick={() => handleDecrease(item.id)}
                    className="btn-icon"
                  >
                    -
                  </button>
                  {/* <button onClick={() => handleRemove(item.id)}>
                  <RiDeleteBin2Line />
                </button> */}
                  <BsFillTrashFill
                    onClick={() => handleRemove(item.id)}
                    className="remove-btn"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="total-cost">
            Total Cost: Nok {cart.getTotalCost().toFixed(2)}
          </div>
          <div className="checkout">
            <Link to={"/checkout"}>
              <StyledButton>Check out </StyledButton>
            </Link>
          </div>
        </>
      )}
      {/* <div className="total-cost">
        Total Cost: Nok {cart.getTotalCost().toFixed(2)}
      </div>
      <Link to={"/checkout"}>
        <StyledButton>Check out </StyledButton>
      </Link> */}
    </StyledCart>
  );
}

//<p>${ (quantity * productData.price).toFixed(2) }</p>
