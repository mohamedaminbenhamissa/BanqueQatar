import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const WhiteGuard = () => {
  return (
    <div className="w-3/5 h-screen flex flex-col justify-center items-center bg-[#F8F7FF]">
      <div className="flex flex-col items-center">
        <img src={logo} alt="Logo" className="w-70 h-60" />
        <div className="mt-28">
          <Link to="/individual">
            <button
              className={`bg-white text-[#642182] text-lg font-poppins mr-8 py-1 px-20 rounded-full`}
            >
              Individual
            </button>
          </Link>
          <Link to="/company">
            <button
              className={`bg-[#642182] text-white font-poppins text-lg py-1 px-20 rounded-full`}
            >
              Company
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WhiteGuard;
