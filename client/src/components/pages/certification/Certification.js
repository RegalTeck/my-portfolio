import React from "react";
import gmcCert from "./assets/gmcCert.png";
import demoDayCert from "./assets/demoDayCert.jpg";
import AgileScrumSimplilearn from "./assets/AgileScrumSimplilearn.jpeg";
import softskillsgreatlearning from "./assets/softskillsgreatlearning.PNG";
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
      className="w-full min-h-11/12 md:min-h-screen font-LGaramond px-4 pb-8 pt-10 md:pb-14 md:pt-6   md:px-20 "
      id="certification"
    >
      {/* <div className="w-full min-h-11/12"> */}
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

      <div className="w-full flex flex-col gap-4 md:flex md:gap-4">
        <div className="md:w-2/5 md:h-2/5 border-b-2 rounded-md pb-1 ">
          <img
            src={gmcCert}
            alt="Full Stack JavaScript Developer - GoMYCode
              "
            className="w-full rounded-md  "
          />
          <div className="flex justify-between mt-1">
            <div className="title">
              Full Stack JavaScript Developer - GoMYCode
            </div>
            <motion.div
              className="w-16  flex  justify-center align-center border-2 border-[#469DF0] rounded-sm"
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
                  <button className="w-full h-1/2 font-LGaramond text-[#469DF0] uppercase rounded-md text-center">
                    <span className="text-center">View</span>{" "}
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
        </div>

        <div className="md:w-2/5 md:h-2/5 self-center	 border-b-2 rounded-md pb-1">
          <img
            src={AgileScrumSimplilearn}
            alt="Soft Skills For IT - Great Learning Academy "
            className="w-full border rounded-md  "
          />
          <div className="flex justify-between mt-1">
            <div className="title">Agile Scrum Foundation - Simplilearn</div>
            <motion.div
              className="w-16  flex  justify-center align-center border-2 border-[#469DF0] rounded-sm"
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 8px rgb(255,255,255)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div>
                <a
                  href="https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxIiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvdGh1bWJfNDU3ODYzMF8xNjk3MjkzNDk0LnBuZyIsInVzZXJuYW1lIjoiQURFV0FMRSBWSUNUT1IgQURFQk9ZRSAifQ&utm_source=shared-certificate&utm_medium=app_lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Fcertificates.simplicdn.net%2Fshare%2Fthumb_4578630_1697293494.png&_branch_match_id=1312693793579667041&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1nexSA4LKU7MC3FJAgAT7%2Fq5IwAAAA%3D%3D"
                  aria-label="Agile Scrum Foundation CERTIFICATE IMAGE"
                  rel="noopener"
                  target="_blank"
                >
                  <button className="w-full h-1/2 font-LGaramond text-[#469DF0] uppercase rounded-md text-center">
                    <span className="text-center">View</span>{" "}
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
        </div>

        <div className="md:w-2/5 md:h-2/5 self-end border-b-2 rounded-md pb-1">
          <img
            src={softskillsgreatlearning}
            alt=""
            className="w-full rounded-md  "
          />
          <div className="flex justify-between mt-1">
            <div className="title">
              Soft Skills for IT - Great Learning Academy
            </div>
            <motion.div
              className="w-16  flex  justify-center align-center border-2 border-[#469DF0] rounded-sm"
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 8px rgb(255,255,255)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div>
                <a
                  href="https://drive.google.com/file/d/1_d4IbPSQw3npaJfnVS0NNoEvlLyaG3f2/view"
                  aria-label="SOFT SKILL FOR IT CERTIFICATE IMAGE"
                  rel="noopener"
                  target="_blank"
                >
                  <button className="w-full h-1/2 font-LGaramond text-[#469DF0] uppercase rounded-md text-center">
                    <span className="text-center">View</span>{" "}
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
        </div>
        {/* </div> */}
      </div>

      {/* <div className="mt-16 md:mt-0 md:w-5/12 md:self-end mb-2" id="awards">
        <div className="text-center md:text-start text-[#469DF0] uppercase">
          Awards
        </div>
        <div className="w-full flex justify-center align-center md:justify-start md:align-center ">
          <motion.div
            className="bg-[#101D51] h-0.5 w-14 rounded-md text-center mb-6"
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
      </div> */}
    </div>
  );
};

export default Certification;
