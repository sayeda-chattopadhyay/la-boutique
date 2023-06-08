import { StyledCard } from "../styles/Card.styled";
// import { StyledButton } from "../../components/styles/Button.styled";
import { Link } from "react-router-dom";
// import { useContext } from "react";
// import { CartContext } from "../../CartContext";
//import { Button } from "react-bootstrap";

export default function Card({
  product: { id, imageUrl, title, description, price, discountedPrice },
}) {
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
        <Link to={`/Product/${id}`} className="link">
          <div className="card-image">
            {discountPercentage > 0 && (
              <div className="discount-percentage">
                {discountPercentage}% Off
              </div>
            )}
            <img src={imageUrl} alt={title} />
          </div>
          <div>
            <h3>{title}</h3>
            <hr />
            <p>{description}</p>
          </div>
          <div className="price">
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
        </Link>
      </StyledCard>
    </>
  );
}
