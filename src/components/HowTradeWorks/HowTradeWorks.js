import React from 'react';
import img from '../../assets/icons/send.svg';
import TradeStep from '../TradeStep/TradeStep';

  // stepsData array of objects
  const stepsData = [
    {
      image: img,
      step: "STEP 1",
      title: "Build Your Profile",
      description: "Highlight your skills, experience, and qualifications.",
    },
    {
      image: img,
      step: "STEP 2",
      title: "Find Relevant Jobs",
      description:
        "Browse through the available job listings and filter them.",
    },
    {
      image: img,
      step: "STEP 3",
      title: "Connect with clients",
      description: "Reach out to the client directly, Clarify any questions.",
    },
    {
      image: img,
      step: "STEP 4",
      title: "Secure the Project",
      description:
        "Confirm the pricing, timelines, and any other relevant details.",
    },
  ];

const HowTradeWorks = () => {
    return (
        <div className="p-6 lg:p-10 mb-16 md:mb-24">
        {/* heading */}
        <h2 className="mb-12 lg:mb-24 font-normal text-3xl lg:text-5xl text-center">
          How it works
        </h2>
        {/* steps card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {stepsData.map((step, index) => (
            <TradeStep key={index} step={step}></TradeStep>
          ))}
        </div>
      </div>
    );
};

export default HowTradeWorks;