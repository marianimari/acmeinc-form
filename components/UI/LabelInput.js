import React from "react";

const LabelInput = (props) => {
  return (
    <>
      <span className="font-medium mx-1 after:ml-0.5 after:text-red-500 block text-sm font-medium text-dark-100 ">
      {props.label}
      </span>
    </>
  );
};

export default LabelInput;
