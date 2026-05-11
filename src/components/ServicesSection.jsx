import React from "react";
import { useNavigate } from "react-router-dom";

const SERVICES = [
  {
    id: 1,
    image: "/service1.png",
    title: "CUSTOM HARDWARE DESIGN",
    description:
      "We Deliver Advanced Hardware Prototyping With Custom PCB Design, Tailored Solution For Embedded Systems And IoT Innovation.",
  },
  {
    id: 2,
    image: "/service2.png",
    title: "AI/ML & FIRMWARE INTEGRATION",
    description:
      "We Integrate AI/ML Capabilities And Firmware Updates. Smart, Adaptable Systems Built For The Future",
  },
  {
    id: 3,
    image: "/service3.png",
    title: "RESEARCH & DEVELOPMENT",
    description:
      "Experts In Research And Development Employ Rigorous Methodologies And Validation Processes.",
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
        from-[#1976D2]
        via-[#8BB8F2]
        to-[#F4F8FF]
        font-[Poppins]
      "
    >
      {/* ── Heading ── */}
      <div className="text-center mb-[52px]">
        <h2
          className="
            text-[#0F172A]
            text-[38px]
            font-bold
            mb-3
            font-[Poppins]
          "
        >
          Our Service
        </h2>

        <p
          className="
            text-[#4B5D79]
            text-[15px]
            font-medium
            font-[Poppins]
          "
        >
          These are the core service that we provide to you
        </p>
      </div>

      {/* ── Cards ── */}
      <div
        className="
          flex
          gap-7
          justify-center
          flex-wrap
          max-w-[1180px]
          mx-auto
        "
      >
        {SERVICES.map(({ id, image, title, description }) => (
          <div
            key={id}
            className="
              bg-[#EEF4FF]
              rounded-[22px]
              overflow-hidden
              w-[320px]
              shrink-0
              flex
              flex-col
              border
              border-[#D7E6FF]
              transition-all
              duration-300
              shadow-[0_10px_30px_rgba(59,130,246,0.10)]
              cursor-default
              hover:-translate-y-[6px]
              hover:shadow-[0_16px_40px_rgba(37,99,235,0.18)]
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
                  text-[#183B78]
                  text-[14px]
                  font-bold
                  tracking-[0.06em]
                  uppercase
                  m-0
                  font-[Poppins]
                "
              >
                {title}
              </h3>

              <p
                className="
                  text-[#5B6B88]
                  text-[13px]
                  leading-[1.65]
                  m-0
                  flex-1
                  text-center
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
                  bg-[#2563EB]
                  text-white
                  rounded-[10px]
                  text-[15px]
                  font-semibold
                  tracking-[0.01em]
                  transition-all
                  duration-300
                  hover:bg-[#1D4ED8]
                  font-[Poppins]
                "
              >
                Explore
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ── Bottom Redirect Button ── */}
      <div className="text-center mt-10">
        <button
          onClick={() => navigate("/services")}
          className="
            px-8
            py-[14px]
            bg-[#2563EB]
            text-white
            border-none
            rounded-[10px]
            text-[16px]
            font-semibold
            tracking-[0.02em]
            transition-all
            duration-300
            shadow-[0_6px_18px_rgba(37,99,235,0.20)]
            hover:-translate-y-[2px]
            hover:shadow-[0_14px_34px_rgba(37,99,235,0.28)]
            font-[Poppins]
          "
        >
          Explore All →
        </button>
      </div>
    </section>
  );
};

export default ServicesSection;