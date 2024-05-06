import React from "react";
import Resume from "../../section/resume/Resume";
import Connect from "../../section/getInTouch/Connect";
import { motion } from "framer-motion";

const BioDescription = () => {
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
    <div className="  grid grid-col gap-6 w-full text-white font-LGaramond">
      <motion.div
        variants={contentVariants}
        animate="animate"
        whileHover="hover"
        className="text-[#469DF0] rounded-md text-center p-2"
      >
        My name is <span className="text-white md:text-[#469DF0]">Adewale</span>{" "}
        <span className="hidden md:inline">Victor</span> Adeboye,
      </motion.div>

      <motion.div className="">
        I am a solution provider, user-centric and result oriented full stack
        web developer. I bring to the table a rich blend of creativity and good
        team spirit. With high efficiency in using modern cutting edge
        technologies<span className="inline md:hidden">.</span>{" "}
        <span className="hidden md:inline">
          to build scalable web applications.
        </span>
      </motion.div>

      <div className="hidden md:flex md:gap-2 md:gap-4 md:w-full">
        <Connect /> <Resume />
      </div>
    </div>
  );
};

export default BioDescription;
