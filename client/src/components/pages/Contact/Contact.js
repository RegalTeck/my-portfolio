import React from "react";
import Form from "./Form";
import SocialsColumn from "../../section/contact/SocialsColumn";
import { motion } from "framer-motion";
import avata3 from "./assets/avata3.png";
import Typewriter from "typewriter-effect";

const Contact = () => {
  return (
    <div
      className="w-full h-screen font-LGaramond flex flex-col justify-center items-center px-20"
      id="contact"
    >
      <div className="pages text-center text-[#469DF0] font-LGaramond uppercase font-bold">
        Contact
      </div>
      <div className="w-full flex justify-center align-center mb-4">
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
      <div className="text-white">
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
            delay: 40,
            strings: [
              "Do you have an interesting project ?",
              "Kindly send me a message via the form below",
              "Click on the socials icons below to get in touch",
            ],
          }}
        />
      </div>
      {/* <motion.div
        className="bg-white h-0.5 w-11/12 rounded-md m-2"
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
      </motion.div> */}
      <div className=" w-3/4 h-3/4 flex justify-evenly border-4 border-indigo-200 border-x-indigo-500">
        <SocialsColumn />
        <motion.div
          className="bg-[#101D51] w-0.5 h-11/12 rounded-md m-2 "
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
        <Form />
        <img src={avata3} />
      </div>
    </div>
  );
};

export default Contact;
