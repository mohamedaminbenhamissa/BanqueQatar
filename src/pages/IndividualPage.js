import React from "react";
import PersonalInfo from "../components/PersonalInfo";
import WhiteIndividual from "../components/WhiteIndividual";
const IndividualPage = () => {
  return (
    <div className="flex w-full">
      <div className="basis-[40%] ">
        <WhiteIndividual />
      </div>
      <div className="basis-[60%]">
        <PersonalInfo />
      </div>
    </div>
  );
};

export default IndividualPage;
