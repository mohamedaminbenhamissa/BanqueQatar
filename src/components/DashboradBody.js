// DashboardBody.js
import React from "react";

const DashboardBody = () => {
  return (
    <div className="flex justify-center items-center min-h-screen rounded-xl bg-[#F7F0FA] ml-[6%] mt-[5%]">
      <div className="bg-white p-12 rounded-lg shadow-xl ">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Welcome to Dashboard
        </h1>
        <p className="text-lg text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          ultricies semper dui, non vehicula lorem molestie id. Nam facilisis
          lectus vel sapien vestibulum aliquam. Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas.
        </p>
      </div>
    </div>
  );
};

export default DashboardBody;
