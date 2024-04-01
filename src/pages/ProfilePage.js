import React from "react";
import { ReactComponent as Refresh } from "../assets/refresh-squar.svg";
import { ReactComponent as Edit } from "../assets/edit.svg";

import Document from "../assets/Document.png";
import Account from "../components/Account";
import Navbar from "../components/Navbar";

const ProfilePage = () => {
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
                  <span className="text-xl font-bold">Ahmad Ali Abdallah</span>
                  <span className="text-sm">Ahmadaliabdallah@gmail.com</span>
                </div>
              </div>
              <div>
                <button
                  type="button"
                  className="relative flex items-center justify-end py-2 px-6 bg-[#30D5C8] rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white ml-[20px] "
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <Refresh className="ml-1 mr-3" />
                  <span className="text-xl text-white font-bold">
                    Under Review
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg w-full mt-[2%] ">
            <div className="flex justify-between">
              <div className="relative flex items-center">
                <span className="text-xl font-bold text-[#642182]">
                  Personal Infos
                  <hr className="border-t border-gray-200 my-4 w-[850%]" />
                </span>
              </div>
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                className="relative flex items-center justify-end py-1 px-3 bg-[#642182] rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white  "
                aria-expanded="false"
                aria-haspopup="true"
              >
                <Edit className="ml-1 mr-3" />
                <span className="text-lg text-white ">Edit Profile</span>
              </button>
            </div>
            <div>
              <span className="text-lg  font-poppins text-black font-bold ">
                Account Informations
              </span>
            </div>
            <div className="text-gray-700">
              <div className="grid md:grid-cols-3 text-sm gap-x-4 gap-y-2">
                <dl>
                  <div class="py-2 sm:py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-[#C4D0E8]">
                      First Name:
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 font-semibold sm:mt-0 sm:col-span-2">
                      Ahmed Ali
                    </dd>
                  </div>
                  <div class="py-2 sm:py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-[#C4D0E8]">
                      Last Name:
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 font-semibold sm:mt-0 sm:col-span-2">
                      Abdallah
                    </dd>
                  </div>
                  <div class="py-3 sm:py-2 sm:grid sm:grid-cols-3 sm:gap-3 sm:px-6">
                    <dt class="text-sm font-medium text-[#C4D0E8]">
                      Phone number:
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 font-semibold sm:mt-0 sm:col-span-2">
                      (123) 456-7890
                    </dd>
                  </div>
                  <div class="py-3 sm:py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-[#C4D0E8]">
                      Nationality:
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 font-semibold sm:mt-0 sm:col-span-2">
                      Qatari
                    </dd>
                  </div>
                  <div class="py-3 sm:py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-[#C4D0E8]">
                      Country::
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 font-semibold sm:mt-0 sm:col-span-2">
                      Qatar
                    </dd>
                  </div>
                  <div class="py-3 sm:py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-[#C4D0E8]">Region:</dt>
                    <dd class="mt-1 text-sm text-gray-900 font-semibold sm:mt-0 sm:col-span-2">
                      Doha
                    </dd>
                  </div>
                </dl>
                <dl>
                  <div class="py-2 sm:py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-[#C4D0E8]">
                      Date of Birth:
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 font-semibold sm:mt-0 sm:col-span-2">
                      05/28/1985
                    </dd>
                  </div>
                  <div class="py-2 sm:py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-[#C4D0E8]">Adress:</dt>
                    <dd class="mt-1 text-sm text-gray-900 font-semibold sm:mt-0 sm:col-span-2">
                      JTL Cluster w, lotus tower , apt.1253
                    </dd>
                  </div>
                  <div class="py-3 sm:py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-[#C4D0E8]">Gender:</dt>
                    <dd class="mt-1 text-sm text-gray-900 font-semibold sm:mt-0 sm:col-span-2">
                      Male
                    </dd>
                  </div>
                  <div class="py-3 sm:py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-[#C4D0E8]">
                      Adress Mail:
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 font-semibold sm:mt-0 sm:col-span-2">
                      Ahmadaliabdallah@gmail.com
                    </dd>
                  </div>
                  <div class="py-3 sm:py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-[#C4D0E8]">
                      Postal Code:
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 font-semibold sm:mt-0 sm:col-span-2">
                      0000
                    </dd>
                  </div>
                  <div class="py-3 sm:py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-[#C4D0E8]">City:</dt>
                    <dd class="mt-1 text-sm text-gray-900 font-semibold sm:mt-0 sm:col-span-2">
                      Doha
                    </dd>
                  </div>
                </dl>
                <dl>
                  <div class=" sm:grid">
                    <img
                      className="h-70 w-70 rounded-lg mr-2"
                      src={Document}
                      alt="cin"
                    />
                  </div>
                  <div class="py-2 sm:py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-[#C4D0E8]">
                      Expiry Date:
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 font-semibold sm:mt-0 sm:col-span-2">
                      24/07/2024
                    </dd>
                  </div>
                  <div class="py-3 sm:py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-[#C4D0E8]">Number:</dt>
                    <dd class="mt-1 text-sm text-gray-900 font-semibold sm:mt-0 sm:col-span-2">
                      298647623643541
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
