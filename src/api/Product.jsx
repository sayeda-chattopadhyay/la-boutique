import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { StyledContainer } from "../components/styles/Container.styled";
import ProductCard from "../components/card/ProductCard";

const Product = () => {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    async function getData(url) {
      try {
        setIsLoading(true);
        setIsError(false);

        const response = await fetch(url);
        const json = await response.json();

        setProduct(json);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    getData(`https://api.noroff.dev/api/v1/online-shop/${id}`);
  }, [id]);

  if (isLoading || !product) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>There is an error</div>;
  }

  console.log(product);

  return (
    <StyledContainer>
      <ProductCard data={product} />
    </StyledContainer>
  );
};

export default Product;

// revirews need to be added to the product page
