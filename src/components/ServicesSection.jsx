import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const SERVICES = [
  {
    id: 1,
    image: "/Custom Hardware Design.jpg",
    title: "Custom Hardware Design",
    description:
      "We Deliver Advanced Hardware Prototyping With Custom PCB Design, Tailored Solution For Embedded Systems And IoT Innovation.",
  },
  {
    id: 2,
    image: "/AIML & Firmware Integration.jpg",
    title: "AI/ML & Firmware Integration",
    description:
      "We Integrate AI/ML Capabilities And Firmware Updates. Smart, Adaptable Systems Built For The Future",
  },
  {
    id: 3,
    image: "/Research & Development.jpg",
    title: "Research & Development",
    description:
      "Experts In Research And Development Employ Rigorous Methodologies And Validation Processes.",
  },
  {
    id: 4,
    image: "/IoT & Smart Automation.jpg",
    title: "IoT & Smart Automation",
    description:
      "We Design And Deploy Scalable IoT Architectures, Smart Sensors, And Cloud-Connected Automation Systems For Industrial And Consumer Needs.",
  },
];

const ServicesSection = () => {
  const navigate = useNavigate();

  return (
    <section
      id="services"
      className="
        min-h-0
        sm:min-h-screen
        px-4
        xs:px-8
        pt-[24px]
        sm:pt-[60px]
        pb-[16px]
        sm:pb-[80px]
        bg-gradient-to-b
        from-[#081125]
        via-[#122247]
        to-[#081125]
        font-[Poppins]
      "
    >
      {/* ── Heading Row (Title on Left, Button on Right) ── */}
      <motion.div 
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-[1400px] mx-auto w-full mb-[32px] sm:mb-[52px] px-4 text-left"
      >
        {/* Top Row: Title on Left, Button on Right */}
        <div className="flex flex-row justify-between items-center w-full mb-1">
          <h2
            className="
              !text-white
              text-[28px]
              sm:text-[38px]
              font-bold
              m-0
              font-[Poppins]
            "
          >
            Our Service
          </h2>

          <div className="shrink-0 flex items-center justify-end -translate-y-[4px] sm:translate-y-0">
            {/* Large Button for Desktop */}
            <button
              onClick={() => navigate("/services")}
              className="
                hidden
                sm:block
                px-8
                py-[14px]
                bg-gradient-to-r
                from-[#1877F2]
                to-[#00B4D9]
                text-white
                border-none
                rounded-[10px]
                text-[16px]
                font-semibold
                tracking-[0.02em]
                transition-all
                duration-300
                shadow-[0_6px_18px_rgba(24,119,242,0.25)]
                hover:-translate-y-[2px]
                hover:shadow-[0_14px_34px_rgba(24,119,242,0.35)]
                hover:brightness-110
                font-[Poppins]
                whitespace-nowrap
                cursor-pointer
              "
            >
              Explore All →
            </button>

            {/* Small Icon Button for Mobile */}
            <button
              onClick={() => navigate("/services")}
              className="
                block
                sm:hidden
                w-10
                h-10
                rounded-full
                bg-gradient-to-r
                from-[#1877F2]
                to-[#00B4D9]
                text-white
                border-none
                flex
                items-center
                justify-center
                shadow-[0_4px_12px_rgba(24,119,242,0.3)]
                active:scale-95
                transition-all
                cursor-pointer
              "
              aria-label="Explore all services"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        </div>

        {/* Bottom Row: Subtitle */}
        <p
          className="
            text-[#FFFFFF]
            text-[12.5px]
            xs:text-[13px]
            sm:text-[14.5px]
            md:text-[16px]
            font-light
            font-[Poppins]
            whitespace-nowrap
            m-0
          "
        >
          These are the core service that we provide to you
        </p>
      </motion.div>

      {/* ── Cards ── */}
      <style>{`
        .services-scroll::-webkit-scrollbar {
          display: none;
        }
        .services-scroll {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.12 } }
        }}
        className="
          flex
          flex-row
          md:flex-wrap
          gap-4
          md:gap-7
          justify-start
          md:justify-center
          w-full
          overflow-x-auto
          md:overflow-x-visible
          services-scroll
          px-6
          md:px-0
          pb-4
          md:pb-0
          max-w-[1400px]
          mx-auto
        "
      >
        {SERVICES.map(({ id, image, title, description }) => (
          <motion.div
            key={id}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
            whileHover={{ y: -6, boxShadow: "0 16px 40px rgba(24,119,242,0.20)" }}
            className="
              bg-white
              rounded-[18px]
              md:rounded-[22px]
              overflow-hidden
              w-[260px]
              md:w-[320px]
              shrink-0
              flex
              flex-col
              border
              border-slate-200
              transition-all
              duration-300
              shadow-[0_10px_30px_rgba(0,0,0,0.12)]
              cursor-default
            "
          >
            {/* Image */}
            <div className="w-full h-[180px] md:h-[240px] overflow-hidden rounded-t-[18px] md:rounded-t-[22px]">
              <img
                src={image}
                alt={title}
                className="
                  w-full
                  h-full
                  object-cover
                  block
                "
              />
            </div>

            {/* Content */}
            <div
              className="
                p-4
                md:p-[24px_20px_28px]
                flex
                flex-col
                gap-[8px]
                md:gap-[10px]
                flex-1
              "
            >
              <h3
                className="
                  !text-black
                  text-[15px]
                  font-bold
                  tracking-[0.06em]
                  m-0
                  font-[Poppins]
                "
              >
                {title}
              </h3>

              <p
                className="
                  !text-[#4B5563]
                  text-[13px]
                  leading-[1.65]
                  m-0
                  flex-1
                  text-left
                  font-[Poppins]
                "
              >
                {description}
              </p>

              {/* Explore Button */}
              <button
                onClick={() => {
                  let targetCardId = null;
                  if (id === 1) targetCardId = 2;
                  else if (id === 2) targetCardId = 4;
                  else if (id === 4) targetCardId = 1;
                  navigate("/services", { state: { selectCardId: targetCardId } });
                }}
                className="
                  mt-3
                  md:mt-[14px]
                  w-full
                  py-[10px]
                  md:py-[12px]
                  bg-gradient-to-r
                  from-[#1877F2]
                  to-[#00B4D9]
                  text-white
                  rounded-[10px]
                  text-[14px]
                  md:text-[15px]
                  font-semibold
                  tracking-[0.01em]
                  transition-all
                  duration-300
                  hover:brightness-110
                  shadow-[0_4px_12px_rgba(24,119,242,0.25)]
                  font-[Poppins]
                "
              >
                Explore
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>


    </section>
  );
};

export default ServicesSection;