import React from "react";
import Resume from "../../section/resume/Resume";
import Connect from "../../section/getInTouch/Connect";
import { motion } from "framer-motion";

const ExperienceAndJourney = () => {
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
      className="w-full min-h-11/12 md:min-h-screen mt-5 md:mt-12 mb-10 md:mb-12 font-LGaramond md:flex md:items-start md:justify-even md:h-3/4 md:gap-5 px-4  md:px-20 md:py-4
      "
      id="experience"
    >
      {/* <div className="pages text-center text-[#469DF0] uppercase font-bold">
        About Me
      </div> */}
      <div className="w-full md:w-7/12 md:self-start">
        <div className="text-center md:text-start text-[#469DF0] uppercase">
          Experience
        </div>
        <div className="w-full flex justify-center align-center md:flex md:flex-col">
          <motion.div
            className="bg-[#101D51] h-0.5 w-16 mb-4 rounded-md text-center"
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

        <div className="grid grid-col gap-2 mt-4 ">
          <p>
            <span className="text-[#469DF0]">Adewale Adeboye</span> is a
            certified full-stack developer trained by GoMyCode, with additional
            certification courses from Udemy and Simpli Learn. I am a solution
            provider, user-centric and result oriented full stack developer. I
            bring to the table a rich blend of creativity and good team spirit.
            With high efficiency in using modern cutting edge technologies to
            build scalable web applications. I have experience on real-life
            projects spanning E-commerce and Edtech. I have worked with React,
            Next.js, Redux, CSS and Tailwind on the front end, Node.js,
            Express.js and MongoDB on the backend. Including React Native and
            Fluetter for mobile apps. In addition, I continuously invested in my
            soft skills to enhance collaboration.
          </p>
        </div>
      </div>

      <div className="w-full mt-8 md:mt-0 md:w-5/12 md:self-end " id="jouney">
        <div className="text-center md:text-start text-[#469DF0] uppercase">
          Journey
        </div>
        <div className="w-full flex justify-center align-center md:justify-start md:align-center mb-6">
          <motion.div
            className="bg-[#101D51] h-0.5 w-12 rounded-md text-center"
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
          <div></div>
        </div>
        <motion.div
          // variants={contentVariants}
          // animate="animate"
          // whileHover="hover"
          className=""
        >
          After bagging my Bsc. Certificate in Mass Communication,
          <br /> I embarked on a transformative journey to software development.
          I underwent a rigorous full stack javascript training at GoMyCode, one
          of the topmost bootcamp in Nigeria. Where I learnt how to use MERN
          stack technologies to build wide range of projects.
          <div className="mt-2">
            <span className="text-[#469DF0]">Looking ahead,</span> my aspiration
            is to create big tech solutions, expand my skill set and be a
            motivation to others.
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ExperienceAndJourney;
