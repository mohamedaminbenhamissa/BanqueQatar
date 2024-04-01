import React from "react";
import { Link } from "react-router-dom";
import bgImage from "../assets/UploadFile.png";
import { ReactComponent as PreviousIcon } from "../assets/arrow-left.svg";

const UploadFile = () => {
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
      <h1 className="font-roboto text-xl font-bold text-white mt-24 mb-16">
        Upload Files
      </h1>

      <div className="flex items-center">
        <div className="flex flex-col items-center">
          <p className="font-roboto text-white text-lg mr-12">Identity Card</p>
        </div>
        <div className="flex flex-col items-center">
          <div
            className="w-[200px] relative border-2 border-gray-300 border-dashed rounded-3xl p-6"
            id="dropzone"
          >
            <input
              type="file"
              className="absolute inset-0 w-full h-full opacity-0 z-50"
            />
            <div className="text-center">
              <h3 className="mt-2 text-sm font-medium text-gray-900">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer"
                >
                  <span className="text-white">
                    Drag and drop your image here
                  </span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                  />
                </label>
              </h3>
            </div>
            <img src="" className="mt-4 mx-auto max-h-40 hidden" id="preview" />
          </div>
        </div>
      </div>
      <div className="mt-20 ml-16 flex">
        <Link to="/individual">
          <button
            className={`bg-white text-[#642182] text-lg font-poppins mr-4 py-1 px-12 rounded-full flex items-center`}
          >
            <PreviousIcon className="w-4 h-4 mr-2" />
            Previous
          </button>
        </Link>
        <Link to="/login">
          <button
            className={`bg-[#642182] text-white font-poppins text-lg py-1 px-16 rounded-full`}
          >
            Register
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UploadFile;
