import { Button } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../../CartContext";
import { getProductData } from "../../api/Data/getProductsData"; // to get product data

const CartProduct = (props) => {
  const cart = useContext(CartContext);
  const id = props.id;
  const quantity = props.quantity;

  const productData = getProductData(id);

  return (
    <>
      <h3>{productData.title}</h3>
      <p>{quantity} total</p>
      <p>Total:${(quantity * productData.price).toFixed(2)}</p>
      <Button size="sm" onClick={() => cart.deleteFromCart(id)}>
        Remove
      </Button>
      <hr></hr>
    </>
  );
};

export default CartProduct;
