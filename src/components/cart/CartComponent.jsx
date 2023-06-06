import React from "react";
import { useCartContext } from "../../CartContext";

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
    <div>
      <h1>Cart</h1>
      {cart.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.items.map((item) => (
            <li key={item.id}>
              <div>
                <img src={item.imageUrl} alt={item.title} />
              </div>
              <div>
                <h3>{item.title}</h3>

                <p>Quantity: {item.quantity}</p>
                <p>Discounted Price: {item.discountedPrice}</p>
                <p>Total Price: {item.discountedPrice * item.quantity}Nok</p>

                <button onClick={() => handleIncrease(item.id)}>+</button>
                <button onClick={() => handleDecrease(item.id)}>-</button>
                <button onClick={() => handleRemove(item.id)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <p>Total Cost: {cart.getTotalCost()}</p>
    </div>
  );
}
