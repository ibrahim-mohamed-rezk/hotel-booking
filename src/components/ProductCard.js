import React from "react";

const ProductCard = ({ style }) => {
  return (
    <div className={style.productContainer}>
      <div className={style.productTitle}>
        <p>
          this is the product title the biggest one no the biggest biggest one
        </p>
      </div>
      <div className={style.productInfo}>
        <p>$119</p>
        <p>* * * *</p>
      </div>
      <div className={style.productImg}>
        <img
          src="https://m.media-amazon.com/images/I/71S4-y6HwzS._AC_SY200_.jpg"
          alt="img"
        />
      </div>
      <div className={style.productBtn}>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
