import React from "react";
import logo from "../assets/logo.png";

const WhiteIndividual = () => {
  return (
    <div className="w-1/2 h-screen flex items-center justify-end bg-white">
      <div className="bg-[#F8F7FF] p-20 ml-[5%] z-999 ">
        <img src={logo} alt="Logo" className="w-50 h-60 mb-6" />
        <h1 className="font-roboto text-2xl font-bold text-[#1C2843] mb-[2%]">
          We are happy to have you here
        </h1>
        <p className="text-[#1C2843] text-xl">
          Please let us know ............
        </p>
        <p className="font-roboto text-[#1C2843] text-xl">
          When you have filled in all the details click on the purple button to
          continue your registration
        </p>
      </div>
    </div>
  );
};

export default WhiteIndividual;
