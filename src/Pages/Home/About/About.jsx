import React from "react";
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 relative">
        <img src={person}className="w-3/4 rounded-lg shadow-2xl"/>
        <img src={parts}className="w-2/4 absolute top-1/2 right-10 border-8 border-red-50  rounded-lg shadow-2xl"/>
        </div>
        <div className="w-1/2 space-y-6 p-4">
            <h2 className="text-4xl font-extrabold text-[#ec4899]">About Us</h2>
          <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
          <p className="py-2 text-[#8c8c8d]">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don t look even slightly believable. 
          </p>
          <p className="text-[#8c8c8d]">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don t look even slightly believable. 
          </p>
          <button className="btn btn-secondary">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
