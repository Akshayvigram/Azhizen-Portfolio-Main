import React from "react";
import { Link } from "react-router-dom";

const FooterSection = () => {
  return (
    <footer className="bg-black text-slate-300 pt-16 pb-8 px-6 md:px-12 lg:px-24 font-poppins border-t border-slate-800/40">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-y-12 lg:gap-x-8">

        {/* Column 1 - Brand & Description */}
        <div className="lg:col-span-4 pr-0 lg:pr-12 md:text-left">
          <div className="text-[22px] font-bold text-white mb-6 tracking-wide uppercase">AZHIZEN SOLUTIONS</div>
          <p className="text-[14.5px] text-slate-300 mb-8 leading-[1.65]">
            Azhizen Solutions is a product-driven technology<br className="hidden lg:block"/>
            company redefining what's possible. From smart software<br className="hidden lg:block"/>
            to AI-powered hardware, we build bold solutions.
          </p>
          <div className="flex gap-6 items-center mt-6">
            <a href="https://www.facebook.com/people/Azhizen-Solutions/61575392279457/?rdid=hIBBPDB6iSirXVac&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18VmExM7xj%2F" target="_blank" rel="noopener noreferrer" className="hover:scale-110 hover:brightness-125 transition-all">
              <img src="/bxl_facebook.png" alt="Facebook" className="w-[24px] h-[24px] object-contain"/>
            </a>
            <a href="https://www.instagram.com/azhizen_solutions?igsh=dHloc2RmY3pwd2o0" target="_blank" rel="noopener noreferrer" className="hover:scale-110 hover:brightness-125 transition-all">
              <img src="/mdi_instagram.png" alt="Instagram" className="w-[24px] h-[24px] object-contain"/>
            </a>
            <a href="https://in.linkedin.com/company/azhizensolutions?trk=public_profile_topcard-current-company" target="_blank" rel="noopener noreferrer" className="hover:scale-110 hover:brightness-125 transition-all">
              <img src="/ri_linkedin-fill.png" alt="LinkedIn" className="w-[24px] h-[24px] object-contain"/>
            </a>
            <a href="https://wa.me/919750603988" target="_blank" rel="noopener noreferrer" className="hover:scale-110 hover:brightness-125 transition-all">
              <img src="/ri_whatsapp-line.png" alt="WhatsApp" className="w-[24px] h-[24px] object-contain"/>
            </a>
            <a href="https://www.youtube.com/@azhizensolutions" target="_blank" rel="noopener noreferrer" className="hover:scale-110 hover:brightness-125 transition-all">
              <img src="/yt.png" alt="YouTube" className="w-[24px] h-[24px] object-contain"/>
            </a>
          </div>
        </div>

        {/* Column 2 - Quick Links */}
        <div className="lg:col-span-2 lg:ml-8">
          <h4 className="text-[18px] font-bold text-white mb-6">Quick Links</h4>
          <ul className="space-y-4 text-[15px] font-medium">
            <li>
              <Link to="/" className="hover:text-[#1877F2] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-[#1877F2] transition-colors">
                Service
              </Link>
            </li>
            <li>
              <Link to="/course" className="hover:text-[#1877F2] transition-colors">
                Course
              </Link>
            </li>
            <li>
              <Link to="/career" className="hover:text-[#1877F2] transition-colors">
                Career
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#1877F2] transition-colors">
                About us
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className="hover:text-[#1877F2] transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 - Services */}
        <div className="lg:col-span-3">
          <h4 className="text-[18px] font-bold text-white mb-6">Our Services</h4>
          <ul className="space-y-4 text-[15px] font-medium">
            <li>
              <Link to="/services" className="hover:text-[#1877F2] transition-colors">
                Tech Services
              </Link>
            </li>
            <li>
              <Link to="/marketing-services" className="hover:text-[#1877F2] transition-colors">
                Marketing Services
              </Link>
            </li>
            <li>
              <Link to="/training-support" className="hover:text-[#1877F2] transition-colors">
                Training Support
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4 - Contact Info */}
        <div className="lg:col-span-3">
          <h4 className="text-[18px] font-bold text-white mb-6">Contact Info</h4>
          <ul className="space-y-5 text-[15px] font-medium">
            <li className="flex items-start gap-4">
              <a href="tel:+919750603988" className="flex items-start gap-4 hover:text-[#1877F2] transition-colors">
                <img src="/Vector (1).png" alt="Call" className="w-[18px] h-[18px] mt-0.5 object-contain filter brightness-200"/>
                <span>+91 9750603988</span>
              </a>
            </li>
            <li className="flex items-start gap-4">
              <a href="mailto:azhizensolutions@gmail.com" className="flex items-start gap-4 hover:text-[#1877F2] transition-colors">
                <img src="/material-symbols-light_mail-outline-rounded.png" alt="Mail" className="w-5 h-5 object-contain filter brightness-200"/>
                <span>azhizensolutions@gmail.com</span>
              </a>
            </li>
            <li className="flex items-start gap-4">
              <img src="/bytesize_location.png" alt="Location" className="w-5 h-5 mt-1 object-contain filter brightness-200" />
              <span className="leading-snug">R-NO:309, Mercury Block<br/>KSRCE, Tiruchengode,<br/>Namakkal, Tamil Nadu</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Footer Section */}
      <div className="max-w-[1400px] mx-auto mt-16">
        <hr className="border-t border-slate-800 mb-6" />
        <div className="flex justify-center text-center">
          <p className="text-[14px] font-semibold text-slate-400">
            © 2026 Azhizen Solutions. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
