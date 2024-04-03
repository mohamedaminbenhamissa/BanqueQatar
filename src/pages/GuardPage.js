import React from "react";
import PinkGuard from "../components/PinkGuard";
import WhiteGuard from "../components/WhiteGuard";

const GuardPage = () => {
  return (
    <div className="flex">
      <div className="basis-[35%] h-[100vh]">
        <PinkGuard />
      </div>
      <div className="basis-[60%] h-[100vh]">
        <WhiteGuard />
      </div>
    </div>
  );
};

export default GuardPage;
