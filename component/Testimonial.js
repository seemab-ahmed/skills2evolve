import React, { useRef } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Cardimage from "../Images/Ellipse 11.png";
import Image from "next/image";

const testimonials = [
  {
    name: "Aisha T.",
    title: "Cybersecurity Analyst",
    image: "/aisha.png",
    quote: "“Within three months of completing the program, I secured a cybersecurity role. The structured mentorship and practical labs were instrumental to my success.”",
  },
  {
    name: "Daniel M.",
    title: "Cloud Support Associate",
    image: "/daniel.png",
    quote: "“This program offered exactly what I needed—clarity, confidence, and hands-on experience working with cloud infrastructure at scale.”",
  },
  {
    name: "Lina R.",
    title: "Product Designer (AI Learner)",
    image: "/lina.png",
    quote: "“Skills2Evolve delivered a practical and thoughtful introduction to AI. The content was well-curated, and the real-world relevance made it highly engaging.”",
  },
  {
    name: "Lina R.",
    title: "Product Designer (AI Learner)",
    image: "/lina.png",
    quote: "“Skills2Evolve delivered a practical and thoughtful introduction to AI. The content was well-curated, and the real-world relevance made it highly engaging.”",
  },
];

const Testimonials = () => {
  const splideRef = useRef(null);

  return (
    <div className="pb-[28px] testimonial_section px-5">
      <div className="sm:max-w-[640px] md:max-w-[820px]  lg:max-w-[1060px] xl:max-w-[1270px] m-auto ">
        <div className="px-5 text-center mb-[9px] max-w-[553px] m-auto">
          <span className="m-auto bg-white text-sm leading-5 sm:mb-2 mb-4 font-semibold  text-[#1B5795] px-4 py-1 rounded-full inline-block border border-[#CED7FF]">
            TESTIMONIALS
          </span>
          <h2 className="md:text-[40px] text-[28px] md:leading-[56px] font-semibold text-[#1E1E1E]">
            What are Our Clients Saying About Us
          </h2>
        </div>
        <div className="relative ">
          <div className="relative  sm:max-w-[540px] md:max-w-[720px]  lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1500x] m-auto ">
            <Splide
              options={{
                type: 'loop',
                perPage: 3,
                arrows: false, 
                pagination: false,
                autoplay: false,
                breakpoints: {
                  1024: { perPage: 2 },
                  640: { perPage: 1 },
                },
              }}
              aria-label="Testimonials"
              ref={splideRef}
            >
              {testimonials.map((testimonial, index) => (
                <SplideSlide key={index}  >
                  <div data-aos="zoom-in"  data-aos-duration="2000" className="cursor-pointer hover:scale-105 transform  bg-white rounded-xl shadow-lg p-6 h-full mr-5 ml-3 hover:bg-[#FB971B] hover:shadow-xl transition-all ease-in-out duration-500 group">
                    <div className="flex gap-[10px] items-center border-b border-[#E3E3E3] pb-6 mb-6">
                      <div className="flex max-w-[48px] w-full h-auto">
                        <Image src={Cardimage} alt="Logo" className="w-full h-auto" />
                      </div>
                      <div className="flex items-start flex-col">
                        <h3 className="font-semibold text-[20px] leading-[36px] text-[#1E1E1E] group-hover:text-white transition-all ease-in-out duration-500">{testimonial.name}</h3>
                        <p className="text-left text-[16px] leading-7 font-normal text-[#707070] group-hover:text-white transition-all ease-in-out duration-500">{testimonial.title}</p>
                      </div>
                    </div>
                    <p className="text-left text-[16px] leading-7 font-normal text-[#707070] group-hover:text-white transition-all ease-in-out duration-500">{testimonial.quote}</p>
                  </div>
                </SplideSlide>
              ))}
            
            </Splide>
            
          </div>
          {/* Custom Buttons */}
          <div className="flex justify-between absolute top-0 bottom-0 h-fit w-full px-2 m-auto z-10">
                <button
                  className="w-8 h-8 flex items-center justify-center border border-[#1717441A] cursor-pointer text-[#1B5795] hover:text-[#fff] transition-all duration-500 ease-in-out shadow-md rounded-full hover:bg-[#FB971B]"
                  onClick={() => splideRef.current?.splide?.go('<')}
                >
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.449 1.22266L0.671224 4.00043M0.671224 4.00043L3.449 6.77821M0.671224 4.00043H7.33789" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button
                  className="w-8 h-8 flex items-center justify-center border border-[#1717441A] cursor-pointer text-[#1B5795] hover:text-[#fff] transition-all duration-500 ease-in-out rounded-full hover:bg-[#FB971B]"
                  onClick={() => splideRef.current?.splide?.go('>')}
                >
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.56028 1.22168L7.33805 3.99946M7.33805 3.99946L4.56028 6.77723M7.33805 3.99946H0.671387" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
