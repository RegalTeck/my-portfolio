// import React from "react";
// import { Link } from "react-scroll";
// import { motion, AnimatePresence } from "framer-motion";

// const nameDrop = {
//   visible: { opacity: 1 },
//   hidden: { opacity: 0 },
// };

// const openName = {
//   hidden: {
//     y: "-110vh",
//     opacity: "0",
//   },
//   visible: {
//     y: "100px",
//     opacity: 1,
//     Transition: { delay: 0.5 },
//   },
// };

// const buttonVariants = {
//   hover: {
//     scale: 1.1,
//     textShadow: "0px 0px 8px rgb(255,255,255)",
//     boxShadow: "0px 0px 8px rgb(255,255,255)",
//     transition: { type: "spring", stiffness: 300, yoyo: Infinity },
//   },
// };
// const OpeningName = (openingName, setOpeningName) => {
//   return (
//     <div className="openName text-blue text-center">
//       <AnimatePresence wait>
//         {openingName && (
//           <motion.div
//             className="nameDrop"
//             variants={nameDrop}
//             initial="hidden"
//             animate="visible"
//             exit="hidden"
//           >
//             <motion.div
//               className=""
//               variants={openName}
//               initial="hidden"
//               animate="visible"
//             >
//               <p className="">Thank You For Visiting My Portfolio</p>

//               <Link to="/">
//                 <motion.button
//                   onAnimationEnd={() => setOpeningName(false)}
//                   className=" rounded-md p-2"
//                   variants={buttonVariants}
//                   initial="initial"
//                   animate="animate"
//                   whileHover="hover"
//                 >
//                   Explore
//                 </motion.button>
//               </Link>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default OpeningName;
