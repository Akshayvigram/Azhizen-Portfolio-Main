import { useState } from "react";
import Akshay from "../assets/Akshay.png";
import Kowsalya from "../assets/Kowsalya.png";
import Karthick from "../assets/Karthick.png";
import Vignesh from "../assets/Vignesh.png";
import Kishore from "../assets/Kishore.png";
import Janaki from "../assets/Janaki.png";
import Prabudeva from "../assets/Prabudeva.png";
import Naveen from "../assets/Naveen.png";
import Teja from "../assets/Teja.png";
import Kavin from "../assets/Kavin.png";
import Hari from "../assets/Hari.png";
import Maaran from "../assets/Maaran.png";
import Jeeva from "../assets/Jeeva.png";
import Kiruthika from "../assets/Kiruthika.png";
import Nishanth from "../assets/Nishanth.png";
import Gladson from "../assets/Gladson.png";
import Bharath from "../assets/Bharath.png";
import Bose from "../assets/Bose.png";
import Jeevitha from "../assets/Jeevitha.png";
import Boopathy from "../assets/Boopathy.png";
import Kesav from "../assets/Kesav.png";



const teamMembers = [
  { name: "Mr. Gladson", role: "Developer", team: "Technical Team", image: Gladson },
  { name: "Mr. Karthick C", role: "Developer", team: "Technical Team", image: Karthick },
  { name: "Mr. Shri Akshay Vigram", role: "Developer", team: "Technical Team", image: Akshay },
  { name: "Ms. Kowsalya J", role: "Developer", team: "Technical Team", image: Kowsalya },
  { name: "Mr. Vigneshwaran M R", role: "Designer", team: "Technical Team", image: Vignesh },
  { name: "Mr. Kishore", role: "Designer", team: "Technical Team", image: Kishore },
  { name: "Ms. Kiruthika", role: "Designer", team: "Technical Team", image: Kiruthika },
  { name: "Ms. Janaki P", role: "Digital Marketer", team: "Technical Team", image: Janaki },
  { name: "Mr. Prabhu Deva", role: "Developer", team: "Hardware Team", image: Prabudeva },
  { name: "Mr. Naveen", role: "Developer", team: "Hardware Team", image: Naveen },
  { name: "Mr. Teja", role: "Developer", team: "Hardware Team", image: Teja },
  { name: "Mr. Kavin Prabhu", role: "Developer", team: "Hardware Team", image: Kavin },
  { name: "Mr. Hari Prasanth", role: "Developer", team: "Hardware Team", image: Hari },
  { name: "Mr. Bharathkumar", role: "CEO", team: "Executive Team", image: Bharath },
  { name: "Mr. Bose", role: "CEO", team: "Executive Team", image: Bose }, 
  { name: "Ms. Jeevitha", role: "CEO", team: "Executive Team", image: Jeevitha },
  { name: "Mr. Nishanth", role: "CEO", team: "Executive Team", image: Nishanth },
  { name: "Mr. Maaran", role: "Developer", team: "Hardware Team", image: Maaran },
  { name: "Mr. Jeeva V", role: "Developer", team: "Technical Team", image: Jeeva },
    { name: "Mr. Boopathy", role: "Developer", team: "Technical Team", image: Boopathy },
     { name: "Mr. Kesavarajaguru", role: "Designer", team: "Technical Team", image: Kesav },


];

export default function TeamPage() {
  const [activeTab, setActiveTab] = useState("Technical Team");

  const filteredMembers = teamMembers.filter((member) => member.team === activeTab);

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-bold text-white md:text-black text-center mb-12 sm:mb-16 lg:mb-20 2xl:mb-24">
          <span className="md:hidden text-white">Who Are We?</span>
          <span className="hidden md:inline">
            <span style={{ color: "#00B4D9" }}>T</span>HE&nbsp;
            <span style={{ color: "#00B4D9" }}>A</span>MAZING&nbsp;
            <span style={{ color: "#00B4D9" }}>T</span>EAM&nbsp;
            <span style={{ color: "#00B4D9" }}>O</span>F&nbsp;
            <span style={{ color: "#00B4D9" }}>U</span>S&nbsp;
          </span>
        </h2>

      {/* Tabs */}
<div className="hidden md:flex justify-center space-x-8 mb-8 relative">
  <div className="relative flex">
    {["Technical Team", "Executive Team", "Hardware Team"].map((tab) => (
<button
  key={tab}
  className={`relative px-4 py-2 text-center text-[25px] font-sans font-medium leading-[30px] transition-colors duration-300
    ${activeTab === tab ? "text-[#00B4D9] !text-[#00B4D9]" : "text-gray-500 hover:text-[#00B4D9]"}`}
  onClick={() => setActiveTab(tab)}
  style={{ backgroundColor: "transparent" }}
>
  {tab}
</button>

    ))}
    <div
      className="absolute bottom-[-4px] h-[3px] bg-[#00B4D9] transition-all duration-300 ease-in-out"
      style={{
        width: '170px',
        left: activeTab === "Technical Team" ? 'calc(50% - 210px)' :
              activeTab === "Executive Team" ? '49%' :
              'calc(50% + 210px)',
        transform: 'translateX(-50%)',
      }}
    />
  </div>
</div>


      {/* Mobile Tabs */}
 <div className="md:hidden flex justify-center space-x-4 mb-6 relative">
  <div className="relative flex">
    {["Technical Team", "Executive Team", "Hardware Team"].map((tab) => (
      <button
        key={tab}
        className={`relative px-3 py-1 text-center text-xl font-sans font-medium leading-[24px] transition-colors duration-300
          ${activeTab === tab ? "text-[#00B4D9] !text-[#00B4D9]" : "text-gray-500 hover:text-[#00B4D9]"}`}
        onClick={() => setActiveTab(tab)}
        style={{ backgroundColor: "transparent" }}
      >
        {tab}
      </button>
    ))}
    <div
      className="absolute bottom-[-8px] h-[2px] bg-[#00B4D9] transition-all duration-300 ease-in-out"
      style={{
        width: '60px',
        left: activeTab === "Technical Team" ? 'calc(50% - 130px)' :
              activeTab === "Executive Team" ? '50%' :
              'calc(50% + 130px)',
        transform: 'translateX(-50%)',
      }}
    />
  </div>
</div>

      {/* System View (Cards Grid - Flex Centered) */}
      <div className="hidden md:flex md:flex-wrap md:justify-center gap-17">
        {filteredMembers.map((member, index) => (
          <div
            key={index}
            className="w-[250px] h-[300px] flex-shrink-0 flex-grow-0 bg-white rounded-[20px] shadow-[3px_3px_13px_1px_rgba(0,0,0,0.2)] overflow-hidden relative transition-all duration-300 ease-in-out hover:shadow-[3px_3px_20px_5px_rgba(0,0,0,0.20)] cursor-pointer"
          >
            <div className="w-full h-[300px] overflow-hidden">
              <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
            </div>
            <div className="bg-[#00B4D9] text-white p-4 text-left rounded-b-[20px] absolute left-0 right-0 top-[220px]">
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-sm">{member.role}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile View (Cards Grid - Flex Centered) */}
      <div className="md:hidden flex flex-wrap justify-center gap-4">
        {filteredMembers.map((member, index) => (
          <div
            key={index}
            className="w-[180px] h-[220px] flex-shrink-0 flex-grow-0 bg-white rounded-[15px] shadow-[2px_2px_10px_1px_rgba(0,0,0,0.2)] overflow-hidden relative transition-all duration-300 ease-in-out hover:shadow-[2px_2px_15px_3px_rgba(0,0,0,0.20)] cursor-pointer"
          >
            <div className="w-full h-[220px] overflow-hidden">
              <img src={member.image} alt={member.name} className="w-full h-full object-cover rounded-t-[15px]" />
            </div>
            <div className="bg-[#00B4D9] text-white p-2 text-left rounded-b-[15px] absolute left-0 right-0 top-[160px]">
              <h3 className="text-sm font-semibold">{member.name}</h3>
              <p className="text-base">{member.role}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Newsletter Section */}
      <div className="hidden md:block mt-12 md:p-6 md:rounded-lg md:text-center">
        <p className="text-black font-[Poppins] text-[32px]">Azhizen</p>
        <h2 className="text-black font-[Poppins] text-[48px] font-medium">Let us keep you updated always</h2>
        <p className="text-black font-[Poppins] text-[24px]">
          Subscribe to our newsletter to stay updated and notified about our new product and services.
        </p>
        <br />
        <div className="inline-flex bg-white rounded-[10px] shadow-[2px_6px_14px_1px_rgba(0,0,0,0.25)] p-[9px_14.518px_7px_37px] justify-end items-center gap-[50px] aspect-[603.70/67.00]">
          <input
            type="email"
            placeholder="Enter Your Email Address"
            className="p-3 rounded-l-lg w-64 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <button className="flex justify-center items-center bg-[#0078B4] text-white h-[51px] px-4 py-2 rounded-[6px] font-semibold hover:bg-[#005f8d] transition">
            Subscribe now
          </button>
        </div>
      </div>

      <div className="md:hidden mt-8 p-4 rounded-lg text-center">
        <p className="text-black font-[Poppins] text-xl">Azhizen</p>
        <h2 className="text-black font-[Poppins] text-3xl font-medium">Let us keep you updated always</h2>
        <p className="text-black font-[Poppins] text-lg">
          Subscribe to our newsletter to stay updated and notified about our new product and services.
        </p>
        <br />
        <div className="inline-flex bg-white rounded-[8px] shadow-[1px_4px_10px_1px_rgba(0,0,0,0.2)] p-2 justify-end items-center gap-4 aspect-[400/50]">
          <input
            type="email"
            placeholder="Enter Your Email Address"
            className="p-2 rounded-l-lg w-48 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <button className="flex justify-center items-center bg-[#0078B4] text-white h-[40px] px-3 py-2 rounded-[5px] font-semibold text-sm hover:bg-[#005f8d] transition">
            Subscribe now
          </button>
        </div>
      </div>
    </div>
  );
}