import React from "react";
import eduimg from "./assets/eduimg.JPG";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <div className=" h-screen w-full font-LGaramond" id="education">
      <div className="pages text-center text-[#469DF0] font-LGaramond uppercase font-bold">
        Education
      </div>
      <div className="w-full flex items-center justify-around gap-4 px-6">
        <div className="w-8/12 border-4 border-indigo-200 border-x-indigo-500 p-4">
          My educational journey has been one of dedication, determination, and
          a pursuit of excellence.
          <br /> At the secondary school level, I graduated from St'Michaels
          College where I was awareded the overrall best student.
          <br /> At the University level, I gained admission to study mass
          communication at the National Open University of Nigeria. Where I
          bagged my First Degree as a Bachelor of Science in Mass Communication,
          March 2023.
          <br />
          Going forward, I have procuured a form a to undertake my msters
          program at the university of Lagos. The foremost university in Africa,
          known for building influential personalities across the world.
        </div>
        <div className="ml-4 w-4/12	">
          <div className="w-3/4">
            <img
              src={eduimg}
              alt="Education Image"
              className="border-none rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
