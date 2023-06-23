import React from "react";

const Trade = (props) => {
  // destructuring the props
  const { image, title } = props.trade;

  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <img className="w-10" src={image} alt="service icon" />
      </div>
      <div className="mt-2">
        <small>{title}</small>
      </div>
    </div>
  );
};

export default Trade;
