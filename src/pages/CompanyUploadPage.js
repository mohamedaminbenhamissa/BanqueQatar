import React from "react";
import UploadFileCompany from "../components/UploadFileCompany";
import WhiteIndividual from "../components/WhiteIndividual";

const CompanyUploadPage = () => {
  return (
    <div className="flex">
      <WhiteIndividual />
      <UploadFileCompany />
    </div>
  );
};

export default CompanyUploadPage;
