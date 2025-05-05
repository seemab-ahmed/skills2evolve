import React from "react";
import Image from "next/image";
import women from '../Images/women.png'
import Link from "next/link";
const Ourcourses = () => {
  return (
    <div className="py-16 px-5 m-auto max-w-[1080px] bg-white">
      <div className="">
        {/* Left Image and Heading */}
        <div className="flex gap-5">
          <div className="relative w-fit">
            <Image
              src={women}
              alt="Student"
              width={400}
              height={400}
              className="rounded-lg relative z-10"
            />
            <div className="absolute top-4 left-4 w-24 h-24 bg-orange-400 -z-0 rounded-lg"></div>
          </div>

          <div>
            <span className="text-xs font-semibold bg-blue-100 text-blue-700 px-3 py-1 rounded-full inline-block">
              OUR COURSES
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-4">
              Unlock Your Potential <br /> Check Our Course Previews
            </h2>
            <p className="text-gray-600 mt-4 max-w-lg">
              We believe that education should be accessible to all, regardless of geographical location or time constraints. With our cutting-edge online learning platform, you can access high-quality educational content.
            </p>
            <Link href="/" className="mt-6 bg-blue-600 hover:bg-blue-700 text-white">Get started</Link>
          </div>
        </div>

        {/* Right Course Cards */}
        <div className="flex lg:flex-row flex-col gap-6">
          {[
            {
              title: "Cloud Computing Foundations",
              description:
                "Build in-demand skills to work with cloud platforms like AWS and Google Cloud. Learn how to deploy, manage, and scale modern infrastructure—no prior experience needed.",
            },
            {
              title: "Cybersecurity Essentials",
              description:
                "Discover how to protect digital systems, detect threats, and defend against attacks. Hands-on learning with real tools used by security professionals.",
            },
            {
              title: "AI Fundamentals & Applications",
              description:
                "Explore the world of Artificial Intelligence—understand how it works, where it’s used, and how you can be part of shaping its future.",
            },
          ].map((course, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow p-6">
              <h4 className="text-lg font-semibold mb-2">{course.title}</h4>
              <p className="text-gray-600 text-sm mb-4">{course.description}</p>
              <a href="#" className="text-blue-600 font-medium text-sm hover:underline">
                Learn more...
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ourcourses;
