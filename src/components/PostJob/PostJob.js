import React, { useEffect, useState } from "react";
import { SearchIcon } from "@heroicons/react/outline";
import Category from "../Category/Category";
import { categories } from "./Data";

let correctIndex;

const PostJob = () => {
  const [value, setValue] = useState(""); //setValue form input
  const [filteredState, setFilteredState] = useState(categories); //categories imported from Data.js

  // letter by letter search filtering
  useEffect(() => {
    if (value !== "") {
      const res = categories.filter((category, index) => {
        if (category.title.toLowerCase().startsWith(value.toLowerCase())) {
          correctIndex = value.length;
          return category.title.toLowerCase().startsWith(value.toLowerCase());
        } else {
          return category.title
            .toLowerCase()
            .startsWith(value.substring(0, correctIndex).toLowerCase());
        }
      });
      setFilteredState(res);
    } else {
      setFilteredState(categories);
    }
  }, [value]);

  // const [categories, setCategories] = useState([]);
  // fetching data from category.json
  // useEffect(() => {
  //   fetch("category.json")
  //     .then((res) => res.json())
  //     .then((data) => setCategories(data));
  // }, []);

  return (
    <div>
      {/* post job title */}
      <div className="pt-16 lg:pt-24 pb-6 lg:pb-10 px-6 lg:px-0 bg-[#E5EBE4] text-center">
        <h2 className="text-3xl lg:text-5xl text-[#081D03] font-semibold ">
          Post a job
        </h2>
        <hr className="mt-2 mx-auto lg:mt-4 w-44 lg:w-48 border border-solid border-[#28534E]" />
        <p className="mt-2 text-xl lg:text-2xl text-[#081D03]">
          Get responses from Findatrade Brittany screened and reviewed
          tradespeople near you
        </p>
      </div>
      {/* search section */}
      <div className="text-center px-6 lg:px-0">
        {/* title */}
        <p className="py-6 lg:py-10 text-2xl lg:text-3xl font-semibold text-[#081D03]">
          What would you like to have done?
        </p>
        {/* search bar */}
        <form action="" className="mx-auto w-full max-w-2xl">
          <div className="relative flex items-center">
            <SearchIcon className="w-5 h-6 text-[#081D03] absolute ml-3 pointer-events-none"></SearchIcon>
            <input
              type="text"
              name="search"
              autoComplete="off"
              className="pr-3 pl-10 py-2 w-full font-semibold text-[#081D03] rounded-xl border-none ring-2 ring-[#E5EBE4] focus:outline-[#3F8825] focus:ring-2"
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
        </form>
      </div>
      {/* job categories section */}
      <div className="flex flex-wrap mt-16 mt:md-24 mb-16 md:mb-24 mx-auto w-full px-6 lg:px-6">
        {filteredState.map((category, index) => (
          <Category key={index} category={category}></Category>
        ))}
      </div>
    </div>
  );
};

export default PostJob;
