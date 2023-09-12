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
    <div className="w-full h-screen font-LGaramond px-20" id="certification">
      {/* <div className="pages text-center text-[#469DF0] uppercase font-bold">
        About Me
      </div> */}
      <div className=" flex items-center justify-even h-3/4 gap-5">
        <div className="w-7/12 self-start">
          <div className="text-[#469DF0] uppercase">Certification</div>
          <div className="w-full flex justify-start align-center mb-6">
            <motion.div
              className="bg-[#469DF0] h-0.5 w-20 rounded-md text-center"
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
            <div className="flex justify-around align-center">
              <div>
                <div> Full Stack JavaScript Certificate at GoMyCode</div>
                <div>Duration</div>
                <motion.div
                  className="w-12 flex  justify-center align-center px-2 border-2 border-[#469DF0]"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0px 0px 8px rgb(255,255,255)",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div>
                    <button className="section font-LGaramond text-[#469DF0] uppercase font-bold rounded-md center">
                      view{" "}
                    </button>
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
            <div className="flex justify-around align-center">
              <div className="justify-self-start">
                <div> Soft Skills For IT - Academy</div>
                <div>Duration</div>
                <motion.div
                  className="w-12 flex  justify-center align-center px-2 border-2 border-[#469DF0]"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0px 0px 8px rgb(255,255,255)",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div>
                    <button className="section font-LGaramond text-[#469DF0] uppercase font-bold rounded-md center">
                      view{" "}
                    </button>
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

        <div className="w-5/12 self-end mb-2">
          <div className="text-[#469DF0] uppercase">Awards</div>
          <div className="w-full flex justify-start align-center mb-4">
            <motion.div
              className="bg-[#469DF0] h-0.5 w-14 rounded-md text-center"
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
            My Artsthetic AI project was awarded the third best demo day project
            at GoMyCode Nigeria. Excelling in functionalities, design,
            creativity and solution.
          </motion.div>
        </div>
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
