import React from "react";
import CompanyInfo from "../components/CompanyInfo";
import WhiteIndividual from "../components/WhiteIndividual";

const CompanyPage = () => {
  return (
    <div className="flex">
      <div className="basis-[40%] h-[100vh]">
        <WhiteIndividual />
      </div>
      <div className="basis-[60%] h-[100vh]">
        <CompanyInfo />
      </div>
    </div>
  );
};

export default CompanyPage;
