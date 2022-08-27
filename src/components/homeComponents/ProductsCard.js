import React from "react";
import "./productsCard.css";
import img11 from "../../assets/images/home/carts/carts1/headset.jpg";
import img12 from "../../assets/images/home/carts/carts1/keyboard.jpg";
import img13 from "../../assets/images/home/carts/carts1/mice.jpg";
import img14 from "../../assets/images/home/carts/carts1/chair.jpg";
import img21 from "../../assets/images/home/carts/cart2/labtop.jpg";
import img22 from "../../assets/images/home/carts/cart2/console.jpg";
import img23 from "../../assets/images/home/carts/cart2/baby.jpg";
import img24 from "../../assets/images/home/carts/cart2/toy.jpg";
import dress from "../../assets/images/home/carts/cart3/derss.jpg";
import health from "../../assets/images/home/carts/cart4/health.jpg";

const ProductsCard = () => {
  const Cart = (props) => {
    return (
      <div>
        <h2 className="title">{props.title}</h2>
        <div className="img-container">
          <div>
            <img src={props.img1} alt="img" />
            <span>{props.title1}</span>
          </div>
          <div>
            <img src={props.img2} alt="img" />
            <span>{props.title2}</span>
          </div>
          <div>
            <img src={props.img3} alt="img" />
            <span>{props.title3}</span>
          </div>
          <div>
            <img src={props.img4} alt="img" />
            <span>{props.title4}</span>
          </div>
        </div>
        <span className="see-more-link">See more</span>
      </div>
    );
  };

  const ProductsCard2 = (props) => {
    return (
      <div>
        <h2 className="title">{props.title}</h2>
        <div className="cart2-img">
          <img src={props.img} alt="img" />
        </div>
        <span className="see-more-link">Shop now</span>
      </div>
    );
  };

  return (
    <div className="products-card-container">
      <Cart
        title="Gaming accessories"
        img1={img11}
        img2={img12}
        img3={img13}
        img4={img14}
        title1="Headsets"
        title2="Keyboards"
        title3="Computer mice"
        title4="Charis"
      />
      <Cart
        title="Shop by Category"
        img1={img21}
        img2={img22}
        img3={img23}
        img4={img24}
        title1="Computers & Accessoris"
        title2="Video Games"
        title3="Baby"
        title4="Toys & Games"
      />
      <ProductsCard2 title="Dresses" img={dress} />
      <ProductsCard2 title="Health & Personal Care" img={health} />
    </div>
  );
};

export default ProductsCard;
