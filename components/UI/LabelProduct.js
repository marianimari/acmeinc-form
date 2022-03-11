import React from "react";

const LabelProduct = (props) => {
  return (
    <label className="text-white bg-dark-100 uppercase leading-[10px] text-[9px] font-bold tracking-[2px] px-2 py-1 rounded-full">
      {props.label}
    </label>
  );
};

export default LabelProduct;
