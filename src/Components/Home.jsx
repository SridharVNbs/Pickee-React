import React from "react";
import Slider from "./Slider";
import Category from "./Category";
import Shopnote from "./Shopnote";
import Product from "./Product";
import Banner from "./Banner";
import Support from "./Support";

const Home = () => {
  const note1 = {
    n1: "Shop",
    n2: "Smart",
    n3: "Save",
    n4: "Big",
    des: "Elevate Your Lifestyle with Premium Products at Unmatched Prices!",
  };
  const note2 = {
    n1: "Big",
    n2: "Savings",
    n3: "Bigger",
    n4: "Smiles",
    des: "Shop the Best Deals Today!",
  };

  return (
    <div>
      <Slider />
      <Category />
      <Shopnote {...note1} />
      <Product />
      <Shopnote {...note2} />
      <Product />
      <Banner />
      <Support />
    </div>
  );
};

export default Home;
