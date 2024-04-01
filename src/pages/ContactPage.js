import React from "react";
import Contact from "../components/Contact";
import { ReactComponent as Felters } from "../assets/filters.svg";
import { ReactComponent as Refresh } from "../assets/refresh-square-2.svg";
import { FaSearch } from "react-icons/fa";
import Navbar from "../components/Navbar";

const ContactPage = () => {
  return (
    <div className="flex">
      <div className="basis-[16%] h-[100vh] ">
        <Contact />
      </div>
      <div className="basis-[82%] ">
        <Navbar />
        <div className="bg-[#F9F9F9] p-12 rounded-lg mt-[2%] w-full px-[25px] ">
          <div className="bg-white p-11 rounded-lg w-full mt-[2%] ">
            <div className="flex justify-between  ">
              <div className="relative flex items-center ">
                <span className="text-lg text-black font-bold mr-[20px]">
                  Contact Us
                </span>
              </div>
              <div className="flex items-center">
                <button
                  className={`bg-white text-[#642182] text-lg font-poppins border mr-2 py-1 px-8 rounded-full`}
                >
                  Cancel
                </button>
                <button
                  className={`bg-[#642182] text-white font-poppins text-lg py-1 px-8 rounded-full`}
                >
                  Send
                </button>
              </div>
            </div>
            <div className="mt-[4%]">
              <input
                type="text"
                className="w-full text-black  h-10 mb-4  px-6 rounded-full focus:outline-none bg-[#F9F9F9]"
                placeholder="Subject"
              />
              <input
                type="text"
                className="w-full text-black p-24  h-10  px-6 rounded-lg focus:outline-none bg-[#F9F9F9]"
                placeholder="Description"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
