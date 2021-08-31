import React from "react";
import { useState } from "react";

function Item({ name, category }) {

  const [inCard, setInCart] = useState("");

function handleInCard() {
  if (inCard === "")
  setInCart("in-cart");
  else
  setInCart("");
}

  return (
    <li className={inCard}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleInCard}>Add to Cart</button>
    </li>
  );
}

export default Item;
