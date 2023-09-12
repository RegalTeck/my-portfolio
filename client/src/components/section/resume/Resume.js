import React, { useState } from "react";
import { motion } from "framer-motion";
import DownloadForOfflineOutlinedIcon from "@mui/icons-material/DownloadForOfflineOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { MdOutlineDownloadForOffline } from "react-icons/md";
import { GrView } from "react-icons/gr";

import {
  AiOutlineCaretUp,
  AiOutlineCaretDown,
  AiOutlineCaretRight,
} from "react-icons/ai";

const RESUME_File_URL =
  "http://localhost:3000/Adewale Victor Adeboye Resume.pdf";

const Resume = () => {
  const downloadFileAtURL = (url) => {
    const Adewale_Adeboye_Resume = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", "Adewale Victor Adeboye Resume");
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  const [isOpen, setIsOpen] = useState(false);

  const resumeVariants = {
    whileHover: {
      scale: 1.1,
      boxShadow: "0px 0px 8px rgb(255,255,255)",
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
  };
  return (
    <motion.div
      className="flex p-2 border-2 border-[#469DF0] font-LGaramond"
      variants={resumeVariants}
      whileHover="whileHover"
    >
      <div>
        <div className="flex justify-start gap-2">
          <div
            className=" text-[#469DF0] uppercase font-bold"
            transition={{ layout: { duration: 1 } }}
            layout
            onClick={() => setIsOpen(!isOpen)}
          >
            <motion.button className="section uppercase" layout="position">
              Resume
            </motion.button>
          </div>
          <button onClick={() => setIsOpen(!isOpen)}>
            {!isOpen ? (
              <AiOutlineCaretDown className="hidden " />
            ) : (
              <AiOutlineCaretUp color="#469DF0" fontSize="16px" />
            )}
          </button>
        </div>

        {isOpen && (
          <motion.div className="flex justify-center align-center px-1 border-2 border-indigo-200 border-x-indigo-500	text-xs">
            <button
              onClick={() => {
                downloadFileAtURL(RESUME_File_URL);
              }}
              className="flex hover:bg-blue-900 p-1 rounded-md"
            >
              Download CV <MdOutlineDownloadForOffline fontSize="18" />
            </button>
            <a
              href="https://drive.google.com/file/d/1fGjoQE_fuPHSfvju78YAvIRJXiAibm7x/view?usp=drive_link"
              aria-label="View CV"
              rel="noopener"
              target="_blank"
            >
              <button className="flex gap-1 justify-between align-center hover:bg-blue-900 p-1 rounded-md">
                ViewCV <GrView fontSize="20" color="white" />
              </button>
            </a>
          </motion.div>
        )}
      </div>

      <span class="relative flex h-3 w-3">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
        <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
      </span>
    </motion.div>
  );
};

export default Resume;
