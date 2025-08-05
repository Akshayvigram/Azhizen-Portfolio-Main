import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logofoot from "../assets/logofoot.png";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const FooterSection = () => {
  const navigate = useNavigate();
  const [openSections, setOpenSections] = useState({
    "Quick Links": false,
    Products: false,
    Services: false,
    Policies: false,
  });

  const toggleSection = (title) => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const handleContactClick = () => {
    navigate("/contact-us");
  };

  const sectionLinks = {
    "Quick Links": [
      { label: "Home", href: "/" },
      { label: "About", href: "/about-us" },
      { label: "Services", href: "/#services" },
      { label: "Contact", href: "/contact-us" },
    ],
    Products: [
      { label: "Ease Milk", href: "#" },
      { label: "Soil Tester", href: "#" },
      { label: "Milk Tester", href: "#" },
    ],
    Services: [
      { label: "Research & Development", href: "#" },
      { label: "Smart Hardware Solutions", href: "#" },
      { label: "SoftEdge Innovations", href: "#" },
    ],
    Policies: [
      { label: "Privacy Policy", href: "#" },
      { label: "Refund Policy", href: "#" },
      { label: "Terms & Conditions", href: "#" },
    ],
  };

  const socialLinks = [
    {
      href: "https://www.facebook.com/azhizensolutions",
      icon: <FaFacebookF />,
      aria: "Facebook",
    },
    {
      href: "https://www.instagram.com/azhizensolutions?igsh=dDhmeDc4OTNobjk4",
      icon: <FaInstagram />,
      aria: "Instagram",
    },
    {
      href: "https://www.linkedin.com/company/azhizensolutions/",
      icon: <FaLinkedinIn />,
      aria: "LinkedIn",
    },
    {
      href: "https://www.youtube.com/@azhizensolutions",
      icon: <FaYoutube />,
      aria: "YouTube",
    },
  ];

  return (
    <footer className="bg-black text-white px-6 sm:px-8 lg:px-12 2xl:px-16 py-10 sm:py-12 lg:py-16 2xl:py-20">
      {/* Desktop View */}
      <div className="hidden md:grid grid-cols-6 gap-6 lg:gap-8 2xl:gap-12 text-left text-sm 2xl:text-base mb-10 2xl:mb-16 max-w-7xl mx-auto">
        <div>
          <img src={logofoot} className="w-full h-10 2xl:h-14 mb-4 rounded-lg mt-1 -ml-2" alt="Azhizen Logo" />
          <p className="text-gray-400 text-sm md:text-xs 2xl:text-base">
            R-NO:309, Mercury Block <br />KSRCE, Tiruchengode, Namakkal, Tamil Nadu
          </p>
          <div className="flex justify-start space-x-4 mt-10">
            {socialLinks.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:opacity-80"
                aria-label={s.aria}
              >
                {React.cloneElement(s.icon, { className: "w-6 h-6 2xl:w-8 2xl:h-8" })}
              </a>
            ))}
          </div>
        </div>

        {Object.entries(sectionLinks).map(([title, links], idx) => (
          <div key={idx}>
            <h4 className="text-lg font-semibold mb-3">{title}</h4>
            <ul className="space-y-2 text-gray-400">
              {links.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h4 className="text-lg font-semibold mb-3">Contact Us</h4>
          <p className="text-gray-400 mb-4">
            azhizensolutions@gmail.com<br />
            Phone: +91 9750603988<br />
            Phone: +91 7010682506
          </p>
          <button
            className="text-white px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 hover:brightness-110"
            onClick={handleContactClick}
            aria-label="Contact us"
          >
            Contact us
          </button>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden grid grid-cols-1 gap-8 text-sm">
        {Object.entries(sectionLinks).map(([title, links], idx) => (
          <div key={idx}>
            <h4
              className="text-lg font-semibold mb-3 flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection(title)}
            >
              {title}
              <svg
                className={`w-5 h-5 transform transition-transform ${openSections[title] ? "rotate-90" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </h4>
            <ul className={`space-y-2 ${openSections[title] ? "block" : "hidden"}`}>
              {links.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="hover:text-gray-300 text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <hr className="border-t border-gray-700 mt-3" />
          </div>
        ))}

        <div>
          <h4 className="text-lg font-semibold mb-3">Contact Us</h4>
          <p className="text-white mb-1">azhizensolutions@gmail.com</p>
          <p className="text-white mb-1">+91 97506 03988</p>
          <p className="text-white mb-4 text-sm">
            KSR College of Engineering, Tiruchengode, Namakkal, Tamil Nadu
          </p>
          <div className="flex justify-center mb-6">
            <img src={logofoot} className="w-40 h-10 rounded-lg" alt="Azhizen Logo" />
          </div>
          <div className="flex justify-center space-x-4 mt-4">
            {socialLinks.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:opacity-80"
                aria-label={s.aria}
              >
                {React.cloneElement(s.icon, { className: "w-6 h-6 sm:w-8 sm:h-8" })}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10">
        <hr className="border-t border-gray-700" />
        <div className="text-center text-gray-500 mt-4 text-sm">
          © 2025 Azhizen Solution. All Rights Reserved.
        </div>
        <div className="text-center mt-3 space-x-4 text-sm">
          <a href="https://academy.azhizen.com" className="text-white-400 hover:underline" target="_blank" rel="noopener noreferrer">
            Azhizen Academy
          </a>
          <span className="text-gray-500">|</span>
          <a href="https://media.azhizen.com" className="text-white-400 hover:underline" target="_blank" rel="noopener noreferrer">
            Azhizen Media
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
