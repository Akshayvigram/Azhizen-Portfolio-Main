import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

// Standard components for organic floating animation
const FloatingIcon = ({ src, className, delay = 0, duration = 4, yRange = [-8, 8] }) => (
  <motion.div
    className={className}
    animate={{ y: yRange }}
    transition={{
      duration: duration,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
      delay: delay
    }}
    whileHover={{ scale: 1.1, rotate: [0, -3, 3, 0], transition: { duration: 0.2 } }}
  >
    <img src={src} alt="floating tech icon" className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] object-contain drop-shadow-sm select-none pointer-events-none" />
  </motion.div>
);

const ServicePage = () => {
  const [showAll, setShowAll] = useState(false);

  const initialCards = [
    {
      id: 1,
      image: "/Frame 1113.png",
      title: "IoT Solutions",
      description: "Cloud-connected smart monitoring systems.",
    },
    {
      id: 2,
      image: "/Frame 1113 (1).png",
      title: "Embedded Systems",
      description: "Custom hardware & firmware develop....",
    },
    {
      id: 3,
      image: "/Frame 1113 (2).png",
      title: "AI & Intelligent Automation",
      description: "Intelligent decision-based engineering.",
    },
    {
      id: 4,
      image: "/Frame 1113 (1).png",
      title: "Embedded Systems",
      description: "Custom hardware & firmware develop....",
    },
    {
      id: 5,
      image: "/Frame 1113 (1).png",
      title: "Embedded Systems",
      description: "Custom hardware & firmware develop....",
    },
    {
      id: 6,
      image: "/Frame 1113.png",
      title: "IoT Solutions",
      description: "Cloud-connected smart monitoring systems.",
    },
    {
      id: 7,
      image: "/Frame 1113 (1).png",
      title: "Embedded Systems",
      description: "Custom hardware & firmware develop....",
    },
    {
      id: 8,
      image: "/Frame 1113 (2).png",
      title: "AI & Intelligent Automation",
      description: "Intelligent decision-based engineering.",
    },
  ];

  const extraCards = [
    {
      id: 9,
      image: "/Frame 1113.png",
      title: "IoT Solutions",
      description: "Cloud-connected smart monitoring systems.",
    },
    {
      id: 10,
      image: "/Frame 1113 (1).png",
      title: "Embedded Systems",
      description: "Custom hardware & firmware develop....",
    },
    {
      id: 11,
      image: "/Frame 1113 (2).png",
      title: "AI & Intelligent Automation",
      description: "Intelligent decision-based engineering.",
    },
    {
      id: 12,
      image: "/Frame 1113 (1).png",
      title: "Embedded Systems",
      description: "Custom hardware & firmware develop....",
    },
  ];

  const allCards = [...initialCards, ...extraCards];
  const displayedCards = showAll ? allCards : initialCards;

  // Stagger variants for the card grid
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } },
  };

  return (
    <div className="font-poppins bg-[#F4F6FB] min-h-screen pt-16 overflow-x-hidden">
      
      {/* ── HERO SECTION ── */}
      <section
        className="relative w-full min-h-[460px] sm:min-h-[520px] md:min-h-[580px] lg:min-h-[640px] flex items-center justify-center overflow-visible bg-top bg-no-repeat px-6"
        style={{
          backgroundImage: "url('/Desktop - 92 (2).png')",
          backgroundSize: "100% 100%", // Stretches background image so the bottom white wave is always at the bottom of the container
        }}
      >
        {/* Decorative Floating Badges - Left Side */}
        <div className="absolute inset-0 z-10 pointer-events-none hidden md:block">
          <FloatingIcon
            src="/Frame 1549.png"
            className="absolute top-[18%] left-[4%] lg:left-[10%] pointer-events-auto"
            delay={0.2}
            duration={3.5}
            yRange={[-10, 10]}
          />
          <FloatingIcon
            src="/Frame 1550.png"
            className="absolute top-[32%] left-[2%] lg:left-[7%] pointer-events-auto"
            delay={0.8}
            duration={4.2}
            yRange={[-6, 6]}
          />
          <FloatingIcon
            src="/Frame 1554.png"
            className="absolute top-[48%] left-[3%] lg:left-[9%] pointer-events-auto"
            delay={0.4}
            duration={3.8}
            yRange={[-9, 9]}
          />
          <FloatingIcon
            src="/Frame 1556.png"
            className="absolute top-[62%] left-[1%] lg:left-[5%] pointer-events-auto"
            delay={1.2}
            duration={4.5}
            yRange={[-7, 7]}
          />
          <FloatingIcon
            src="/Frame 1557.png"
            className="absolute top-[76%] left-[4%] lg:left-[8%] pointer-events-auto"
            delay={0.6}
            duration={3.9}
            yRange={[-11, 11]}
          />
        </div>

        {/* Center Main Content */}
        <div className="relative z-20 text-center max-w-[850px] mx-auto pt-6 pb-20 md:pb-28 -translate-y-4 sm:-translate-y-8 md:-translate-y-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-[28px] sm:text-[38px] md:text-[44px] lg:text-[48px] font-extrabold leading-tight tracking-tight"
          >
            <span className="text-[#1877F2]">Innovative Software Solutions</span>
            <br />
            <span className="text-slate-900">for Modern Businesses</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="text-[14px] sm:text-[16px] text-slate-600 font-normal leading-relaxed max-w-[680px] mx-auto mt-6 px-2"
          >
            We build secure, scalable, and high performance software solutions that empower
            organizations to innovate, optimize operations, and accelerate digital
            transformation with confidence.
          </motion.p>
        </div>

        {/* Decorative Floating Badges - Right Side */}
        <div className="absolute inset-0 z-10 pointer-events-none hidden md:block">
          <FloatingIcon
            src="/Frame 1553.png"
            className="absolute top-[18%] right-[4%] lg:right-[10%] pointer-events-auto"
            delay={0.5}
            duration={3.7}
            yRange={[-8, 8]}
          />
          <FloatingIcon
            src="/Frame 1551.png"
            className="absolute top-[32%] right-[2%] lg:right-[7%] pointer-events-auto"
            delay={1.1}
            duration={4.4}
            yRange={[-5, 5]}
          />
          <FloatingIcon
            src="/Frame 1552.png"
            className="absolute top-[48%] right-[3%] lg:right-[9%] pointer-events-auto"
            delay={0.3}
            duration={3.9}
            yRange={[-10, 10]}
          />
          <FloatingIcon
            src="/Frame 1555.png"
            className="absolute top-[62%] right-[1%] lg:right-[5%] pointer-events-auto"
            delay={0.9}
            duration={4.6}
            yRange={[-7, 7]}
          />
          <FloatingIcon
            src="/Frame 1558.png"
            className="absolute top-[76%] right-[4%] lg:right-[8%] pointer-events-auto"
            delay={0.7}
            duration={4.1}
            yRange={[-9, 9]}
          />
        </div>
      </section>

      {/* ── SERVICES LIST SECTION ── */}
      <section className="relative z-20 max-w-[1320px] mx-auto px-[20px] pb-[40px] mt-12 md:mt-20">
        
        {/* Section Header (Matches mockup layout exactly, rendered directly on the page background) */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-12 mb-12 sm:mb-16">
          <div className="md:w-[30%] shrink-0 text-left">
            <h2 className="text-[32px] sm:text-[38px] md:text-[40px] font-extrabold leading-[1.1] tracking-tight">
              <span className="text-[#2563EB]">Service</span>
              <br />
              <span className="text-slate-900 font-bold">that we provide</span>
            </h2>
          </div>
          <div className="md:w-[70%] md:pt-2 text-left">
            <p className="text-slate-700 text-[14.5px] sm:text-[16.5px] leading-relaxed font-normal">
              We transform innovative ideas into real-world solutions through advanced technology
              <br />
              and intelligent system development, creating scalable and future-ready innovations.
            </p>
          </div>
        </div>

        {/* Cards Grid (Perfect Responsive Columns matching specifications) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="services-grid"
        >
          <AnimatePresence mode="popLayout">
            {displayedCards.map((card) => (
              <motion.div
                key={card.id}
                layout
                variants={cardVariants}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, scale: 0.9, y: 15 }}
                className="service-card"
              >
                {/* Card Image: height 210px, object-fit cover */}
                <div className="service-card-image-container">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="service-card-image"
                  />
                </div>

                {/* Content section: padding 18px */}
                <div className="service-card-content">
                  <div>
                    {/* Course Badge (Clean text with dots) */}
                    <div className="flex items-center text-[11px] text-gray-500 font-medium mb-1">
                      <span className="text-[#2563EB] font-black mr-1.5 text-xs">•</span>
                      <span>Begginer Course</span>
                      <span className="text-[#2563EB] font-black mx-1.5 text-xs">•</span>
                      <span className="text-[#2563EB] font-semibold">2 week</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-[16px] font-extrabold text-slate-800 tracking-tight leading-tight mb-1">
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[12.5px] text-slate-400 leading-normal line-clamp-1 mb-2">
                      {card.description}
                    </p>
                  </div>

                  {/* CTA Action (Royal Blue Capsule Button: bg #2563EB) */}
                  <button className="btn-royal-blue btn-register">
                    register
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More Button (Royal Blue button: Width 170px, Height 50px, bg #2563EB) */}
        <div className="flex justify-center mt-[30px]">
          <button
            onClick={() => setShowAll(!showAll)}
            className="btn-royal-blue btn-view-more gap-2"
          >
            <span>{showAll ? "View less" : "View more"}</span>
            <motion.div
              animate={{ rotate: showAll ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-4 h-4" />
            </motion.div>
          </button>
        </div>

      </section>
    </div>
  );
};

export default ServicePage;