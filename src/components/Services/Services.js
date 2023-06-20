import React from "react";
import ServiceData from "../ServiceData/ServiceData";

const Services = () => {
  //array of fake service data
  const services = [
    "Basic outline plans (for quotes and planning application)",
    "Full regulation plans (for builders & building regs)",
    "Structural calculations",
    "I'm not sure",
  ];

  return (
    <div>
      {/* title */}
      <h2 className="py-6 lg:py-10 text-2xl lg:text-3xl font-semibold">
        What type of service do you need?
      </h2>
      {services.map((service, index) => (
        <ServiceData key={index} service={service} index={index}></ServiceData>
      ))}
    </div>
  );
};

export default Services;
