import React from "react";
import { motion } from "framer-motion";

const STEPS = [
  {
    id: 1,
    icon: "/Frame 1576.png",
    title: "Requirement gathering",
  },
  {
    id: 2,
    icon: "/Frame 1576 (1).png",
    title: "Planning",
  },
  {
    id: 3,
    icon: "/Frame 1576 (7).png",
    title: "Designing",
  },
  {
    id: 4,
    icon: "/Frame 1576 (2).png",
    title: "Development",
  },
  {
    id: 5,
    icon: "/Frame 1576 (3).png",
    title: "Testing & Quality Assurance",
  },
  {
    id: 6,
    icon: "/Frame 1576 (4).png",
    title: "Deployment & Launching",
  },
  {
    id: 7,
    icon: "/Frame 1576 (5).png",
    title: "Service & Support",
  },
];

const DevelopmentCycle = () => {
  // Framer Motion container variants for staggered children animation
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="development-cycle"
      className="relative py-[60px] px-6 sm:px-8 lg:px-12 w-full overflow-hidden"
      style={{
        backgroundImage: "url('/Frame 1576 (6).png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#f0f7ff", // Fallback background color if image fails
      }}
    >
      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-[48px]"
        >
          <h2 className="text-[32px] sm:text-[38px] font-semibold text-[#0f172a] font-[Poppins] tracking-tight">
            Development Cycle
          </h2>
        </motion.div>

        {/* Steps Grid / Flex */}
        <div className="relative">
          {/* Connecting Line for desktop view */}
          <div 
            className="absolute top-[50px] left-[7%] right-[7%] h-[1.5px] bg-slate-300 z-0 hidden lg:block"
            style={{ pointerEvents: "none" }}
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12 lg:gap-4 relative z-10"
          >
            {STEPS.map((step) => (
              <motion.div
                key={step.id}
                variants={itemVariants}
                className="flex flex-col items-center text-center w-full max-w-[200px] group"
              >
                {/* Icon Wrapper Circle */}
                <motion.div
                  whileHover={{ 
                    scale: 1.08, 
                    boxShadow: "0 12px 30px rgba(24, 119, 242, 0.15)",
                    borderColor: "#1877F2" 
                  }}
                  transition={{ duration: 0.2 }}
                  className="w-[100px] h-[100px] rounded-full bg-white flex items-center justify-center border-2 border-slate-100 shadow-[0_8px_24px_rgba(0,0,0,0.03)] mb-4 cursor-pointer relative z-10 transition-colors"
                >
                  <img
                    src={step.icon}
                    alt={step.title}
                    className="w-[76px] h-[76px] object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </motion.div>

                {/* Step Title */}
                <h3 className="text-[14px] sm:text-[15px] font-semibold text-[#1e293b] font-[Poppins] leading-snug px-2 transition-colors duration-200 group-hover:text-[#1877F2]">
                  {step.title}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentCycle;
