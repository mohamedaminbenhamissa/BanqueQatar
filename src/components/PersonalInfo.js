import React from "react";
import { Link } from "react-router-dom";
import bgImage from "../assets/Info.png";
import { useForm } from "react-hook-form";

const PersonalInfo = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <div
      className="w-full min-h-screen flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundPositionY: "0px",
      }}
    >
      <h1 className="font-roboto text-xl font-bold text-white mt-10 mb-8 md:ml-44">
        Personal Infos
      </h1>
      <form
        className="flex flex-col md:flex-row justify-center md:ml-[20%]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col ">
          <input
            type="text"
            className="w-full md:w-72 text-white h-10 mb-4 px-6 rounded-full focus:outline-none bg-[#3B2E86]"
            placeholder="First Name"
            {...register("firstName")}
          />
          <input
            type="text"
            className="w-full md:w-72 text-white h-10 mb-4 px-6 rounded-full focus:outline-none bg-[#3B2E86]"
            placeholder="Phone Number"
            {...register("phoneNumber")}
          />
          <input
            type="text"
            className="w-full md:w-72 text-white h-10 mb-4 px-6 rounded-full focus:outline-none bg-[#3B2E86]"
            placeholder="Address"
            {...register("address")}
          />
          <input
            type="text"
            className="w-fullmd:w-72 text-white h-10 mb-4 px-6 rounded-full focus:outline-none bg-[#3B2E86]"
            placeholder="Postal Code"
            {...register("postalCode")}
          />
          <input
            type="text"
            className="w-full md:w-72 text-white h-10 mb-4 px-6 rounded-full focus:outline-none bg-[#3B2E86]"
            placeholder="City"
            {...register("city")}
          />
          <input
            type="text"
            className="w-full md:w-72 text-white h-10 mb-4 px-6 rounded-full focus:outline-none bg-[#3B2E86]"
            placeholder="Date Of Birth"
            {...register("dateOfBirth")}
          />
          <input
            type="password"
            className="w-full md:w-72 text-white h-10 mb-4 px-6 rounded-full focus:outline-none bg-[#3B2E86]"
            placeholder="Password"
            {...register("password")}
          />
        </div>
        <div className="flex flex-col">
          <input
            type="text"
            className="w-full md:w-72 text-white h-10 mb-4 ml-0 md:ml-4 px-6 rounded-full focus:outline-none bg-[#3B2E86]"
            placeholder="Last Name"
            {...register("lastName")}
          />
          <input
            type="text"
            className="w-full md:w-72 text-white h-10 mb-4 ml-0 md:ml-4 px-6 rounded-full focus:outline-none bg-[#3B2E86]"
            placeholder="Nationality"
            {...register("nationality")}
          />
          <input
            type="text"
            className="w-full md:w-72 text-white h-10 mb-4 ml-0 md:ml-4 px-6 rounded-full focus:outline-none bg-[#3B2E86]"
            placeholder="Gender"
            {...register("gender")}
          />
          <input
            type="text"
            className="w-full md:w-72 text-white h-10 mb-4 ml-0 md:ml-4 px-6 rounded-full focus:outline-none bg-[#3B2E86]"
            placeholder="Country"
            {...register("country")}
          />
          <input
            type="text"
            className="w-full md:w-72 text-white h-10 mb-4 ml-0 md:ml-4 px-6 rounded-full focus:outline-none bg-[#3B2E86]"
            placeholder="Region"
            {...register("region")}
          />
          <input
            type="text"
            className="w-full md:w-72 text-white h-10 mb-4 ml-0 md:ml-4 px-6 rounded-full focus:outline-none bg-[#3B2E86]"
            placeholder="Address Mail"
            {...register("addressMail")}
          />
          <input
            type="password"
            className="w-full md:w-72 text-white h-10 mb-12 ml-0 md:ml-4 px-6 rounded-full focus:outline-none bg-[#3B2E86]"
            placeholder="Confirm Password"
            {...register("confirmPassword")}
          />
        </div>
      </form>
      <Link to="/upload">
        <button
          className={`bg-[#642182] text-white font-poppins text-xl mt-8 md:ml-44 py-1 px-6 md:px-10 rounded-full `}
        >
          Next Step
        </button>
      </Link>
    </div>
  );
};

export default PersonalInfo;
