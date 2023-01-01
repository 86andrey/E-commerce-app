import React from "react";
import product from "../sanity-commerce/schemas/product";

const Home = () => {
  return (
    <>
      HeroBanner
      <div>
        <h2>Best Seller Products</h2>
        <p>speaker There are many variations passages</p>
      </div>
      <div>{["Product 1", "Product 2"].map((product) => product)}</div>
      Footer
    </>
  );
};

export default Home;
