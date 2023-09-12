import React from "react";
import NameHeader from "./NameHeader";
import Resume from "../resume/Resume";
import NavBar from "./NavBar";
// import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className=" fixed w-screen text-white flex justify-around items-center pl-4 pt-2">
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
