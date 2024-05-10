import React from "react";
import { motion } from "framer-motion";
import demoDayCert from "./assets/demoDayCert.jpg";

const Awards = () => {
  const contentVariants = {
    animate: {
      boxShadow: "0px 0px 8px rgb(255,255,255)",
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
  };
  return (
    <div
      className="w-full min-h-1/2 md:min-h-screen font-LGaramond px-4 py-6 md:pb-14 md:pt-6   md:px-20 "
      id="awards"
    >
      <div className="text-center text-[#469DF0] uppercase">Awards</div>
      <div className="w-full flex justify-center align-center md:justify-center md:align-center mb-2 md:mb-6">
        <motion.div
          className="bg-[#101D51] h-0.5 w-14 rounded-md text-center mb-6"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            scale: 1.1,
            boxShadow: "0px 0px 8px rgb(255,255,255)",
          }}
        >
          {}
        </motion.div>
      </div>

      <div className="flex justify-center align-center gap-2 md:gap-4 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border-gray-100 p-1 pt-4 md:py-4 md:px-0">
        <div className="w-2/5 md:w-2/5 align-center">
          <img
            src={demoDayCert}
            alt="GoMyCode Demo Day Award "
            className="w-full border-2 rounded-md  "
          />
        </div>
        <motion.div
          // variants={contentVariants}
          // animate="animate"
          // whileHover="hover"
          className="w-7/12	 md:w-2/5 md:self-center"
        >
          My Artsthetic AI project was awarded the third best demo day project
          at GoMyCode Nigeria. Excelling in functionalities, design, creativity
          and solution. <br /> <br />
          <div className="hidden md:block">
            ARTSTHETIC AI is an Image generator AI application <br /> <br />
            It will create realistic stunning AI images for your works and
            projects in a munite. With Quality resolution and no watermarks.
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Awards;
