import React from "react";
import Settings from "../components/Settings";
import Navbar from "../components/Navbar";

const SettingPage = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/6 h-[100vh]">
        <Settings />
      </div>
      <div className="md:w-5/6">
        <Navbar />
        <div className="bg-[#F9F9F9] p-6 md:p-12 rounded-lg mt-4 md:mt-0">
          <div className="mb-6">
            <div className="relative flex items-center">
              <span className="text-lg text-[#B58EC7] font-bold mr-4 md:mr-8">
                Notification Settings
              </span>
              <label className="inline-flex items-center cursor-pointer">
                <span className="ms-3 text-sm font-medium text-black">
                  Activate Notifications
                </span>
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="relative ml-3 md:ml-6 w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-[#642182]"></div>{" "}
               
              </label>
            </div>
          </div>
          <span className="text-lg text-[#B58EC7] font-bold mr-4 md:mr-8">
            Change Password
          </span>
          <div className="flex flex-col md:flex-row mt-4 md:mt-6">
            <input
              type="text"
              className="w-full md:w-72 text-black h-10 mb-4 md:mb-0 px-4 md:px-10 rounded-full focus:outline-none bg-white mr-0 md:mr-4"
              placeholder="Old Password"
            />
            <input
              type="text"
              className="w-full md:w-72 text-black h-10 mb-4 md:mb-0 px-4 md:px-10 rounded-full focus:outline-none bg-white mr-0 md:mr-4"
              placeholder="New Password"
            />
            <input
              type="text"
              className="w-full md:w-72 text-black h-10 mb-4 md:mb-0 px-4 md:px-10 rounded-full focus:outline-none bg-white"
              placeholder="Confirm Password"
            />
          </div>
          <div className="flex justify-center md:justify-end">
            <button className="bg-[#642182] text-white font-poppins text-lg py-1 px-8 rounded-full mt-4 md:mt-0">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingPage;
