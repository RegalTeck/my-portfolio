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
      className="w-full h-1/2 md:h-screen font-LGaramond mt-20 md:mt-0 px-4 md:px-20"
      id="testimonials"
    >
      <div className="h-full">
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
        <div className=" md:h-2/4	md:flex md:justify-center md:align-center md:mt-4 md:gap-8">
          <img
            src={LImg3}
            alt="Linkdin Recommendation Image"
            className="mb-2 md:mb-0 md:w-2/5 md:h-2/4	"
          />
          <img
            src={LImg4}
            alt="Linkdin Recommendation Image"
            className="mb-2 md:mb-0 md:self-center md:w-2/5  md:h-3/5"
          />
        </div>

        <div className="md:h-2/4 md:flex md:justify-center md:align-center md:-mt-20 md:gap-8">
          <img
            src={LImg2}
            alt="Linkdin Recommendation Image"
            className="mb-2 md:mb-0 md:w-2/5 md:h-2/4	"
          />
          <img
            src={LImg1}
            alt="Linkdin Recommendation Image"
            className="md:self-center md:w-2/5 md:h-2/4	md:mt-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
