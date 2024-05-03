import React from "react";
import headerimg from "./assets/headerimg.PNG";
import LImg1 from "./assets/LImg1.png";
import LImg2 from "./assets/LImg2.png";
import LImg3 from "./assets/LImg3.png";
import LImg4 from "./assets/LImg4.png";

import { motion } from "framer-motion";

const Testimonial = () => {
  return (
    <div
      className="w-full min-h-screen font-LGaramond px-4 bg-gradient-to-r from-white-300 to-blue-500"
      id="testimonials"
    >
      <div class=" bg-white bg-opacity-30 rounded-lg shadow-lg backdrop-blur-xl backdrop-filter px-5 py-8 md:py-10">
        <div className="pages text-center text-[#469DF0] font-LGaramond uppercase font-bold ">
          Testimonials and Recommendation
        </div>
        <div className="w-full flex justify-center align-center">
          <motion.div
            className="bg-[#101D51] h-0.5 w-3/5 md:w-3/12 rounded-md text-center"
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
        {/* <div style={{ backgroundImage: "url(${headerimg})" }}>
          {/* <img
            src={headerimg}
            alt="Linkdin Recommendation header"
            className="w-full h-16	"
          /> */}
        {/* </div>  */}
        <div className="text-center mb-4 md:text-sm md:mb-0  mt-4">
          See what they are saying about Adewale on Linkedin
        </div>

        <div className="md:flex md:justify-center md:align-start md:mt-4 md:gap-6">
          <img
            src={LImg3}
            alt="Linkdin Recommendation Image"
            className="mb-2 md:mb-0 md:w-2/5 md:h-5/6 rounded-md"
          />
          <img
            src={LImg4}
            alt="Linkdin Recommendation Image"
            className="mb-2 md:mb-0 md:mt-8 md:w-2/5 md:h-5/6 md:self-end	rounded-md"
          />
        </div>
        <div className="md:flex md:justify-center md:align-start md:gap-6 md:mt-4">
          <img
            src={LImg2}
            alt="Linkdin Recommendation Image"
            className="mb-2 md:mb-0 md:-mt-20 md:w-2/5 md:h-2/4	rounded-md"
          />
          <img
            src={LImg1}
            alt="Linkdin Recommendation Image"
            className=" md:mt-2 md:w-2/5 md:h-2/4 md:self-end rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
