import React from 'react';
import image from '../../assets/Banner/banner-01.jpg'

const HowItWorks = () => {
    return (
        <div className="relative mb-16 md:mb-24">
      {/* background image */}
      <div>
        <img
          className="w-full rounded-xl object-cover h-96 md:h-96 lg:h-full xl:h-full"
          src={image}
          alt="background"
        />
      </div>
      {/* heading */}
      <div className="absolute text-start flex justify-start transform -translate-y-36 md:-translate-y-1/2 left-6 md:left-6 lg:left-16 top-44 md:top-20 lg:top-32">
        <h2 className="text-3xl md:text-3xl lg:text-5xl w-[80%] md:w-[100%] lg:w-[100%] font-semibold text-[#081D03] leading-none">
        How FindaTrade <br/>Brittany works
        </h2>
      </div>
      <div className="absolute mt-3 md:mt-4 lg:mt-0 text-start flex justify-start transform -translate-y-36 md:-translate-y-1/2 left-6 md:left-6 lg:left-16 top-60 md:top-28 lg:top-48">
        <hr className="w-36 md:w-32 lg:w-56 border border-solid border-[#3F8825]" />
      </div>

      {/* description */}
      <div className="absolute mt-3 md:mt-6 lg:mt-0 flex justify-start text-start transform -translate-y-44 md:-translate-y-44 lg:-translate-y-1/2 w-64 md:w-80 lg:w-1/4 left-6 md:left-6 lg:left-16 top-72 md:top-72 lg:top-72">
        <p className="text-[#081D03] font-semibold md:text-xl">
        Find the Perfect Projects for Your Skills with Findatrade Brittany's Smart Matchmaking Process. Win local and grow your business.
        </p>
      </div>
      {/* text card */}
      <div className="absolute mt-5 md:mt-0 flex items-center transform -translate-y-1/2 w-5/6 left-6 md:left-6 lg:left-16 top-3/4 md:top-[80%]">
        <button className="w-48 md:w-48 lg:w-52 h-10 lg:h-12 rounded-md lg:rounded-lg uppercase font-normal md:font-semibold lg:font-semibold bg-[#FFFFFF] border-2 border-[#4EA52F] text-[#4EA52F]">
        FIND THE PERFECT JOB
        </button>
      </div>
    </div>
    );
};

export default HowItWorks;