import { useState } from "react";
import Cardimage from "../Images/cardimage.png";
import Image from "next/image";
import Link from "next/link";
const data = [
  {
    id: 1,
    category: "Cloud Computing",
    title: "readable content of a page when looking at its layout",
    videos: "10 Videos",
    level: "Intermediate",
    description:
      "After many years of customer satisfaction, many brands have gained the trust of their customers. Unfortunately, this trust can be very easily lost. Many users...",

  },
  {
    id: 1,
    category: "Cloud Computing",
    title: "readable content of a page when looking at its layout",
    videos: "10 Videos",
    level: "Intermediate",
    description:
      "After many years of customer satisfaction, many brands have gained the trust of their customers. Unfortunately, this trust can be very easily lost. Many users...",

  },
  {
    id: 1,
    category: "Cloud Computing",
    title: "readable content of a page when looking at its layout",
    videos: "10 Videos",
    level: "Intermediate",
    description:
      "After many years of customer satisfaction, many brands have gained the trust of their customers. Unfortunately, this trust can be very easily lost. Many users...",

  },
  {
    id: 1,
    category: "Cloud Computing",
    title: "readable content of a page when looking at its layout",
    videos: "10 Videos",
    level: "Intermediate",
    description:
      "After many years of customer satisfaction, many brands have gained the trust of their customers. Unfortunately, this trust can be very easily lost. Many users...",

  },
  {
    id: 1,
    category: "Cloud Computing",
    title: "readable content of a page when looking at its layout",
    videos: "10 Videos",
    level: "Intermediate",
    description:
      "After many years of customer satisfaction, many brands have gained the trust of their customers. Unfortunately, this trust can be very easily lost. Many users...",

  },
  {
    id: 1,
    category: "Cloud Computing",
    title: "readable content of a page when looking at its layout",
    videos: "10 Videos",
    level: "Intermediate",
    description:
      "After many years of customer satisfaction, many brands have gained the trust of their customers. Unfortunately, this trust can be very easily lost. Many users...",

  },
  {
    id: 2,
    category: "Cybersecurity",
    title: "readable content of a page when looking at its layout",
    videos: "10 Videos",
    level: "Intermediate",
    description:
      "After many years of customer satisfaction, many brands have gained the trust of their customers. Unfortunately, this trust can be very easily lost. Many users...",

  },
  {
    id: 2,
    category: "Cybersecurity",
    title: "readable content of a page when looking at its layout",
    videos: "10 Videos",
    level: "Intermediate",
    description:
      "After many years of customer satisfaction, many brands have gained the trust of their customers. Unfortunately, this trust can be very easily lost. Many users...",

  },
  {
    id: 2,
    category: "Cybersecurity",
    title: "readable content of a page when looking at its layout",
    videos: "10 Videos",
    level: "Intermediate",
    description:
      "After many years of customer satisfaction, many brands have gained the trust of their customers. Unfortunately, this trust can be very easily lost. Many users...",

  },
  // Duplicate to fill the grid (add more if needed)
];

export default function Courcestabs() {
  const [activeTab, setActiveTab] = useState("Cloud Computing");

  const filteredData = data.filter((item) => item.category === activeTab);

  return (
  <div className="px-5">
      <div className="sm:max-w-[540px] md:max-w-[720px]  lg:max-w-[960px] xl:max-w-[1170px]  m-auto pb-[70px] pt-[20px]">
      <div className="flex gap-6 justify-center mb-[30px] pb-[15px] border-b border-[#D5D4DF] ">
        {['Cloud Computing', 'Cybersecurity'].map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`md:px-[27px] px-[15px] md:py-[15px] py-[12px] md:text-base text-xs  border rounded-[6px] font-medium  cursor-pointer hover:text-[#fff] hover:bg-[#1B5795] transition-all ease-in-out  duration-300 ${
              activeTab === category ? 'bg-[#1B5795] text-white border ' : 'bg-[#F7F7F7] border text-[#1E1E1E] border-[#1B5795]'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
{/* data-aos="zoom-in"  data-aos-duration="2000" */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredData.map((item, index) => (
          <div key={index}  className="bg-white rounded-lg border border-[#E3E3E3] hover:shadow-xl  transition-all ease-in-out duration-500">
          <div>
          <Image
                src={Cardimage}
                alt="Icon"
                 className=" w-full h-full"
              />   
          </div>
          <div className="px-4 pb-[17px] pt-[7px]">
            <div className=" flex items-center gap-2 text-[14px] font-medium leading-[20px] text-[#707070]  mb-[7px]">
                {item.videos} <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="3" cy="3" r="3" fill="#1B5795"/>
                    </svg>
                    <span className="text-[#1E1E1E]">{item.level}</span>
                </div>
                <h3 className="mt-[11px] font-semibold text-[18px]  leading-[26px] text-[#1E1E1E]">
                 {item.title}
                </h3>
                <p className=" mb-5 text-[14px] font-normal leading-[20px] text-[#707070] line-clamp-3">
                 {item.description}
                </p>
                <Link href={"/"} className=" flex items-center justify-center text-[14px] leading-[20px] text-[#1E1E1E] hover:text-white bg-[#F7F7F7] w-full border border-[#D6D6D6] rounded py-[12px] px-5 font-medium hover:bg-[#FB971B] transition-all ease-in-out duration-500">
                  View Details
                </Link>
          </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Link  href={"/"} className="text-[14px] leading-[20px] text-[#1E1E1E] px-4 py-2 border border-[#CED7FF] rounded font-medium  hover:text-white hover:bg-[#FB971B] transition-all ease-in-out duration-500">
           Load More
        </Link>
      </div>
    </div>
  </div>
  );
}