
import React from "react";
import { useCartContext } from "../../CartContext";

export default function CartComponent() {
  const cart = useCartContext();

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
                <p>Price: {item.price}</p>
                <p>Quantity: {item.quantity}</p>
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




//*********** */
// import { useCartContext } from "../../CartContext";
// import { BsTrash } from "react-icons/bs";
// import { BiPlus, BiMinus } from "react-icons/bi";
// import { Link } from "react-router-dom";

// export default function CartComponent() {
//   const { items, getTotalCost, discountPercentage } = useCartContext();

//   const cart = useCartContext();

//   console.log("cart:", cart);
//   console.log("items:", items);
//   console.log("getTotalCost:", getTotalCost);
//   console.log("discountPercentage:", discountPercentage);

//   return (
//     <div>
//       <h1>Cart</h1>
//       <div>
//         {/* {cartProducts.map((product) => (
//           <div key={product.id}>
//             <h3>{product.title}</h3>
//             <p>Price: {product.price}</p>
//             <p>Quantity: {product.quantity}</p>
//             <button onClick={() => addToCart(product.id)}>Add</button>
//             <button onClick={() => removeFromCart(product.id)}>Remove</button>
//             <button onClick={() => deleteFromCart(product.id)}>Delete</button>
//           </div>
//         ))} */}
//       </div>
//     </div>
//   );
// }
