import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

  const banners = [
    {
      id: 1,
      bg: "/Frame 1598.png",
      bgPosition: "right 45% center",
      tagline: "SOFTWARE DEVELOPMENT. HARDWARE INNOVATION.",
      taglineColor: "#8592A6",
      titleContent: (
        <div className="mb-2">
          <h1 
            className="text-2xl sm:text-3xl lg:text-[44px] xl:text-[52px] font-extrabold text-[#030A24] leading-[1.1] tracking-tight"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800 }}
          >
            Building
          </h1>
          <h1 
            className="text-2xl sm:text-3xl lg:text-[44px] xl:text-[52px] font-extrabold leading-[1.1] tracking-tight mt-1"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, color: "#1877F2" }}
          >
            Intelligent Solutions
          </h1>
          <h2 
            className="text-lg sm:text-xl lg:text-[24px] xl:text-[28px] font-bold text-[#030A24] leading-[1.2] tracking-tight mt-2 whitespace-nowrap"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}
          >
            for a Smarter Tomorrow
          </h2>
          <div className="w-20 sm:w-22 lg:w-[90px] h-[5px] rounded-full mt-2 mb-5" style={{ backgroundColor: "#1877F2" }}></div>
        </div>
      ),
      subtitle: (
        <>
          We design, develop and deliver high-performance software and <br className="hidden sm:inline" />
          reliable hardware solutions that drive your business forward
        </>
      ),
      buttonText: "Enquire now",
      buttonBg: "linear-gradient(135deg, #1877F2 0%, #0F5FD4 100%)",
      buttonShadow: "rgba(24, 119, 242, 0.35)",
    },
    {
      id: 2,
      bg: "/Frame 1595.png",
      bgPosition: "right 35% center",
      tagline: "SOFTWARE DEVELOPMENT. HARDWARE INNOVATION.",
      taglineColor: "#8592A6",
      titleContent: (
        <div className="mb-4">
          <h1 
            className="text-2xl sm:text-3xl lg:text-[44px] xl:text-[52px] font-extrabold text-[#030A24] leading-[1.1] tracking-tight"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800 }}
          >
            Technology that works
          </h1>
          <h1 
            className="text-2xl sm:text-3xl lg:text-[44px] xl:text-[52px] font-extrabold leading-[1.1] tracking-tight mt-1"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800 }}
          >
            <span style={{ color: "#030A24" }}>with nature. </span>
            <span style={{ color: "#719E37" }}>Automate.</span>
          </h1>
          <h1 
            className="text-2xl sm:text-3xl lg:text-[44px] xl:text-[52px] font-extrabold leading-[1.1] tracking-tight mt-1"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, color: "#719E37" }}
          >
            Optimize. Grow.
          </h1>
        </div>
      ),
      subtitle: (
        <>
          Complete farm automation and <br className="hidden sm:inline" />
          construction solutions for a better <br className="hidden sm:inline" />
          tomorrow.
        </>
      ),
      buttonText: "Enquire now",
      buttonBg: "linear-gradient(135deg, #719E37 0%, #5B8C2A 100%)",
      buttonShadow: "rgba(113, 158, 55, 0.35)",
    },
    {
      id: 3,
      bg: "/Frame 1596 (1).png",
      bgPosition: "right 35% center",
      tagline: "",
      taglineColor: "transparent",
      titleContent: null,
      subtitle: null,
      buttonText: null,
    },
    {
      id: 4,
      bg: "/Frame 1597.png",
      bgPosition: "right 30% center",
      tagline: "bright your future with azhizen academy",
      taglineColor: "#8A9CC0",
      titleContent: (
        <div className="mb-4">
          <h2
            className="text-sm sm:text-base lg:text-lg xl:text-[20px] font-semibold tracking-wide uppercase"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, color: "#1B2B5E", letterSpacing: "0.04em" }}
          >
            SHAPE YOUR FUTURE
          </h2>
          <h1
            className="text-2xl sm:text-3xl lg:text-[44px] xl:text-[52px] font-extrabold leading-[1.1] tracking-tight mt-1"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, color: "#1B2B5E" }}
          >
            LEARN TODAY
          </h1>
          <h1
            className="text-2xl sm:text-3xl lg:text-[44px] xl:text-[52px] font-extrabold leading-[1.1] tracking-tight mt-1"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, color: "#F5A500" }}
          >
            LEAD TOMORROW
          </h1>
        </div>
      ),
      subtitle: (
        <>
          Industry-focused courses to build skills, boost <br className="hidden sm:inline" />
          knowledge and accelerate your career
        </>
      ),
      buttonText: "Enquire now",
      buttonBg: "linear-gradient(135deg, #F5A500 0%, #E08C00 100%)",
      buttonShadow: "rgba(245, 165, 0, 0.40)",
    }
  ];

  const [[page, direction], setPage] = useState([0, 0]);
  const slideIndex = Math.abs(page % banners.length);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 4000);
    return () => clearInterval(timer);
  }, [page]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
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
      {/* Top Banner Carousel Section */}
      <div className="w-full relative overflow-hidden bg-white">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={page}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.3 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(e, info) => {
              const swipeThreshold = 50;
              if (info.offset.x < -swipeThreshold) {
                paginate(1);
              } else if (info.offset.x > swipeThreshold) {
                paginate(-1);
              }
            }}
            whileTap={{ cursor: "grabbing" }}
            className="w-full bg-no-repeat relative flex items-center select-none"
            style={{ 
              backgroundImage: `url('${banners[slideIndex].bg}')`,
              backgroundSize: "cover",
              backgroundPosition: banners[slideIndex].bgPosition || "center",
              aspectRatio: "1900 / 680",
              minHeight: "180px",
              cursor: "grab",
            }}
          >
            <div className="max-w-7xl mx-auto w-full flex flex-col justify-center px-6 lg:px-16 py-4 sm:py-8">
              {banners[slideIndex].titleContent && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
                  className="max-w-lg lg:max-w-2xl text-left font-poppins"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  <p 
                    className="font-medium text-xs sm:text-sm tracking-[0.15em] uppercase mb-4"
                    style={{ fontFamily: "Poppins, sans-serif", color: banners[slideIndex].taglineColor }}
                  >
                    {banners[slideIndex].tagline}
                  </p>

                  {banners[slideIndex].titleContent}

                  <p 
                    className="text-[#1E293B] text-xs sm:text-sm lg:text-[16px] max-w-md lg:max-w-xl mb-6 leading-[1.6] font-normal"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {banners[slideIndex].subtitle}
                  </p>

                  {banners[slideIndex].buttonText && (
                    <motion.button
                      whileHover={{ 
                        scale: 1.05, 
                        boxShadow: `0 10px 20px ${banners[slideIndex].buttonShadow}`,
                        filter: "brightness(1.08)"
                      }}
                      whileTap={{ scale: 0.97 }}
                      className="text-white font-semibold px-7 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm sm:text-base cursor-pointer border-none transition-all shadow-md"
                      style={{ 
                        background: banners[slideIndex].buttonBg,
                        fontFamily: "Poppins, sans-serif" 
                      }}
                      onClick={handleContactClick}
                    >
                      {banners[slideIndex].buttonText}
                    </motion.button>
                  )}
                </motion.div>
              )}
            </div>
            {banners[slideIndex].id === 3 && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="absolute bottom-6 sm:bottom-8 lg:bottom-10 right-4 sm:right-8 lg:right-12 z-10 flex flex-col items-end"
              >
                <span 
                  className="text-black font-bold text-xs sm:text-sm lg:text-base mb-1.5 tracking-tight"
                  style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, color: "#000000" }}
                >
                  Azhizen Media
                </span>
                <motion.a
                  href="tel:9874563210"
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 10px 20px rgba(229, 57, 0, 0.4)",
                    filter: "brightness(1.08)"
                  }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-[#E53900] text-white font-bold px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs lg:text-sm no-underline shadow-md inline-block cursor-pointer transition-all border-none"
                  style={{ fontFamily: "'Poppins', sans-serif", backgroundColor: "#E53900" }}
                >
                  Call now: 9874563210
                </motion.a>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Floating Dots Navigator — no background capsule */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-2.5">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setPage([index, index > slideIndex ? 1 : -1])}
              className={`transition-all duration-300 border-none cursor-pointer ${
                slideIndex === index
                  ? 'w-6 sm:w-7 h-2 rounded-full !bg-[#1877F2]'
                  : 'w-2 h-2 rounded-full !bg-white'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Mobile View */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="block sm:hidden px-4 py-4 mt-2 text-center"
      >
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
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="rounded text-white px-4 py-2 text-xs cursor-pointer border-none"
            style={{ background: "linear-gradient(135deg, #1877F2 0%, #0F5FD4 100%)" }}
            onClick={handleCareerClick}
          >
            Get Started
          </motion.button>
        </div>
      </motion.div>

      {/* Tablet, Desktop, and 4K View */}
      <div className="hidden sm:flex bg-white h-auto lg:min-h-auto items-center relative py-10 sm:py-8 lg:py-12 mt-0">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-8 relative z-10">
          <div className="flex-1 max-w-2xl relative z-10 text-left">
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-bold text-black leading-tight mb-6"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              <span className="text-blue-500" style={{ color: "#1877F2" }}>Let's </span>
              Pioneer.Produce.Propel <br />
              Innovate At <span className="text-blue-500" style={{ color: "#1877F2" }}>Azhizen</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
              className="text-gray-600 mb-8 max-w-sm sm:max-w-md lg:max-w-lg 2xl:max-w-xl text-sm lg:text-base 2xl:text-lg font-normal"
            >
              Innovate with Azhizen
              We're a product-driven tech company redefining what's possible.
              From smart software to AI-powered hardware, we build bold solutions.
              Our mission? Solve real-world problems with intelligence and precision.
              Step in, stand out, and shape the future with us.
            </motion.p>


          </div>

          {/* Right Image Container */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 w-full lg:max-w-[500px] xl:max-w-[600px] flex justify-end relative z-10 lg:left-12 xl:left-20 2xl:left-28"
          >
            <motion.img
              src={ariz}
              alt="Ariz"
              className="w-full h-auto object-contain"
              animate={{
                y: [0, -12, 0]
              }}
              transition={{
                duration: 4.5,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "mirror"
              }}
            />
          </motion.div>
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