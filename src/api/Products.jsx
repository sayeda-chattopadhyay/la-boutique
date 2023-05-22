import { useState } from "react";
import { StyledContainer } from "../components/styles/Container.styled";
import Card from "../components/card/Card";
import useApi from "./ApiHooks";

const url = "https://api.noroff.dev/api/v1/online-shop";

const Products = () => {
  const [search, setSearch] = useState("");

  const { data, isLoading, isError } = useApi(url);

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  const products = data;

  return (
    <>
      <StyledContainer>
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="search"
          placeholder="Search"
        />
      </StyledContainer>
      <StyledContainer>
        {products
          .filter((product) => {
            return search.toLowerCase() === ""
              ? product
              : product.title.toLowerCase().includes(search);
          })
          .map((product, index) => (
            <Card key={index} product={product} />
          ))}
      </StyledContainer>
    </>
  );
};

export default Products;
