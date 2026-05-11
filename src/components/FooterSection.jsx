import React from "react";
import { Link } from "react-router-dom";

const FooterSection = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 px-6 md:px-12 lg:px-24 font-sans">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-y-12 lg:gap-x-8">

        {/* Column 1 - Brand & Description */}
        <div className="lg:col-span-4 pr-0 lg:pr-12 md:text-left">
          <div className="text-[22px] font-bold text-white mb-6 tracking-wide uppercase">AZHIZEN SOLUTION</div>
          <p className="text-[15px] text-[#F3F0E0] mb-8 leading-[1.6]">
            EaseMilker Is An Automated Smart<br className="hidden lg:block"/>
            Milking System That Ensures<br className="hidden lg:block"/>
            Hygienic, Efficient, And Stress-Free<br className="hidden lg:block"/>
            Milking For Cows.
          </p>
          <div className="flex gap-6 items-center mt-6">
            <a href="https://www.facebook.com/people/Azhizen-Solutions/61575392279457/?rdid=hIBBPDB6iSirXVac&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18VmExM7xj%2F" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
            <img src="/bxl_facebook.png" alt="Facebook" className="w-[20px] h-[20px] object-contain"/>
            </a>
            <a href="https://www.instagram.com/azhizen_solutions?igsh=dHloc2RmY3pwd2o0" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
            <img src="/mdi_instagram.png" alt="Instagram" className="w-[20px] h-[20px] object-contain"/>
            </a>
            <a href="https://in.linkedin.com/company/azhizensolutions?trk=public_profile_topcard-current-company" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
            <img src="/ri_linkedin-fill.png" alt="LinkedIn" className="w-[20px] h-[20px] object-contain"/>
            </a>
            <a href="https://wa.me/919750603988" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
            <img src="/ri_whatsapp-line.png" alt="WhatsApp" className="w-[20px] h-[20px] object-contain"/>
            </a>
            <a href="https://www.youtube.com/@azhizensolutions" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
            <img src="/yt.png" alt="YouTube" className="w-[20px] h-[20px] object-contain"/>
            </a>
          </div>
        </div>

        {/* Column 2 - Quick Links */}
        <div className="lg:col-span-2 lg:ml-8">
          <h4 className="text-[18px] font-bold text-white mb-6">Quick Links</h4>
          <ul className="space-y-4 text-[15px] font-medium text-[#F3F0E0]">
           <li>
  <Link
    to="/"
    className="hover:text-white transition-colors"
  >
    Home
  </Link>
</li>

<li>
  <Link
    to="/about"
    className="hover:text-white transition-colors"
  >
    About
  </Link>
</li>

<li>
  <Link
    to="/services"
    className="hover:text-white transition-colors"
  >
    Services
  </Link>
</li>

<li>
  <Link
    to="/contact-us"
    className="hover:text-white transition-colors"
  >
    Contact
  </Link>
</li>

<li>
  <Link
    to="/career"
    className="hover:text-white transition-colors"
  >
    Career
  </Link>
</li>

          </ul>
        </div>

        {/* Column 3 - Products */}
        <div className="lg:col-span-3">
          <h4 className="text-[18px] font-bold text-white mb-6">Products</h4>
          <ul className="space-y-4 text-[15px] font-medium text-[#F3F0E0]">
            <li><a href="#" className="hover:text-white transition-colors">Basic Package</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Milk Testing Package</a></li>
            <li><a href="#" className="hover:text-white transition-colors">STM32 Controller</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Sensor System</a></li>
          </ul>
        </div>

        {/* Column 4 - Contact Info */}
        <div className="lg:col-span-3">
          <h4 className="text-[18px] font-bold text-white mb-6">Contact Info</h4>
          <ul className="space-y-5 text-[15px] font-medium text-[#F3F0E0]">
            <li className="flex items-start gap-4">
             <a href="tel:+919750603988" className="flex items-start gap-4">
            <img src="/Vector (1).png" alt="Call" className="w-[18px] h-[18px] mt-0.5 object-contain"/><span>+91 9750603988</span></a>
            </li>
            <li className="flex items-start gap-4">
         <a href="mailto:azhizensolutions@gmail.com" className="flex items-start gap-4">
         <img src="/material-symbols-light_mail-outline-rounded.png" alt="Mail" className="w-5 h-5 object-contain"/>
         <span>azhizensolutions@gmail.com</span>
         </a>
</li>
            <li className="flex items-start gap-4">
              <img src="/bytesize_location.png" alt="Location" className="w-5 h-5 mt-1 object-contain" />
              <span className="leading-snug">R-NO:309, Mercury Block<br/>KSRCE, Tiruchengode,<br/>Namakkal, Tamil Nadu</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Footer Section */}
      <div className="max-w-[1400px] mx-auto mt-16">
        <hr className="border-t border-gray-600 mb-6" />
        <div className="flex justify-center text-center">
          <p className="text-[14px] font-bold text-white">
            @Easemilker Copy Rights
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
