// import React from "react";

// const services = [
//   {
//     id: 1,
//     image: "/service1.png",
//     title: "IoT Solutions",
//     desc: "Cloud-connected smart monitoring systems.",
//   },
//   {
//     id: 2,
//     image: "/service2.png",
//     title: "Embedded Systems",
//     desc: "Custom hardware & firmware development.",
//   },
//   {
//     id: 3,
//     image: "/service3.png",
//     title: "AI & Intelligent Automation",
//     desc: "Intelligent decision-based engineering.",
//   },
// ];

// export default function ServicePage() {
//   return (
//     <div className="page">
//       <div className="page"
//           style={{ paddingTop: "63px",
//             }}
// ></div>

//       {/* HERO */}
//       <div className="hero">
//         <img src="/Frame 1183.png" alt="hero" />
//       </div>

//       {/* SECTION */}
//       <div className="section">
//         <h2>
//           <span className="blue">Service</span> that we provide
//         </h2>

//         <p className="subtitle">
//           We transform innovative ideas into real-world solutions through advanced
//           technology and intelligent system development, creating scalable and
//           future-ready innovations.
//         </p>

//         {/* GRID */}
//         <div className="grid">
//           {[...services, ...services].map((item, i) => (
//             <div className="card">
//   <div className="image-wrapper">
//     <img src={item.image} alt="" />
//     <div className="badge"> <svg viewBox="0 0 100 100">


//     <circle cx="50" cy="50" r="45" fill="#7fb5ff" />


//     <circle cx="50" cy="50" r="38" fill="#1e73be" />


//     <text
//       x="50"
//       y="55"
//       textAnchor="middle"
//       fill="white"
//       fontSize="32"
//       fontWeight="500"
//     >
//       {(i % 3) + 1}
//     </text>

//   </svg></div>
//   </div>

//   <h3>{item.title}</h3>
//   <p>{item.desc}</p>
//   <button className="read-btn">Read more →</button>
// </div>
//           ))}
//         </div>
//       </div>

//       {/* STYLES */}
//       <style>{`
//         .page {
//           background: #f4f6fb;
//         }

//         .hero img {
//           width: 100%;
//           height: auto;
//           object-fit: contain;
//         }

//         .section {
//           text-align: center;
//           padding: 60px 20px 80px;
//         }

//         .section h2 {
//           font-size: 32px;
//           font-weight: 700;
//         }

//         .blue {
//           color: #1877F2;
//         }

//         .subtitle {
//           max-width: 650px;
//           margin: 15px auto 40px;
//           color: #555;
//           line-height: 1.6;
//         }

//         .grid {
//           display: grid;
//           grid-template-columns: repeat(3, 1fr);
//           gap: 30px;
//           max-width: 1100px;
//           margin: auto;
//         }

//         .card {
//           background: white;
//           border-radius: 15px;
//           padding: 15px;
//           position: relative;
//           box-shadow: 0 8px 25px rgba(0,0,0,0.08);
//           transition: 0.3s;
//         }

//         .card:hover {
//           transform: translateY(-6px);
//         }

//         .card img {
//           width: 100%;
//           height: 180px;
//           border-radius: 12px;
//           object-fit: cover;
//         }
// .image-wrapper {
//   position: relative;
// }

// .image-wrapper img {
//   width: 100%;
//   height: 180px;
//   border-radius: 12px;
//   object-fit: cover;
//   display: block;
// }

// .badge {
//   position: absolute;
//   bottom: -14px;
//   right: 12px;
//   width: 42px;
//   height: 42px;
// }

// .badge svg {
//   width: 100%;
//   height: 100%;
//   filter: drop-shadow(0 4px 8px rgba(0,0,0,0.15));
// }
//         .card h3 {
//           text-align: left;
//           margin-top: 12px;
//           font-size: 18px;
//         }

//         .card p {
//           text-align: left;
//           color: #666;
//           font-size: 14px;
//         }

//         .read-btn {
//           margin-top: 10px;
//           margin-right: 220px;
//           background: none;
//           border: none;
//           color: #1877F2;
//           font-weight: 600;
//           cursor: pointer;
//         }

//         /* RESPONSIVE */
//         @media (max-width: 900px) {
//           .grid {
//             grid-template-columns: repeat(2, 1fr);
//           }
//         }

//         @media (max-width: 600px) {
//           .grid {
//             grid-template-columns: 1fr;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }









// import React from "react";
// import "../../src/index.css"
// import { LuBadge } from "react-icons/lu";

// const services = [
//   {
//     id: 1,
//     image: "/service1.png",
//     title: "IoT Solutions",
//     desc: "Cloud-connected smart monitoring systems.",
//   },
//   {
//     id: 2,
//     image: "/service2.png",
//     title: "Embedded Systems",
//     desc: "Custom hardware & firmware development.",
//   },
//   {
//     id: 3,
//     image: "/service3.png",
//     title: "AI & Intelligent Automation",
//     desc: "Intelligent decision-based engineering.",
//   },
// ];

// export default function ServicePage() {
//   return (
//     <div className="bg-[#f4f6fb] pt-[63px]">

//       {/* HERO */}
//       <div>
//         <img
//           src="/Frame 1183.png"
//           alt="hero"
//           className="w-full h-auto object-contain"
//         />
//       </div>

//       {/* SECTION */}
//       <div className="text-center px-5 py-[60px] pb-[80px]">

//         <h2 className="text-[32px] font-bold">
//           <span className="text-[#1877F2]">Service</span> that we provide
//         </h2>

//         <p className="max-w-[650px] mx-auto mt-4 mb-10 text-gray-600 leading-relaxed">
//           We transform innovative ideas into real-world solutions through advanced
//           technology and intelligent system development, creating scalable and
//           future-ready innovations.
//         </p>

//         {/* GRID */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px] max-w-[1100px] mx-auto">

//           {[...services, ...services].map((item, i) => (
//             <div
//               key={i}
//               className="bg-white rounded-[15px] p-4 relative shadow-[0_8px_25px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:-translate-y-1.5"
//             >

//               {/* IMAGE */}
//               <div className="relative">
//                 <img
//                   src={item.image}
//                   alt=""
//                   className="w-full h-[180px] rounded-[12px] object-cover block"
//                 />

//                 {/* BADGE */}
//                 <div className="absolute -bottom-[14px] right-3 w-[42px] h-[42px]">
//                   <svg
//   viewBox="0 0 100 100"
//   className="w-full h-full drop-shadow-[0_4px_8px_rgba(0,0,0,0.15)]"
// >
//   <circle cx="50" cy="50" r="45" fill="#7fb5ff" />
//   <circle cx="50" cy="50" r="38" fill="#1e73be" />

//   <text
//     x="50"
//     y="55"
//     textAnchor="middle"
//     fill="white"
//     fontSize="32"
//     fontWeight="500"
//   >
//     {(i % 3) + 1}
//   </text>
// </svg>
//                 </div>
//               </div>

//               {/* CONTENT */}
//               <h3 className="text-left mt-3 text-[18px] font-semibold">
//                 {item.title}
//               </h3>

//               <p className="text-left text-gray-500 text-sm mt-1">
//                 {item.desc}
//               </p>

              // <div className="flex justify-start">
              //   <button className="mt-2 text-red-600 font-semibold text-sm p-2 rounded bg-blue-10">
              //     Read more →
              //   </button>
              // </div>
//             </div>
//           ))}

//         </div>
//       </div>
//     </div>
//   );
// }





import React from "react";
import { LuBadge } from "react-icons/lu";

const services = [
  {
    id: 1,
    image: "/service1.png",
    title: "IoT Solutions",
    desc: "Cloud-connected smart monitoring systems.",
  },
  {
    id: 2,
    image: "/service2.png",
    title: "Embedded Systems",
    desc: "Custom hardware & firmware development.",
  },
  {
    id: 3,
    image: "/service3.png",
    title: "AI & Intelligent Automation",
    desc: "Intelligent decision-based engineering.",
  },
];

export default function ServicePage() {
  return (
    <div className="bg-[#f4f6fb] pt-[63px]">

      {/* HERO */}
      <div>
      <img
          src="/image1.png"
          alt="hero"
          className="
          w-full
          h-[220px]
          sm:h-[300px]
          md:h-[420px]
          lg:h-[520px]
          object-cover
          block
          "
          />
      </div>

      {/* SECTION */}
      <div className="text-center px-5 py-[60px] pb-[80px]">

        <h2 className="text-[32px] font-bold">
          <span className="text-[#1877F2]">Service</span> that we provide
        </h2>

        <p className="max-w-[650px] mx-auto mt-4 mb-10 text-gray-600 leading-relaxed">
          We transform innovative ideas into real-world solutions through advanced
          technology and intelligent system development, creating scalable and
          future-ready innovations.
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px] max-w-[1100px] mx-auto">

          {[...services, ...services].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-[15px] p-4 shadow-[0_8px_25px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:-translate-y-1.5"
            >

              {/* IMAGE */}
              <div className="relative">
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-[180px] rounded-[12px] object-cover block"
                />

                {/* BADGE */}
                {/* <div className="absolute bottom-2 right-2 w-[48px] h-[48px] flex items-center justify-center">

                  Icon (background look)
                  <LuBadge className="absolute text-[#1e73be] text-[48px] drop-shadow-md" />

                  Number
                  <span className="relative text-white text-[14px] font-bold">
                    {(i % 3) + 1}
                  </span>

                </div> */}
              </div>

              {/* CONTENT */}
              <h3 className="text-left mt-3 text-[18px] font-semibold">
                {item.title}
              </h3>

              <p className="text-left text-gray-500 text-sm mt-1">
                {item.desc}
              </p>

             <div className="flex justify-start">
  <button
  className="
    mt-3
    px-8
    py-[14px]
    bg-gradient-to-r
    from-[#2F80ED]
    to-[#1366D6]
    text-white
    rounded-full
    text-[16px]
    font-medium
    leading-none
    transition-all
    duration-200
    shadow-[0_6px_18px_rgba(24,119,242,0.35)]
    hover:scale-[1.02]
    hover:shadow-[0_8px_22px_rgba(24,119,242,0.45)]
  "
>
  Read more→
</button>
              </div>

            </div>
          ))}

        </div>
      </div>
    </div>
  );
}