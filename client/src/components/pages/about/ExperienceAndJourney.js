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
            Adewale Adeboye is a certified full-stack developer trained by
            GoMyCode, with additional certification courses from Udemy and
            Simpli Learn. I have built applications using wide range of
            cutting-edge modern technologies. On the{" "}
            <span className="text-[#469DF0]">front-end:</span> React.js and
            Next.js. <br /> On the{" "}
            <span className="text-[#469DF0]">back-end:</span> Node.Js and
            Express.Js while handling{" "}
            <span className="text-[#469DF0]">database</span> with MongoDB.{" "}
            <br /> I develop{" "}
            <span className="text-[#469DF0]">mobile apps:</span> with React
            Native and Flutter. With experience on real-life projects spanning
            E-commerce and Edutech, I am committed to continuous growth. In
            addition to my tecnical skills, I also invested in{" "}
            <span className="text-[#469DF0]">soft skills </span>to enhance
            collaboration. Coupled with a background in mass communication and{" "}
            <span className="text-[#469DF0]">Agile scrum experience,</span> he
            excels in communication and teamwork. I am focused on user-centric
            solutions and driving results.
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
            is to expand my skill set to React Native for Apps development.
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ExperienceAndJourney;
