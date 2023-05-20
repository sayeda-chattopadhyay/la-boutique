import Banner from "../components/banner/Banner";

import Products from "../api/Products";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <Products />
    </div>
  );
};

export default Home;
