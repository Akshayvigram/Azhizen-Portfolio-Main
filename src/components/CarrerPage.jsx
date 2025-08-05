import React from 'react';

const CareerPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-100 flex justify-center items-center px-4 sm:px-6 lg:px-12 2xl:px-16 py-12 sm:py-16 lg:py-20 2xl:py-24">
      <div className="flex flex-col items-center justify-center w-full max-w-6xl 2xl:max-w-[1920px]">
        <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 2xl:w-2/5 text-center md:text-left mt-8 md:mt-0 animate-fadeIn">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-extrabold text-gray-900 mb-4 2xl:mb-6 tracking-tight">
            <span className="block text-center">Launch Your Career with</span>
            <span className="block text-center">Us!</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-xl 2xl:text-2xl text-gray-600 mb-6 2xl:mb-8 leading-relaxed text-center">
            <span className="block">Are you ready to make a difference?</span>
            <span className="block mt-2 2xl:mt-3">
              Join our innovative team as an intern and dive into real-world projects that shape the future. We’re looking for curious, driven minds to grow with us in a supportive, dynamic environment.
            </span>
          </p>
          <div className="flex justify-center">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=azhizensolutions@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-br from-[#0078B4] to-[#00B4D9] text-white font-semibold px-6 sm:px-8 lg:px-8 2xl:px-10 py-2 sm:py-3 lg:py-3 2xl:py-4 rounded-lg transform transition-all duration-300 text-sm sm:text-base lg:text-base 2xl:text-lg"
              aria-label="Send your resume to Azhizen Solutions"
            >
              Send Your Resume: azhizensolutions@gmail.com
            </a>
          </div>
          <p className="text-center text-sm sm:text-sm lg:text-sm 2xl:text-base text-gray-500 mt-4 2xl:mt-6 italic">
            Your journey to impact starts here—seize this opportunity!
          </p>
        </div>
      </div>
    </div>
  );
};

export default CareerPage;
