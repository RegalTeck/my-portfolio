import React from "react";
import homeimg from "./assets/homeimg.png";
import { motion } from "framer-motion";

const BioImage = () => {
  const imageContainer = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.6,
        yoyo: Infinity,
      },
    },
  };
  return (
    <motion.div
      className="w-full"
      variants={imageContainer}
      // whileHover="hover"
    >
      <img src={homeimg} alt="my image" className="rounded-full	" />
    </motion.div>
  );
};

export default BioImage;
