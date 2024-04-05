import React from "react";
import logo from "../assets/bgIcon.png";
import { ReactComponent as ContactIcon } from "../assets/ContactIcon.svg";
import { ReactComponent as DashboardIcon } from "../assets/DashboardIcon.svg";
import { ReactComponent as SettingIcon } from "../assets/SettingIcon.svg";
import { ReactComponent as ProfileIcon } from "../assets/ProfileIcon.svg";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <img
        src={logo}
        alt="Logo"
        className="fixed top-10 left-16  transition-transform -translate-x-full sm:translate-x-0 w-42 h-20 "
      />

      <aside
        id="default-sidebar"
        class="fixed top-48 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <span className="flex ml-20 text-[#B3BBCA]">DASHBOARD</span>
        <div class="h-full px-5 py-4 overflow-y-auto  ">
          <ul class="space-y-2 font-medium">
            <li>
              <Link
                to="/dashboard"
                class="flex items-center p-2 text-[#642182] rounded-lg  bg-[#F8F7FF] hover:text-[#642182] border-r-8 border-[#642182]"
              >
                <DashboardIcon className="transition-colors duration-300 ease-in-out group-hover:text-[#642182]" />
                <span class="ms-3">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                class="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 hover:text-[#642182] "
              >
                <ProfileIcon />
                <span class="flex-1 ms-3 whitespace-nowrap">My Account</span>
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-[#F8F7FF] hover:text-[#642182] "
              >
                <ContactIcon class="hover:bg-[#642182]" />
                <span class="flex-1 ms-3 whitespace-nowrap">Contact Us</span>
              </Link>
            </li>
            <li>
              <Link
                to="/settings"
                class="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-[#F8F7FF] hover:text-[#642182] "
              >
                <SettingIcon />
                <span class="flex-1 ms-3 whitespace-nowrap">Settings</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
