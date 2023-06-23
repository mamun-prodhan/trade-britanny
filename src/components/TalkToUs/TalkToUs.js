import React from "react";

const TalkToUs = () => {
  return (
    <div className="mb-16 md:mb-24 p-6 bg-[#29534F]">
      {/* heading */}
      <div className="lg:p-6">
        <h2 className="px-4 py-4 font-normal text-3xl lg:text-5xl text-start text-[#FFFFFF]">
          <span className="text-[#408628]">TALK</span> TO US
        </h2>
        <hr className="w-full border border-solid border-[#FFFFFF]" />
      </div>
      <div className=" lg:p-6">
        <form action="">
          <div className=" md:flex lg:flex  md:my-4 lg:my-4">
            <div className=" w-full md:w-1/2 lg:w-1/2 md:mr-6 lg:mr-6">
              <input
                className="w-full px-4 py-4 text-[#FFFFFF] outline-none border-b-2 bg-[#29534F] border-[#FFFFFF] placeholder-[#FFFFFF] "
                type="text"
                name="fullName"
                id="fullName"
                placeholder="*FULL NAME"
              />
            </div>
            <div className="w-full md:w-1/2 lg:w-1/2 md:mr-6 lg:mr-6">
              <input
                className="w-full text-[#FFFFFF] px-4 py-4 outline-none border-b-2 bg-[#29534F] border-[#FFFFFF] placeholder-[#FFFFFF]  "
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                placeholder="*PHONE NUMBER"
              />
            </div>
          </div>
          <div className=" md:flex lg:flex">
            <div className="w-full md:w-1/2 lg:w-1/2 md:mr-6 lg:mr-6">
              <input
                className="w-full text-[#FFFFFF] px-4 py-4 outline-none border-b-2 bg-[#29534F] border-[#FFFFFF] placeholder-[#FFFFFF] "
                type="text"
                name="email"
                id="email"
                placeholder="*EMAIL"
              />
            </div>
            <div className="w-full md:w-1/2 lg:w-1/2 md:mr-6 lg:mr-6">
              <input
                className="w-full text-[#FFFFFF] px-4 py-4 outline-none border-b-2 bg-[#29534F] border-[#FFFFFF] placeholder-[#FFFFFF]  "
                type="text"
                name="subject"
                id="subject"
                placeholder="*SUBJECT"
              />
            </div>
          </div>
          <div className="w-full my-6">
            <textarea
              className="w-full  px-4 align-bottom relative outline-none border-b-2 bg-[#29534F] border-[#FFFFFF] placeholder-[#FFFFFF] text-[#FFFFFF] placeholder:absolute placeholder:top-48 "
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="*MESSAGE"
            ></textarea>
          </div>
          <div className="text-start">
            <input className="w-36 md:w-40 lg:w-40 h-10 lg:h-10 rounded-md lg:rounded-lg uppercase cursor-pointer font-semibold md:font-semibold lg:font-semibold bg-[#29534F] border-2 border-[#FFFFFF] text-[#FFFFFF]" type="submit" value="send message" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default TalkToUs;
