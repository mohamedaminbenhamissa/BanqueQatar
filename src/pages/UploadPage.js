import React from "react";
import UploadFile from "../components/UploadFile";
import WhiteIndividual from "../components/WhiteIndividual";

const UploadPage = () => {
  return (
    <div className="flex">
      <WhiteIndividual />
      <UploadFile />
    </div>
  );
};

export default UploadPage;
