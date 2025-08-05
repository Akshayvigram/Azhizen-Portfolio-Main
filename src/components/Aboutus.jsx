import React from "react";
import ceo from '../assets/ceo.webp';
import ourstory from '../assets/ourstory.webp';
import Aboutus1 from '../assets/Aboutus1.webp';


const Aboutus = () => {
  return (
    <div className="bg-white w-full overflow-y-auto overflow-x-hidden">
      {/* Debug Section */}
      <div className="md:hidden bg-red-200 p-4 text-center">
        <p className="text-gray-800 font-bold">Mobile View (Debug)</p>
      </div>
      <div className="hidden md:block bg-blue-200 p-4 text-center">
        <p className="text-gray-800 font-bold">Desktop View (Debug)</p>
      </div>

      {/* Desktop Views */}
      <div className="hidden md:block">
        {/* First Page */}
        <div className="min-h-screen flex items-center justify-center py-8 sm:py-12 lg:py-16 2xl:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12 2xl:px-16 w-full max-w-7xl 2xl:max-w-[1920px]">
            <div className="flex flex-row justify-between items-center gap-8 2xl:gap-12 w-full mx-auto">
              <div className="md:w-1/2">
                <p className="text-[#111212] font-bold text-xl sm:text-2xl lg:text-3xl 2xl:text-4xl uppercase tracking-widest mb-3 2xl:mb-4">
                  Pioneer | Produce | Propel
                </p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-bold text-gray-900 mb-4 2xl:mb-6">
                  About <span className="text-[#00B4D9]">Azhizen</span>
                </h1>
                <p className="text-gray-600 text-sm sm:text-base lg:text-lg 2xl:text-xl leading-relaxed max-w-md lg:max-w-lg 2xl:max-w-xl">
                  Welcome to Azhizen, where innovation meets excellence! Founded with a vision to revolutionize biomedical and engineering solutions, we are dedicated to R&D, manufacturing, and cutting-edge product development. Our expertise spans across biomedical devices, medical technology, animal husbandry machines, AI/ML, edutech, and green tech. Whether it’s crafting advanced healthcare solutions, developing automation systems, or offering high-quality visual and design services, we are committed to transforming ideas into reality.
                </p>
              </div>
              <div className="md:w-1/2 flex justify-end">
                <img
                  src={Aboutus1}
                  alt="About Azhizen"
                  className="rounded-lg w-full max-w-sm lg:max-w-md 2xl:max-w-lg h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Second Page */}
        <div className="min-h-screen flex items-center justify-center py-8 sm:py-12 lg:py-16 2xl:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12 2xl:px-16 w-full max-w-7xl 2xl:max-w-[1920px]">
            <div className="flex flex-row justify-between items-center gap-8 2xl:gap-12 w-full mx-auto">
              <div className="md:w-1/2 flex justify-start">
                <div className="relative w-full max-w-sm lg:max-w-md 2xl:max-w-lg">
                  <img
                    src={ceo}
                    alt="CEO Bharath R"
                    className="w-full rounded-[20px] h-80 lg:h-96 2xl:h-[480px] object-cover"
                  />
                  <div className="absolute top-16 lg:top-20 2xl:top-24 left-28 lg:left-32 2xl:left-40 bg-white shadow-md rounded-[10px] p-3 2xl:p-4 w-36 2xl:w-44 flex flex-col justify-center ml-60 2xl:ml-80">
                    <p className="text-sm 2xl:text-base text-center font-semibold text-gray-900">Mr. Bharath R</p>
                    <p className="text-sm 2xl:text-base text-center font-medium text-[#00B4D9]">CEO - Azhizen</p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <p className="text-[#00B4D9] text-lg 2xl:text-xl uppercase tracking-widest font-bold mb-3 2xl:mb-4">OUR MISSION</p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-bold text-gray-900 mb-4 2xl:mb-6">
                  Solutions that stick with you <span className="text-[#00B4D9]">always</span>
                </h1>
                <p className="text-gray-600 text-sm sm:text-base lg:text-lg 2xl:text-xl leading-relaxed mb-6 2xl:mb-8 max-w-md lg:max-w-lg 2xl:max-w-xl">
                  At Azhizen, we transform bold ideas into groundbreaking realities with creativity, integrity, and a passion for quality. We exceed expectations, delivering innovative biomedical, engineering, and tech solutions that shape a smarter, sustainable future—one project at a time.
                </p>
                <button className="text-white px-5 2xl:px-6 py-2.5 2xl:py-3 rounded-[68px] font-semibold text-base 2xl:text-lg bg-[linear-gradient(141deg,#0078B4_3.61%,#00B4D9_95.89%)] hover:opacity-90">
                  Join Our Team
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Third Page */}
        <div className="min-h-screen flex items-center justify-center py-8 sm:py-12 lg:py-16 2xl:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12 2xl:px-16 w-full max-w-7xl 2xl:max-w-[1920px]">
            <div className="flex flex-row justify-between items-center gap-8 2xl:gap-12 w-full mx-auto">
              <div className="md:w-1/2">
                <p className="text-[#00B4D9] text-lg 2xl:text-xl uppercase tracking-widest font-bold mb-3 2xl:mb-4">OUR STORY</p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-bold text-gray-900 mb-4 2xl:mb-6">Roots that grow with you</h1>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-bold text-[#00B4D9] mb-4 2xl:mb-6">forever</h1>
                <p className="text-gray-600 text-sm sm:text-base lg:text-lg 2xl:text-xl leading-relaxed max-w-md lg:max-w-lg 2xl:max-w-xl">
                  It began with a simple idea in 2025: Bharathkumar Ramachandiran saw a need for innovation and automation and decided to act. From a home office, we’ve grown into a company that’s helped 50 clients across the state. Our journey’s fueled by passion, grit, and a promise to stand by you—every step of the way.
                </p>
              </div>
              <div className="md:w-1/2 flex justify-end">
                <img
                  src={ourstory}
                  alt="Azhizen Team"
                  className="rounded-[20px] w-full max-w-sm lg:max-w-md 2xl:max-w-lg h-80 lg:h-96 2xl:h-[480px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden px-4 space-y-6 pt-20 pb-8 sm:pt-24 sm:pb-12">
        {/* About */}
        <div className="text-center">
          <p className="text-[#00B4D9] font-bold text-lg sm:text-xl uppercase tracking-widest mb-2 sm:mb-3">
            Pioneer | Produce | Propel
          </p>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">About Our Company</h1>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#00B4D9] mb-2 sm:mb-3">Azhizen</h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Welcome to Azhizen, where innovation meets excellence! Founded with a vision to revolutionize biomedical and engineering solutions, we are dedicated to R&D, manufacturing, and cutting-edge product development. Our expertise spans across biomedical devices, medical technology, animal husbandry machines, AI/ML, edutech, and green tech. Whether it’s crafting advanced healthcare solutions, developing automation systems, or offering high-quality visual and design services, we are committed to transforming ideas into reality.
          </p>
          <img src={Aboutus1} alt="About Azhizen" className="rounded-lg max-w-[250px] sm:max-w-[300px] mx-auto mt-3 sm:mt-4 object-cover" />
        </div>

        {/* Mission */}
        <div className="text-center">
          <p className="text-[#00B4D9] text-lg sm:text-xl uppercase tracking-widest font-bold mb-2 sm:mb-3">OUR MISSION</p>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
            Solutions that stick with you <span className="text-[#00B4D9]">always</span>
          </h1>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
            At Azhizen, we transform bold ideas into groundbreaking realities with creativity, integrity, and a passion for quality. We exceed expectations, delivering innovative biomedical, engineering, and tech solutions that shape a smarter, sustainable future—one project at a time.
          </p>
          <button className="text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-[68px] font-semibold text-sm sm:text-base mb-4 sm:mb-6 bg-[linear-gradient(141deg,#0078B4_3.61%,#00B4D9_95.89%)] hover:opacity-90">
            Join Our Team
          </button>
          <div className="relative w-[250px] sm:w-[300px] mx-auto h-56 sm:h-64">
            <img src={ceo} alt="CEO Bharath R" className="w-full h-full rounded-[6px] object-cover" />
            <div className="absolute top-16 sm:top-20 left-32 sm:left-40 bg-white shadow-md rounded-[10px] p-2 sm:p-3 w-24 sm:w-28 flex flex-col justify-center ml-20 sm:ml-24">
              <p className="text-xs sm:text-sm font-semibold text-gray-900">Mr. Bharath R</p>
              <p className="text-xs sm:text-sm font-medium text-[#00B4D9]">CEO - Azhizen</p>
            </div>
          </div>
        </div>

        {/* Story */}
        <div className="text-center">
          <p className="text-[#00B4D9] text-lg sm:text-xl uppercase tracking-widest font-bold mb-2 sm:mb-3">OUR STORY</p>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Roots that grow with you</h1>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#00B4D9] mb-2 sm:mb-3">forever</h1>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            It began with a simple idea in 2025: Bharathkumar Ramachandiran saw a need for innovation and automation and decided to act. From a home office, we’ve grown into a company that’s helped 50 clients across the state. Our journey’s fueled by passion, grit, and a promise to stand by you—every step of the way.
          </p>
          <img src={ourstory} alt="Azhizen Team" className="rounded-[20px] max-w-[250px] sm:max-w-[300px] mx-auto mt-3 sm:mt-4 object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Aboutus;