import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import Main from "./Main/Main";
import ContactForm from "./components/ContactForm";
import FooterSection from "./components/FooterSection";
import Careers from "./components/Careers";
import JobApplicationForm from "./components/JobApplicationForm";
import AboutUsPage from "./components/AboutUsPage";
import ServicePage from "./components/ServicePage"
import { useEffect } from "react";

const App = () => {
  const location = useLocation();
  const isContactPage = location.pathname === "/contact-us";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <div className="font-sans">
      {/* Contact page has its own embedded navbar in the hero */}
      {!isContactPage && <Navbar />}

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/contact-us" element={<ContactForm />} />
        <Route path="/career" element={<Careers />} />
        <Route path="/JobApplicationForm" element={<JobApplicationForm />} />
        <Route path="/services" element={<ServicePage />} />
      </Routes>

      {/* Contact page renders its own footer */}
      {!isContactPage && <FooterSection />}
    </div>

  );
};

export default App;