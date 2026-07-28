import React from "react";
import { motion } from "framer-motion";

/* ─── Icons ──────────────────────────────────────────────── */
const AwardIcon = () => (
  <img 
    src="/streamline-pixel_social-rewards-certified-diploma (1).png" 
    alt="Award Ceremony" 
    className="w-9 h-9 object-contain"
  />
);

const CertifiedIcon = () => (
  <img 
    src="/streamline-ultimate_award-medal-4-bold.png" 
    alt="Certified Company" 
    className="w-9 h-9 object-contain"
  />
);

/* ─── About Us Page ───────────────────────────────────────── */
const Aboutus = () => {
  return (
    <div className="bg-white w-full overflow-x-hidden font-[Poppins]">

      <section className="relative overflow-hidden bg-white py-[80px] md:py-[100px]">

        {/* Circuit — top right */}
        <img
          src="/image 650.png"
          alt=""
          aria-hidden="true"
          className="
            absolute
            top-0
            right-0
            w-[140px]
            md:w-[260px]
            opacity-90
            pointer-events-none
            select-none
          "
        />

        {/* Circuit — bottom left */}
        <img
          src="/image 650.png"
          alt=""
          aria-hidden="true"
          className="
            absolute
            bottom-0
            left-0
            w-[120px]
            md:w-[220px]
            opacity-90
            rotate-180
            pointer-events-none
            select-none
          "
        />

        <div
          className="
            relative
            z-[1]
            max-w-7xl
            mx-auto
            px-6
            lg:px-8
            w-full
            flex
            flex-col
            lg:flex-row
            items-center
            justify-center
            gap-12
            lg:gap-32
            xl:gap-36
          "
        >

          {/* ── LEFT: Image Section ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="
              relative
              w-full
              max-w-[430px]
              shrink-0
            "
          >

            {/* Main image */}
            <img
              src="/image 649.webp"
              alt="Azhizen Team"
              className="
                w-full
                h-[260px]
                sm:h-[320px]
                md:h-[350px]
                object-cover
                rounded-[16px]
                block
              "
            />

            {/* Satisfaction card */}
            <div
              className="
                absolute
                bottom-[-20px]
                right-[-10px]
                sm:right-[-20px]
                md:right-[-28px]
                w-[110px]
                h-[110px]
                sm:w-[135px]
                sm:h-[135px]
                md:w-[165px]
                md:h-[165px]
                rounded-[16px]
                overflow-hidden
                shadow-[0_8px_24px_rgba(24,119,242,0.35)]
              "
            >
              <img
                src="/Group 407.png"
                alt="100% Overall client satisfaction"
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>

          {/* ── RIGHT: Content ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex-1 w-full"
          >


            {/* Heading */}
            <h1
              className="
                text-[30px]
                sm:text-[34px]
                md:text-[36px]
                font-bold
                text-[#111827]
                leading-[1.25]
                mb-4
              "
            >
              Why you{" "}
              <span className="text-[#1877F2]">
                choose us?
              </span>
            </h1>

            {/* Subtext */}
            <p
              className="
                text-[#4B5563]
                text-sm
                lg:text-base
                2xl:text-lg
                leading-[1.75]
                mb-[22px]
                max-w-[100%]
                md:max-w-[480px]
              "
            >
              Helping IT Companies Scale faster with expert engineering talent
              and flexible development support.
            </p>

            {/* Bullet points */}
            <ul
              className="
                list-none
                p-0
                mb-8
                flex
                flex-col
                gap-3
              "
            >
              {[
                "24/7 Call Service Support",
                "Expert Team Members",
                "faster project Completion",
              ].map((item) => (
                <li
                  key={item}
                  className="
                    flex
                    items-center
                    gap-[10px]
                    text-[#374151]
                    text-sm
                    lg:text-base
                    2xl:text-lg
                  "
                >
                  <span
                    className="
                      w-[7px]
                      h-[7px]
                      rounded-full
                      bg-[#1877F2]
                      shrink-0
                    "
                  />
                  {item}
                </li>
              ))}
            </ul>

            {/* Feature cards */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.15 } }
              }}
              className="
                flex
                flex-col
                sm:flex-row
                flex-wrap
                gap-6
              "
            >

              {/* Award Ceremony */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                className="
                  flex
                  gap-3
                  w-full
                  sm:max-w-[230px]
                "
              >
                <div className="shrink-0 mt-[2px]">
                  <AwardIcon />
                </div>

                <div>
                  <p
                    className="
                      font-bold
                      text-[#111827]
                      text-[15px]
                      mb-[5px]
                    "
                  >
                    Award Ceremony
                  </p>

                  <p
                    className="
                      text-[#6B7280]
                      text-[13px]
                      leading-[1.6]
                    "
                  >
                    Proud recepient of industry for innovation and excellence in
                    It Service
                  </p>
                </div>
              </motion.div>

              {/* Certified Company */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                className="
                  flex
                  gap-3
                  w-full
                  sm:max-w-[230px]
                "
              >
                <div className="shrink-0 mt-[2px]">
                  <CertifiedIcon />
                </div>

                <div>
                  <p
                    className="
                      font-bold
                      text-[#111827]
                      text-[15px]
                      mb-[5px]
                    "
                  >
                    Certified Company
                  </p>

                  <p
                    className="
                      text-[#6B7280]
                      text-[13px]
                      leading-[1.6]
                    "
                  >
                    Trusted and Certified for delivering quality IT Solutions.
                  </p>
                </div>
              </motion.div>

            </motion.div>
          </motion.div>

        </div>
      </section>
    </div>
  );
};

export default Aboutus;



// import React from "react";
// import { Link } from "react-router-dom";

// const AboutUsPage = () => {
//   return (
//     <div className="bg-white min-h-screen pt-24 pb-12 w-full flex flex-col overflow-hidden" style={{ fontFamily: "Poppins, sans-serif" }}>
//       {/* Top Section */}
//       <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full flex flex-col lg:flex-row justify-between items-center mt-12 gap-12 lg:gap-8">

//         {/* Left Text & Stats */}
//         <div className="flex-1 max-w-2xl">
//           <h1 className="text-3xl lg:text-4xl font-semibold capitalize text-black leading-tight mb-6">
//             Where innovation meets excellence and{" "}
//             <span className="text-blue-500" style={{ color: "#1877F2" }}>ideas evolve into impactful solutions.</span>
//           </h1>
//           <p className="text-neutral-600 text-lg lg:text-xl font-medium capitalize leading-8 mb-12">
//             Azhizen drives innovation through advanced R&amp;D, precision manufacturing, and smart product development across biomedical, AI/ML, edutech, and green tech—transforming ideas into scalable, real-world solutions.
//           </p>

//           {/* Stats */}
//           <div className="flex flex-wrap gap-12">
//             <div>
//               <div className="text-blue-500 text-4xl font-bold capitalize mb-2" style={{ color: "#1877F2" }}>15+</div>
//               <div className="text-neutral-400 text-xl font-semibold capitalize">Team Members</div>
//             </div>
//             <div>
//               <div className="text-blue-500 text-4xl font-bold capitalize mb-2" style={{ color: "#1877F2" }}>10+</div>
//               <div className="text-neutral-400 text-xl font-semibold capitalize">Happy Clients</div>
//             </div>
//             <div>
//               <div className="text-blue-500 text-4xl font-bold capitalize mb-2" style={{ color: "#1877F2" }}>99%</div>
//               <div className="text-neutral-400 text-xl font-semibold capitalize">Client Satisfaction</div>
//             </div>
//           </div>
//         </div>

//         {/* Right Image */}
//         <div className="flex-1 w-full lg:max-w-[500px] xl:max-w-[600px] flex justify-end">
//           <img
//             src="/image 698.png"
//             alt="Team collaboration"
//             className="w-full h-auto object-cover rounded-xl shadow-lg"
//           />
//         </div>
//       </div>

//       <div className="h-px bg-neutral-200 max-w-7xl mx-auto w-full mt-24 mb-24"></div>

//       {/* Bottom Section */}
//       <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-24">

//         {/* Left Image with overlay */}
//         <div className="flex-1 relative w-full lg:max-w-lg xl:max-w-xl">
//           <img
//             src="/image.png"
//             alt="CEO working"
//             className="w-full h-[400px] lg:h-[500px] object-cover rounded-2xl shadow-lg"
//           />
//           {/* Overlay Box */}
//           <div className="absolute -right-6 sm:-right-10 lg:-right-16 top-[25%] lg:top-[30%] bg-white px-6 py-4 rounded-2xl shadow-2xl border border-gray-100 z-10 w-max">
//             <div className="text-[15px] font-bold text-gray-800">Mr. Bharath R</div>
//             <div className="text-blue-500 text-[13px] font-semibold mt-1" style={{ color: "#1877F2" }}>CEO - Azhizen</div>
//           </div>
//         </div>

//         {/* Right Text */}
//         <div className="flex-1 mt-12 lg:mt-0 pl-0 lg:pl-12">
//           <h3 className="text-blue-500 text-base font-bold uppercase tracking-wider mb-3" style={{ color: "#1877F2" }}>Our Mission</h3>
//           <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
//             Solutions that stick with you <span className="text-blue-500" style={{ color: "#1877F2" }}>always</span>
//           </h2>
//           <p className="text-gray-600 text-lg leading-relaxed mb-8">
//             At Azhizen, we transform bold ideas into groundbreaking realities with creativity, integrity, and a passion for quality. We exceed expectations, delivering innovative biomedical, engineering, and tech solutions that shape a smarter, sustainable future—one project at a time.
//           </p>
//           <Link
//             to="/carrer"
//             className="inline-block text-white font-semibold py-3 px-8 rounded-full transition-all hover:brightness-110"
//             style={{ background: "linear-gradient(135deg, #1877F2 0%, #0F5FD4 100%)" }}
//           >
//             Join Our Team
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUsPage;