import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import {
  AiOutlineCaretUp,
  AiOutlineCaretDown,
  AiOutlineCaretRight,
} from "react-icons/ai";

// import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
// import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined";

// const DropDown = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const liVariants = {
//     hover: {
//       scale: 1.1,
//       textShadow: "0px 0px 8px rgb(255,255,255)",
//       boxShadow: "0px 0px 8px rgb(255,255,255)",
//       transition: { type: "spring", stiffness: 300 },
//     },
//   };
// return (
//     <div className="relative flex flex-col justify-start items-center w-full rounded-lg">
//       <button
//         className="px-2 w-full flex items-center justify-between uppercase font-LGaramond"
//         onClick={() => setIsOpen((prev) => !prev)}
//       >
//         About
//         {!isOpen ? (
//           <ArrowDropDownOutlinedIcon className="h-18" />
//         ) : (
//           <ArrowDropUpOutlinedIcon className="h-8" />
//         )}
//       </button>
//       {isOpen && (
//         <motion.ul className="absolute top-4 flex flex-col items-start rounded-lg w-full">
//           <li className="">
//             <Link to="about">Experience</Link>
//           </li>
//           <motion.li
//             className=" rounded-md p-2"
//             variants={liVariants}
//             initial="initial"
//             animate="animate"
//             whileHover="hover"
//           >
//             <Link
//               to="certification"
//               smooth={true}
//               offset={-100}
//               duration={1000}
//               className="cursor-pointer"
//             >
//               Certification
//             </Link>
//           </motion.li>
//           <motion.li
//             className=" rounded-md p-2"
//             variants={liVariants}
//             initial="initial"
//             animate="animate"
//             whileHover="hover"
//           >
//             <Link
//               to="skills"
//               smooth={true}
//               offset={-100}
//               duration={1000}
//               className="cursor-pointer"
//             >
//               Skills
//             </Link>
//           </motion.li>
//           <motion.li
//             className=" rounded-md p-2"
//             variants={liVariants}
//             initial="initial"
//             animate="animate"
//             whileHover="hover"
//           >
//             <Link
//               to="testimonial"
//               smooth={true}
//               offset={-100}
//               duration={1000}
//               className="cursor-pointer"
//             >
//               Testimonials
//             </Link>
//           </motion.li>
//         </motion.ul>
//       )}
//     </div>
const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative flex flex-col  items-center w-[140px] rounded-lg ">
      {/* className="grid place-items-center bg-gradient-to-r from-sky-600
      to-indigo-600"> */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="section w-full flex items-center justify-between  px-2 rounded-lg  tracking-wider uppercase"
      >
        About
        {!isOpen ? (
          <AiOutlineCaretDown className="" />
        ) : (
          <AiOutlineCaretUp className="" />
        )}
      </button>

      {isOpen && (
        <div className=" absolute top-6 flex flex-col items-center bg-[#101D51]   border-[#469DF0] border-2 p-2 rounded-lg w-full">
          <ul className="textSize uppercase w-full text-white">
            <Link
              to="experience"
              smooth={true}
              offset={-100}
              duration={1000}
              className="cursor-pointer"
            >
              <li className="flex justify-between  hover:bg-blue-300 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-white border-l-2">
                Experience
                <AiOutlineCaretRight />
              </li>
            </Link>
            <hr />
            <Link
              to="experience"
              smooth={true}
              offset={-100}
              duration={1000}
              className="cursor-pointer"
            >
              <li className="flex justify-between  hover:bg-blue-300 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-white border-l-2">
                Journey
                <AiOutlineCaretRight />
              </li>
            </Link>
            <hr />
            <Link
              to="skills"
              smooth={true}
              offset={-100}
              duration={1000}
              className="cursor-pointer"
            >
              <li className="flex justify-between  hover:bg-blue-300 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-white border-l-2">
                Skills
                <AiOutlineCaretRight />
              </li>
            </Link>
            <hr />
            <Link
              to="certification"
              smooth={true}
              offset={-100}
              duration={1000}
              className="cursor-pointer"
            >
              <li className="flex justify-between  hover:bg-blue-300 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-white border-l-2">
                Certification
                <AiOutlineCaretRight />
              </li>
            </Link>
            <hr />
            <Link
              to="certification"
              smooth={true}
              offset={-100}
              duration={1000}
              className="cursor-pointer"
            >
              <li className="flex justify-between  hover:bg-blue-300 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-white border-l-2">
                Awards
                <AiOutlineCaretRight />
              </li>
            </Link>
            <hr className="w-full border-rounded" />
            <Link
              to="testimonials"
              smooth={true}
              offset={-100}
              duration={1000}
              className="cursor-pointer"
            >
              <li className="flex justify-between  hover:bg-blue-300 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-white border-l-2">
                Testimonial
                <AiOutlineCaretRight />
              </li>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default About;
