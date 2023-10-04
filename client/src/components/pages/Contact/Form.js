import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const submitBTNVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: { type: "spring", stiffness: 300, yoyo: Infinity },
  },
};

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_aet12z3",
        "contact_form",
        form.current,
        "eIO3avz-2a7h6vOLg"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert(`Message Sent`);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="w-full flex flex-col justify-center items-center text-[#469DF0]">
      <form ref={form} onSubmit={sendEmail} className="w-full">
        <div className="text-center"></div>
        <div className="p-2  flex flex-col">
          <label>Full Name </label>
          <input
            type="text"
            name="user-name"
            placeholder="Your Full Name"
            required
            className="rounded-md text-[#000] p-2 font-bold	"
          />
        </div>
        <div className="p-1 md:p-2  flex flex-col">
          <label>Email </label>
          <input
            type="email"
            name="user-email"
            placeholder="Your E-mail Address"
            required
            className="rounded-md text-[#000] p-2 font-bold	"
          />
        </div>
        <div className="p-1 md:p-2  flex flex-col">
          <label>Message</label>
          <textarea
            name="message"
            placeholder="Hello! Adewale, I have an interesting offer for you..."
            required
            className="rounded-md p-1 md:p-4 text-[#000] font-bold"
          />
        </div>
        <motion.div
          className=" rounded-md px-2 py-2 mt-2  text-white bg-green-600"
          variants={submitBTNVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          <button type="submit" value="Send" className="w-full">
            Send
          </button>
        </motion.div>
      </form>
    </div>
  );
};

export default Form;
