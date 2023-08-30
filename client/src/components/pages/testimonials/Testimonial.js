import React from "react";
import linkdinRecommendationImg1 from "./assets/linkdinRecommendationImg1.PNG";

const Testimonial = () => {
  return (
    <div className="w-full h-screen font-LGaramond" id="testimonial">
      <div className="h-full">
        <div className="pages text-center text-[#469DF0] font-LGaramond uppercase font-bold mb-2">
          Testimonials and Recommendation
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
