import React, { useEffect } from "react";
import BioDescription from "./BioDescription";
import BioImage from "./BioImage";
import Resume from "../../section/resume/Resume";
import Connect from "../../section/getInTouch/Connect";
import BioQoute from "./BioQoute";

// const HomeStructure = ({ setShowModal }) => {
//   useEffect(() => {
//     setTimeout(() => {
//       setShowModal(true);
//     }, 5000);
//   }, [setShowModal]);
const HomeStructure = () => {
  return (
    // <div className=" w-full  h-screen" id="/">

    <div
      className="min-h-screen w-full flex flex-wrap justify-center items-center px-1 gap-3  md:flex-nowrap md:items-center md:justify-around md:gap-14 md:p-20 "
      id="/"
    >
      <div className="w-5/12 md:w-2/5 mt-20 md:mt-4">
        <BioDescription />
      </div>
      <div className="w-5/12 md:w-2/6 mt-20 md:mt-4">
        <BioImage />
      </div>
      <div className=" flex align-center justify-center gap-2 gap-4 w-full md:hidden">
        <Connect /> <Resume />
      </div>
      <div className="w-11/12 md:w-1/4 md:h-3/5 mt-4	md:mt-4">
        <BioQoute />
      </div>
    </div>
    // </div>
  );
};

export default HomeStructure;
