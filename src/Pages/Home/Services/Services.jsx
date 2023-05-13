import React, { useEffect, useState } from "react";
import CardService from "./CardService";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("/public/Services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className="text-center space-y-5">
        <h2 className="text-3xl font-extrabold text-[#ec4899]">Services</h2>
        <h1 className="text-4xl font-extrabold">Our Service Area</h1>
        <p className="text-[#8c8c8d]">
          The majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which do not look even slightly
          believable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {
            services.map(service => <CardService
            key = {service._id}
            service={service}
            >
            </CardService>
        )}
      </div>
    </div>
  );
};

export default Services;
