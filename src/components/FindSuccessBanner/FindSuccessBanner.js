import React from 'react';
import image from '../../assets/image/trade.png'

const FindSuccessBanner = () => {
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
        <div className="absolute px-6 lg:px-10 flex justify-center w-full transform -translate-y-36 md:-translate-y-1/2 top-44 md:top-14 lg:top-24">
          <h2 className="text-3xl md:text-3xl lg:text-5xl font-semibold md:text-[#FFFFFF] lg:text-[#FFFFFF] leading-none">
          Are you ready to find success?
          </h2>
        </div>
  
        {/* button */}
        <div className="absolute flex justify-center items-center  transform -translate-y-1/2 w-full top-56 md:top-36 lg:top-56">
          <button className="mr-6 w-36 md:w-40 lg:w-44 h-10 lg:h-10 rounded-md lg:rounded-lg uppercase font-semibold bg-[#FFFFFF] border-2 border-[#29534F] text-[#29534F]">
          post a job
          </button>
          <button className="w-36 md:w-40 lg:w-44 h-10 lg:h-10 rounded-md lg:rounded-lg uppercase font-semibold bg-[#FFFFFF] border-2 border-[#29534F] text-[#29534F]">
          find a job
          </button>
        </div>
      </div>
    );
};

export default FindSuccessBanner;