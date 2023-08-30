import React from "react";
import { Link } from "react-scroll";
import { Close } from "@mui/icons-material";
import { motion } from "framer-motion";

const MenuItems = ({ showMenu, active }) => {
  return (
    <ul
      className={
        active
          ? "flex-col flex items-center fixed inset-0 left-1/2 uppercase bg-blue/40 backdrop-blur-lg gap-4 justify-center p-4 md:hidden"
          : "hidden"
      }
    >
      <Close onClick={showMenu} className="cursor-pointer" />
      <motion.li
        whileHover={{
          scale: 1.1,
          textShadow: "0px 0px 8px rgb(255,255,255)",
          boxShadow: "0px 0px 8px rgb(255,255,255)",
        }}
        transition={{ type: "spring", stiffness: 300 }}
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
        whileHover={{
          scale: 1.1,
          textShadow: "0px 0px 8px rgb(255,255,255)",
          boxShadow: "0px 0px 8px rgb(255,255,255)",
        }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {" "}
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
        whileHover={{
          scale: 1.1,
          textShadow: "0px 0px 8px rgb(255,255,255)",
          boxShadow: "0px 0px 8px rgb(255,255,255)",
        }}
        transition={{ type: "spring", stiffness: 300 }}
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
      <motion.li
        whileHover={{
          scale: 1.1,
          textShadow: "0px 0px 8px rgb(255,255,255)",
          boxShadow: "0px 0px 8px rgb(255,255,255)",
        }}
        transition={{ type: "spring", stiffness: 300 }}
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
      </motion.li>
      <motion.li
        whileHover={{
          scale: 1.1,
          textShadow: "0px 0px 8px rgb(255,255,255)",
          boxShadow: "0px 0px 8px rgb(255,255,255)",
        }}
        transition={{ type: "spring", stiffness: 300 }}
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
        whileHover={{
          scale: 1.1,
          textShadow: "0px 0px 8px rgb(255,255,255)",
          boxShadow: "0px 0px 8px rgb(255,255,255)",
        }}
        transition={{ type: "spring", stiffness: 300 }}
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
        whileHover={{
          scale: 1.1,
          textShadow: "0px 0px 8px rgb(255,255,255)",
          boxShadow: "0px 0px 8px rgb(255,255,255)",
        }}
        transition={{ type: "spring", stiffness: 300 }}
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
