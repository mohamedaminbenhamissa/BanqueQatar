import React from "react";
import { Link } from "react-router-dom";
import bgImage from "../assets/Info.png"; // Import the background image

const PersonalInfo = () => {
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
      <h1 className="font-roboto text-xl font-bold text-white ml-24 mt-24 mb-8">
        Personal Infos
      </h1>
      <div className="flex justify-end">
        <div className="flex flex-col ml-32">
          <input
            type="text"
            className="w-46 text-white  h-10 mb-4  px-6 rounded-full focus:outline-none bg-[#3B2E86]"
            placeholder="First Name"
          />
          <input
            type="text"
            className="w-46 text-white h-10 mb-4 px-6 rounded-full focus:outline-none bg-[#3B2E86]"
            placeholder="Phone Number"
          />
          <input
            type="text"
            className="w-46 text-white h-10 mb-4 px-6 rounded-full focus:outline-none bg-[#3B2E86]"
            placeholder="Adress"
          />
          <input
            type="text"
            className="w-46 text-white h-10 mb-4 px-6 rounded-full focus:outline-none bg-[#3B2E86]"
            placeholder="Code Postal"
          />
          <input
            type="text"
            className="w-46 text-white h-10 mb-4 px-6 rounded-full focus:outline-none bg-[#3B2E86]"
            placeholder="City"
          />
          <input
            type="text"
            className="w-46 text-white h-10 mb-4 px-6 rounded-full focus:outline-none bg-[#3B2E86]"
            placeholder="Date Of Birth"
          />
          <input
            type="text"
            className="w-46 text-white h-10 mb-4 px-6 rounded-full focus:outline-none bg-[#3B2E86]"
            placeholder="Password"
          />
        </div>
        <div className="flex flex-col">
          <input
            type="text"
            className="w-46 text-white h-10 mb-4 ml-4 px-6 rounded-full focus:outline-none bg-[#3B2E86]"
            placeholder="Last Name"
          />
          <input
            type="text"
            className="w-46 text-white h-10 mb-4 ml-4 px-6 rounded-full focus:outline-none bg-[#3B2E86]"
            placeholder="Nationality"
          />
          <input
            type="text"
            className="w-46 text-white h-10 mb-4 ml-4 px-6 rounded-full focus:outline-none bg-[#3B2E86]"
            placeholder="Gender"
          />
          <input
            type="text"
            className="w-46 text-white h-10 mb-4 ml-4 px-6 rounded-full focus:outline-none bg-[#3B2E86]"
            placeholder="Country"
          />
          <input
            type="text"
            className="w-46 text-white h-10 mb-4 ml-4 px-6 rounded-full focus:outline-none bg-[#3B2E86]"
            placeholder="Region"
          />
          <input
            type="text"
            className="w-46 text-white h-10 mb-4 ml-4 px-6 rounded-full focus:outline-none bg-[#3B2E86]"
            placeholder="Adress Mail"
          />
          <input
            type="text"
            className="w-46 text-white h-10 mb-12 ml-4 px-6 rounded-full focus:outline-none bg-[#3B2E86]"
            placeholder="Confirm Password"
          />
        </div>
      </div>
      <Link to="/upload">
        <button
          className={`bg-[#642182] text-white font-poppins text-xl  ml-20 py-1 w-64 rounded-full`}
        >
          Next Step
        </button>
      </Link>
    </div>
  );
};

export default PersonalInfo;
