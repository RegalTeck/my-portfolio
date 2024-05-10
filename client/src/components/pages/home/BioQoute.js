import React from "react";
import Socials from "../../section/socials/Socials";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
        // animate="animate"
        whileHover="hover"
        className="text-[#ebedef] rounded-md text-center p-2 font-LGaramond self-start"
      >
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
            delay: 200,
            strings: [
              " ` Tech gave my life a direction `",
              "' The drive is more than money '",
            ],
          }}
        />
      </motion.div>
      <div className=" flex md:self-end justify-center gap-4 md:gap-0 mt-4 md:mt-0">
        <Socials />
        <div></div>
      </div>
    </div>
  );
};

export default BioQoute;
