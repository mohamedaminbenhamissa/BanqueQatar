import React from "react";
import { Link } from "react-router-dom";
import bgImage from "../assets/Info.png";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import InputEdit from "./InputEdit";

const EditProfilePage = ({visible, onClose}) => {
    const { currentUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  
  const [showEditModal, setShowEditModal] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [password, setPassword] = useState("");
  const [lastName, setLastName] = useState("");
  const [nationality, setNationality] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [addressMail, setAddressMail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleCloseModal = () => {
    setShowEditModal(false);
  };
  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
    <div className="bg-white p-2 rounded w-100">
      <h1 className="font-roboto text-xl font-bold text-black mt-10 mb-8 md:ml-44">
        Edit Personal Infos
      </h1>
      <form
        className="flex flex-col md:flex-row justify-center md:ml-[20%]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-row mr-[30%]">
        <div className="flex flex-col">
          <InputEdit
            type="text"
            name="firstName"
            value=  {currentUser.firstName}
            register={register}
           
            errors={errors}
          />
          <InputEdit
            type="text"
            name="phoneNumber"
            value= {currentUser.phoneNumber}
            register={register}
           
            errors={errors}
          />
          <InputEdit
            type="text"
            name="address"
            value={currentUser.adress}
            register={register}
            
            errors={errors}
          />
          <InputEdit
            type="text"
            name="postalCode"
            value={currentUser.postalCode}
            register={register}
           
            errors={errors}
          />
          <InputEdit
            type="text"
            name="city"
            value={currentUser.city}
            register={register}
          
            errors={errors}
          />
          <InputEdit
            type="text"
            name="dateOfBirth"
            value={currentUser.dateOfBirth}
            register={register}
           
            errors={errors}
          />
        </div>
        <div className="flex flex-col">
          <InputEdit
            type="text"
            name="lastName"
            value={currentUser.lastName}
            register={register}
          
            errors={errors}
          />
          <InputEdit
            type="text"
            name="nationality"
            value={currentUser.nationality}
            register={register}
           
            errors={errors}
          />
          <InputEdit
            type="text"
            name="gender"
            value={currentUser.gender}
            register={register}
           
            errors={errors}
          />
          <InputEdit
            type="text"
            name="country"
            value={currentUser.country}
            register={register}
           
            errors={errors}
          />
          <InputEdit
            type="text"
            name="region"
            value={currentUser.region}
            register={register}
          
            errors={errors}
          />
          <InputEdit
            type="text"
            name="addressMail"
            value={currentUser.email}
            register={register}
            rules={{
               
              pattern: /^\S+@\S+$/i,
            }}
            errors={errors}
          />
        </div>
        </div>
      </form>
      <div className="flex mt-4 ml-[20%] flex-row md:flex-column">
        <button
          className={`bg-white text-[#642182] text-lg font-poppins mr-4 py-1 px-12 rounded-full flex items-center`}
          onClick={onClose}
        >
          Close
        </button>

        <button
          className={`bg-[#642182] text-white font-poppins text-lg py-1 px-16 rounded-full`}
        >
          Edit
        </button>
      </div>
    </div>
    </div>
  );
};

export default EditProfilePage;
