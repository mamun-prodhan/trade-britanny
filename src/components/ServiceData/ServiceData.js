import React from "react";

const ServiceData = (props) => {
  const title = props.service;
  const index = props.index;

  return (
    <div>
      <label className="focus-within:border-2 focus-within:border-[#3F8825] text-left rounded-xl w-[90%] lg:w-[50%] p-3 m-2 bg-[#E6EBE3] inline-block">
        <div className="flex justify-center items-center">
        <div className="w-4/5">
        <p className="ml-3">{title}</p>
        </div>
        <div className="w-1/5 text-right">
        <input
          className="mr-3"
          type="radio"
          id={index}
          name="radio"
          value={title}
        />
        </div>
        </div>
      </label>
    </div>
  );
};

export default ServiceData;
