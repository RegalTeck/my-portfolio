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
      className="h-screen w-full flex flex-wrap justify-center items-center p-2 gap-2 md:flex-nowrap md:items-center md:justify-around  md:p-20 "
      id="/"
    >
      <div className="w-7/12 md:w-2/5 mt-4 md:mt-4">
        <BioDescription />
      </div>
      <div className="w-4/12 md:w-2/6 mt-4 md:mt-4">
        <BioImage />
      </div>
      <div className="w-11/12 md:w-1/4 md:h-3/5 -mt-12	md:mt-4">
        <BioQoute />
      </div>
    </div>
    // </div>
  );
};

export default HomeStructure;
