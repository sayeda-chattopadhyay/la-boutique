import Product from "../api/Product";
import BreadCrumbs from "../components/breadcrumbs/BreadCrumbs";

const ProductPage = () => {
  return (
    <div className="product-page">
      <BreadCrumbs />
      <Product />
    </div>
  );
};

export default ProductPage;
