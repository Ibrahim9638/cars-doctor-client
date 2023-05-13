import React from "react";
import { ArrowRightIcon, BeakerIcon } from '@heroicons/react/24/solid'

const CardService = ({ service }) => {
  const { title, img, price } = service;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl mt-10 mb-10 h-96">
        <figure className="px-10 pt-10">
          <img
            src={img}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body  ">
          <h2 className="card-title font-bold">{title}</h2>
          <p className="text-[#ec4899] text-lg font-bold">Price: ${price}</p>
          <div className="card-actions justify-end">
          <ArrowRightIcon className="h-6 w-6 text-[#ec4899]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardService;
