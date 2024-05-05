import React from "react";
import { motion, spring } from "framer-motion";
import { useState } from "react";
import reactimg from "./assets/reactimg.png";
import nodeimg from "./assets/nodeimg.png";
import expressimg from "./assets/expressimg.png";
import mongodbimg from "./assets/mongodbimg.png";
import reduximg from "./assets/reduximg.png";
import cssimg from "./assets/cssimg.png";
import tailwindimg from "./assets/tailwindimg.png";
import framerimg from "./assets/framerimg.png";
import htmlimg from "./assets/htmlimg.png";
// import reactimg from "./assets/reactimg.png";

const Skills = () => {
  // const [reactOpen, setreactOpen] = useState(false);
  // const [nodeOpen, setnodeOpen] = useState(false);
  // const [expressOpen, setexpressOpen] = useState(false);
  // const [mongoDBOpen, setmongoDBOpen] = useState(false);
  // const [cssOpen, setcssOpen] = useState(false);
  // const [htmlOpen, sethtmlOpen] = useState(false);
  // const [reduxOpen, setreduxOpen] = useState(false);
  // const [tailwindOpen, settailwindOpen] = useState(false);
  // const [framerOpen, setframerOpen] = useState(false);
  const cardVariants = {
    initial: {
      y: -250,
    },
    animate: {
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
    hover: {
      scale: 1.1,
      boxShadow: "0px 0px 8px rgb(255,255,255)",
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
  };
  const contentVariants = {
    animate: {
      boxShadow: "0px 0px 8px rgb(255,255,255)",
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
  };
  const readMoreVariants = {
    hover: {
      boxShadow: "0px 0px 8px rgb(255,255,255)",
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
  };

  return (
    <div
      className="w-full min-h-1/2 md:min-h-screen p-4 bg-gradient-to-r from-blue-900 to-blue-400 md:p-10"
      id="skills"
    >
      <div class=" bg-white bg-opacity-30 rounded-lg shadow-lg backdrop-blur-xl backdrop-filter py-10 md:py-10">
        <div className="pages text-center text-white font-LGaramond uppercase font-bold">
          Skills
        </div>
        <div className="w-full flex justify-center align-center">
          <motion.div
            className="bg-[#101D51] h-0.5 w-10 rounded-md text-center"
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
        <div className="mt-6 md:mt-8">
          <div className="flex justify-center align-center ">
            <img
              src={reactimg}
              alt="reactImage"
              className="w-16 bg-white m-2 rounded-md"
            />
          </div>
          <div className="flex justify-center align-center gap-5">
            <img
              src={nodeimg}
              alt="Node Image"
              className="w-16 bg-white m-2 rounded-md rounded-md"
            />
            <img
              src={expressimg}
              alt="Express Image"
              className="w-16 bg-white m-2 rounded-md rounded-md"
            />
          </div>

          <div className="flex justify-center align-center gap-5">
            <img
              src={mongodbimg}
              alt="Mongodb Image"
              className="w-16 bg-white m-2 rounded-md"
            />
            <img
              src={reduximg}
              alt="Redux Image"
              className="w-16 bg-white m-2 rounded-md"
            />
            <img
              src={cssimg}
              alt="CSS Image"
              className="w-16 bg-white m-2 rounded-md"
            />
          </div>

          <div className="flex justify-center align-center gap-5">
            <img
              src={tailwindimg}
              alt="Tailwindt Image"
              className="w-16 bg-white m-2 rounded-md"
            />
            <img
              src={framerimg}
              alt="Framer Image"
              className="w-16 bg-white m-2 rounded-md"
            />
          </div>

          <div className="flex justify-center align-center">
            <img
              src={htmlimg}
              alt="Html Image"
              className="w-16 bg-white m-2 rounded-md"
            />
          </div>
        </div>
        {/* <div className="grid grid-cols-4 gap-2"> */}

        {/* <motion.div
          transition={{ layout: { duration: 1, type: "spring" } }}
          layout
          variants={cardVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          onClick={() => setreactOpen(!reactOpen)}
          className="m-2 ml-8 border-4 border-indigo-200 border-x-indigo-500 p-4"
        >
          <div layout="position" className="flex justify-between">
            <div className="w-20 pl--4	">
              <img src={reactimg} alt="reactImage" />
            </div>

            <div>
              <motion.button
                variants={readMoreVariants}
                whileHover="hover"
                className="text-[#469DF0] py-2 px-4 rounded-sm m-0"
              >
                Read More
              </motion.button>
            </div>
          </div>
          {reactOpen && (
            <motion.div
              variants={contentVariants}
              animate="animate"
              className="text-[#469DF0] rounded-md mt-1 p-2"
            >
              <p>
                I use react.js to build a beautiful and interactive client
                sideinterface. It is the most popular JavaScript frontend
                Library.
              </p>
            </motion.div>
          )}
        </motion.div>

        <motion.div
          transition={{ layout: { duration: 1, type: "spring" } }}
          layout
          variants={cardVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          onClick={() => setnodeOpen(!nodeOpen)}
          className="m-2 ml-8 border-4 border-indigo-200 border-x-indigo-500 p-4"
        >
          <div layout="position" className="flex justify-between">
            <div className="w-20 pl--4	">
              <img src={nodeimg} alt="nodeImage" />
            </div>
            <div>
              <motion.button
                variants={readMoreVariants}
                whileHover="hover"
                className="text-[#469DF0] py-2 px-4 rounded-sm m-0"
              >
                Read More
              </motion.button>
            </div>
          </div>
          {nodeOpen && (
            <motion.div
              variants={contentVariants}
              animate="animate"
              className="text-[#469DF0] rounded-md mt-1 p-2"
            >
              <p>
                I use react.js to build a beautiful and interactive client
                sideinterface. It is the most popular JavaScript frontend
                Library.
              </p>
            </motion.div>
          )}
        </motion.div>

        <motion.div
          transition={{ layout: { duration: 1, type: "spring" } }}
          layout
          variants={cardVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          onClick={() => setexpressOpen(!expressOpen)}
          className="m-2 ml-8 border-4 border-indigo-200 border-x-indigo-500 p-4"
        >
          <div layout="position" className="flex justify-between">
            <div className="w-20 pl--4	">
              <img src={expressimg} alt="expressImage" />
            </div>
            <div>
              <motion.button
                variants={readMoreVariants}
                whileHover="hover"
                className="text-[#469DF0] py-2 px-4 rounded-sm m-0"
              >
                Read More
              </motion.button>
            </div>
          </div>
          {expressOpen && (
            <motion.div
              variants={contentVariants}
              animate="animate"
              className="text-[#469DF0] rounded-md mt-1 p-2"
            >
              <p>
                I use react.js to build a beautiful and interactive client
                sideinterface. It is the most popular JavaScript frontend
                Library.
              </p>
            </motion.div>
          )}
        </motion.div> */}
        {/* <motion.div
          transition={{ layout: { duration: 1, type: "spring" } }}
          layout
          variants={cardVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          onClick={() => setreduxOpen(!reduxOpen)}
          className="m-2 ml-8 border-4 border-indigo-200 border-x-indigo-500 p-4"
        >
          <div layout="position" className="flex justify-between">
            <div className="w-20 pl--4	">
              <img src={reduximg} alt="reduxImage" />
            </div>
            <div>
              <motion.button
                variants={readMoreVariants}
                whileHover="hover"
                className="text-[#469DF0] py-2 px-4 rounded-sm m-0"
              >
                Read More
              </motion.button>
            </div>
          </div>
          {reduxOpen && (
            <motion.div
              variants={contentVariants}
              animate="animate"
              className="text-[#469DF0] rounded-md mt-1 p-2"
            >
              <p>
                I use react.js to build a beautiful and interactive client
                sideinterface. It is the most popular JavaScript frontend
                Library.
              </p>
            </motion.div>
          )}
        </motion.div>
        <motion.div
          transition={{ layout: { duration: 1, type: "spring" } }}
          layout
          variants={cardVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          onClick={() => setcssOpen(!cssOpen)}
          className="m-2 ml-8 border-4 border-indigo-200 border-x-indigo-500 p-4"
        >
          <div layout="position" className="flex justify-between">
            <div className="w-20 pl--4	"> */}
        {/* <img src={cssimg} alt="cssImage" />
            </div> */}
        {/* </div> */}
        {/* <div>
              <motion.button
                variants={readMoreVariants}
                whileHover="hover"
                className="text-[#469DF0] py-2 px-4 rounded-sm m-0"
              >
                Read More
              </motion.button>
            </div>
          </div>
          {cssOpen && (
            <motion.div
              variants={contentVariants}
              animate="animate"
              className="text-[#469DF0] rounded-md mt-1 p-2"
            >
              <p>
                I use react.js to build a beautiful and interactive client
                sideinterface. It is the most popular JavaScript frontend
                Library.
              </p>
            </motion.div>
          )}
        </motion.div>
        <motion.div
          transition={{ layout: { duration: 1, type: "spring" } }}
          layout
          variants={cardVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          onClick={() => settailwindOpen(!tailwindOpen)}
          className="m-2 ml-8 border-4 border-indigo-200 border-x-indigo-500 p-4"
        >
          <div layout="position" className="flex justify-between">
            <div className="w-20 pl--4	">
              <img src={tailwindtimg} alt="tailwindImage" />
            </div>
            <div>
              <motion.button
                variants={readMoreVariants}
                whileHover="hover"
                className="text-[#469DF0] py-2 px-4 rounded-sm m-0"
              >
                Read More
              </motion.button>
            </div>
          </div>
          {tailwindOpen && (
            <motion.div
              variants={contentVariants}
              animate="animate"
              className="text-[#469DF0] rounded-md mt-1 p-2"
            >
              <p>
                I use react.js to build a beautiful and interactive client
                sideinterface. It is the most popular JavaScript frontend
                Library.
              </p>
            </motion.div>
          )}
        </motion.div>
        <motion.div
          transition={{ layout: { duration: 1, type: "spring" } }}
          layout
          variants={cardVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          onClick={() => setframerOpen(!framerOpen)}
          className="m-2 ml-8 border-4 border-indigo-200 border-x-indigo-500 p-4"
        >
          <div layout="position" className="flex justify-between">
            <div className="w-20 pl--4	">
              <img src={framerimg} alt="framerImage" />
            </div>
            <div>
              <motion.button
                variants={readMoreVariants}
                whileHover="hover"
                className="text-[#469DF0] py-2 px-4 rounded-sm m-0"
              >
                Read More
              </motion.button>
            </div>
          </div>
          {framerOpen && (
            <motion.div
              variants={contentVariants}
              animate="animate"
              className="text-[#469DF0] rounded-md mt-1 p-2"
            >
              <p>
                I use react.js to build a beautiful and interactive client
                sideinterface. It is the most popular JavaScript frontend
                Library.
              </p>
            </motion.div>
          )}
        </motion.div>
        <motion.div
          transition={{ layout: { duration: 1, type: "spring" } }}
          layout
          variants={cardVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          onClick={() => sethtmlOpen(!htmlOpen)}
          className="m-2 ml-8 border-4 border-indigo-200 border-x-indigo-500 p-4"
        >
          <div layout="position" className="flex justify-between">
            <div className="w-20 pl--4	">
              <img src={htmlimg} alt="htmlImage" />
            </div>
            <div>
              <motion.button
                variants={readMoreVariants}
                whileHover="hover"
                className="text-[#469DF0] py-2 px-4 rounded-sm m-0"
              >
                Read More
              </motion.button>
            </div>
          </div>
          {htmlOpen && (
            <motion.div
              variants={contentVariants}
              animate="animate"
              className="text-[#469DF0] rounded-md mt-1 p-2"
            >
              <p>
                I use react.js to build a beautiful and interactive client
                sideinterface. It is the most popular JavaScript frontend
                Library.
              </p>
            </motion.div>
          )}
        </motion.div>
        <motion.div
          transition={{ layout: { duration: 1, type: "spring" } }}
          layout
          variants={cardVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          onClick={() => setmongoDBOpen(!mongoDBOpen)}
          className="m-2 ml-8 border-4 border-indigo-200 border-x-indigo-500 p-4"
        >
          <div layout="position" className="flex justify-between">
            <div className="w-20 pl--4	">
              <img src={mongodbimg} alt="mongoDbImage" />
            </div>
            <div>
              <motion.button
                variants={readMoreVariants}
                whileHover="hover"
                className="text-[#469DF0] py-2 px-4 rounded-sm m-0"
              >
                Read More
              </motion.button>
            </div>
          </div>
          {mongoDBOpen && (
            <motion.div
              variants={contentVariants}
              animate="animate"
              className="text-[#469DF0] rounded-md mt-1 p-2"
            >
              <p>
                I use react.js to build a beautiful and interactive client
                sideinterface. It is the most popular JavaScript frontend
                Library.
              </p>
            </motion.div>
          )}
        </motion.div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Skills;
