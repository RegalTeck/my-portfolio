import React from "react";
import techtrate from "./assests/techtrate.png";
import arthesticai from "./assests/arthesticai.png";
import judeobi from "./assests/judeobi.png";
import { motion } from "framer-motion";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { FcLike } from "react-icons/fc";
// import "./Project.css";

const Project = () => {
  const contentVariants = {
    hover: {
      scale: 1.05,
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
    <div
      className="w-full min-h-screen font-LGaramond p-4 bg-gradient-to-r from-blue-900 to-blue-400 md:px-10 md:pt-10"
      id="projects"
    >
      <div class=" bg-white bg-opacity-30 rounded-lg shadow-lg backdrop-blur-xl backdrop-filter p-5 md:px-10 md:py-10">
        <div className="text-center text-white font-LGaramond uppercase font-bold">
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
            className="bg-[#F8F8FF] 
            border-4 rounded-md  border-white p-2"
          >
            <div className="">
              <div>
                <img
                  src={judeobi}
                  alt="judeobi"
                  className="border-2 rounded-md "
                />
              </div>
              <div className="flex justify-between ">
                <div className="w-4/6">
                  <h2 className="text-[#469DF0] mb-2 font-semibold mt-1">
                    JudeObi BookShelf
                  </h2>
                  <p className="mb-2 text-black">Access wide genre of books</p>
                  <h4 className="text-[#469DF0] mb-2">Technologies used</h4>
                  <div className="text-black">Icons</div>
                </div>
                <div className="w-3/12 block">
                  <div className="grid grid-start gap-2 mt-6">
                    <motion.button
                      variants={buttonVariants}
                      whileHover="hover"
                      className="bg-[#469DF0] rounded-sm uppercase textSize p-1 text-center"
                    >
                      <a
                        href="https://judobibookshelf.com/"
                        aria-label="GitHub"
                        rel="noopener"
                        target="_blank"
                        className=""
                      >
                        <span>View</span>{" "}
                        <svg
                          className="w-3 text-white inline-block"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </a>{" "}
                    </motion.button>{" "}
                    <motion.button
                      variants={buttonVariants}
                      whileHover="hover"
                      className="bg-[#469DF0] rounded-sm uppercase textSize p-1 text-center"
                    >
                      <a
                        href="https://judobibookshelf.com/"
                        aria-label="GitHub"
                        rel="noopener"
                        target="_blank"
                      >
                        GitHub{" "}
                      </a>{" "}
                    </motion.button>{" "}
                    <button>
                      <svg
                        className="w-4 text-white inline-block hover:text-[#FF0000] rounded"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={contentVariants}
            whileHover="hover"
            className="bg-[#F8F8FF]
            border-4 rounded-md  border-white p-2"
          >
            <div className="">
              <div>
                <img
                  src={arthesticai}
                  alt="artsthetic"
                  className="border-2 rounded-md"
                />
              </div>
              <div className="flex justify-between ">
                <div className="w-4/6">
                  <h2 className="text-[#469DF0] mb-2 font-semibold mt-1">
                    Artsthetic AI
                  </h2>
                  <p className="mb-2 text-black">Image generator AI App</p>
                  <h4 className="text-[#469DF0] mb-2">Technologies used</h4>
                  <div className="text-black">Icons</div>
                </div>
                <div className="w-3/12 block">
                  <div className="grid grid-start gap-2 mt-6">
                    <motion.button
                      variants={buttonVariants}
                      whileHover="hover"
                      className="bg-[#469DF0] rounded-sm uppercase textSize p-1 text-center"
                    >
                      <a
                        href="https://artsthetic-ai-vkr5.onrender.com/"
                        aria-label="GitHub"
                        rel="noopener"
                        target="_blank"
                      >
                        <span>View</span>{" "}
                        <svg
                          className="w-3 text-white inline-block"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </a>{" "}
                    </motion.button>{" "}
                    <motion.button
                      variants={buttonVariants}
                      whileHover="hover"
                      className="bg-[#469DF0] rounded-sm uppercase textSize p-1 text-center"
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
                    <button>
                      <svg
                        className="w-4 text-white inline-block hover:text-[#FF0000] rounded"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={contentVariants}
            whileHover="hover"
            className="bg-[#F8F8FF]
            border-4 rounded-md  border-white p-2"
          >
            <div className="">
              <div>
                <img
                  src={techtrate}
                  alt="TechTrate"
                  className="border-2 rounded-md"
                />
              </div>
              <div className="flex justify-between ">
                <div className="w-4/6">
                  <h2 className="text-[#469DF0] mb-2 font-semibold mt-1">
                    TechTrate
                  </h2>
                  <p className="mb-2 text-black">be a tech litrate</p>
                  <h4 className="text-[#469DF0] mb-2">Technologies used</h4>
                  <div className="text-black">Icons</div>
                </div>
                <div className="w-3/12 block">
                  <div className="grid grid-start gap-2 mt-6">
                    <motion.button
                      variants={buttonVariants}
                      whileHover="hover"
                      className="bg-[#469DF0] rounded-sm uppercase textSize p-1 text-center"
                    >
                      <a
                        href=""
                        aria-label="GitHub"
                        rel="noopener"
                        target="_blank"
                      >
                        <span>View</span>{" "}
                        <svg
                          className="w-3 text-white inline-block"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </a>{" "}
                    </motion.button>{" "}
                    <motion.button
                      variants={buttonVariants}
                      whileHover="hover"
                      className="bg-[#469DF0] rounded-sm uppercase textSize p-1 text-center"
                    >
                      <a
                        href=""
                        aria-label="GitHub"
                        rel="noopener"
                        target="_blank"
                      >
                        GitHub{" "}
                      </a>{" "}
                    </motion.button>{" "}
                    <button>
                      <svg
                        className="w-4 text-white inline-block hover:text-[#FF0000] rounded"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Project;
