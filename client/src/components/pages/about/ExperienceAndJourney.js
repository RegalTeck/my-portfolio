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
    <div className="w-full h-screen font-LGaramond px-20" id="experience">
      {/* <div className="pages text-center text-[#469DF0] uppercase font-bold">
        About Me
      </div> */}
      <div className=" flex items-center justify-even h-3/4 gap-5">
        <div className="w-7/12 self-start">
          <div className="text-[#469DF0] uppercase">Experience</div>
          <div className="w-full flex justify-start align-center mb-4">
            <motion.div
              className="bg-[#101D51] h-0.5 w-16 rounded-md text-center"
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
          <div className="grid grid-col gap-2 ">
            <div className="flex justify-around align-center">
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
              <span className=" text-[#469DF0] ">•</span> Used the latest
              front-end technologies,to build interactive interfaces.
              <div className="ml-3">
                JavaScript, React.Js, CSS, Tailwind, Redux and HTML .
              </div>
            </div>
            <div>
              <span className="text-[#469DF0]">•</span> Built and managed the
              server side using the latest backend technologies.
              <div className="ml-3">
                Node.js, Express.js, MongoDb, Cloudinary. store data
              </div>
            </div>
            <div>
              <span className="text-[#469DF0]">•</span> Collaborate with other
              developers to build scalable crud applications.
              <div className="ml-3"> Git and GitHub</div>
            </div>
            <div>
              <span className="text-[#469DF0]">•</span> Built MERN stack
              applications using the best code practices.
            </div>
          </div>
        </div>

        <div className="w-5/12 self-end mb-2">
          <div className="text-[#469DF0] uppercase">Journey</div>
          <div className="w-full flex justify-start align-center mb-4">
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
            <br /> I embarked on a transformative journey to software
            development. I underwent a rigorous full stack javascript training
            at GoMyCode, one of the topmost bootcamp in Nigeria. Where I learnt
            how to use MERN stack technologies to build wide range of projects.
            <div className="mt-2">
              <span className="text-[#469DF0]">Looking ahead,</span> my
              aspiration is to expand my skill set to React Native for Apps
              development.
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceAndJourney;
