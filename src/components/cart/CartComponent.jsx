import React from "react";
import { useCartContext } from "../../CartContext";
import { StyledCart } from "../styles/Cart.styled";
import { BsFillTrashFill } from "react-icons/bs";

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
      <h1>Cart</h1>
      {cart.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-container">
          {cart.items.map((item) => (
            <div key={item.id} className="cart-item">
              <div>
                <img src={item.imageUrl} alt={item.title} />
              </div>
              <div>
                <h3>{item.title}</h3>
                <hr />
                <p>
                  <span className="big-text">Price :</span> Nok{" "}
                  {item.discountedPrice}
                </p>
                <p>
                  <span className="big-text">Total : Nok </span>
                  {(item.discountedPrice * item.quantity).toFixed(2)}
                </p>
                <hr />
                <h5>Quantity: {item.quantity}</h5>
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
                <BsFillTrashFill onClick={() => handleRemove(item.id)} className= "remove-btn"/ >
              </div>
            </div>
          ))}
        </div>
      )}
      <p>Total Cost: Nok {cart.getTotalCost().toFixed(2)}</p>
    </StyledCart>
  );
}

//<p>${ (quantity * productData.price).toFixed(2) }</p>
