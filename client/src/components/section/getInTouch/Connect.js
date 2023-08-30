import React from "react";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Connect = () => {
  return (
    <div className="flex p-2">
      <div>
        <motion.button
          className="section font-LGaramond text-[#469DF0] uppercase font-bold rounded-md"
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 8px rgb(255,255,255)",
          }}
          transition={{ type: "spring", stiffness: 300 }}
        >
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
        </motion.button>
      </div>
      <div className="section animate-bounce  h-4">
        <KeyboardDoubleArrowDownIcon />
      </div>
    </div>
  );
};
export default Connect;
