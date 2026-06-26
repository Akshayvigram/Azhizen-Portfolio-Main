import React from "react";
import { useNavigate } from "react-router-dom";

const SERVICES = [
  {
    id: 1,
    image: "/service1.png",
    title: "Custom Hardware Design",
    description:
      "We Deliver Advanced Hardware Prototyping With Custom PCB Design, Tailored Solution For Embedded Systems And IoT Innovation.",
  },
  {
    id: 2,
    image: "/service2.png",
    title: "AI/ML & Firmware Integration",
    description:
      "We Integrate AI/ML Capabilities And Firmware Updates. Smart, Adaptable Systems Built For The Future",
  },
  {
    id: 3,
    image: "/service3.png",
    title: "Research & Development",
    description:
      "Experts In Research And Development Employ Rigorous Methodologies And Validation Processes.",
  },
  {
    id: 4,
    image: "/service4.png",
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
        min-h-screen
        px-8
        pt-[72px]
        pb-[80px]
        bg-gradient-to-b
        from-[#081125]
        via-[#122247]
        to-[#081125]
        font-[Poppins]
      "
    >
      {/* ── Heading Row (Title on Left, Button on Right) ── */}
      <div className="max-w-[1400px] mx-auto w-full flex flex-col sm:flex-row justify-between items-start sm:items-end mb-[52px] gap-6 px-4">
        {/* Left Side: Title & Subtitle */}
        <div className="text-left">
          <h2
            className="
              !text-white
              text-[38px]
              font-bold
              mb-1
              font-[Poppins]
            "
          >
            Our Service
          </h2>

          <p
            className="
              text-[#FFFFFF]
              text-[16px]
              font-light
              font-[Poppins]
            "
          >
            These are the core service that we provide to you
          </p>
        </div>

        {/* Right Side: Explore All Button */}
        <div>
          <button
            onClick={() => navigate("/services")}
            className="
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
            "
          >
            Explore All →
          </button>
        </div>
      </div>

      {/* ── Cards ── */}
      <div
        className="
          flex
          gap-7
          justify-center
          flex-wrap
          max-w-[1400px]
          mx-auto
        "
      >
        {SERVICES.map(({ id, image, title, description }) => (
          <div
            key={id}
            className="
              bg-white
              rounded-[22px]
              overflow-hidden
              w-[320px]
              shrink-0
              flex
              flex-col
              border
              border-slate-200
              transition-all
              duration-300
              shadow-[0_10px_30px_rgba(0,0,0,0.15)]
              cursor-default
              hover:-translate-y-[6px]
              hover:shadow-[0_16px_40px_rgba(24,119,242,0.20)]
            "
          >
            {/* Image */}
            <div className="w-full h-[240px] overflow-hidden rounded-t-[22px]">
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
                p-[24px_20px_28px]
                flex
                flex-col
                gap-[10px]
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
                className="
                  mt-[14px]
                  w-full
                  py-[12px]
                  bg-gradient-to-r
                  from-[#1877F2]
                  to-[#00B4D9]
                  text-white
                  rounded-[10px]
                  text-[15px]
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
          </div>
        ))}
      </div>


    </section>
  );
};

export default ServicesSection;