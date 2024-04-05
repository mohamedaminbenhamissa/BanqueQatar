import React from "react";
import UploadFile from "../components/UploadFile";
import WhiteIndividual from "../components/WhiteIndividual";

const UploadPage = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-2/5">
        <WhiteIndividual />
      </div>
      <div className="md:w-3/5">
        <UploadFile />
      </div>
    </div>
  );
};

export default UploadPage;
