import React from "react";
import Resume from "../../section/resume/Resume";
import Connect from "../../section/getInTouch/Connect";
import { motion } from "framer-motion";

const About = () => {
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
    <div className="w-full h-screen font-LGaramond px-20" id="about">
      <div className="pages text-center text-[#469DF0] uppercase font-bold">
        About Me
      </div>
      <div className=" flex items-center justify-even h-3/4	 gap-6">
        <div className="w-7/12 self-start">
          <div className="text-[#469DF0] mb-2">My Journey</div>

          <motion.div
            // variants={contentVariants}
            // animate="animate"
            // whileHover="hover"
            className=" "
          >
            After bagging my Bsc.Certificate in Mass Communication, I embarked
            on a transformative journey to software development. I underwent a
            rigorous full stack javascript training at GoMyCode Nigeria, top 3
            best coding bootcamp in Nigeria. Where I learnt how to use MERN
            stack technologies to build wide range of projects. This gave me a
            clear direction and ignited a sense of purpose that fuels my
            ambitions.
            <br />I am currently carving out a distinct path as a dedicated
            frontend web developer.
          </motion.div>
        </div>

        <div className="w-5/12 self-end ">
          <div className="text-[#469DF0] mb-2">My Tech Experience</div>

          <motion.div
            // variants={contentVariants}
            // animate="animate"
            // whileHover="hover"
            className=""
          >
            I have 8+ months experience as a front-end web developer.
            <br />I have successfully completed 4 impactful projects utilizing a
            diverse range of cutting-edge technologies like React.js, CSS,
            redux, integrating APIs etc. <br />
            <span className="text-[#469DF0] ">Looking ahead,</span> my
            aspiration is to expand my skill set to React Native for Apps.
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
