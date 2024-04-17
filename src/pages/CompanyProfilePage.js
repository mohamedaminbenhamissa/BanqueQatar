import React from "react";
import { ReactComponent as Refresh } from "../assets/refresh-squar.svg";
import { ReactComponent as Edit } from "../assets/edit.svg";
import { useAuth } from "../context/AuthContext";
import { ReactComponent as FileIcon } from "../assets/Vector.svg";
import Account from "../components/Account";
import Navbar from "../components/Navbar";

const ProfilePage = () => {
  const { currentUser } = useAuth();

  const getUsername = () => {
    return currentUser ? currentUser.firstName : "Unknown User";
  };
  const getemailUser = () => {
    return currentUser ? currentUser.email : "unknown Email";
  };
  return (
    <div className="flex">
      <div className="basis-[16%] h-[100vh]">
        <Account />
      </div>
      <div className="basis-[82%]">
        <Navbar />
        <div className="bg-[#F9F9F9] p-2 rounded-lg mt-[2%] w-full px-[25px]">
          <div className="bg-white p-4 rounded-full w-full mt-[2%] ">
            <div className="flex justify-between items-center">
              <div className="relative flex items-center">
                <img
                  className="h-15 w-20 rounded-full mr-2"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="User Avatar"
                />
                <div className="flex flex-col">
                  <span className="text-xl font-bold">{getUsername()}</span>
                  <span className="text-sm">{getemailUser()}</span>
                </div>
              </div>
              <div>
                <button
                  type="button"
                  className="relative flex items-center justify-end py-1 px-3 bg-[#30D5C8] rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-white ml-[20px] "
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <Refresh className="ml-1 mr-3" />
                  <span className="text-lg text-white font-bold">
                    Under Review
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg w-full mt-[2%] ">
            <div className="flex justify-between">
              <div className="relative flex items-center">
                <span className="text-lg font-bold text-[#642182]">
                  Company Infos
                  <hr className="border-t border-gray-200 my-4 w-[850%]" />
                </span>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="flex items-center">
                <button
                  className={`bg-white text-[#642182] text-lg font-poppins border mr-2 py-1 px-8 rounded-full`}
                >
                  Cancel
                </button>
                <button
                  className={`bg-[#642182] text-white font-poppins text-lg py-1 px-8 rounded-full`}
                >
                  save
                </button>
              </div>
            </div>
            <div>
              <span className="text-lg  font-poppins text-black font-bold ">
                Account Informations
              </span>
            </div>
            <div className="text-gray-700">
              <div className="grid md:grid-cols-2 text-sm gap-x-4 gap-y-2">
                <dl>
                  <div class="py-2 sm:py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-[#C4D0E8]">
                      Commercial Registration No:
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 font-semibold sm:mt-0 sm:col-span-2">
                      Ahmed Ali
                    </dd>
                  </div>
                  <div class="py-2 sm:py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-[#C4D0E8]">
                      Trade Name:
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 font-semibold sm:mt-0 sm:col-span-2">
                      Abdallah
                    </dd>
                  </div>
                  <div class="py-3 sm:py-2 sm:grid sm:grid-cols-3 sm:gap-3 sm:px-6">
                    <dt class="text-sm font-medium text-[#C4D0E8]">
                      Legal Form:
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 font-semibold sm:mt-0 sm:col-span-2">
                      (123) 456-7890
                    </dd>
                  </div>
                </dl>
                <dl>
                  <div class="py-2 sm:py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-[#C4D0E8]">
                      Phone Number:
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 font-semibold sm:mt-0 sm:col-span-2">
                      05/28/1985
                    </dd>
                  </div>
                  <div class="py-2 sm:py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-[#C4D0E8]">
                      Adress Mail Professional:
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 font-semibold sm:mt-0 sm:col-span-2">
                      JTL Cluster w, lotus tower , apt.1253
                    </dd>
                  </div>
                  <div class="py-3 sm:py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-[#C4D0E8]">Adress:</dt>
                    <dd class="mt-1 text-sm text-gray-900 font-semibold sm:mt-0 sm:col-span-2">
                      Male
                    </dd>
                  </div>
                </dl>
                <div>
                  <span className="text-lg  font-poppins text-black font-bold ">
                    Document
                  </span>
                 
                </div>
              </div>
            </div>
            <div className="flex w-full justify-end">
                    <div className=" flex w-full md:w-[200px] relative border-2 border-gray-300 border-dashed rounded-3xl p-2 justify-center">
                      <input
                        type="file"
                        className="absolute inset-0 w-full h-full opacity-0 z-50"
                      />
                      <div className="text-center">
                        <h3 className="mt-2 text-sm font-medium text-black">
                          <label
                            htmlFor="file-upload-2"
                            className="relative cursor-pointer flex items-center"
                          >
                            <FileIcon className="w-4 h-4 mr-2" />
                            <span className="text-[#C4D0E8] text-xs">
                              Add file or drop files here
                            </span>
                            <input
                              id="file-upload-2"
                              name="file-upload-2"
                              type="file"
                              className="sr-only"
                            />
                          </label>
                        </h3>
                      </div>
                    </div>
                  </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
