import React from "react";
import Link from "next/link";

const career = () => {
  return (
    <div className="bg-[#111827] text-white py-16 px-6 lg:px-20 relative">
      <div className="flex flex-wrap lg:flex-nowrap  gap-12 items-center px-5 m-auto max-w-[1080px] ">
        {/* Left Content */}
        <div className="space-y-6">
          <span className="text-xs font-semibold bg-blue-100 text-blue-700 px-3 py-1 rounded-full inline-block">
            CAREER PATHWAY
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold">Your Career In Tech Path</h2>
          <div className="text-gray-300 space-y-4 max-w-md">
            <p>
              Whether you’re starting fresh or upskilling, our guided pathway helps you build confidence, gain credentials, and move into a high-demand tech career, one step at a time.
            </p>
            <p>
              Foundational training, skill specialization, and job-ready support, all in one flexible learning path.
            </p>
          </div>
          <Link href="/" className="bg-orange-500 text-white hover:bg-orange-600">Find Your Path</Link>
        </div>

        {/* Right Pathway Boxes */}
        <div className="relative flex flex-col gap-6">
          <div className="absolute left-1/2 -translate-x-1/2 top-6 h-[90%] w-0.5 bg-blue-500"></div>

          <div className="flex items-start gap-4 relative z-10">
            <div className="w-4 h-4 bg-orange-400 rounded-full mt-2"></div>
            <div className="bg-white text-gray-800 p-4 rounded-lg shadow w-full">
              <h4 className="font-semibold">Transform</h4>
              <p className="text-sm text-gray-600">Build foundational skills and growth mindset</p>
            </div>
          </div>

          <div className="flex items-start gap-4 relative z-10">
            <div className="w-4 h-4 bg-orange-400 rounded-full mt-2"></div>
            <div className="bg-white text-gray-800 p-4 rounded-lg shadow w-full">
              <h4 className="font-semibold">Transition</h4>
              <p className="text-sm text-gray-600">Apply your skills in real-world contexts</p>
            </div>
          </div>

          <div className="flex items-start gap-4 relative z-10">
            <div className="w-4 h-4 bg-orange-400 rounded-full mt-2"></div>
            <div className="bg-white text-gray-800 p-4 rounded-lg shadow w-full">
              <h4 className="font-semibold">Change</h4>
              <p className="text-sm text-gray-600">Deepen your expertise and specialize</p>
            </div>
          </div>

          <div className="flex items-start gap-4 relative z-10">
            <div className="w-4 h-4 bg-orange-400 rounded-full mt-2"></div>
            <div className="bg-white text-gray-800 p-4 rounded-lg shadow w-full">
              <h4 className="font-semibold">Career Support</h4>
              <p className="text-sm text-gray-600">Get mentorship, resume help, and job guidance</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default career;
