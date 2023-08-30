import React from "react";
import AvatarImage from "./assets/AvatarImage.png";
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
      className="w-full h-screen"
      variants={imageContainer}
      // whileHover="hover"
    >
      <img src={AvatarImage} alt="logo" />
    </motion.div>
  );
};

export default BioImage;
