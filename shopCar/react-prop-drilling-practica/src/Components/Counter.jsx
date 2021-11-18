import React from "react";

const Counter = ({ qty, onAddClick, onRestClick }) => {
  const styleContainer = {
    margin: "5px",
    fontSize: "20px",
  };
  const styleQty = {
    marginLeft: "15px",
    marginRight: "15px",
  };
  return (
    <div style={styleContainer}>
      {qty <= 0 ? null : <button onClick={onRestClick}> - </button>}
      <span style={styleQty}>{qty}</span>
      <button onClick={onAddClick}> + </button>
    </div>
  );
};

export default Counter;
