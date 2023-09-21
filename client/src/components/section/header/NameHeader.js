import React from "react";
import { motion } from "framer-motion";
import { animateScroll as scroll } from "react-scroll";

const NameHeader = () => {
  const nameVariants = {
    initial: {
      y: -250,
    },
    animate: {
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
    hover: {
      scale: 1.1,
      boxShadow: "0px 0px 8px rgb(255,255,255)",
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
  };
  return (
    <div className="inset-0 bg-blue/40 backdrop-blur-lg">
      <motion.button
        onClick={() => scroll.scrollToTop()}
        className="md:text-sm font-bold font-LGaramond text-center rounded-md p-1 md:p-2 "
        variants={nameVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
      >
        Adewale<span className="text-[#469DF0]">Regal</span>Adeboye
      </motion.button>
    </div>
  );
};

export default NameHeader;
