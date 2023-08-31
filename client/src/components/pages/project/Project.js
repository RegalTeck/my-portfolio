import React from "react";
import ArtstheticImg from "./assests/ArtstheticImg.png";
import { motion } from "framer-motion";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
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
    <div className="w-full h-screen  font-LGaramond px-20" id="project">
      <div className="pages text-center text-[#469DF0] font-LGaramond uppercase font-bold">
        Projects
      </div>
      <div className=" grid grid-cols-3 gap-4">
        <motion.div
          variants={contentVariants}
          whileHover="hover"
          className="border-4 border-indigo-200 border-x-indigo-500"
        >
          <div className="">
            <div>
              <img src={ArtstheticImg} alt="artsthetic" />
            </div>
            <div className="flex justify-between ">
              <div className="w-4/6">
                <h2 className="text-[#469DF0]">Artsthetic AI</h2>
                <p>An Image generation AI application</p>
                <h3>Technologies used</h3>
                <div>icons</div>
              </div>
              <div className="w-1/5 block">
                <div className="grid grid-start">
                  <motion.button
                    variants={buttonVariants}
                    whileHover="hover"
                    className="hover:text-[#469DF0] rounded-md uppercase text-sm"
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
                    className="hover:text-[#469DF0] rounded-md uppercase text-sm"
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
                    <FavoriteBorderOutlinedIcon />
                  </motion.button>{" "}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={contentVariants}
          whileHover="hover"
          className="border-4 border-indigo-200 border-x-indigo-500"
        >
          <div className="">
            <div>
              <img src={ArtstheticImg} alt="artsthetic" />
            </div>
            <div className="flex justify-between ">
              <div className="w-4/6">
                <h2 className="text-[#469DF0]">Artsthetic AI</h2>
                <p>An Image generation AI application</p>
                <h3>Technologies used</h3>
                <div>icons</div>
              </div>
              <div className="w-1/5 block">
                <div className="grid grid-start">
                  <motion.button
                    variants={buttonVariants}
                    whileHover="hover"
                    className="hover:text-[#469DF0] rounded-md uppercase text-sm"
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
                    className="hover:text-[#469DF0] rounded-md uppercase text-sm"
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
                    className="hover:text-[#469DF0] rounded-md "
                  >
                    <FavoriteBorderOutlinedIcon />
                  </motion.button>{" "}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={contentVariants}
          whileHover="hover"
          className="	border-4 border-indigo-200 border-x-indigo-500"
        >
          <div className="">
            <div>
              <img src={ArtstheticImg} alt="artsthetic" />
            </div>
            <div className="flex justify-between ">
              <div className="w-4/6">
                <h2 className="text-[#469DF0]">Artsthetic AI</h2>
                <p>An Image generation AI application</p>
                <h3>Technologies used</h3>
                <div>icons</div>
              </div>
              <div className="w-1/5 block">
                <div className="grid grid-start">
                  <motion.button
                    variants={buttonVariants}
                    whileHover="hover"
                    className="hover:text-[#469DF0] rounded-md uppercase text-sm"
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
                    className="hover:text-[#469DF0] rounded-md uppercase text-sm"
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
                    <FavoriteBorderOutlinedIcon />
                  </motion.button>{" "}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Project;
