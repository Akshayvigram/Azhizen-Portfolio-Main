import React from 'react';
import HeroSection from '../components/HeroSection';
import Aboutus from '../components/Aboutus';
import ServicesSection from '../components/ServicesSection';
import ClientsSection from '../components/ClientsSection';
import DevelopmentCycle from '../components/DevelopmentCycle';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';


const Main = () => {
  return (
    <div className="font-poppins">
      <div className="pt-16">
        <HeroSection />
        <ServicesSection />
        <section id="about-us">
          <Aboutus />
        </section>
        <DevelopmentCycle />

        <ClientsSection />
        <FAQSection />
        <CTASection />
      </div>
    </div>
  );
};

export default Main;
