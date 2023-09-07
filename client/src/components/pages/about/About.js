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
      <div className=" flex items-center justify-even h-3/4 gap-5">
        <div className="w-7/12 self-start">
          <div className="text-[#469DF0] mb-2">Experience</div>

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
            <hr />
            <div>
              • Used the latest front-end technologies,to build interactive
              interfaces.
              <div className="ml-3">
                JavaScript, React.Js, CSS, Tailwind, Redux and HTML .
              </div>
            </div>
            <div>
              • Built and managed the server side using the latest backend
              technologies.
              <div className="ml-3">
                Node.js, Express.js, MongoDb, Cloudinary. store data
              </div>
            </div>
            <div>
              • Collaborate with other developers to build scalable crud
              applications.
              <div className="ml-3"> Git and GitHub</div>
            </div>
            <div>
              • Built MERN stack applications using the best code practices.
            </div>
          </div>
        </div>

        <div className="w-5/12 self-end mb-2">
          <div className="text-[#469DF0] mb-2">Journey</div>

          <motion.div
            // variants={contentVariants}
            // animate="animate"
            // whileHover="hover"
            className=""
          >
            After bagging my Bsc.Certificate in Mass Communication I embarked on
            a transformative journey to software development. I underwent a
            rigorous full stack javascript training at GoMyCode, one of the
            topmost bootcamp in Nigeria. Where I learnt how to use MERN stack
            technologies to build wide range of projects.
            <br />
            <span className="text-[#469DF0] ">Looking ahead,</span> my
            aspiration is to expand my skill set to React Native for Apps
            development.
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
