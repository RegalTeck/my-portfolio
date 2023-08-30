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
    <div className="text-white w-full font-LGaramond">
      <motion.div
        variants={contentVariants}
        animate="animate"
        whileHover="hover"
        className="text-[#469DF0] rounded-md p-2"
      >
        My name is Adewale Victor Adeboye,
      </motion.div>
      <motion.div className="mt-3 ">
        As an enthusiastic Frontend Developer, I bring to the table a rich blend
        of creativity, problem-solving abilities and good team spirit.
        <br /> With over 8 months of experience, I have built scalable projects
        using React.Js, Redux, CSS, Tailwind, and other cutting-edge
        technologies .
      </motion.div>
      <motion.div
        // variants={contentVariants}
        // animate="animate"
        // whileHover="hover"
        className=" rounded-md mt-2 font-LGaramond"
      >
        <span className="text-[#469DF0]  ">At this juncture,</span> my primary
        objective is to secure a dynamic frontend internship that will foster my
        continuous advancement.
      </motion.div>

      <div className="flex gap-4 mt-4 w-full">
        <Resume /> <Connect />
      </div>
    </div>
  );
};

export default BioDescription;
