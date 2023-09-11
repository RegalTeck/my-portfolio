import React, { useState } from "react";
import { Link } from "react-scroll";
import MenuItems from "./MenuItems";
import { MenuOutlined } from "@mui/icons-material";
import { motion } from "framer-motion";
import About from "./About";

const NavBar = () => {
  const liVariants = {
    hover: {
      scale: 1.1,
      textShadow: "0px 0px 8px rgb(255,255,255)",
      boxShadow: "0px 0px 8px rgb(255,255,255)",
      transition: { type: "spring", stiffness: 300 },
    },
  };

  const [active, setActive] = useState(false);
  const showMenu = () => {
    setActive(!active);
  };

  return (
    <div>
      <nav>
        <div className="absolute right-6 md:hidden top-2 scale-150 ">
          <MenuOutlined
            onClick={showMenu}
            className="scale-100 cursor-pointer"
          />
        </div>
        <motion.ul className="section hidden md:flex md:justify-center md:align-center md:gap-2 uppercase  text-[#469DF0] font-LGaramond">
          {/* bg-white/5 */}

          <motion.li
            className=" rounded-md px-1 pt-0.5"
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
            className=" rounded-md px-1 pt-0.5"
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
            className=" rounded-md border-2 border-[#469DF0] active:border-white duration-300 active:text-white"
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
            className=" rounded-md px-1 pt-0.5"
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
        </motion.ul>
        <MenuItems showMenu={showMenu} active={active} />
      </nav>
    </div>
  );
};

export default NavBar;
