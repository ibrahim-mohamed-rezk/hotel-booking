import React from "react";
import HomeProducts from "../components/homeComponents/HomeProducts";
import ProductsCard from "../components/homeComponents/ProductsCard";
import Slider from "../components/homeComponents/Slider";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <ProductsCard />
      <HomeProducts />
    </div>
  );
};

export default Home;
