import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import AboutUsSection from '../components/AboutUsSection';
import CommunityPartner from '../components/CommunityPartner';
// import TeamPage from '../components/TeamPage';

const Main = () => {
  return (
    <div className="font-sans">
      {/* Add padding-top to account for the fixed navbar height */}
      <div className="pt-16">
        <HeroSection />
        <section id="services">
          <ServicesSection />
        </section>
        <AboutUsSection />
        {/* <TeamPage /> */}
        <CommunityPartner />
      </div>
    </div>
  );
};

export default Main;
