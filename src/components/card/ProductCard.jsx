import { StyledCard } from "../styles/Card.styled";
// import { StyledButton } from "../styles/Button.styled";
import ProductReviews from "../../components/review/ProductReviews";
import { useContext } from "react";
import { CartContext } from "../../CartContext";
import { Button, Form, Row, Col } from "react-bootstrap";
// import { Link } from "react-router-dom";

// import { formatCurrency } from "../../helper/PriceFormat";

export default function ProductCard({ data }) {
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(data.id);

  console.log("productQuantity:", productQuantity);

  console.log("items in the cart :", cart.items);

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

  return (
    <>
      <StyledCard key={id}>
        <div className="card-image">
          {discountPercentage > 0 && (
            <div className="discount-percentage">{discountPercentage}% Off</div>
          )}
          <img src={imageUrl} alt={title} />
        </div>
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div>
          <p>Price: {price}</p>
          <p>Discounted Price: {discountedPrice}</p>
        </div>
        {/* <div>{reviews && reviews.rating}</div>
        <div className="p-3">Tags #{tags}</div> */}
        {/* <div className="">Hello:{formatCurrency(discountedPrice)}</div> */}
        <ProductReviews reviews={reviews} />
        {productQuantity > 0 ? (
          <>
            <Form as={Row}>
              <Form.Label column="true" sm="6">
                {productQuantity} {title} added to cart
              </Form.Label>
              <Col sm="6">
                <Button
                  sm="6"
                  onClick={() =>
                    cart.addOneToCart(
                      data.id,
                      data.title,
                      data.imageUrl,
                      data.price,
                      data.discountedPrice
                    )
                  }
                  className="mx-2"
                >
                  +
                </Button>
                {productQuantity}
                <Button
                  sm="6"
                  onClick={() => cart.removeOneFromCart(id)}
                  className="mx-2"
                >
                  -
                </Button>
              </Col>
            </Form>
            <Button
              variant="danger"
              onClick={() => cart.deleteFromCart(id)}
              className="my-2"
            >
              Remove From Cart
            </Button>
          </>
        ) : (
          <>
            <Button
              variant="primary"
              onClick={() =>
                cart.addOneToCart(
                  data.id,
                  data.title,
                  data.imageUrl,
                  data.price,
                  data.discountedPrice
                )
              }
            >
              Add To Cart
            </Button>
            {/* <Link to="/cart">Go to Cart</Link> */}
          </>
        )}
      </StyledCard>
    </>
  );
}
