
import { StyledContainer } from "../components/styles/Container.styled";
import Card from "../components/card/Card"; 
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
      {products.map((product, index) => (
        <Card key={index} product={product} />
      ))}
    </StyledContainer>
  );
};

export default Products;
