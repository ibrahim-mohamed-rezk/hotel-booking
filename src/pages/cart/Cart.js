import React from "react";
import { Link } from "react-router-dom";
import emptyCartImg from "../../assets/images/cart/emptyCartImg.svg";
import ProductCard from "../../components/ProductCard";
import "./cart.css";
import style from "./cart.module.css";

const Cart = () => {
  return (
    <div>
      <div className="cart-container">
        <div className="cart-left-sec">
          <div className="left-sec-content-1">
            <img src={emptyCartImg} alt="img" />
            <div>
              <h2>Your Amazon Cart is empty</h2>
              <Link to="/">
                <span className="left-sec-content-link">
                  Shop today's deals
                </span>
              </Link>
            </div>
          </div>
          <div className="left-sec-content-2"></div>
          <div className="left-sec-content-3">
            <p>
              The price and availability of items at Amazon.com are subject to
              change. The Cart is a temporary place to store a list of your
              items and reflects each item's most recent price.
              <Link to="/">
                <span className="left-sec-content-link">Learn more</span>
              </Link>
            </p>
            <p>
              Do you have a gift card or promotional code? We'll ask you to
              enter your claim code when it's time to pay.
            </p>
          </div>
        </div>

        <div className="cart-right-sec">
          <h2>Your recently viewed items</h2>
          <ProductCard style={style} />
          <ProductCard style={style} />
          <ProductCard style={style} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
