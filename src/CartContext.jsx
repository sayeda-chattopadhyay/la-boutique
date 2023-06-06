import { createContext, useContext } from "react";
import useLocalStorage from "./localStorage/useLocalStorage";

export const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  calculateProductsCount: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},

  // total: () => {},
});

export function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useLocalStorage("cartProducts", []);

  // const [cartProducts, setCartProducts] = useState(
  //   JSON.parse(localStorage.getItem("cartProducts")) || []
  // );

  const totalItems = cartProducts.reduce(
    (count, item) => count + item.quantity,
    0
  );
  const totalPrice = cartProducts.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  console.log(cartProducts);
  console.log(totalItems);
  console.log(totalPrice);

  const contextValue = {
    items: cartProducts,
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost,
    calculateProductsCount,
  };

  // calculate total Items in the cart

  function calculateProductsCount() {
    return cartProducts.reduce((sum, item) => sum + item.quantity, 0);
  }

  // check if product is in cart and return quantity

  function getProductQuantity(id) {
    const quantity = cartProducts.find(
      (product) => product.id === id
    )?.quantity;

    if (quantity === undefined) {
      return 0;
    }

    return quantity;
  }

  // add one to cart takes in id, price, title,price, discountedPrice and returns quantity

  function addOneToCart(id, title, imageUrl, price, discountedPrice) {
    const quantity = getProductQuantity(id);

    if (quantity === 0) {
      // product is not in cart
      setCartProducts([
        ...cartProducts,
        {
          quantity: 1,
          id: id,
          title: title,
          imageUrl: imageUrl,
          price: price,
          discountedPrice: discountedPrice,
        },
      ]);
    } else {
      // product is in cart
      setCartProducts(
        cartProducts.map(
          (product) =>
            product.id === id // if condition
              ? { ...product, quantity: product.quantity + 1 } // if statement is true
              : product // if statement is false
        )
      );
    }
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  }

  // remove one from cart

  function removeOneFromCart(id) {
    const quantity = getProductQuantity(id);

    if (quantity === 1) {
      deleteFromCart(id);
    } else {
      setCartProducts(
        cartProducts.map(
          (product) =>
            product.id === id // if condition
              ? { ...product, quantity: product.quantity - 1 } // if statement is true
              : product // if statement is false
        )
      );
    }
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  }

  // delete from cart

  function deleteFromCart(id) {
    // [] if an object meets a condition, add the object to array
    setCartProducts((cartProducts) =>
      cartProducts.filter((currentProduct) => {
        return currentProduct.id !== id;
      })
    );
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  }

  // The total price for the Cart contents
  function getTotalCost() {
    let totalCost = 0;
    cartProducts.forEach((cartItem) => {
      let productPrice = cartItem.discountedPrice;
      if (!cartItem.discountedPrice) {
        productPrice = cartItem.price;
      }
      totalCost += productPrice * cartItem.quantity;
    });
    return totalCost;
  }

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

export default CartProvider;

export function useCartContext() {
  return useContext(CartContext);
}
