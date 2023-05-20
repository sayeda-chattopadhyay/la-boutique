import Banner from "../components/banner/Banner";
import Search from "../components/search/Search";

import Products from "../api/Products";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <Search />
      <Products />
    </div>
  );
};

export default Home;
