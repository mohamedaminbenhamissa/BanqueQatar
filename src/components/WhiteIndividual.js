import React from "react";
import logo from "../assets/logo.png";

const WhiteIndividual = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-white">
      <div className="bg-[#F8F7FF] p-10 md:p-20 ml-5 md:ml-[5%] z-10  ">
        <img src={logo} alt="Logo" className="mb-4" />
        <h1 className="font-roboto text-2xl md:text-3xl font-bold text-[#1C2843] mb-4">
          We are happy to have you here
        </h1>
        <p className="font-roboto text-[#1C2843] text-lg md:text-lg">
          Please let us know ............
        </p>
        <p className="font-roboto text-[#1C2843] text-lg md:text-lg">
          When you have filled in all the details click on the purple button to
          continue your registration
        </p>
      </div>
    </div>
  );
};

export default WhiteIndividual;
