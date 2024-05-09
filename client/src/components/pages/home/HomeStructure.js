import React, { useEffect } from "react";
import BioDescription from "./BioDescription";
import BioImage from "./BioImage";
import Resume from "../../section/resume/Resume";
import Connect from "../../section/getInTouch/Connect";
import BioQoute from "./BioQoute";
import backgroundimage from "./assets/backgroundimage.jpg";

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
      className="min-h-screen w-full flex flex-wrap justify-center items-center pl-10 gap-0 md:flex  md:flex-nowrap md:items-center md:justify-around md:gap-6 md:p-20 md:pr-0
           "
      // style={{
      //   background: linear - gradient(rgba(0, 0, 0, 0.5), transparent),
      //   backgroundImage: `url(${backgroundimage})`,
      // }}
      id="/"
    >
      {/* <div>
        <img src={backgroundimage} alt="my image" className="h-full w-full " />
      </div> */}
      <div className="w-full pr-10 md:px-0 md:w-1/3 mt-20 md:mt-4">
        <BioDescription />
      </div>
      <div className="w-full md:w-3/5 flex gap-2 md:gap-8   md:mt-4 pl-10 md:pl-20 pr-0 md:pr-16 bg-gray-400 rounded-l-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-gray-100 ">
        <div className="w-5/12 md:w-1/2 mt-2 -mb-2 md:mt-4 md:mb-0">
          <BioImage />
        </div>

        <div className="w-11/12 md:w-1/2 mt-2 mb-0	md:mt-4 md:mb-1">
          <BioQoute />
        </div>
      </div>
    </div>
    // </div>
  );
};

export default HomeStructure;
