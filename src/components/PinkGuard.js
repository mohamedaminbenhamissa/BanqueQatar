import React from "react";

const PinkGuard = () => {
  return (
    <div className="w-2/5 h-screen flex flex-col justify-start items-start bg-regal-blue p-14 pt-24">
      <div>
        <h1 className="font-roboto text-4xl  text-white ">
          A few clicks away from creating your account ...
        </h1>
        <hr className="border border-white my-4 w-16" />
        <p className="font-roboto text-2xl text-white">
          Choose the type of user
        </p>
      </div>
    </div>
  );
};

export default PinkGuard;
