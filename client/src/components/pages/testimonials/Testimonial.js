import React from "react";
import linkdinRecommendationImg1 from "./assets/linkdinRecommendationImg1.PNG";
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
        <div className=" w-full h-3/4 flex justify-center align-center">
          <div></div>
          <img
            src={linkdinRecommendationImg1}
            alt="Linkdin Recommendation Image"
            className="border-none rounded-lg ml-4 w-3/5 "
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
