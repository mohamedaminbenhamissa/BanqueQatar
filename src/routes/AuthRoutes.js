import React from "react";
import { Route, Routes } from "react-router-dom";
import IndividualPage from "../pages/IndividualPage";
import CompanyPage from "../pages/CompanyPage";
import UploadPage from "../pages/UploadPage";
import CompanyUploadPage from "../pages/CompanyUploadPage";
import LoginPage from "../pages/LoginPage";

const AuthRoutes = () => {
  return (
    
    <Routes>
      
      <Route path="individual" element={<IndividualPage />} />
      <Route path="company" element={<CompanyPage />} />
      <Route path="upload" element={<UploadPage />} />
      <Route path="uploadCompany" element={<CompanyUploadPage />} />
      <Route index element={<LoginPage />} />
    </Routes>
  );
};

export default AuthRoutes;