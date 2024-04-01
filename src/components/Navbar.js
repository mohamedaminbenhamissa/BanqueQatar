import React from "react";
import { useLocation } from "react-router-dom";
import { ReactComponent as DownIcon } from "../assets/Downicon.svg";
import { ReactComponent as NotificationIcon } from "../assets/notification.svg";

const Navbar = () => {
  const location = useLocation();

  const getTitle = () => {
    switch (location.pathname) {
      case "/dashboard":
        return "Dashboard";
      case "/profile":
        return "Profile";
      case "/contact":
        return "Contact Us";
      case "/settings":
        return "Settings";
      default:
        return "Dashboard"; // Default title
    }
  };

  return (
    <div className="flex mt-[2%] justify-between">
      <div className="flex items-center">
        <h3 className="font-poppins text-lg font-bold">{getTitle()}</h3>
      </div>
      <div className="flex items-center gap-[15px] relative">
        <NotificationIcon />
        <button
          type="button"
          className="relative flex items-center rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white "
          id="user-menu-button"
          aria-expanded="false"
          aria-haspopup="true"
        >
          <img
            className="h-10 w-10 rounded-full mr-2"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="User Avatar"
          />
          <span className="text-sm">Super Admin</span>
          <DownIcon className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
