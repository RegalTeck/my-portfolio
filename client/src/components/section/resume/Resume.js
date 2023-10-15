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
  "http://localhost:3000/Adewale Victor Adeboye Resume Full Stack Web Developer.pdf";

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
      className="flex justify-center px-1 md:p-2 border-2 border-[#469DF0] font-LGaramond"
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
          <motion.div className="flex justify-center align-center gap-2 mb-1 md:px-1 border-2 border-indigo-200 border-x-indigo-500	text-xs">
            <button
              onClick={() => {
                downloadFileAtURL(RESUME_File_URL);
              }}
              className="hover:bg-blue-900 p-1 rounded-md"
            >
              <span>Download</span>
              <svg
                className="w-3 text-white inline-block"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M9.75 6.75h-3a3 3 0 00-3 3v7.5a3 3 0 003 3h7.5a3 3 0 003-3v-7.5a3 3 0 00-3-3h-3V1.5a.75.75 0 00-1.5 0v5.25zm0 0h1.5v5.69l1.72-1.72a.75.75 0 111.06 1.06l-3 3a.75.75 0 01-1.06 0l-3-3a.75.75 0 111.06-1.06l1.72 1.72V6.75z"
                  clip-rule="evenodd"
                />
                <path d="M7.151 21.75a2.999 2.999 0 002.599 1.5h7.5a3 3 0 003-3v-7.5c0-1.11-.603-2.08-1.5-2.599v7.099a4.5 4.5 0 01-4.5 4.5H7.151z" />
              </svg>
            </button>
            <a
              href="https://drive.google.com/file/d/1duuADgRLgg0Rsj6D9Fpv5hBYr_2akctP/view?usp=drive_link"
              aria-label="View CV"
              rel="noopener"
              target="_blank"
            >
              <button className=" hover:bg-blue-900 p-1 rounded-md">
                {/* <div className="flex justify-center align-center"> */}
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
          </motion.div>
        )}
      </div>

      <span class="relative flex h-1.5 md:h-2 w-1.5 md:w-2">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
        <span class="relative inline-flex rounded-full h-1.5 md:h-2 w-1.5 md:w-2 bg-sky-500"></span>
      </span>
    </motion.div>
  );
};

export default Resume;
