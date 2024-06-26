import React, { useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeStructure from "./components/pages/home/HomeStructure";
import Header from "./components/section/header/Header";
import Project from "./components/pages/project/Project";
import ExperienceAndJourney from "./components/pages/about/ExperienceAndJourney";
import Education from "./components/pages/education/Education";
import Certification from "./components/pages/certification/Certification";
import Awards from "./components/pages/awards/Awards";
import Testimonial from "./components/pages/testimonials/Testimonial";
// import Modal from "./components/section/modal/Modal";
// import OpeningName from "./components/section/welcome/OpeningName";
import { AnimatePresence } from "framer-motion";
import Contact from "./components/pages/Contact/Contact";
import Skills from "./components/pages/skills/Skills";
import Footer from "./components/section/footer/Footer";

const App = () => {
  // const [openingName, setOpeningName] = useState(true);
  // const [showModal, setShowModal] = useState(true);

  return (
    // <div className="bg-[#101D51] bg-cover bg-center text-white">
    //   <BrowserRouter>
    //     <nav>
    //       <Header />
    //     </nav>
    //     <Routes>
    //       <Route path="/" element={<HomeStructure />} />
    //       <Route path="project" element={<Project />} />
    //       <Route path="about" element={<About />} />
    //       <Route path="education" element={<Education />} />
    //       <Route path="certification" element={<Certification />} />
    //       <Route path="testimon" element={<Testimonial />} />
    //     </Routes>
    //   </BrowserRouter>
    // </div>

    <div className="textSize bg-[#101D51] text-white font-LGaramond">
      {/* <OpeningName openingName={openingName} setOpeningName={setOpeningName} /> */}

      {/* <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        // setOpeningName={setShowModal}
      />
      <AnimatePresence wait onExitComplete={() => setShowModal(false)}> */}

      <Header />
      <HomeStructure
      //setShowModal={setShowModal}
      />
      <Project />
      <ExperienceAndJourney />
      {/* <Education /> */}
      <Skills />
      <Certification />
      <Awards />
      <Testimonial />
      <Contact />
      <Footer />
      {/* </AnimatePresence> */}
    </div>
  );
};

export default App;
