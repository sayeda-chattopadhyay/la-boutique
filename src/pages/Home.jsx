import React from "react";

import Products from "../api/Products";

const Home = () => {
  return (
    <div className="home">
      <h1>Home Page</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis,
        repellat!
      </p>
      <Products />
    </div>
  );
};

export default Home;
