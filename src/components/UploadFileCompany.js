import React from "react";
import { Link } from "react-router-dom";
import bgImage from "../assets/UploadFile.png";
import { ReactComponent as PreviousIcon } from "../assets/arrow-left.svg";
import { ReactComponent as FileIcon } from "../assets/Vector.svg";

const UploadFileCompany = () => {
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
      <h1 className="font-roboto text-xl font-bold text-white ml-16 mt-16 mb-16">
        Upload Files
      </h1>

      <div className="flex  items-center">
        <div className="flex flex-col items-center">
          <p className=" font-roboto text-white text-lg ml-16 mr-12">
            Company CR
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div
            class="w-[200px] relative border-2 border-gray-300 border-dashed rounded-3xl p-2"
            id="dropzone"
          >
            <input
              type="file"
              class="absolute inset-0 w-full h-full opacity-0 z-50"
            />

            <div class="text-center">
              <h3 class="mt-2 text-sm font-medium text-gray-900">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer flex items-center"
                >
                  <FileIcon className="w-4 h-4 mr-2" />
                  <span className="text-white text-xs">
                    add file or drop files here
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
          </div>
        </div>
      </div>

      <div className="flex  items-center mt-20">
        <div className="flex flex-col items-center">
          <p className=" font-roboto text-white text-lg  ml-16 mr-12">
            Company File
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div
            class="w-[200px] relative border-2 border-gray-300 border-dashed rounded-3xl p-2"
            id="dropzone"
          >
            <input
              type="file"
              class="absolute inset-0 w-full h-full opacity-0 z-50"
            />
            <div class="text-center">
              <h3 class="mt-2 text-sm font-medium text-gray-900">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer flex items-center"
                >
                  <FileIcon className="w-4 h-4 mr-2" />
                  <span className="text-white text-xs">
                    add file or drop files here
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
          </div>
        </div>
      </div>
      <div className="mt-20 ml-16 flex">
        <Link to="/company">
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

export default UploadFileCompany;
