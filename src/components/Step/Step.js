import React from "react";

const Step = (props) => {
  // destructuring the props
  const { image, step, title, description } = props.step;
  return (
    <div className="p-6 lg:p-10 text-start bg-[#F8FAF7] rounded-lg">
      <img src={image} alt="arrow steps" />
      <h3 className="text-xl my-3">{step}</h3>
      <p className="text-xl font-semibold mb-2">{title}</p>
      <p>{description}</p>
    </div>
  );
};

export default Step;