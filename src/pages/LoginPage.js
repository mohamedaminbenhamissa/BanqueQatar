import React from "react";
import LoginLogo from "../components/LoginLogo";
import LoginInput from "../components/LoginInput";

const LoginPage = () => {
  return (
    <div className="flex">
      <LoginLogo />
      <LoginInput />
    </div>
  );
};

export default LoginPage;
