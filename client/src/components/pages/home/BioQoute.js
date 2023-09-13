import React from "react";
import Socials from "../../section/socials/Socials";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

const BioQoute = () => {
  const contentVariants = {
    animate: {
      boxShadow: "0px 0px 8px rgb(255,255,255)",
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
    hover: { scale: 1.1 },
  };
  return (
    <div className="grid grid-col h-full">
      <motion.div
        variants={contentVariants}
        animate="animate"
        whileHover="hover"
        className="text-[#469DF0] rounded-md text-center p-2 font-LGaramond self-start"
      >
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
            delay: 40,
            strings: [
              "Tech Gave My life a direction...",
              "The drive is more than money..",
            ],
          }}
        />
      </motion.div>
      <div className=" flex self-end justify-center">
        <Socials />
        <div></div>
      </div>
    </div>
  );
};

export default BioQoute;
