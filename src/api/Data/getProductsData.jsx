import { useEffect, useState } from "react";

const url = "https://api.noroff.dev/api/v1/online-shop";

const ProductsArrayComponent = () => {
  const [productsArray, setProductsArray] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(url);
      const json = await response.json();
      setProductsArray(json);
    }
    getData();
  }, []);

  return productsArray;
};

function getProductData(id) {
  const productsArray = ProductsArrayComponent();

  let productData = productsArray.find((product) => product.id === id);

  if (productData === undefined) {
    console.log("Product data doesn´t exist for this id" + id);
    return null;
  }

  return productData;
}

export { ProductsArrayComponent, getProductData };
