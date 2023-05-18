import React from "react";
import { Link } from "react-router-dom";

import useApi from "./ApiHooks";

const url = "https://api.noroff.dev/api/v1/online-shop";

const Products = () => {
  const { data, isLoading, isError } = useApi(url);

  console.log(data);

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  const products = data;
  console.log(products);

  return (
    <div className="products">
      {products.map((product) => (
        <Link to= {product.id.toString()} key={product.id}>
          <img src={product.imageUrl} alt={product.title} />
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <p>{product.discountedPrice}</p>
        </Link>
      ))}
    </div>
  );
};

export default Products;
