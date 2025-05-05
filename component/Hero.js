import React from "react";
import Link from "next/link";
import bannerimage from "../Images/bannerright.png"
import Image from "next/image"; 
const Hero = () => {
  return (
    <div className="bg-white py-20 m-auto max-w-[1080px] px-5">
      <div className="flex lg:flex-row flex-col items-center">
        {/* Text Section */}
        <div className="space-y-6 w-full max-w-[630px]">
          <span className="text-xs font-semibold bg-blue-100 text-blue-700 px-3 py-1 rounded-full inline-block">
            PLATFORM: EDUCATION ONLINE LEARNING
          </span>
          <h1 className="text-4xl font-bold text-gray-900 leading-tight">
            Master <br /> In-Demand <br /> Tech Skills.
          </h1>
          <p className="text-gray-600 max-w-md">
            Whether you’re starting fresh or upskilling, unlock the tools,
            mindset, and mentorship to transform your career.
          </p>
          <div className="flex gap-4">
            <Link href="/" className="bg-blue-600 text-white hover:bg-blue-700">Start Learning Today</Link>
            <Link href="/" variant="outline">View All Courses</Link>
          </div>

          <div className="flex gap-6 pt-4 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-600"></div>
              Experienced mentor
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
              Quality video
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-orange-500"></div>
              Friendly price
            </div>
          </div>
        </div>

        {/* Image/Icons Section */}
        <div className="w-full max-w-[679px] ml-[-50px]">
           <Image src={bannerimage} alt="Logo" className="w-full h-auto " />
        </div>
      </div>
    </div>
  );
};

export default Hero;
