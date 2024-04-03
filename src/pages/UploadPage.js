import React from "react";
import UploadFile from "../components/UploadFile";
import WhiteIndividual from "../components/WhiteIndividual";

const UploadPage = () => {
  return (
    <div className="flex">
      <div className="basis-[40%] h-[100vh]">
        <WhiteIndividual />
      </div>
      <div className="basis-[60%] h-[100vh]">
        <UploadFile />
      </div>
    </div>
  );
};

export default UploadPage;
