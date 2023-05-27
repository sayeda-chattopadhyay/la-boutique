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
  return (
    <>
      <StyledCard key={id}>
        <div className="card-image">
          <img src={imageUrl} alt={title} />
        </div>
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div>
          <p>{price}</p>
          <p>{discountedPrice}</p>
        </div>
        <div>
          <p>{discountedPrice}</p>
        </div>
        <ProductReviews reviews={reviews} />
        <div>
          <StyledButton>Add to cart</StyledButton>
        </div>
      </StyledCard>
    </>
  );
}
