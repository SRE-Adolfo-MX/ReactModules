import React from "react";
import Counter from "./Counter";
import Like from "./Like";

const Card = ({ title, qty, like, onLikeClick, onAddClick, onRestClick }) => {
  const cardStyle = {
    border: "1px solid gray",
    margin: "5px",
    padding: "15px",
    minWidth: "300px",
    width: "300px",
  };
  return (
    <div style={cardStyle}>
      <Like like={like} onLikeClick={onLikeClick} />
      <h2>{title}</h2>
      <Counter qty={qty} onAddClick={onAddClick} onRestClick={onRestClick}  />
    </div>
  );
};

export default Card;
