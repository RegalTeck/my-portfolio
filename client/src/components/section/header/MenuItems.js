import React from "react";
import { Link } from "react-scroll";
import { Close } from "@mui/icons-material";
import { motion } from "framer-motion";
import About from "./About";

const MenuItems = ({ showMenu, active }) => {
  const liVariants = {
    hover: {
      scale: 1.1,
      textShadow: "0px 0px 8px rgb(255,255,255)",
      boxShadow: "0px 0px 8px rgb(255,255,255)",
      transition: { type: "spring", stiffness: 300 },
    },
  };
  return (
    <ul
      className={
        active
          ? "z-10 flex-col flex fixed text-[#fff] inset-0 left-1/2 uppercase bg-blue/40 backdrop-blur-lg gap-6 justify-center p-4 md:hidden"
          : "hidden"
      }
    >
      <Close onClick={showMenu} className="cursor-pointer -mt-56" />
      <motion.li
        className="rounded-md px-2 pt-0.5 bg-black bg-opacity-10 shadow-lg backdrop-blur-xl backdrop-filter"
        variants={liVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
      >
        <Link
          to="/"
          smooth={true}
          offset={-100}
          duration={1000}
          className="cursor-pointer"
        >
          Home
        </Link>
      </motion.li>

      <motion.li
        className="rounded-md px-2 pt-0.5 bg-black bg-opacity-10 shadow-lg backdrop-blur-xl backdrop-filter"
        variants={liVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
      >
        <Link
          to="projects"
          smooth={true}
          offset={-100}
          duration={1000}
          className="cursor-pointer"
        >
          Projects
        </Link>
      </motion.li>

      <motion.li
        className=" rounded-sm border-2 border-[#F5F5F5] active:border-white duration-300 active:text-white"
        variants={liVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
      >
        <About className="cursor-pointer" />
      </motion.li>

      {/* <motion.li
            className=" rounded-md px-2"
            variants={liVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
          >
            <Link
              to="education"
              smooth={true}
              offset={-100}
              duration={1000}
              className="cursor-pointer"
            >
              Education
            </Link>
          </motion.li> */}

      <motion.li
        className="rounded-md px-2 pt-0.5 mt-56 bg-black bg-opacity-10 shadow-lg backdrop-blur-xl backdrop-filter"
        variants={liVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
      >
        <Link
          to="contact"
          smooth={true}
          offset={-100}
          duration={1000}
          className="cursor-pointer"
        >
          Contact
        </Link>
      </motion.li>
    </ul>
  );
};

export default MenuItems;
