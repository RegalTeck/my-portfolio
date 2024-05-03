import React from "react";
import gmcCert from "./assets/gmcCert.png";
import demoDayCert from "./assets/demoDayCert.jpg";
import { motion } from "framer-motion";

const Certification = () => {
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
      className="w-full min-h-screen font-LGaramond px-4 md:px-20 md:flex md:items-start md:justify-even md:gap-5"
      id="certification"
    >
      <div className="md:w-7/12 md:self-start">
        <div className="text-center md:text-start text-[#469DF0] uppercase">
          Certification
        </div>
        <div className="w-full flex justify-center align-center md:justify-start md:align-center mb-6">
          <motion.div
            className="bg-[#101D51] h-0.5 w-20 rounded-md text-center"
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
        <div className="grid grid-col gap-2">
          <div className="flex justify-between align-center gap-16 md:gap-0">
            <div>
              <div> Full Stack JavaScript Certificate - GoMyCode</div>
              <div>Duration:</div>
              <motion.div
                className="w-16  flex  justify-center align-center border-2 border-[#469DF0]"
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0px 0px 8px rgb(255,255,255)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div>
                  <a
                    href="https://diploma.gomycode.app/?id=31685491271172413"
                    aria-label="GOMYCODE CERTIFICATE IMAGE"
                    rel="noopener"
                    target="_blank"
                  >
                    <button className="w-full font-LGaramond text-[#469DF0] uppercase rounded-md center">
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
                    </button>
                  </a>
                </div>
                <div className="section animate-bounce  h-4">
                  {/* <KeyboardDoubleArrowDownIcon /> */}
                </div>
              </motion.div>
            </div>
            <div>
              <div> Yaba, Lagos,Nigeria </div>
              <div>6-months. 11/2022 – 05/2023</div>
            </div>
          </div>
          <hr className="bg-[#469DF0]" />
        </div>

        <div className="grid grid-col gap-2 mt-4">
          <div className="flex justify-between align-center">
            <div className="">
              <div> Soft Skills For IT - Great Learning Academy</div>
              <div>Duration:</div>
              <motion.div
                className="w-16 flex  justify-center align-center  border-2 border-[#469DF0]"
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0px 0px 8px rgb(255,255,255)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div>
                  <a
                    href="https://drive.google.com/file/d/1_d4IbPSQw3npaJfnVS0NNoEvlLyaG3f2/view?usp=drive_link"
                    aria-label="GREAT LEARNING SOFT SKILL CERTIFICATE IMAGE"
                    rel="noopener"
                    target="_blank"
                  >
                    <button className=" font-LGaramond text-[#469DF0] uppercase font-bold rounded-md center">
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
                    </button>
                  </a>
                </div>
                <div className="section animate-bounce  h-4">
                  {/* <KeyboardDoubleArrowDownIcon /> */}
                </div>
              </motion.div>
            </div>
            <div>
              <div> Online Course </div>
              <div>1 Week</div>
            </div>
          </div>
          <hr className="bg-[#469DF0]" />
        </div>
      </div>

      <div className="mt-20 md:mt-0 md:w-5/12 md:self-center mb-2">
        <div className="text-center md:text-start text-[#469DF0] uppercase">
          Awards
        </div>
        <div className="w-full flex justify-center align-center md:justify-start md:align-center ">
          <motion.div
            className="bg-[#101D51] h-0.5 w-14 rounded-md text-center mb-4"
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

        <motion.div
          // variants={contentVariants}
          // animate="animate"
          // whileHover="hover"
          className=""
        >
          My Artsthetic AI project was awarded the third best demo day project
          at GoMyCode Nigeria. Excelling in functionalities, design, creativity
          and solution.
        </motion.div>
      </div>
    </div>

    // <div className="w-full h-screen font-LGaramond px-20" id="certification">
    //   <div className="flex items-center justify-even h-3/4	 gap-6">
    //     <div className="w-7/12 self-start">
    //       <div className="pages text-center text-[#469DF0] font-LGaramond uppercase font-bold">
    //         Certification
    //       </div>
    //       <div className="w-full flex justify-center align-center mb-4">
    //         <motion.div
    //           className="bg-[#469DF0] h-0.5 w-20 rounded-md text-center"
    //           initial={{
    //             opacity: 0,
    //           }}
    //           animate={{
    //             opacity: 1,
    //             scale: 1.1,
    //             boxShadow: "0px 0px 8px rgb(255,255,255)",
    //           }}
    //         >
    //           {}
    //         </motion.div>
    //         <div></div>
    //       </div>
    //       <div className="">
    //         <div className="w-2/5">
    //           <img
    //             src={gmcCert}
    //             alt="GomyCode Bootcamp Certificate"
    //             className="border-none rounded-lg"
    //           />
    //         </div>
    //         <motion.div
    //           variants={contentVariants}
    //           animate="animate"
    //           className=" rounded-md "
    //         >
    //           My 5 months on-site training at GOMYCODE , equipped me with the
    //           knowledge and tools necessary to thrive in the ever-evolving field
    //           of software development.
    //           <br />I was able to learn and horn my skills in modern
    //           technologies like React.Js, Node.Js, Express.Js, MongoDB,HTML,
    //           CSS, API, and other cutting edge technologies.
    //           <br />I was also able to implement this skills on wide range of
    //           hands-on projects, collaborating with talented individuals who
    //           share the same passion for coding.
    //           <br />
    //           My on-site training at GoMyCode was an intense and rewarding
    //           journey.
    //         </motion.div>
    //       </div>
    //     </div>

    //     <div className="w-5/12 self-end ">
    //       <div className="pages text-center text-[#469DF0] font-LGaramond uppercase font-bold">
    //         Awards
    //       </div>
    //       <div className="w-full flex justify-center align-center mb-4">
    //         <motion.div
    //           className="bg-[#469DF0] h-0.5 w-14 rounded-md text-center"
    //           initial={{
    //             opacity: 0,
    //           }}
    //           animate={{
    //             opacity: 1,
    //             scale: 1.1,
    //             boxShadow: "0px 0px 8px rgb(255,255,255)",
    //           }}
    //         >
    //           {}
    //         </motion.div>
    //         <div></div>
    //       </div>
    //       <div className="  ">
    //         <div className="w-2/5">
    //           <img
    //             src={demoDayCert}
    //             alt="Demo Day Certificate"
    //             className="border-none rounded-lg"
    //           />
    //         </div>
    //         <motion.div
    //           variants={contentVariants}
    //           animate="animate"
    //           className=" rounded-md"
    //         >
    //           My Artsthetic AI project was awarded the third best demo day
    //           project at GoMyCode Nigeria. Excelling in functionalities, design,
    //           creativity and solution.
    //         </motion.div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Certification;
