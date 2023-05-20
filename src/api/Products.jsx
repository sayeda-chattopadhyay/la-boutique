import { Link } from "react-router-dom";
import { StyledContainer } from "../components/styles/Container.styled";
import { StyledCard } from "../components/styles/Card.styled";

import useApi from "./ApiHooks";

const url = "https://api.noroff.dev/api/v1/online-shop";

const Products = () => {
  const { data, isLoading, isError } = useApi(url);

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  const products = data;

  return (
    <StyledContainer>
      {products.map((product) => (
        <StyledCard key={product.id}>
          <Link to={`/Product/${product.id}`}>
            <div className="card-image">
              <img src={product.imageUrl} alt={product.title} />
            </div>
            <div>
              <h2>{product.title}</h2>
              <p>{product.description}</p>
            </div>
            <div>
              <p>{product.price}</p>
              <p>{product.discountedPrice}</p>
            </div>
            <div>
              <button>View</button>
            </div>
          </Link>
        </StyledCard>
      ))}
    </StyledContainer>
  );
};

export default Products;
