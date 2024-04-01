import React from "react";
import Settings from "../components/Settings";
import Navbar from "../components/Navbar";

const SettingPage = () => {
  return (
    <div className="flex">
      <div className="basis-[16%] h-[100vh] ">
        <Settings />
      </div>
      <div className="basis-[82%] ">
        <Navbar />
        <div className="bg-[#F9F9F9] p-12 rounded-lg mt-[2%] w-full">
          <div className="flex justify-between mb-6">
            <div className="relative flex items-center">
              <span className="text-lg text-[#B58EC7] font-bold mr-[20px]">
                Notification Settings
              </span>
              <label className="inline-flex items-center cursor-pointer">
                <span className="ms-3 text-sm font-medium text-black">
                  Activate Notifications
                </span>
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="relative ml-[15px] w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#642182]"></div>
              </label>
            </div>
            <div className="flex items-center">
              <button className="bg-[#642182] text-white font-poppins text-lg py-1 px-8 rounded-full">
                Save
              </button>
            </div>
          </div>
          <span className="text-lg text-[#B58EC7] font-bold mr-[20px]">
            Change Password
          </span>
          <div className="flex mt-[10px]">
            <input
              type="text"
              className="w-72 text-black h-10 mb-4 px-10 rounded-full focus:outline-none bg-white mr-4"
              placeholder="Old Password"
            />
            <input
              type="text"
              className="w-72 text-black h-10 mb-4 px-10 rounded-full focus:outline-none bg-white mr-4"
              placeholder="New Password"
            />
            <input
              type="text"
              className="w-72 text-black h-10 mb-4 px-10 rounded-full focus:outline-none bg-white"
              placeholder="Confirm Password"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingPage;
