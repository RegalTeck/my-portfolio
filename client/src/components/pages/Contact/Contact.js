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
      <div className="w-full flex justify-center align-center mb-6">
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
        <div></div>
      </div>
      <div className="myname text-center">
        Get in touch with me
        <div className="mb-4">
          <span className="text-[#469DF0]">Send a message,</span> let's connect
        </div>
        {/* <Typewriter
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
        /> */}
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
      <div className=" w-2/4	h-4/6 flex justify-around p-6 gap-4 border-2 border-indigo-200 border-x-indigo-500">
        <div className="w-1/6 flex justify-around gap-4">
          <SocialsColumn className="" />
          <motion.div
            className="bg-[#101D51] w-0.5 h-48 rounded-md mt-8 "
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

        <Form className="w-4/5 " />
        {/* <img src={avata3} /> */}
      </div>
    </div>
  );
};

export default Contact;
