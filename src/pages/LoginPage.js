import React from "react";
import LoginLogo from "../components/LoginLogo";
import LoginInput from "../components/LoginInput";

const LoginPage = () => {
  return (
    <div className="flex w-full">
      <div className="basis-[40%]">
        <LoginLogo />
      </div>
      <div className="basis-[60%]">
        <LoginInput />
      </div>
    </div>
  );
};

export default LoginPage;
