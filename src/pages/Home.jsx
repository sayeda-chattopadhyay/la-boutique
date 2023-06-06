import Banner from "../components/banner/Banner";
import { ProductListProvider } from "../ProductListContext";

import Products from "../api/Products";

const Home = () => {
  return (
    <div className="home">
      <ProductListProvider>
        <Banner />
        <Products />
      </ProductListProvider>
    </div>
  );
};

export default Home;
