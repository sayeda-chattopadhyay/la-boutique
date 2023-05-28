import useApi from "./ApiHooks";

function GetProductData(id) {
  const url = "https://api.noroff.dev/api/v1/online-shop/products";

  const { data } = useApi(url);

  const productsArray = data;

  let productData = productsArray.find((product) => product.id === id);

  if (productData === undefined) {
    return (productData = productsArray[0]);
  }

  return productData;
}

export default GetProductData;
