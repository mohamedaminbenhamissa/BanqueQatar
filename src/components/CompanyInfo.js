import React from "react";
import { Link } from "react-router-dom";
import bgImage from "../assets/Info.png";

const CompanyInfo = () => {
  return (
    <div
      className="w-3/5 h-screen flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundPositionY: "0px",
      }}
    >
      <h1 className="font-roboto text-xl font-bold text-white ml-16 mt-18 mb-16">
        Company Infos
      </h1>
      <div className="flex justify-end">
        <div className="flex flex-col ml-16">
          <input
            type="text"
            className="w-46 text-white h-10 mb-4 px-2 rounded-full focus:outline-none bg-[#3B2E86] "
            placeholder="Commercial Registration No"
          />
          <input
            type="text"
            className="w-46 text-white h-10 mb-4 px-2 rounded-full focus:outline-none bg-[#3B2E86] "
            placeholder="Legal form"
          />
          <input
            type="text"
            className="w-46 text-white h-10 mb-4 px-2 rounded-full focus:outline-none bg-[#3B2E86]  "
            placeholder="Address"
          />
        </div>
        <div className="flex flex-col items-center">
          <input
            type="text"
            className="w-46 text-white h-10 mb-4 ml-4 px-2 rounded-full focus:outline-none bg-[#3B2E86] "
            placeholder="Trade Name"
          />
          <input
            type="text"
            className="w-46 text-white h-10 mb-4 ml-4 px-2 rounded-full focus:outline-none bg-[#3B2E86] "
            placeholder="Phone Number"
          />
          <input
            type="text"
            className="w-46 text-white h-10 mb-16 ml-4 px-2  rounded-full focus:outline-none bg-[#3B2E86]  "
            placeholder="Address Mail Professional"
          />
        </div>
      </div>
      <div className="flex justify-end">
        <Link to="/uploadCompany">
          <button
            className={`bg-[#642182] text-white font-poppins text-xl   py-1 px-20 rounded-full`}
          >
            Next Step
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CompanyInfo;
