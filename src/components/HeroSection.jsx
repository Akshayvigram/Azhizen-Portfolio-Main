import React, { useState, useRef, useEffect } from 'react';
import { db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';
import '../App.css';
import ariz from '../assets/ariz.webp';

const HeroSection = () => {
  const handleContactClick = () => {
    window.location.href = "/contact-us";
  };

  const handleCareerClick = () => {
    window.location.href = "/carrer";
  };

  const [selected, setSelected] = useState('');
  const tabRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    email: '',
    mobile: '',
    course: '',
  });

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (tabRef.current && !tabRef.current.contains(event.target)) {
        setSelected('');
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting data:', formData, 'Mode:', selected);
    try {
      const docRef = await addDoc(collection(db, 'enrollments'), {
        ...formData,
        mode: selected,
        timestamp: new Date(),
      });
      console.log('Document written with ID:', docRef.id);
      alert("Enrollment Successful!");
      setFormData({
        name: '',
        designation: '',
        email: '',
        mobile: '',
        course: '',
      });
      setSelected('');
    } catch (error) {
      console.error('Error adding document:', error.message, error.code);
      alert("Submission Failed: " + error.message);
    }
  };

  return (
    <div className="bg-white w-full overflow-x-hidden">
      {/* Mobile View */}
      <div className="block sm:hidden px-4 py-4 mt-16 text-center">
        <div className="max-w-md mx-auto">
          <h1
            className="text-2xl font-bold text-black leading-tight mb-2"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            <span className="text-blue-500" style={{ color: "#1877F2" }}>Let's</span> Pioneer.Produce.Propel <br />
            Innovate with <span className="text-blue-500" style={{ color: "#1877F2" }}>Azhizen</span>
          </h1>
          <p className="text-xs sm:text-sm text-gray-600 mb-3 px-2 font-normal">
            Innovate with Azhizen
            We're a product-driven tech company redefining what's possible.
            From smart software to AI-powered hardware, we build bold solutions.
            Our mission? Solve real-world problems with intelligence and precision.
            Step in, stand out, and shape the future with us.
          </p>
          <button
            className="rounded text-white px-4 py-2 text-xs hover:brightness-110"
            style={{ background: "linear-gradient(135deg, #1877F2 0%, #0F5FD4 100%)" }}
            onClick={handleCareerClick}
          >
            Get Started
          </button>
        </div>
      </div>

      {/* Tablet, Desktop, and 4K View */}
      <div className="hidden sm:flex bg-white h-auto lg:min-h-auto items-center relative py-15 sm:py-12 lg:py-22 mt-5">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 2xl:px-16 max-w-7xl 2xl:max-w-[1920px]">
          <div className="w-full sm:w-3/4 lg:w-1/2 relative z-10">
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-bold text-black leading-tight mb-6"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              <span className="text-blue-500" style={{ color: "#1877F2" }}>Let's </span>
              Pioneer.Produce.Propel <br />
              Innovate At <span className="text-blue-500" style={{ color: "#1877F2" }}>Azhizen</span>
            </h1>

            <p className="text-gray-600 mb-8 max-w-sm sm:max-w-md lg:max-w-lg 2xl:max-w-xl text-sm lg:text-base 2xl:text-lg font-normal">
              Innovate with Azhizen
              We're a product-driven tech company redefining what's possible.
              From smart software to AI-powered hardware, we build bold solutions.
              Our mission? Solve real-world problems with intelligence and precision.
              Step in, stand out, and shape the future with us.
            </p>

            <div className="flex space-x-4">
              <button
                className="text-white px-4 sm:px-5 lg:px-6 2xl:px-8 py-2 sm:py-2.5 lg:py-3 2xl:py-4 rounded-full transition-all hover:brightness-110 w-28 sm:w-32 lg:w-40 2xl:w-48 text-xs sm:text-sm lg:text-base 2xl:text-lg"
                style={{ background: "linear-gradient(135deg, #1877F2 0%, #0F5FD4 100%)" }}
                onClick={handleContactClick}
              >
                Contact us
              </button>
              <button
                className="text-white px-4 sm:px-5 lg:px-6 2xl:px-8 py-2 sm:py-2.5 lg:py-3 2xl:py-4 rounded-full transition-all hover:brightness-110 w-28 sm:w-32 lg:w-40 2xl:w-48 text-xs sm:text-sm lg:text-base 2xl:text-lg"
                style={{ backgroundColor: "#2A2A2A" }}
                onClick={handleCareerClick}
              >
                Join us
              </button>
            </div>
          </div>
        </div>
        {/* Blue Gradient Background (z-0) */}
        <div
          className="hidden sm:block absolute bottom-0 right-0 w-1/3 sm:w-1/4 lg:w-1/5 2xl:w-1/6 h-full bg-gradient-to-br from-[#1877F2] to-[#0F5FD4] blur-[35.5px] opacity-20 z-0 ipad-half-circle"
          style={{
            borderRadius: '591.69px 0 0 591.69px',
            bottom: '-1%',
            overflow: 'hidden',
          }}
        ></div>

        {/* Ariz Image */}
        <div className="hidden sm:block absolute bottom-0 right-0 z-0 w-[280px] sm:w-[320px] md:w-[380px] lg:w-[440px] xl:w-[500px] 2xl:w-[560px] mb-15 mr-10">
          <img
            src={ariz}
            alt="Ariz"
            className="w-full h-auto object-contain animate-float"
          />
        </div>


      </div>

      {/* Inline CSS to fix scrollbar issue */}
      <style>
        {`
    html, body {
      margin: 0;
      padding: 0;
      overflow-x: hidden;
      overflow-y: auto;
    }
    .bg-white.w-full.overflow-x-hidden {
      min-height: 40vh;
      overflow: hidden;
    }
  `}
      </style>

    </div>
  );
};

export default HeroSection;