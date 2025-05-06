import React from "react";
import Cardimage from "../Images/Ellipse 11.png"
import Image from "next/image"; 
const testimonials = [
  {
    name: "Aisha T.",
    title: "Cybersecurity Analyst",
    image: "/aisha.png", // Replace with actual image path
    quote:
      "“Within three months of completing the program, I secured a cybersecurity role. The structured mentorship and practical labs were instrumental to my success.”",
  },
  {
    name: "Daniel M.",
    title: "Cloud Support Associate",
    image: "/daniel.png",
    quote:
      "“This program offered exactly what I needed—clarity, confidence, and hands-on experience working with cloud infrastructure at scale.”",
  },
  {
    name: "Lina R.",
    title: "Product Designer (AI Learner)",
    image: "/lina.png",
    quote:
      "“Skills2Evolve delivered a practical and thoughtful introduction to AI. The content was well-curated, and the real-world relevance made it highly engaging.”",
  },
];

const Testimonials = () => {
  return (
    <div className="pb-[68px]">
    <div className="max-w-[1190px] px-5 m-auto">
      <div className="text-center mb-[9px] max-w-[553px] m-auto">
        <span className="m-auto bg-white text-sm leading-5 sm:mb-2 mb-4 font-semibold  text-[#1B5795] px-4 py-1 rounded-full inline-block border border-[#CED7FF]">
          TESTIMONIALS
        </span>
        <h2 className="md:text-[40px] text-[28px] md:leading-[56px] font-semibold test-[#1E1E1E]">
          What are Our Clients Saying About Us
        </h2>
      </div>

      <div className="flex gap-6 justify-center flex-wrap lg:flex-nowrap">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 md:max-w-[331px] "
          >
           <div className="flex gap-[10px] items-center border-b border-[#E3E3E3] pb-6 mb-6">
                <div className="flex max-w-[48px] w-full h-auto">
                <Image src={Cardimage} alt="Logo" className="w-full h-auto " />
                </div>
                <div className="flex items-start flex-col">
                  <h3 className="font-semibold text-[20px] leading-[36px]   text-[#1E1E1E]">{testimonial.name}</h3>
                  <p className=" text-left text-[16px] leading-7 font-normal  text-[#707070]">{testimonial.title}</p>
                </div>
           </div>
            <p className="text-left text-[16px] leading-7 font-normal  text-[#707070]">{testimonial.quote}</p>
          </div>
        ))}
      </div>

      {/* Arrows — Static for now
      <div className="flex justify-between mt-10 px-8 md:px-32">
        <button className="bg-white shadow-md p-2 rounded-full hover:bg-gray-100 transition">
          ←
        </button>
        <button className="bg-orange-500 text-white p-2 rounded-full hover:bg-orange-600 transition">
          →
        </button>
      </div> */}
    </div>
    </div>
  );
};

export default Testimonials;
