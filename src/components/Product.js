import React from "react";
import "./Product.css";
import { useStateContextValue } from "../context/StateProvider";
import { useHistory } from "react-router";

function Product({ id, title, price, rating, image }) {
  const [{ user, basket }, dispatch] = useStateContextValue();
  const history = useHistory();

  const addToBasket = () => {
    if (user) {
      dispatch({
        type: "ADD_TO_BASKET",
        item: {
          id,
          title,
          price,
          rating,
          image,
        },
      });
    } else {
      alert("You have to login first for adding product into basket !");
      history.push("/login");
    }
  };

  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />
      <button onClick={addToBasket}>Add To Basket</button>
    </div>
  );
}

export default Product;
