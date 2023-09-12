import React from "react";
import headerimg from "./assets/headerimg.PNG";
import linkdin1 from "./assets/linkdin1.PNG";
import linkdin2 from "./assets/linkdin2.PNG";
import { motion } from "framer-motion";

const Testimonial = () => {
  return (
    <div className="w-full h-screen font-LGaramond px-20" id="testimonials">
      <div className="h-full">
        <div className="pages text-center text-[#469DF0] font-LGaramond uppercase font-bold ">
          Testimonials and Recommendation
        </div>
        <div className="w-full flex justify-center align-center mb-4">
          <motion.div
            className="bg-[#469DF0] h-0.5 w-3/12 rounded-md text-center"
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
        <div style={{ backgroundImage: "url({headerimg})" }}>
          {/* <img
            src={headerimg}
            alt="Linkdin Recommendation header"
            className="w-full h-16	"
          /> */}
        </div>
        <div className=" w-full h-3/4 flex justify-between align-center gap-6 mt-6">
          <img
            src={linkdin1}
            alt="Linkdin Recommendation Image"
            className="w-6/12	h-2/5	"
          />
          <img
            src={linkdin2}
            alt="Linkdin Recommendation Image"
            className="w-6/12	h-2/5	"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
