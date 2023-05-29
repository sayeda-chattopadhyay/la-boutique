import { StyledCard } from "../../components/styles/Card.styled";
// import { StyledButton } from "../../components/styles/Button.styled";
import { Link } from "react-router-dom";
// import { useContext } from "react";
// import { CartContext } from "../../CartContext";
import { Button } from "react-bootstrap";

export default function Card({
  product: { id, imageUrl, title, description, price, discountedPrice },
}) {
  return (
    <>
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
            <Button>View Item</Button>
          </div>
        </Link>
      </StyledCard>
    </>
  );
}
