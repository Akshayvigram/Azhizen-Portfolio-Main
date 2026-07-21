import React, { useState, useEffect } from "react";
import { Star, ArrowRight, BookOpen, Clock, Bell } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const DoubleCornerArrow = ({ className = "w-[18px] h-[18px]" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.8"
    strokeLinecap="square"
    strokeLinejoin="miter"
  >
    <path d="M11 5h8v8" />
    <path d="M5 11h8v8" />
  </svg>
);

// Featured Partner Courses
const FEATURED_COURSES = [
  {
    id: "f1",
    title: "Java Programming Course",
    image: "/b44633a77cb38d34997b93dc656d52c119367715.png",
    category: "Beginner Level",
    rating: 4.1,
  },
  {
    id: "f2",
    title: "Web Design & Development",
    image: "/cdba1ef077424f1f987781487a1ea96c897a397b.png",
    category: "Beginner Level",
    rating: 4.1,
  },
  {
    id: "f3",
    title: "Robotic and Automation Course",
    image: "/865f5d044541f31153adc33831959dd291188e56.png",
    category: "Beginner Level",
    rating: 4.1,
  },
  {
    id: "f4",
    title: "Mern Stack Development Course",
    image: "/b6d1fd9f8831b00133d94fe94a7fdf4329ec97f8.png",
    category: "Beginner Level",
    rating: 4.1,
  },
];

// Main Course Listing
const MAIN_COURSES = [
  {
    id: "c1",
    title: "ROS2 With Python / C++ - Arduino + Sensors & Actuators",
    image: "/fee65732d062a4d091f6d379fb64ec6cbda7d0aa.png",
    categories: ["Trending Course", "Robotics", "Automation"],
    price: "₹8,300.00",
    rating: 4.5,
    duration: "12 Weeks",
    level: "Beginner"
  },
  {
    id: "c2",
    title: "VHDL/Verilog For Beginners - ASIC Flow Using Synopsys Tools",
    image: "/f640e38ff651cb30fe178c04f368275ec4244cd3.png",
    categories: ["Trending Course", "Automation"],
    price: "₹8,300.00",
    rating: 4.5,
    duration: "12 Weeks",
    level: "Beginner"
  },
  {
    id: "c4",
    title: "CEH (Certified Ethical Hacking) Prep - Bug Bounty & Web",
    image: "/21577a0198e0b3866b3688c799fd718d27783c98.png",
    categories: ["Trending Course", "Web Development"],
    price: "₹8,300.00",
    rating: 4.5,
    duration: "12 Weeks",
    level: "Beginner"
  },
  {
    id: "c3",
    title: "AI Artificial Intelligence Course",
    image: "/e248f34a7bfca4bdcb6f77caf7bf1438cdb51911.png",
    categories: ["Trending Course", "Artificial Intelligence AI"],
    price: "₹8,300.00",
    rating: 4.5,
    duration: "12 Weeks",
    level: "Beginner"
  },
];

const TABS = [
  "Trending Course",
  "Artificial Intelligence AI",
  "Web Development",
  "Robotics",
  "Automation",
];

export default function CoursePage() {
  const [activeTab, setActiveTab] = useState("Trending Course");
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastAnchor, setToastAnchor] = useState("");

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [showToast, toastAnchor]);

  const triggerToast = (message, anchor) => {
    setToastMessage(message);
    setToastAnchor(anchor);
    setShowToast(true);
  };

  // Filter courses based on active tab
  const filteredCourses = MAIN_COURSES.filter((course) =>
    course.categories.includes(activeTab)
  );

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div className="bg-[#FAFBFD] min-h-screen font-poppins overflow-x-hidden">
      
      {/* ────────────────── HERO SECTION ────────────────── */}
      <div 
        className="relative bg-cover bg-center pt-[80px] md:pt-[96px] px-6 overflow-visible flex flex-col items-center"
        style={{ 
          backgroundImage: `url('/f27dd8893d259b0c63d6fd23d1b7d9e24e85b44a (5).png')`,
          paddingBottom: 'clamp(180px, 31vw + 25px, 410px)'
        }}
      >
        {/* Subtle overlay to enhance contrast */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px] pointer-events-none"></div>
 
        <div className="relative z-10 max-w-[1200px] mx-auto text-center flex flex-col items-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-950 leading-[1.2] tracking-tight max-w-[950px]"
          >
            Industry-Driven Courses Powered by <br /> Azhizen Academy
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="text-sm sm:text-base text-slate-500 max-w-[700px] mt-5 leading-relaxed font-normal"
          >
            Gain real-world skills through expert-led training, hands-on projects, and innovation-focused learning designed for future-ready careers.
          </motion.p>
 
          <div className="relative mt-8">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              role="button"
              onClick={() => triggerToast("Azhizen Academy is Coming Soon!", "explore-hero")}
              className="px-6 py-[12px] bg-[#1877F2] text-white rounded-full text-[15px] font-semibold flex items-center gap-2 transition-all duration-300 shadow-[0_6px_20px_rgba(24,119,242,0.4)] hover:bg-[#1466d0] hover:scale-[1.03] hover:shadow-[0_8px_24px_rgba(24,119,242,0.5)] cursor-pointer"
            >
              Explore Azhizen Acedemy
              <DoubleCornerArrow className="w-4 h-4" />
            </motion.span>

            <AnimatePresence>
              {showToast && toastAnchor === "explore-hero" && (
                <motion.div
                  initial={{ opacity: 0, y: -8, x: "-50%" }}
                  animate={{ opacity: 1, y: 0, x: "-50%" }}
                  exit={{ opacity: 0, y: -8, x: "-50%" }}
                  className="absolute top-[125%] left-1/2 z-50 bg-slate-900 text-white text-[12.5px] px-4.5 py-2 rounded-xl shadow-2xl border border-white/10 font-medium font-poppins whitespace-nowrap"
                >
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 rotate-45 border-l border-t border-white/10" />
                  {toastMessage}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
 
        {/* Overlapping Laptop Mockups */}
        <motion.div 
          initial={{ opacity: 0, y: 60, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="absolute left-1/2 w-[75%] sm:w-[80%] max-w-[1000px] z-40 px-4"
          style={{
            top: 'calc(100% - clamp(180px, 31vw + 25px, 410px) + 25px)'
          }}
        >
          <div className="relative w-full overflow-hidden" style={{ aspectRatio: '2.15 / 1' }}>
            <img 
              src="/WhatsApp Image 2026-06-29 at 8,05,30 PM-Picsart-BackgroundRemover.jpeg" 
              alt="Course Interface Mockup" 
              className="w-full h-full object-cover object-top drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
            />
            {/* Light smoke gradient overlay to softly fade the cropped bottom edge */}
            <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 bg-gradient-to-t from-[#FAFBFD] via-[#FAFBFD]/70 to-transparent pointer-events-none"></div>
          </div>
        </motion.div>
 
        {/* White Curved Wave Overlay at bottom */}
        <div className="absolute bottom-0 left-0 w-full z-30 pointer-events-none translate-y-[2px]">
          <img 
            src="/Group 429.png" 
            alt="Transition Wave" 
            className="w-full h-auto object-cover min-h-[40px] md:min-h-[80px]"
          />
        </div>
      </div>

      {/* ────────────────── PARTNER / FEATURED SECTION ────────────────── */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-30 max-w-[1280px] mx-auto px-4 mt-8 sm:mt-16 md:mt-24 lg:mt-32 xl:mt-40"
      >
        <div 
          className="bg-slate-950 pl-6 pr-4 py-5 md:pl-10 md:pr-4 md:py-6 rounded-[2rem] shadow-[0_25px_60px_rgba(0,0,0,0.3)] border border-white/10 relative bg-cover bg-center"
          style={{ 
            backgroundImage: `url('/0993ac0efcfb23291ba8a4ac6b66a79589b7d0dc.png')` 
          }}
        >
          {/* Deep Overlay for contrast */}
          <div className="absolute inset-0 bg-slate-950/60 pointer-events-none rounded-[2rem]"></div>

          <div className="relative z-10 flex flex-col lg:flex-row gap-8 lg:gap-10 items-stretch">
            
            {/* Left Partner Info Card */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="lg:w-[23%] shrink-0 flex flex-col justify-center text-left py-1"
            >
              <div>
                <h3 className="text-[26px] sm:text-[28px] font-bold leading-[1.2] tracking-tight" style={{ color: '#ffffff' }}>
                  Proudly Present By <br />
                  our Partner <br />
                  Azhizen Academy
                </h3>
              </div>

              <div className="relative mt-7 self-start">
                <button 
                  onClick={() => triggerToast("Azhizen Academy is Coming Soon!", "explore-partner")}
                  className="px-6 py-[12px] bg-gradient-to-r from-[#FF8E00] to-[#B62C00] text-white font-bold rounded-[8px] text-[14px] flex items-center justify-center gap-2 hover:brightness-105 hover:scale-[1.01] transition-all cursor-pointer shadow-none"
                >
                  Explore Azhizen Acedemy
                  <DoubleCornerArrow className="w-4.5 h-4.5" />
                </button>

                <AnimatePresence>
                  {showToast && toastAnchor === "explore-partner" && (
                    <motion.div
                      initial={{ opacity: 0, y: -8, x: "-50%" }}
                      animate={{ opacity: 1, y: 0, x: "-50%" }}
                      exit={{ opacity: 0, y: -8, x: "-50%" }}
                      className="absolute top-[125%] left-1/2 z-50 bg-slate-900 text-white text-[12.5px] px-4.5 py-2 rounded-xl shadow-2xl border border-white/10 font-medium font-poppins whitespace-nowrap"
                    >
                      <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-slate-900 rotate-45 border-l border-t border-white/10" />
                      {toastMessage}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Right Featured Courses Row */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex-1 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4"
            >
              {FEATURED_COURSES.map((course) => (
                <div key={course.id} className="relative h-full">
                  <motion.div 
                    key={course.id}
                    variants={itemVariants}
                    whileHover={{ y: -6, transition: { duration: 0.2 } }}
                    onClick={() => triggerToast("Coming Soon!", course.id)}
                    className="bg-white rounded-2xl py-4 px-[12px] flex flex-col justify-between border border-[#E2E8F0] transition-all duration-300 group text-left shadow-[0_8px_30px_rgba(0,0,0,0.08)] cursor-pointer h-full"
                  >
                    <div>
                      {/* Course Image Wrapper */}
                      <div className="rounded-xl overflow-hidden bg-slate-50 relative aspect-[1.5] flex items-center justify-center border border-slate-100">
                        <img 
                          src={course.image} 
                          alt={course.title}
                          className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                        />
                      </div>

                      {/* Tag & Title */}
                      <div className="mt-4">
                        <span className="text-[12px] font-bold text-[#1877F2] tracking-wide block">
                          {course.category}
                        </span>
                        <h4 className="text-[16px] font-bold text-slate-800 mt-1 line-clamp-2 min-h-[48px] leading-[1.3]">
                          {course.title}
                        </h4>
                      </div>
                    </div>

                    {/* Specialization & Rating */}
                    <div className="mt-5">
                      <span className="text-[12px] text-gray-400 block font-medium">specialization</span>
                      <div className="flex items-center gap-1 mt-0.5 text-[12px] font-bold text-[#FF8C00]">
                        <Star className="w-3.5 h-3.5 fill-[#FF8C00] text-[#FF8C00]" />
                        <span>{course.rating}</span>
                      </div>
                    </div>
                  </motion.div>

                  <AnimatePresence>
                    {showToast && toastAnchor === course.id && (
                      <motion.div
                        initial={{ opacity: 0, y: -8, x: "-50%" }}
                        animate={{ opacity: 1, y: 0, x: "-50%" }}
                        exit={{ opacity: 0, y: -8, x: "-50%" }}
                        className="absolute top-[102%] left-1/2 z-50 bg-slate-900 text-white text-[12.5px] px-4.5 py-2 rounded-xl shadow-2xl border border-white/10 font-medium font-poppins whitespace-nowrap"
                      >
                        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 rotate-45 border-l border-t border-white/10" />
                        {toastMessage}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* ────────────────── SKILL BASED COURSES SECTION ────────────────── */}
      <div className="max-w-[1320px] mx-auto px-6 py-20">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left mb-10"
        >
          <h2 className="text-[32px] font-semibold text-slate-900 leading-tight">
            Skill Based Course that transform your career
          </h2>
          <p className="text-[16px] text-slate-500 mt-2 font-normal">
            From Basic topic to Advance topic that hep to bright your Career
          </p>
        </motion.div>
 
        {/* Tab Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex border-b border-slate-200 mb-10 w-full"
        >
          <div className="flex overflow-x-auto gap-8 no-scrollbar pb-1.5">
            {TABS.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <span
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative whitespace-nowrap text-[16px] font-medium pb-3.5 transition-colors duration-200 cursor-pointer ${
                    isActive ? "text-slate-900" : "text-gray-400 hover:text-slate-600"
                  }`}
                >
                  {tab}
                  {isActive && (
                    <motion.span 
                      layoutId="activeTabUnderline"
                      className="absolute bottom-[-1px] left-0 right-0 h-[3px] bg-slate-900 rounded-t-sm"
                    ></motion.span>
                  )}
                </span>
              );
            })}
          </div>
        </motion.div>

        {/* Courses Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((course) => (
              <div key={course.id} className="relative h-full">
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  key={course.id}
                  onClick={() => triggerToast("Coming Soon!", course.id)}
                  className="bg-white rounded-2xl p-[16px] flex flex-col justify-between border border-[#E2E8F0] transition-all duration-300 group text-left shadow-[0_8px_30px_rgba(0,0,0,0.08)] cursor-pointer h-full"
                >
                  <div>
                    {/* Image */}
                    <div className="rounded-xl overflow-hidden bg-slate-50 relative aspect-[1.5] flex items-center justify-center border border-slate-100">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                      />
                    </div>

                    {/* Title */}
                    <h3 className="font-semibold text-slate-800 text-[16px] leading-[1.3] mt-4 line-clamp-2 min-h-[48px]">
                      {course.title === "AI Artificial Intelligence Course" ? (
                        <>AI Artificial Intelligence <br /> Course</>
                      ) : (
                        course.title
                      )}
                    </h3>

                    {/* Badges Container */}
                    <div className="flex items-center gap-1.5 mt-4">
                      {/* Level Badge */}
                      <span className="border border-[#E2E8F0] text-gray-500 text-[10px] font-normal px-2 py-0.5 rounded">
                        {course.level}
                      </span>
                      
                      {/* Rating Badge */}
                      <span className="border border-[#E2E8F0] text-orange-500 text-[10px] font-normal px-2 py-0.5 rounded flex items-center gap-0.5">
                        <Star className="w-3.5 h-3.5 fill-orange-500 text-orange-500" />
                        <span>{course.rating}</span>
                      </span>

                      {/* Duration Badge */}
                      <span className="bg-[#1877F2] text-white text-[10px] font-normal px-2.5 py-0.5 rounded flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-white" />
                        <span>{course.duration}</span>
                      </span>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mt-4 block">
                    <span className="text-[15px] font-semibold text-slate-700 font-sans">{course.price}</span>
                  </div>
                </motion.div>

                <AnimatePresence>
                  {showToast && toastAnchor === course.id && (
                    <motion.div
                      initial={{ opacity: 0, y: -8, x: "-50%" }}
                      animate={{ opacity: 1, y: 0, x: "-50%" }}
                      exit={{ opacity: 0, y: -8, x: "-50%" }}
                      className="absolute top-[102%] left-1/2 z-50 bg-slate-900 text-white text-[12.5px] px-4.5 py-2 rounded-xl shadow-2xl border border-white/10 font-medium font-poppins whitespace-nowrap"
                    >
                      <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 rotate-45 border-l border-t border-white/10" />
                      {toastMessage}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state when no courses match filter */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-16 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
            <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <p className="text-slate-500 font-semibold">No courses found in this category.</p>
            <p className="text-slate-400 text-sm mt-1">We are adding new programs soon!</p>
          </div>
        )}
      </div>



    </div>
  );
}
