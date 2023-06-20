import React from "react";
import { useLoaderData } from "react-router-dom";
import ServiceData from "../ServiceData/ServiceData";

const Services = () => {
  const services = [
    "Basic outline plans (for quotes and planning application)",
    "Full regulation plans (for builders & building regs)",
    "Structural calculations",
    "I'm not sure"
  ];

  return (
    <div>
      <p className="py-6 lg:py-10 text-2xl lg:text-3xl font-semibold">
        What type of service do you need?
      </p>
        {
            services.map((service, index)=> <ServiceData
            key={index}
            service={service}
            index={index}
            ></ServiceData>)
        }
    </div>
  );
};

export default Services;
