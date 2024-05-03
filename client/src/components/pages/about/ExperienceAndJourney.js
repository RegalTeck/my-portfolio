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
      className="w-full min-h-screen mt-10 font-LGaramond md:flex md:items-start md:justify-even md:h-3/4 md:gap-5 px-4  md:px-20 md:mt-0
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

        <div className="grid grid-col gap-2 ">
          <div className="flex justify-around gap-4 align-center">
            <div>
              {" "}
              Full Stack JavaScript Trainee GoMyCode
              <br />
              Nature{" "}
            </div>
            <div>
              Yaba, Lagos,Nigeria <br />
              On-Site. 11/2022 – 05/2023
            </div>
          </div>
          <hr className="text-[#469DF0]" />
          <div>
            <span className=" text-[#469DF0] m-2 md:m-0 md:mr-4">•</span> Used
            the latest front-end technologies,to build interactive{" "}
            <span className="ml-6 md:ml-0"> interfaces.</span>
            <div className="ml-6">
              JavaScript, React.Js, CSS, Tailwind, Redux and HTML .
            </div>
          </div>
          <div>
            <span className="text-[#469DF0] m-2 md:m-0 md:mr-4">•</span> Built
            and managed the server side using the latest backend{" "}
            <span className="ml-6 md:ml-0 "> technologies.</span>
            <div className="ml-6">
              Node.js, Express.js, MongoDb, Cloudinary to store data.
            </div>
          </div>
          <div>
            <span className="text-[#469DF0] m-2 md:m-0 md:mr-4">•</span>{" "}
            Collaborate with other developers to build scalable crud{" "}
            <span className="ml-6 md:ml-0">applications.</span>
            <div className="ml-6"> Git and GitHub.</div>
          </div>
          <div>
            <span className="text-[#469DF0] m-2 md:m-0 md:mr-4">•</span> Built
            MERN stack applications using the best code{" "}
            <span className="ml-6 md:ml-0">practices.</span>
          </div>
        </div>
      </div>

      <div className="w-full mt-4 md:mt-0 md:w-5/12 md:self-center mb-2 ">
        <div className="text-center md:text-start text-[#469DF0] uppercase">
          Journey
        </div>
        <div className="w-full flex justify-center align-center md:justify-start md:align-center mb-4">
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
