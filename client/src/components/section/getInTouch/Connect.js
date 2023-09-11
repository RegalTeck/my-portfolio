import React from "react";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Connect = () => {
  return (
    <motion.div
      className="flex justify-center align-center p-2 border-2 border-[#469DF0]"
      whileHover={{
        scale: 1.1,
        boxShadow: "0px 0px 8px rgb(255,255,255)",
      }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div>
        <button className="section font-LGaramond text-[#469DF0] uppercase font-bold rounded-md center">
          <Link
            to="contact"
            smooth={true}
            offset={-100}
            duration={1000}
            className="section cursor-pointer"
          >
            {" "}
            GET IN TOUCH
          </Link>
        </button>
      </div>
      <div className="section animate-bounce  h-4">
        <KeyboardDoubleArrowDownIcon />
      </div>
    </motion.div>
  );
};
export default Connect;
