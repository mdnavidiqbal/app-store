// import React from "react";
// import hero from '../assets/hero.png'
// import playstore from '../assets/playstore-icon.png'
// import appstore from '../assets/app-store-icon.png'

// export default function Banner(){
//   return (
//     <section className="bg-gradient-to-r from-indigo-50 to-pink-50 py-12">
//       <div className="max-w-4xl mx-auto text-center px-4">
//         <h1 className="text-3xl sm:text-4xl font-bold mb-3">We Build</h1>
//         <h1 className="text-3xl sm:text-4xl font-bold mb-3"><span className="text-[#632ee3]">Productive</span> Apps</h1>
//         <p className="pb-5 text-gray-400">At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
//         <div className="flex justify-center gap-3">
//         <a  href="https://play.google.com/store" target="_blank" rel="noreferrer" className=" flex items-center px-6 py-2 border border-gray-300 text-blue-950 font-bold rounded-md"><img className="w-10" src={playstore} alt="" />Play Store</a>
//         <a href="https://www.apple.com/app-store/" target="_blank" rel="noreferrer" className=" flex gap-2 items-center px-6 py-2 border border-gray-300 text-blue-950 font-bold rounded-md"><img className="w-7" src={appstore} alt="" />App Store</a>
//         </div>
//         <div className="flex items-center justify-center w-full h-64">
//           <img
//             src={hero}
//             alt="Apps showcase"
//             className="w-lg mt-39 md:mt-22"
//           />
//         </div>
//       </div> 
//     </section>
//   );
// }


import React from "react";
import hero from "../assets/hero.png";
import playstore from "../assets/playstore-icon.png";
import appstore from "../assets/app-store-icon.png";

export default function Banner() {
  return (
    <>
      {/* Banner Section */}
      <section className="bg-gradient-to-r from-indigo-50 to-pink-50 pt-12 pb-0">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">We Build</h1>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">
            <span className="text-[#632ee3]">Productive</span> Apps
          </h1>
          <p className="pb-5 text-gray-500">
            At HERO.IO, we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting. <br />
            Our goal is to turn your ideas into digital experiences that truly
            make an impact.
          </p>

          {/* Buttons */}
          <div className="flex justify-center gap-3 mb-8">
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noreferrer"
              className="flex items-center px-6 py-2 border border-gray-300 text-blue-950 font-bold rounded-md bg-white shadow-sm hover:shadow-md transition"
            >
              <img className="w-10" src={playstore} alt="" />
              Play Store
            </a>
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noreferrer"
              className="flex gap-2 items-center px-6 py-2 border border-gray-300 text-blue-950 font-bold rounded-md bg-white shadow-sm hover:shadow-md transition"
            >
              <img className="w-7" src={appstore} alt="" />
              App Store
            </a>
          </div>

          {/* Hero Image */}
          <div className="flex items-center justify-center w-full">
            <img
              src={hero}
              alt="Apps showcase"
              className="w-full max-w-md object-contain m-0 p-0"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white py-12 text-center m-0">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">
          Trusted By Millions, Built For You
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto px-6">
          {/* Total Downloads */}
          <div>
            <h3 className="text-4xl font-extrabold">29.6M</h3>
            <p className="text-lg mt-1">Total Downloads</p>
            <p className="text-sm mt-2 opacity-75">
              21% More Than Last Month
            </p>
          </div>

          {/* Total Reviews */}
          <div>
            <h3 className="text-4xl font-extrabold">906K</h3>
            <p className="text-lg mt-1">Total Reviews</p>
            <p className="text-sm mt-2 opacity-75">
              46% More Than Last Month
            </p>
          </div>

          {/* Active Apps */}
          <div>
            <h3 className="text-4xl font-extrabold">132+</h3>
            <p className="text-lg mt-1">Active Apps</p>
            <p className="text-sm mt-2 opacity-75">31 More Will Launch</p>
          </div>
        </div>
      </section>
    </>
  );
}

