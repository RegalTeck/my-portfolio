import React from "react";

const Footer = () => {
  return (
    <div className="h-20 grid grid-col gap-4 mt-0 md:mt-8  content-center">
      <hr className="" />
      <div className="h-full text-center flex flex-col gap-0 md:flex-row md:justify-center md:align-center md:gap-2">
        <div>
          Copyright &#169; 2023 Adewale Victor Adeboye{" "}
          <span className="text-[#469DF0]">( Regal ).</span>
        </div>

        <div>All rights reserved.</div>
      </div>
    </div>
  );
};

export default Footer;
