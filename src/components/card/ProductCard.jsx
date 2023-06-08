import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { StyledProductCard } from "../styles/ProductCard.styled";
import ProductReviews from "../../components/review/ProductReviews";
import { useContext } from "react";
import { CartContext } from "../../CartContext";

export default function ProductCard({ data }) {
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(data.id);

  const [showModal, setShowModal] = useState(false);

  const { id, title, imageUrl, description, reviews, price, discountedPrice } =
    data;

   function calculateDiscountPercentage(price, discountedPrice) {
    if (price && discountedPrice) {
      const discount = price - discountedPrice;
      const discountPercentage = Math.round((discount / price) * 100);
      return discountPercentage;
    } else {
      return null;
    }
  }

  const discountPercentage = calculateDiscountPercentage(
    price,
    discountedPrice
  );

  const addToCart = () => {
    cart.addOneToCart(
      data.id,
      data.title,
      data.imageUrl,
      data.price,
      data.discountedPrice
    );
    setShowModal(true);
  };

  return (
    <>
      <StyledProductCard key={id}>
        <div className="card-wrapper">
          <div className="card-image">
            {discountPercentage > 0 && (
              <div className="discount-percentage">
                {discountPercentage}% Off
              </div>
            )}
            <img src={imageUrl} alt={title} />
          </div>
          <div className="card-content">
            <h2>{title}</h2>
            <hr />
            <p>{description}</p>
            <div className="card-footer">
              {/* <p>{price}</p>
              <p>{discountedPrice}</p> */}
               <div className="productCard-price">
            {discountedPrice && price !== discountedPrice ? (
              <>
                <p>
                  <del>Nok {price}</del>
                </p>
                <p>{discountedPrice}</p>
              </>
            ) : (
              <p>Nok {price}</p>
            )}
          </div>
              <Button variant="primary" onClick={addToCart}>
                Add To Cart
              </Button>
            </div>
          </div>
        </div>
        <hr />
        <ProductReviews reviews={reviews} />
      </StyledProductCard>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Product Added to Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="modal-text">
            {productQuantity} {title} has been added to your cart.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Continue Shopping
          </Button>
          <Button variant="primary" href="/cart">
            Go to Cart
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
