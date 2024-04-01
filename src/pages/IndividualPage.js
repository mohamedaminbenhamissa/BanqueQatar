import React from "react";
import PersonalInfo from "../components/PersonalInfo";
import WhiteIndividual from "../components/WhiteIndividual";
const IndividualPage = () => {
  return (
    <div className="flex">
      <WhiteIndividual />
      <PersonalInfo />
    </div>
  );
};

export default IndividualPage;
