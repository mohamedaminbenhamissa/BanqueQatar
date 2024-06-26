import React from "react";
import { Link } from "react-router-dom";
import bgImage from "../assets/Info.png";
import { useForm } from "react-hook-form";
import Input from "./Input";
import { ReactComponent as PreviousIcon } from "../assets/arrow-left.svg";

const CompanyInfo = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <div
      className="w-full h-screen flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundPositionY: "0px",
      }}
    >
      <h1 className="font-roboto text-xl md:text-2xl font-bold text-white ml-6 md:ml-44 mt-12 md:mt-18 mb-8 md:mb-16">
        Company Infos
      </h1>
      <form
        className="flex flex-col md:flex-row justify-end"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col ml-6 md:ml-40">
          <input
            type="text"
            className="w-full md:w-72 text-white h-10 mb-4 px-4 md:px-2 rounded-full focus:outline-none bg-[#3B2E86] "
            placeholder="Commercial Registration No"
            {...register("comRegistration")}
          />
          <input
            type="text"
            className="w-full md:w-72 text-white h-10 mb-4 px-4 md:px-2 rounded-full focus:outline-none bg-[#3B2E86] "
            placeholder="Legal form"
            {...register("legalForm")}
          />
          <input
            type="text"
            className="w-full md:w-72 text-white h-10 mb-4 px-4 md:px-2 rounded-full focus:outline-none bg-[#3B2E86] "
            placeholder="Address"
            {...register("adress")}
          />
        </div>
        <div className="flex flex-col ml-6 md:ml-4 items-center">
          <input
            type="text"
            className="w-full md:w-72 text-white h-10 mb-4 px-4 md:px-2 rounded-full focus:outline-none bg-[#3B2E86] "
            placeholder="Trade Name"
            {...register("tradeName")}
          />
          <input
            type="text"
            className="w-full md:w-72 text-white h-10 mb-4 px-4 md:px-2 rounded-full focus:outline-none bg-[#3B2E86] "
            placeholder="Phone Number"
            {...register("phoneNumber")}
          />
          <input
            type="text"
            className="w-full md:w-72 text-white h-10 mb-12 md:mb-16 px-4 md:px-2  rounded-full focus:outline-none bg-[#3B2E86] "
            placeholder="Address Mail Professional"
            {...register("adressMAIL")}
          />
        </div>
      </form>
      <div className="flex mt-4 ml-[20%] flex-row md:flex-column">
        <Link to="/">
          <button
            className={`bg-white text-[#642182] text-lg font-poppins mr-4 py-1 px-12 rounded-full flex items-center`}
          >
            <PreviousIcon className="w-4 h-4 mr-2" />
            Previous
          </button>
        </Link>
        <Link to="/auth/uploadCompany">
          <button
            className={`bg-[#642182] text-white font-poppins text-lg py-1 px-16 rounded-full`}
          >
            Next Step
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CompanyInfo;
