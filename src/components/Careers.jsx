// import React, { useState } from "react";
// import { ChevronDown } from "lucide-react";
// import Jobs from "./Jobs";

// const benefits = [
//   "Professional development opportunities",
//   "Performance based Promotions & Salary hike",
//   "Job Flexibility",
//   "Health wellness & benefits",
//   "Employee Recognition Programs",
// ];

// export default function Careers() {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleAccordion = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div className="bg-gray-50 min-h-screen mt-25">
//       {/* Header Section */}
//       <div className="w-[calc(100%-2rem)] mx-4 flex flex-col shadow-[0_-8px_15px_rgba(0,0,0,0.1)]">
//         <div className="w-full flex justify-center items-center py-12 px-4 md:px-20 bg-white/10 backdrop-blur-sm relative">
//           <div className="text-center flex">
//             {/* <div className="hidden md:block">
//               <p className="inline-block bg-gradient-to-br from-[#0078B4] to-[#00B4D9] text-white px-6 py-3 rounded-[29px_29px_29px_0] mb-6 absolute top-5 left-250 transform -translate-x-1/2">
//                 We are hiring
//               </p>
//             </div> */}
//             <h2 className="text-black font-poppins text-2xl md:text-5xl font-bold leading-tight tracking-wider mt-11">
//               We are Looking For{" "}
//               <span className="text-[#00B4D9] text-4xl md:text-6xl">
//                 Skilled
//               </span>{" "}
//               people
//             </h2>
//             {/* <p className="mt-6 flex text-justify text-[#707070] text-[18px] font-poppins font-normal max-w-4xl mx-auto">
//               We are passionate about Webflow Development. We are looking for
//               talented and motivated individuals who share our vision and want
//               to be part of a dynamic and innovative team.
//             </p> */}
//           </div>
//         </div>
//       </div>

//       {/* Benefits Section */}
//       {/* <div className="flex flex-col md:flex-row px-4 md:px-[317px] py-[40px] bg-gray-50 gap-15"> */}
//       {/* Left Side: Heading and Description */}
//       {/* <div className="flex-1 hidden md:block">
//           <h3 className="text-black font-poppins text-[40px] md:text-[50px] font-medium leading-normal">
//             Wellness & Benefits
//           </h3>
//           <p className="mt-2 mb-4 text-[#707070] text-[18px] font-poppins font-normal pr-8">
//             As part of our pursuit to lead impactful, fulfilling lives, we take
//             benefits pretty seriously.
//           </p>
//         </div> */}

//       {/* Right Side: Accordion Section */}
//       {/* <div className="flex-1 w-full max-w-2xl mt-6 md:mt-0 space-y-4 hidden md:block">
//           {benefits.map((benefit, index) => (
//             <div
//               key={index}
//               className="bg-white shadow-[0px_4px_8px_-2px_rgba(0,0,0,0.1)] border border-gray-200 rounded-md"
//             >
//               <button
//                 className="bg-white w-full flex justify-between items-center py-4 px-4 text-left text-[16px] md:text-[18px] font-medium text-black"
//                 onClick={() => toggleAccordion(index)}
//               >
//                 {benefit}
//                 <ChevronDown
//                   className={`transform transition-transform ${
//                     openIndex === index ? "rotate-180" : ""
//                   } w-6 h-6 text-black`}
//                 />
//               </button>
//               {openIndex === index && (
//                 <div className="mt-2 mb-4 text-justify text-[#707070] text-[18px] font-poppins font-normal px-4 py-2 bg-white rounded-b-md">
//                   <p>
//                     Companies can implement programs to recognize and reward
//                     employees for their hard work and achievements, which can
//                     help boost morale and motivation.
//                   </p>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div> */}

//       <Jobs />
//     </div>
//   );
// }















import { useMemo, useState, useRef, useEffect } from "react";
import { Search, Pointer } from "lucide-react";
import { motion } from "framer-motion";
// import Navbar from "@/components/careers/Navbar";
// import Footer from "@/components/careers/Footer";
import JobCard from "../components/support/JobCard";
import JobDetailDialog from "../components/support/JobDetailDialog";
import ApplicationDialog from "../components/support/ApplicationDialog";
import { Input } from "../components/ui/input";
import { jobs as allJobs } from "../../src/data/jobs";
import skylineImg from "../assets/city-skyline.png";
import worldMapBg from "../assets/world-map-bg.png";

const Careers = () => {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);
  const [detailOpen, setDetailOpen] = useState(false);
  const [applyOpen, setApplyOpen] = useState(false);
  
  const listRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const [listScrollRange, setListScrollRange] = useState(0);

  const SCROLL_SPEED_FACTOR = 0.5; // Lower values make options scroll slower. E.g., 0.5 is 50% scroll speed.

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return allJobs;
    return allJobs.filter(
      (j) =>
        j.title.toLowerCase().includes(q) ||
        j.team.toLowerCase().includes(q) ||
        j.type.toLowerCase().includes(q)
    );
  }, [query]);

  // Calculate the scroll range of the list items once items are loaded
  useEffect(() => {
    const updateScrollRange = () => {
      const listEl = listRef.current;
      if (!listEl) return;
      const range = listEl.scrollHeight - listEl.clientHeight;
      setListScrollRange(range > 0 ? range : 0);
    };

    updateScrollRange();
    
    // Resize and rendering changes can affect scrollHeight
    window.addEventListener("resize", updateScrollRange);
    const timer = setTimeout(updateScrollRange, 300);

    return () => {
      window.removeEventListener("resize", updateScrollRange);
      clearTimeout(timer);
    };
  }, [filtered]);

  // Synchronize window scroll offset to list scroll position during sticky phase
  useEffect(() => {
    const listEl = listRef.current;
    const containerEl = scrollContainerRef.current;
    if (!listEl || !containerEl || listScrollRange <= 0) {
      if (listEl) listEl.scrollTop = 0;
      return;
    }

    const handleScroll = () => {
      const rect = containerEl.getBoundingClientRect();
      const navbarHeight = 64;

      if (rect.top <= navbarHeight) {
        const scrolledPixels = navbarHeight - rect.top;
        const targetScrollTop = scrolledPixels * SCROLL_SPEED_FACTOR;
        listEl.scrollTop = Math.max(0, Math.min(listScrollRange, targetScrollTop));
      } else {
        listEl.scrollTop = 0;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [listScrollRange]);

  const openJob = (job) => {
    setSelected(job);
    setDetailOpen(true);
  };

  const startApply = () => {
    setDetailOpen(false);
    setTimeout(() => setApplyOpen(true), 80);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* <Navbar /> */}

      <main id="career-section-container">
        {/* Hero */}
        <section
          aria-labelledby="careers-hero"
          className="relative overflow-hidden"
          style={{
            backgroundImage:
              "linear-gradient(110deg, #EFF6FF 0%, #E0F2FE 40%, #00B4D9 100%)",
          }}
        >
          <img
            src={worldMapBg}
            alt=""
            aria-hidden
            className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-40"
          />
          <div className="relative mx-auto px-6 pt-24 pb-20 md:pt-36 md:pb-28 lg:pt-40 lg:pb-32" style={{ maxWidth: "1280px" }}>
            <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                id="careers-hero"
                className="max-w-xl text-4xl font-semibold leading-tight tracking-tight text-[#111827] md:text-5xl lg:text-6xl"
              >
                We are Looking For <br />
                <span className="text-brand">Skilled</span> people.
              </motion.h1>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
                className="w-full max-w-md"
              >
                <label htmlFor="job-search" className="sr-only">
                  Search jobs
                </label>
                <div className="relative">
                  <Input
                    id="job-search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search Jobs"
                    className="h-14 rounded-full border-0 bg-white pl-6 pr-14 text-base shadow-md placeholder:text-muted-foreground/70 focus-visible:ring-2 focus-visible:ring-brand"
                  />
                  <button
                    type="button"
                    aria-label="Search"
                    className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full text-foreground/80 transition-colors hover:bg-brand/10 hover:text-brand"
                  >
                    <Search className="h-5 w-5" />
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <div
          ref={scrollContainerRef}
          style={{ height: listScrollRange > 0 ? `calc(100vh + ${listScrollRange / SCROLL_SPEED_FACTOR}px)` : "auto" }}
          className="relative bg-muted/30"
        >
          <section
            id="career"
            aria-labelledby="join-our-team"
            className="sticky top-[64px] h-[calc(100vh-64px)] overflow-hidden flex flex-col justify-start pt-6 md:pt-10 lg:justify-start lg:pt-12 lg:pb-0"
          >
            <div className="w-full relative z-10 mx-auto px-6 py-8" style={{ maxWidth: "1280px" }}>
              <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
                {/* Left */}
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="relative flex flex-col"
                >
                  <div className="flex items-start gap-3">
                    <Pointer className="mt-1.5 h-7 w-7 text-brand" aria-hidden />
                    <div>
                      <h2
                        id="join-our-team"
                        className="text-3xl font-bold tracking-tight md:text-4xl"
                      >
                        <span className="text-brand">Join</span>{" "}
                        <span className="text-foreground">Our Team</span>
                      </h2>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Display{" "}
                        <span className="font-semibold text-foreground">
                          {allJobs.length} Roles
                        </span>{" "}
                        that Open in Azhizen
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Right */}
                <div
                  ref={listRef}
                  className="h-[445px] overflow-y-hidden pt-3 pr-2 no-scrollbar"
                >
                  <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-col gap-4 pb-4"
                  >
                    {filtered.map((job) => (
                      <motion.div key={job.id} variants={itemVariants}>
                        <JobCard job={job} onClick={() => openJob(job)} />
                      </motion.div>
                    ))}
                    {filtered.length === 0 && (
                      <div className="rounded-2xl border border-dashed border-border bg-card p-10 text-center text-muted-foreground">
                        No roles match your search.
                      </div>
                    )}
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Full-width Skyline background */}
            <div className="absolute bottom-2 lg:bottom-0 left-0 right-0 w-full pointer-events-none opacity-40 z-0">
              <img
                src={skylineImg}
                alt=""
                aria-hidden
                className="w-full h-auto object-contain object-bottom max-h-[600px] md:max-h-[750px]"
              />
            </div>
          </section>
        </div>
      </main>

      {/* <Footer /> */}

      <JobDetailDialog
        job={selected}
        open={detailOpen}
        onOpenChange={setDetailOpen}
        onApply={startApply}
      />
      <ApplicationDialog
        job={selected}
        open={applyOpen}
        onOpenChange={setApplyOpen}
      />
    </div>
  );
};

export default Careers;