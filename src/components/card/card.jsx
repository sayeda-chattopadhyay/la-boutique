import { StyledCard } from "../../components/styles/Card.styled";
import { Link } from "react-router-dom";

export default function Card({
  product: { id, imageUrl, title, description, price, discountedPrice },
}) {
  return (
    <StyledCard key={id}>
    <Link to={`/Product/${id}`}>
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
        <button>View</button>
      </div>
    </Link>
    </StyledCard>
  );
}
