import React from "react";
import PersonalInfo from "../components/PersonalInfo";
import WhiteIndividual from "../components/WhiteIndividual";
const IndividualPage = () => {
  return (
    <div className="flex">
      <div className="basis-[40%] h-[100vh]">
        <WhiteIndividual />
      </div>
      <div className="basis-[60%] h-[100vh]">
        <PersonalInfo />
      </div>
    </div>
  );
};

export default IndividualPage;
