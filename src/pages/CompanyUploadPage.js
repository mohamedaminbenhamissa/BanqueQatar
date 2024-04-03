import React from "react";
import UploadFileCompany from "../components/UploadFileCompany";
import WhiteIndividual from "../components/WhiteIndividual";

const CompanyUploadPage = () => {
  return (
    <div className="flex">
    
      <div className="basis-[40%] h-[100vh]">
        <WhiteIndividual />
      </div>
      <div className="basis-[60%] h-[100vh]">
      <UploadFileCompany />
      </div>
    </div>
  );
};

export default CompanyUploadPage;
