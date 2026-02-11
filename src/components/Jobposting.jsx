// import React, { useState } from "react";
// import { Heart, Share2, Check } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import Job1 from '../assets/Job1.webp';
// import Job2 from '../assets/Job2.webp';


// const JobPosting = ({ job }) => {
//   if (!job) return null; // Return null if no job is selected

//   const [isFavorited, setIsFavorited] = useState(false);
//   const [isCopied, setIsCopied] = useState(false);
//   const navigate = useNavigate();

//   const handleShare = () => {
//     navigator.clipboard.writeText(window.location.href);
//   };

//   const handleCopy = () => {
//     navigator.clipboard.writeText(window.location.href);
//     setIsCopied(true);
//     setTimeout(() => setIsCopied(false), 2000);
//   };

//   return (
//     <div className="w-full space-y-16">
//       <div className="bg-white flex flex-col items-center p-4 shadow-md rounded-2xl">
//         <div className="w-full p-6 sm:p-8 lg:p-12 flex flex-col">
//           <div className="mb-6 lg:hidden flex justify-end items-center">
//             <div className="flex gap-2">
//               <button
//                 onClick={() => setIsFavorited(!isFavorited)}
//                 className="p-2 bg-gray-100 rounded-full shadow-sm hover:bg-gray-200 transition"
//               >
//                 <Heart
//                   size={28}
//                   className={`transition ${
//                     isFavorited ? "text-red-500 fill-red-500" : "text-gray-400"
//                   }`}
//                 />
//               </button>
//               <button
//                 onClick={handleCopy}
//                 className="p-2 bg-gray-100 rounded-full shadow-sm hover:bg-gray-200 transition relative"
//               >
//                 {isCopied ? (
//                   <Check size={28} className="text-green-500" />
//                 ) : (
//                   <Share2 size={28} className="text-gray-400" />
//                 )}
//               </button>
//             </div>
//           </div>

//           <div className="flex flex-col-reverse lg:flex-row mb-8 gap-6 lg:gap-10">
//             <div className="flex-1">
//               <div className="mb-8">
//                 <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black font-poppins leading-tight tracking-wider mb-4">
//                   {job.title}
//                 </h1>
//               </div>
//               <div className="space-y-5">
//                 {["Team", "Type", "Shift", "Level"].map((label, idx) => (
//                   <div key={idx}>
//                     <p className="text-xs font-bold text-black uppercase tracking-wider">
//                       {label}
//                     </p>
//                     <p className="text-gray-500 mt-1 text-light font-poppins leading-tight tracking-wider sm:text-lg">
//                       {
//                         [
//                           job.category,
//                           job.type,
//                           job.shift, 
//                           job.level,
//                         ][idx]
//                       }
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="flex gap-4 sm:gap-6 w-full lg:w-[500px] mt-6 lg:mt-0">
//               <div className="w-[120px] h-[160px] sm:w-[200px] sm:h-[280px] overflow-hidden rounded-lg">
//                 <img
//                   src={Job1}
//                   alt="Visual"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="mt-6 sm:mt-8 w-[160px] sm:w-[210px] h-[210px] sm:h-[280px] overflow-hidden rounded-lg">
//                 <img
//                   src={Job2}
//                   alt="Visual"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </div>
//           </div>

//           <div className="space-y-10">
//             {["Primary Responsibilities", "Requirements"].map((title, i) => (
//               <div key={i}>
//                 <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
//                   {title}
//                 </h2>
//                 <ul className="list-disc pl-5 text-gray-700 leading-relaxed text-sm sm:text-base space-y-2">
//                   {(i === 0 ? job.responsibilities : job.requirements).map(
//                     (item, idx) => (
//                       <li key={idx}>{item}</li>
//                     )
//                   )}
//                 </ul>
//               </div>
//             ))}

//             <div className="mt-6">
//               { console.log(job)}
//               <button
//                 className="bg-gradient-to-r from-[#0078B4] to-[#00B4D9] text-white font-semibold py-2 px-4 lg:py-3 lg:px-10 rounded-lg hover:brightness-110 transition text-base lg:text-xl w-full lg:w-[250px]"
//                 onClick={() => navigate("/JobApplicationForm", { state: {job} })}
//               >
//                 Apply now
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default JobPosting;





import React, { useState } from "react";
import { Heart, Share2, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

const JobPosting = ({ job }) => {
  if (!job) return null;

  const [activeImage, setActiveImage] = useState(job.images?.[0]);
  const [isFavorited, setIsFavorited] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const navigate = useNavigate();

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
    {/* <button onClick={()=> navigate("/carrer")}>Back</button> */}
      <div className="bg-white rounded-xl shadow-md p-6 lg:p-10">

        {/* Header */}
        <div className="flex justify-between items-start gap-4 mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
            {job.title}
          </h1>

          <div className="flex gap-2">
            {/* <button
              onClick={() => setIsFavorited(!isFavorited)}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
            >
              <Heart
                className={`${isFavorited
                  ? "text-red-500 fill-red-500"
                  : "text-gray-400"
                  }`}
              />
            </button> */}

            {/* <button
              onClick={handleCopy}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
            >
              {isCopied ? (
                <Check className="text-green-500" />
              ) : (
                <Share2 className="text-gray-400" />
              )}
            </button> */}
          </div>
        </div>

        {/* Image + Info */}
        <div className="grid lg:grid-cols-2 gap-10 mb-12">

          {/* Job Info */}
          <div className="space-y-6">
            {[
              ["Team", job.category],
              ["Type", job.type],
              ["Shift", job.shift],
              ["Level", job.level],
            ].map(([label, value]) => (
              <div key={label}>
                <p className="text-xs uppercase text-gray-500 font-semibold">
                  {label}
                </p>
                <p className="text-lg text-gray-800">{value}</p>
              </div>
            ))}

            <button
              onClick={() => navigate("/JobApplicationForm", { state: { job } })}
              className="mt-6 w-full sm:w-auto px-10 py-3 text-lg font-semibold text-white
                         rounded-lg bg-gradient-to-r from-[#0078B4] to-[#00B4D9]
                         hover:brightness-110 transition"
            >
              Apply Now
            </button>
          </div>


          {/* Images */}
          {job.images?.length > 0 && (
            <div>
              <div className="rounded-xl overflow-hidden border mb-4">
                <img
                  src={activeImage}
                  alt={job.title}
                  className="w-full h-[320px] object-cover"
                />
              </div>


            </div>
          )}
        </div>

        {/* Responsibilities */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">
            Primary Responsibilities
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            {job.responsibilities.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Requirements */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-gray-900">
            Requirements
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            {job.requirements.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default JobPosting;
