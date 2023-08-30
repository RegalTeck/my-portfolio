import React from "react";
import img1 from "./assets/img1.png";
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
    <div className="w-full h-screen font-LGaramond" id="about">
      <div className="pages text-center text-[#469DF0] font-LGaramond uppercase font-bold">
        About Me
      </div>
      <div className=" flex items-center justify-around gap-4 px-6">
        <div className="ml-4 w-4/12">
          <img
            src={img1}
            alt="about image"
            className="border-none rounded-lg"
          />
          <div className="flex justify-center gap-4 align-center mt-1">
            <Resume /> <Connect />
          </div>
        </div>
        <div className="w-8/12">
          <div className="text">
            <div className="text-[#469DF0] mb-2">My Journey</div>

            <motion.div
              // variants={contentVariants}
              animate="animate"
              whileHover="hover"
              className=" rounded-md"
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

            <div className="text-[#469DF0] mt-2 mb-2">My Tech Experience</div>

            <motion.div
              variants={contentVariants}
              animate="animate"
              whileHover="hover"
              className=" rounded-md p-2"
            >
              I have 8+ months experience as a front-end web developer.
              <br />I have successfully completed 4 impactful projects utilizing
              a diverse range of cutting-edge technologies like React.js, CSS,
              redux, integrating APIs etc. <br />
              <span className="text-[#469DF0] ">Looking ahead,</span> my
              aspiration is to expand my skill set to React Native for Apps.
            </motion.div>
            {/* <div>
              As a front end developer, I have successfully completed 4
              impactful projects utilizing a diverse range of cutting-edge
              technologies including React.js, CSS, Tailwind, Bootstrap,
              Material UI, Framer, and more. Including integrating APIs and
              leveraging Git version control for seamless collaboration.
              <br /> My proficiency extends beyond crafting visually appealing
              interfaces; with my background in mass communication, I possess a
              strong communication skills. I am also teachable and adapt fast.
              <br />
              In addition to my frontend expertise, I have a knowledge of
              backend technologies such as Node.js, Express.js, and MongoDB,
              which equips me with a holistic understanding of web application
              development.
              <div className="text-[#469DF0] mt-2 mb-2"> My Future Plans</div>
              <div>
                Looking ahead, my aspiration is to expand my skill set to
                include React Native for app development within the next year,
                further cementing my prowess in the frontend realm.
              </div>
              <div className="mt-2">
                At this juncture, my primary objective is to secure a dynamic
                frontend internship that will foster my continuous advancement.
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
