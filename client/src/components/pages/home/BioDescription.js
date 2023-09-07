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
    <div className="text-white grid grid-col gap-6 w-full font-LGaramond">
      <motion.div
        variants={contentVariants}
        animate="animate"
        whileHover="hover"
        className="text-[#469DF0] rounded-md"
      >
        My name is Adewale Victor Adeboye,
      </motion.div>

      <motion.div className="">
        As an enthusiastic software Developer, I bring to the table a rich blend
        of creativity, problem-solving abilities and good team spirit. With high
        efficiency in using modern cutting edge technologies to build scalable
        projects.
      </motion.div>

      <div className="flex gap-4 w-full">
        <Resume /> <Connect />
      </div>
    </div>
  );
};

export default BioDescription;
