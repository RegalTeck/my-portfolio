import React from "react";
import ArtstheticImg from "./assests/ArtstheticImg.png";
import { motion } from "framer-motion";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { FcLike } from "react-icons/fc";
// import "./Project.css";

const Project = () => {
  const contentVariants = {
    hover: {
      scale: 1.1,
      boxShadow: "0px 0px 8px rgb(255,255,255)",
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
  };

  const buttonVariants = {
    hover: {
      boxShadow: "0px 0px 8px rgb(255,255,255)",
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
  };

  return (
    <div className="w-full h-screen font-LGaramond px-4 md:px-20" id="projects">
      {/* <div className="inset-0 bg-blue/40 backdrop-blur-lg "> */}
      <div className="text-center text-[#469DF0] font-LGaramond uppercase font-bold">
        Projects
      </div>
      <div className="w-full flex justify-center align-center mb-4">
        <motion.div
          className="bg-[#101D51] h-0.5 w-14 rounded-md text-center"
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
      <div className="grid grid-col gap-4 md:grid md:grid-cols-3 md:gap-6 md:mt-6">
        <motion.div
          variants={contentVariants}
          whileHover="hover"
          className="border-4  border-indigo-200 border-x-indigo-500 p-2 "
        >
          <div className="">
            <div>
              <img src={ArtstheticImg} alt="artsthetic" />
            </div>
            <div className="flex justify-between ">
              <div className="w-4/6">
                <h2 className="text-[#469DF0] mb-2">Artsthetic AI</h2>
                <p className="mb-2">Image generation AI application</p>
                <h4 className="text-[#469DF0]">Technologies used</h4>
                <div>icons</div>
              </div>
              <div className="w-1/5 block">
                <div className="grid grid-start gap-2 mt-6">
                  <motion.button
                    variants={buttonVariants}
                    whileHover="hover"
                    className="hover:text-[#469DF0] rounded-md uppercase textSize"
                  >
                    <a
                      href="https://artsthetic-ai-vkr5.onrender.com/"
                      aria-label="GitHub"
                      rel="noopener"
                      target="_blank"
                    >
                      View{" "}
                    </a>{" "}
                  </motion.button>{" "}
                  <motion.button
                    variants={buttonVariants}
                    whileHover="hover"
                    className="hover:text-[#469DF0] rounded-md uppercase textSize"
                  >
                    <a
                      href="https://github.com/RegalTeck/ARTSTHETIC-AI"
                      aria-label="GitHub"
                      rel="noopener"
                      target="_blank"
                    >
                      GitHub{" "}
                    </a>{" "}
                  </motion.button>{" "}
                  <motion.button
                    variants={buttonVariants}
                    whileHover="hover"
                    className="hover:text-[#469DF0] rounded-md"
                  >
                    {/* <FavoriteBorderOutlinedIcon /> */}
                    <FcLike icon="like" fontSize="16" margin="auto" />
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={contentVariants}
          whileHover="hover"
          className="border-4  border-indigo-200 border-x-indigo-500 p-2"
        >
          <div className="">
            <div>
              <img src={ArtstheticImg} alt="artsthetic" />
            </div>
            <div className="flex justify-between ">
              <div className="w-4/6">
                <h2 className="text-[#469DF0] mb-2">Artsthetic AI</h2>
                <p className="mb-2">Image generation AI application</p>
                <h4 className="text-[#469DF0]">Technologies used</h4>
                <div>icons</div>
              </div>
              <div className="w-1/5 block">
                <div className="grid grid-start gap-2 mt-6">
                  <motion.button
                    variants={buttonVariants}
                    whileHover="hover"
                    className="hover:text-[#469DF0] rounded-md uppercase textSize"
                  >
                    <a
                      href="https://artsthetic-ai-vkr5.onrender.com/"
                      aria-label="GitHub"
                      rel="noopener"
                      target="_blank"
                    >
                      View{" "}
                    </a>{" "}
                  </motion.button>{" "}
                  <motion.button
                    variants={buttonVariants}
                    whileHover="hover"
                    className="hover:text-[#469DF0] rounded-md uppercase textSize"
                  >
                    <a
                      href="https://github.com/RegalTeck/ARTSTHETIC-AI"
                      aria-label="GitHub"
                      rel="noopener"
                      target="_blank"
                    >
                      GitHub{" "}
                    </a>{" "}
                  </motion.button>{" "}
                  <motion.button
                    variants={buttonVariants}
                    whileHover="hover"
                    className="hover:text-[#469DF0] rounded-md"
                  >
                    {/* <FavoriteBorderOutlinedIcon /> */}
                    <FcLike icon="like" fontSize="16" margin="auto" />
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={contentVariants}
          whileHover="hover"
          className="border-4  border-indigo-200 border-x-indigo-500 p-2"
        >
          <div className="">
            <div>
              <img src={ArtstheticImg} alt="artsthetic" />
            </div>
            <div className="flex justify-between ">
              <div className="w-4/6">
                <h2 className="text-[#469DF0] mb-2">Artsthetic AI</h2>
                <p className="mb-2">Image generation AI application</p>
                <h4 className="text-[#469DF0]">Technologies used</h4>
                <div>icons</div>
              </div>
              <div className="w-1/5 block">
                <div className="grid grid-start gap-2 mt-6">
                  <motion.button
                    variants={buttonVariants}
                    whileHover="hover"
                    className="hover:text-[#469DF0] rounded-md uppercase textSize"
                  >
                    <a
                      href="https://artsthetic-ai-vkr5.onrender.com/"
                      aria-label="GitHub"
                      rel="noopener"
                      target="_blank"
                    >
                      View{" "}
                    </a>{" "}
                  </motion.button>{" "}
                  <motion.button
                    variants={buttonVariants}
                    whileHover="hover"
                    className="hover:text-[#469DF0] rounded-md uppercase textSize"
                  >
                    <a
                      href="https://github.com/RegalTeck/ARTSTHETIC-AI"
                      aria-label="GitHub"
                      rel="noopener"
                      target="_blank"
                    >
                      GitHub{" "}
                    </a>{" "}
                  </motion.button>{" "}
                  <motion.button
                    variants={buttonVariants}
                    whileHover="hover"
                    className="hover:text-[#469DF0] rounded-md"
                  >
                    {/* <FavoriteBorderOutlinedIcon /> */}
                    <FcLike icon="like" fontSize="16" margin="auto" />
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Project;
