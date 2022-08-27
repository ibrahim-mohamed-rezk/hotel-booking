import React from "react";
import ProductCard from "../ProductCard";
import style from "./homeproducts.module.css";

const HomeProducts = () => {
  return (
    <div className={style.productsSection}>
      <h2 className={style.sectionName}>Top Sellers</h2>
      <div className={style.productsContainer}>
        <ProductCard style={style} />
        <ProductCard style={style} />
        <ProductCard style={style} />
        <ProductCard style={style} />
        <ProductCard style={style} />
        <ProductCard style={style} />
        <ProductCard style={style} />
        <ProductCard style={style} />
        <ProductCard style={style} />
        <ProductCard style={style} />
        <ProductCard style={style} />
        <ProductCard style={style} />
      </div>
    </div>
  );
};

export default HomeProducts;
