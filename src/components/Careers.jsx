import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Jobs from "./Jobs";

const benefits = [
  "Professional development opportunities",
  "Performance based Promotions & Salary hike",
  "Job Flexibility",
  "Health wellness & benefits",
  "Employee Recognition Programs",
];

export default function Careers() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 min-h-screen mt-25">
      {/* Header Section */}
      <div className="w-[calc(100%-2rem)] mx-4 flex flex-col shadow-[0_-8px_15px_rgba(0,0,0,0.1)]">
        <div className="w-full flex justify-center items-center py-12 px-4 md:px-20 bg-white/10 backdrop-blur-sm relative">
          <div className="text-center">
            <div className="hidden md:block">
            <p className="inline-block bg-gradient-to-br from-[#0078B4] to-[#00B4D9] text-white px-6 py-3 rounded-[29px_29px_29px_0] mb-6 absolute top-5 left-250 transform -translate-x-1/2">
            We are hiring
              </p>
            </div>
            <h2 className="text-black font-poppins text-2xl md:text-5xl font-bold leading-tight tracking-wider mt-11">
              Discover your{" "}
              <span className="text-[#00B4D9] text-4xl md:text-6xl">
                Potential
              </span>{" "}
              at Azhizen
            </h2>
            <p className="mt-6 flex text-justify text-[#707070] text-[18px] font-poppins font-normal max-w-4xl mx-auto">
              We are passionate about Webflow Development. We are looking for
              talented and motivated individuals who share our vision and want
              to be part of a dynamic and innovative team.
            </p>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      {/* <div className="flex flex-col md:flex-row px-4 md:px-[317px] py-[40px] bg-gray-50 gap-15"> */}
        {/* Left Side: Heading and Description */}
        {/* <div className="flex-1 hidden md:block">
          <h3 className="text-black font-poppins text-[40px] md:text-[50px] font-medium leading-normal">
            Wellness & Benefits
          </h3>
          <p className="mt-2 mb-4 text-[#707070] text-[18px] font-poppins font-normal pr-8">
            As part of our pursuit to lead impactful, fulfilling lives, we take
            benefits pretty seriously.
          </p>
        </div> */}

        {/* Right Side: Accordion Section */}
        {/* <div className="flex-1 w-full max-w-2xl mt-6 md:mt-0 space-y-4 hidden md:block">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white shadow-[0px_4px_8px_-2px_rgba(0,0,0,0.1)] border border-gray-200 rounded-md"
            >
              <button
                className="bg-white w-full flex justify-between items-center py-4 px-4 text-left text-[16px] md:text-[18px] font-medium text-black"
                onClick={() => toggleAccordion(index)}
              >
                {benefit}
                <ChevronDown
                  className={`transform transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  } w-6 h-6 text-black`}
                />
              </button>
              {openIndex === index && (
                <div className="mt-2 mb-4 text-justify text-[#707070] text-[18px] font-poppins font-normal px-4 py-2 bg-white rounded-b-md">
                  <p>
                    Companies can implement programs to recognize and reward
                    employees for their hard work and achievements, which can
                    help boost morale and motivation.
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div> */}

      <Jobs />
    </div>
  );
}
