import React from "react";

const Toast = (props) => {
  return (
    <div
      className="
        bg-dark-transparent-50
        text-white
        font-medium
        rounded-xl
        p-3
        text-center
        text-sm
        leading-4
    "
    >
      {props.message}
    </div>
  );
};

export default Toast;
