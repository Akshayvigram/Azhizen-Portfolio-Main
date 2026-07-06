import React from 'react';
import HeroSection from '../components/HeroSection';
import Aboutus from '../components/Aboutus';
import ServicesSection from '../components/ServicesSection';
import ClientsSection from '../components/ClientsSection';
import WhyChooseUs from '../components/WhyChooseUs';

const Main = () => {
  return (
    <div className="font-poppins">
      <div className="pt-16">
        <HeroSection />
        <section id="about-us">
          <Aboutus />
        </section>
        <ServicesSection />
        <WhyChooseUs />
        <ClientsSection />
      </div>
    </div>
  );
};

export default Main;
