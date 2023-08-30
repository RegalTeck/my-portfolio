import React, { useEffect } from "react";
import BioDescription from "./BioDescription";
import BioImage from "./BioImage";
import BioQoute from "./BioQoute";

const HomeStructure = ({ setShowModal }) => {
  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 5000);
  }, [setShowModal]);

  return (
    // <div className=" w-full  h-screen" id="/">
    <div
      className="h-screen w-full flex items-center justify-around gap-2 px-6 py-4"
      id="/"
    >
      <div className="w-2/5  ml-4  mt-4 flex-1">
        <BioDescription />
      </div>
      <div className="w-2/6 flex-4  mt-4 ">
        <BioImage />
      </div>
      <div className="w-1/4 mr-4  mt-4">
        <BioQoute />
      </div>
    </div>
    // </div>
  );
};

export default HomeStructure;
