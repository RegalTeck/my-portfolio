import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined";

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
const DropDown = () => {
  return <div>me</div>;
};

export default DropDown;
