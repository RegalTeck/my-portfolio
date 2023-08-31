import React, { useState } from "react";
import { motion } from "framer-motion";
import DownloadForOfflineOutlinedIcon from "@mui/icons-material/DownloadForOfflineOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { Download } from "@mui/icons-material";

const RESUME_File_URL =
  "http://localhost:3000/Adewale Victor Adeboye Resume.pdf";

const Resume = () => {
  const downloadFileAtURL = (url) => {
    const Adewale_Adeboye_Resume = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", "Adewale_Adeboye_Resume");
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
      className="rounded-md flex p-1 mt-1.5 font-LGaramond"
      variants={resumeVariants}
      whileHover="whileHover"
    >
      <div>
        <div
          className=" text-[#469DF0] uppercase font-bold"
          transition={{ layout: { duration: 1 } }}
          layout
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.button className="section uppercase" layout="position">
            Resume{" "}
          </motion.button>
        </div>
        {isOpen && (
          <motion.div className="flex border-2 border-indigo-200 border-x-indigo-500	text-xs">
            <button
              onClick={() => {
                downloadFileAtURL(RESUME_File_URL);
              }}
              className="flex gap-1 hover:bg-blue-900 p-1 rounded-md"
            >
              Download CV <DownloadForOfflineOutlinedIcon />
            </button>
            <button className="flex gap-1 hover:bg-blue-900 p-1 rounded-md">
              <a
                href="https://drive.google.com/file/d/1fGjoQE_fuPHSfvju78YAvIRJXiAibm7x/view?usp=drive_link"
                aria-label="View CV"
                rel="noopener"
                target="_blank"
              >
                View CV <VisibilityOutlinedIcon />{" "}
              </a>
            </button>
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
