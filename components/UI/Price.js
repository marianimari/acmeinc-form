import React from "react";

const Price = (props) => {
  return <span className="line-through">Rp{toRupiahs(props.price)}</span>;
};

const toRupiahs = (num) => {
  const rupiah = num
    .toString()
    .split("")
    .reverse()
    .join("")
    .match(/\d{1,3}/g)
    .join(".")
    .split("")
    .reverse()
    .join("");
  return rupiah;
};

export default Price;
