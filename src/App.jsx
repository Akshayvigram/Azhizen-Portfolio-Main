import React, { Suspense, lazy, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./Main/Main";
import ContactForm from "./components/ContactForm";
import FooterSection from "./components/FooterSection";
import Careers from "./components/Careers";
import JobApplicationForm from "./components/JobApplicationForm";
import AboutUsPage from "./components/AboutUsPage";
import ServicePage from "./components/ServicePage";
import TrainingSupport from "./components/TrainingSupport";
import CoursePage from "./components/CoursePage";

// Lazy load the new Marketing Services page
const MarketingServices = lazy(() => import("./pages/MarketingServices"));

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

      <Suspense fallback={<div className="text-center py-24 text-gray-400 font-poppins text-lg">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contact-us" element={<ContactForm />} />
          <Route path="/career" element={<Careers />} />
          <Route path="/JobApplicationForm" element={<JobApplicationForm />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/training-support" element={<TrainingSupport />} />
          <Route path="/course" element={<CoursePage />} />
          <Route path="/marketing-services" element={<MarketingServices />} />
        </Routes>
      </Suspense>

      {/* Contact page renders its own footer */}
      {!isContactPage && <FooterSection />}
    </div>
  );
};

export default App;