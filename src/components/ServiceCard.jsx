import React from 'react';
import { useNavigate } from 'react-router-dom';

const ServiceCard = ({ title, description, image }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-white rounded-[12px] shadow-[0_8px_30px_rgba(0,0,0,0.05)] border border-[#EAEFF6] p-6 flex flex-col justify-between items-start hover:-translate-y-1.5 transition-transform duration-300 h-full">
      {/* Illustration Image */}
      <div className="h-[70px] w-full flex items-center justify-start mb-4 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-auto object-contain"
        />
      </div>

      {/* Card Title */}
      <h3 className="font-poppins font-bold text-[20px] text-[#050505] mb-2 text-left leading-snug">
        {title}
      </h3>

      {/* Card Description */}
      <p className="font-poppins font-normal text-[14px] text-gray-500 mb-5 text-left leading-relaxed flex-grow">
        {description}
      </p>

      {/* Royal Blue Apply Button */}
      <button
        onClick={() => navigate("/JobApplicationForm")}
        className="!bg-[#1877F2] hover:!bg-[#1565C0] text-white font-poppins font-semibold text-[14px] px-5 py-2.5 rounded-[8px] transition-colors flex items-center gap-1.5 cursor-pointer mt-auto"
      >
        Apply <span className="text-[14px]">→</span>
      </button>
    </div>
  );
};

export default ServiceCard;
