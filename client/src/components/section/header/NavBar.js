import React, { useState } from "react";
import { Link } from "react-scroll";
import MenuItems from "./MenuItems";
import { MenuOutlined } from "@mui/icons-material";
import { motion } from "framer-motion";

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
        <motion.ul className="section hidden md:flex p-1 uppercase  text-[#469DF0] font-LGaramond">
          {/* bg-white/5 */}

          <motion.li
            className=" rounded-md p-2"
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
            className=" rounded-md p-2"
            variants={liVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
          >
            <Link
              to="project"
              smooth={true}
              offset={-100}
              duration={1000}
              className="cursor-pointer"
            >
              Projects
            </Link>
          </motion.li>
          <motion.li
            className=" rounded-md p-2"
            variants={liVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
          >
            <Link
              to="about"
              smooth={true}
              offset={-100}
              duration={1000}
              className="cursor-pointer"
            >
              About
            </Link>
          </motion.li>

          {/* <motion.li
            className=" rounded-md p-2"
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
            className=" rounded-md p-2"
            variants={liVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
          >
            <Link
              to="certification"
              smooth={true}
              offset={-100}
              duration={1000}
              className="cursor-pointer"
            >
              Certification
            </Link>
          </motion.li>

          <motion.li
            className=" rounded-md p-2"
            variants={liVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
          >
            <Link
              to="skills"
              smooth={true}
              offset={-100}
              duration={1000}
              className="cursor-pointer"
            >
              Skills
            </Link>
          </motion.li>

          <motion.li
            className=" rounded-md p-2"
            variants={liVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
          >
            <Link
              to="testimonial"
              smooth={true}
              offset={-100}
              duration={1000}
              className="cursor-pointer"
            >
              Testimonials
            </Link>
          </motion.li>
          <motion.li
            className=" rounded-md p-2"
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
