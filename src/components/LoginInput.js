import React from "react";
import { Link } from "react-router-dom";
import bgImage from "../assets/bg.png";

const LoginInput = () => {
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
      <div className="w-3/5 ml-[7%]">
        <h1 className="font-roboto text-5xl font-bold text-white mt-[20%] ">
          Welcome
        </h1>
        <p className="font-roboto text-xs text-white mb-8">
          We are happy to have you here
        </p>
      </div>

      <div className=" w-3/5 flex flex-col ml-12 ">
        <input
          type="text"
          className=" w-full text-white py-2 p-4  mb-[4%]   rounded-full focus:outline-none bg-[#3B2E86]"
          placeholder="Email"
        />
        <input
          type="password"
          className="  w-full text-white py-2 p-4 mb-[4%]   rounded-full focus:outline-none bg-[#3B2E86]"
          placeholder="Password"
        />
      </div>

      <div className="w-3/5 ml-12">
        <Link to={"/dashboard"}>
        <button
          className={`bg-[#642182] text-white font-poppins text-lg  mt-[12%] py-1 w-full rounded-full`}
        >
          Login
        </button>
        </Link>
      </div>
      <div className="text-white w-3/5 ml-[8%]">
        New User?{" "}
        <Link to="/" className="text-[#8C43AC] underline">
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default LoginInput;
