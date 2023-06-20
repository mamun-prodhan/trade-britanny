import React from "react";
import image from "../../assets/icons/plus.png";
import { Link } from "react-router-dom";

const Category = (props) => {
  // destructring the props
  const { id, title } = props.category;
  return (
    <div>
      <Link to={`/category/${id}`}>
        <button className="py-2 px-3 my-2 mr-3 rounded-xl bg-[#E6EBE3] hover:bg-[#3F8825] focus:bg-[#3F8825]">
          {title}
          <img className="inline ml-2" src={image} alt="icon" />
        </button>
      </Link>
    </div>
  );
};

export default Category;
