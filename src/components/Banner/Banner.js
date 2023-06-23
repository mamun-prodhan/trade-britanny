import React from "react";
import image from "../../assets/image/banner.png";

const Banner = () => {
  return (
    <div className="relative mb-16 md:mb-24">
      {/* background image */}
      <div>
        <img
          className="w-full rounded-xl object-cover h-72 md:h-96 lg:h-full xl:h-full"
          src={image}
          alt="background"
        />
      </div>
      {/* heading */}
      <div className="absolute text-start flex justify-start transform -translate-y-36 md:-translate-y-1/2 left-6 md:left-6 lg:left-16 top-44 md:top-24 lg:top-44">
        <h2 className="text-3xl md:text-3xl lg:text-5xl w-[80%] md:w-[80%] lg:w-[80%] font-semibold text-[#081D03] leading-none">
          Find local Builders near you
        </h2>
      </div>
      <div className="absolute mt-3 md:mt-6 lg:mt-6 text-start flex justify-start transform -translate-y-36 md:-translate-y-1/2 left-6 md:left-6 lg:left-16 top-60 md:top-32 lg:top-56">
        <hr className="w-36 md:w-32 lg:w-56 border border-solid border-[#3F8825]" />
      </div>

      {/* description */}
      <div className="absolute mt-3 md:mt-6 lg:mt-6 flex justify-start text-start transform -translate-y-44 md:-translate-y-44 lg:-translate-y-1/2 w-64 md:w-80 lg:w-1/4 left-6 md:left-6 lg:left-16 top-72 md:top-80 lg:top-72">
        <p className="text-[#081D03] font-semibold md:text-xl">
          Get responses from Findatrade Brittany screened and reviewed
          tradespeople near you.
        </p>
      </div>
      {/* text card */}
      <div className="absolute mt-5 md:mt-0 flex items-center transform -translate-y-1/2 w-5/6 left-6 md:left-6 lg:left-16 top-3/4 md:top-[80%]">
        <button className="w-48 md:w-48 lg:w-52 h-10 lg:h-12 rounded-md lg:rounded-lg uppercase font-normal md:font-semibold lg:font-semibold bg-[#FFFFFF] border-2 border-[#4EA52F] text-[#4EA52F]">
        find opportunities
        </button>
      </div>
    </div>
  );
};

export default Banner;
