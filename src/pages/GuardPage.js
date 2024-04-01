import React from "react";
import PinkGuard from "../components/PinkGuard";
import WhiteGuard from "../components/WhiteGuard";

const GuardPage = () => {
  return (
    <div className="flex">
      <PinkGuard />
      <WhiteGuard />
    </div>
  );
};

export default GuardPage;
