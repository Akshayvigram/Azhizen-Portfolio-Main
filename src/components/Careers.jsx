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















import { useMemo, useState } from "react";
import { Search } from "lucide-react";
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

      <main>
        {/* Hero */}
        <section
          aria-labelledby="careers-hero"
          className="relative overflow-hidden"
          style={{
            backgroundImage:
              "linear-gradient(110deg, hsl(var(--hero-from)) 0%, hsl(var(--hero-via)) 55%, hsl(var(--hero-to)) 100%)",
          }}
        >
          <img
            src={worldMapBg}
            alt=""
            aria-hidden
            className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-40"
          />
          <div className="container relative mx-auto px-6 py-20 md:py-28">
            <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
              <h1
                id="careers-hero"
                className="max-w-xl text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl"
              >
                We are Looking For{" "}
                <span className="text-brand text-blue-500">Skilled</span> people.
              </h1>

              <div className="w-full max-w-md">
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
              </div>
            </div>
          </div>
        </section>

        {/* Join Our Team */}
        <section id="career" aria-labelledby="join-our-team" className="bg-muted/30">
          <div className="container mx-auto px-6 py-16 md:py-20">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
              {/* Left */}
              <div className="relative flex flex-col">
                <div className="flex items-start gap-3">
                  <span aria-hidden className="mt-1 text-3xl text-brand">
                    👆
                  </span>
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

                <div className="mt-auto hidden pt-12 lg:block">
                  <img
                    src={skylineImg}
                    alt=""
                    aria-hidden
                    width={1024}
                    height={512}
                    loading="lazy"
                    className="w-full select-none object-contain opacity-80"
                  />
                </div>
              </div>

              {/* Right */}
              <div className="flex flex-col gap-4">
                {filtered.map((job) => (
                  <JobCard key={job.id} job={job} onClick={() => openJob(job)} />
                ))}
                {filtered.length === 0 && (
                  <div className="rounded-2xl border border-dashed border-border bg-card p-10 text-center text-muted-foreground">
                    No roles match your search.
                  </div>
                )}
              </div>
            </div>

            {/* Mobile skyline */}
            <div className="mt-10 lg:hidden">
              <img
                src={skylineImg}
                alt=""
                aria-hidden
                width={1024}
                height={512}
                loading="lazy"
                className="w-full select-none object-contain opacity-80"
              />
            </div>
          </div>
        </section>
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