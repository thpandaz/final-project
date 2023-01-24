import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <article className="card-container">
      <img src = {props.src} className="card-img"/>
      <h3 className="card-title">Lemon Meringue Pie</h3>
      <div className="card-price">$4.99</div>
      <p className="card-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare
        lectus elit, a luctus sem mollis sit amet.
      </p>
      <div className="card-btn">Order Delivery</div>
    </article>
  );
}

export default Card;
