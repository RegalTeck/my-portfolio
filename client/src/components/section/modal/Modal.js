import React from "react";
// import { useEffect } from "react";
import Typewriter from "typewriter-effect";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modal = {
  hidden: {
    y: "-110vh",
    opacity: "0",
  },
  visible: {
    y: "100px",
    opacity: 1,
    Transition: { delay: 0.5 },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: { type: "spring", stiffness: 300, yoyo: Infinity },
  },
};

const Modal = ({ showModal, setShowModal }) => {
  // useEffect(() => {
  //   setTimeout(() => {
  //     setShowModal(true);
  //   }, 5000);
  // }, [setOpeningName]);
  return (
    <AnimatePresence wait>
      {showModal && (
        <motion.div
          className="backdrop"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div
            className="modal bg-blue/40 backdrop-blur-lg"
            variants={modal}
            initial="hidden"
            animate="visible"
          >
            <Typewriter
              options={{
                autoStart: true,
                wrapperClassName: "greeting",
                loop: true,
                delay: 20,
                pauseFor: 2000000,
                strings: ["Thank You For Visiting My Portfolio"],
              }}
            />
            <div className="started py-2">
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 200,
                  strings: ["Click Explore To Get Started"],
                }}
              />
            </div>
            <div className=" content-center animate-bounce w-6 h-6 m-auto">
              <KeyboardDoubleArrowDownIcon />
            </div>
            <Link to="/">
              <motion.button
                onClick={() => setShowModal(false)}
                className=" rounded-md p-2"
                variants={buttonVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
              >
                Explore
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
