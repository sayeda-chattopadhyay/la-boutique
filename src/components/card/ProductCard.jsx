import { StyledCard } from "../styles/Card.styled";
import { StyledButton } from "../styles/Button.styled";
import ProductReviews from "../../components/review/ProductReviews";

export default function ProductCard({
  product: {
    id,
    imageUrl,
    title,
    description,
    price,
    discountedPrice,
    reviews,
  },
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
        <ProductReviews reviews={reviews} />
        <div>
          <StyledButton>Add to cart</StyledButton>
        </div>
      </StyledCard>
    </>
  );
}
