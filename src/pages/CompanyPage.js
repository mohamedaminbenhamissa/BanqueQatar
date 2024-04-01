import React from "react";
import CompanyInfo from "../components/CompanyInfo";
import WhiteIndividual from "../components/WhiteIndividual";

const CompanyPage = () => {
  return (
    <div className="flex">
      <WhiteIndividual />
      <CompanyInfo />
    </div>
  );
};

export default CompanyPage;
