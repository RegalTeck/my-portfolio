import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";
import { motion } from "framer-motion";

const SocialsColumn = () => {
  const socialIcons = {
    initial: {
      x: "-100vw",
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
    },
    hover: {
      scale: 1.1,
      boxShadow: "0px 0px 8px rgb(255,255,255)",
      transition: {
        type: "spring",
        stiffness: 300,
        delay: 0.2,
        yoyo: Infinity,
      },
    },
  };

  return (
    <div>
      <motion.div className=" h-full flex flex-col justify-center items-center gap-8  ">
        <motion.button
          variants={socialIcons}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          <a
            href="https://wa.me/message/QR6KJ3SMWIQFM1"
            aria-label="WhatsApp"
            rel="noopener"
            target="_blank"
          >
            <WhatsAppIcon />
          </a>
        </motion.button>

        <motion.button
          variants={socialIcons}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          <a
            href="https://adewaleadeboye10@gmail.com/"
            aria-label="E-mail"
            rel="noopener"
            target="_blank"
          >
            <MarkEmailReadOutlinedIcon />
          </a>
        </motion.button>

        <motion.button
          variants={socialIcons}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          <a
            href="https://www.linkedin.com/in/adewale-adeboye/"
            aria-label="Linkdin"
            rel="noopener"
            target="_blank"
          >
            <LinkedInIcon />
          </a>
        </motion.button>

        <motion.button
          variants={socialIcons}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          <a
            href="https://github.com/RegalTeck/"
            aria-label="GitHub"
            rel="noopener"
            target="_blank"
          >
            <GitHubIcon />
          </a>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default SocialsColumn;
