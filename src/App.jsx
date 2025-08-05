import React from "react";
import Navbar from "./components/Navbar";
import { Routes,Route } from "react-router-dom";
import Main from "./Main/Main";
import ContactForm from "./components/ContactForm";
import FooterSection from "./components/FooterSection";
import Careers from "./components/Careers";
import Aboutus from "./components/Aboutus";
import JobApplicationForm from "./components/JobApplicationForm";

const App = () => {
  return (
    <div className="font-sans">
      <Navbar />
     
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/contact-us" element={<ContactForm/>}/>
        <Route path="/about-us" element={<Aboutus/>}/>
        <Route path="/carrer" element={<Careers/>}/>
        <Route path="/JobApplicationForm" element={<JobApplicationForm />} />
      </Routes>
     <FooterSection/>
    </div>
  );
};

export default App;