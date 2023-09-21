import React from "react";
import NameHeader from "./NameHeader";
import Resume from "../resume/Resume";
import NavBar from "./NavBar";
// import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className="bg-[#101D51] fixed w-screen text-white flex justify-start items-center gap-4 pl-2 mt-2 md:justify-around md:items-center  md:pt-2 md:pl-4 md:pr-8 ">
      {/* <div className="flex justify-center align-center gap-4"> */}
      <NameHeader />
      {/* <div> */}
      <NavBar />

      {/* </div> */}
      {/* </div>
      <div> */}
      <Resume />
      {/* </div> */}
    </div>
  );
};

export default Header;
