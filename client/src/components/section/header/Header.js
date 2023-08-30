import React from "react";
import NameHeader from "./NameHeader";
import Resume from "../resume/Resume";
import NavBar from "./NavBar";
// import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className="bg-[#101D51] fixed w-screen text-white flex justify-around items-center">
      <div className="flex justify-center align-center gap-4">
        <NameHeader />
        <div>
          <Resume />
        </div>
      </div>
      <div>
        <NavBar />
      </div>
    </div>
  );
};

export default Header;
