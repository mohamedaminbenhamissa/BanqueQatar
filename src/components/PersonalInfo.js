import React from "react";
import { Link } from "react-router-dom";
import bgImage from "../assets/Info.png";
import { useForm } from "react-hook-form";
import Input from "./Input";

const PersonalInfo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
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
          <Input
            type="text"
            name="firstName"
            placeholder="First Name"
            register={register}
            rules={{ required: true }}
            errors={errors}
          />
          <Input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            register={register}
            rules={{ required: true }}
            errors={errors}
          />
          <Input
            type="text"
            name="address"
            placeholder="Address"
            register={register}
            rules={{ required: true }}
            errors={errors}
          />
          <Input
            type="text"
            name="postalCode"
            placeholder="Postal Code"
            register={register}
            rules={{ required: true }}
            errors={errors}
          />
          <Input
            type="text"
            name="city"
            placeholder="City"
            register={register}
            rules={{ required: true }}
            errors={errors}
          />
          <Input
            type="text"
            name="dateOfBirth"
            placeholder="Date Of Birth"
            register={register}
            rules={{ required: true }}
            errors={errors}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            register={register}
            rules={{ required: true }}
            errors={errors}
          />
        </div>
        <div className="flex flex-col md:ml-14">
          <Input
            type="text"
            name="lastName"
            placeholder="Last Name"
            register={register}
            rules={{ required: true }}
            errors={errors}
          />
          <Input
            type="text"
            name="nationality"
            placeholder="Nationality"
            register={register}
            rules={{ required: true }}
            errors={errors}
          />
          <Input
            type="text"
            name="gender"
            placeholder="Gender"
            register={register}
            rules={{ required: true }}
            errors={errors}
          />
          <Input
            type="text"
            name="country"
            placeholder="Country"
            register={register}
            rules={{ required: true }}
            errors={errors}
          />
          <Input
            type="text"
            name="region"
            placeholder="Region"
            register={register}
            rules={{ required: true }}
            errors={errors}
          />
          <Input
            type="text"
            name="addressMail"
            placeholder="Address Mail"
            register={register}
            rules={{ required: true, pattern: /^\S+@\S+$/i }}
            errors={errors}
          />
          <Input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            register={register}
            rules={{ required: true }}
            errors={errors}
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
