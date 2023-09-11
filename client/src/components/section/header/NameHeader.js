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
    <div>
      <motion.button
        onClick={() => scroll.scrollToTop()}
        className="myname font-bold font-LGaramond text-center rounded-md p-2 "
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
