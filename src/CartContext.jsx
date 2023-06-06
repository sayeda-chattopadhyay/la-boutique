import { createContext, useState , useContext} from "react";
//import { useEffect } from "react";
//import { getProductData } from "./api/Data/getProductsData";

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
  const [cartProducts, setCartProducts] = useState([]);
  console.log(cartProducts);

  // total number of products in cart

  // const [productsCount, setproductsCount] = useState(0);

  // useEffect(() => {
  //   if (cartProducts) {
  //     const count = cartProducts.reduce((acc, currentItem) => {
  //       return acc + currentItem.count;
  //     }, 0);
  //     setproductsCount(count);
  //   }
  // }, [cartProducts]);

  // calculate total cost
  // const [total, setTotal] = useState(0);

  // useEffect(() => {
  //   const total = cartProducts.reduce((acc, item) => {
  //     return acc + item.price * item.quantity;
  //   }, 0);
  //   setTotal(total);
  // }, [cartProducts]);

  const contextValue = {
    items: cartProducts,
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost,
    calculateProductsCount,

    // total,
    // productsCount: productsCount,
  };

  // get product quantity

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
  }

  // delete from cart

  function deleteFromCart(id) {
    // [] if an object meets a condition, add the object to array
    setCartProducts((cartProducts) =>
      cartProducts.filter((currentProduct) => {
        return currentProduct.id !== id;
      })
    );
  }

  // function getTotalCost() {
  //   let totalCost = 0;
  //   cartProducts.forEach((cartItem, index) => {
  //     //const productData = getProductData(cartItem.id);
  //     totalCost += cartItem.price * cartItem.quantity;
  //   });
  //   console.log(totalCost);
  //   return totalCost;
  // }

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