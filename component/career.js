import React from "react";
import Link from "next/link";
import Icon1 from '../Images/icon1.png'
import Icon3 from '../Images/yellowicon.png'
import Topbg from '../Images/carrertop-bg.png'
import Rightbg from '../Images/right-bottom.png'
import Carrerenter from '../Images/carrer-center.png'
import Image from "next/image";
const career = () => {
  return (
    <div>
    <div className="bg-[#242F3B] text-white md:pt-[90px] md:pb-[73px] py-[50px] relative max-w-[1040px] 2xl:max-w-[1400px] m-auto rounded-2xl">
      <div className="absolute md:top-[55px] top-[20px] md:right-[59px] right-[30px]">
          <div className=" w-[77px] h-[77px] flex "> 
              <Image
                src={Icon1}
                alt="Icon"
                 className=" w-full h-full"
              />
            </div>
            <div className="w-[77px] h-[77px] flex absolute top-[18px] right-[-19px] z-[2]"> 
              <Image
                src={Icon3}
                alt="Icon"
                className=" w-full h-full"
              />
            </div>
      </div>
      <div className="absolute 2xl:max-w-[1044px] 2xl:w-full w-[84%] top-0 left-0">
         <Image
                src={Topbg}
                alt="Icon"
                 className=" w-full h-full"
              />     
      </div>
      <div className="absolute bottom-0 right-0 w-full max-w-[110px]">
         <Image
                src={Rightbg}
                alt="Icon"
                 className=" w-full h-full"
              />     
      </div>
      <div className="absolute bottom-[115px] left-[50%] md:left-[363px] max-w-[105px] w-full">
         <Image
                src={Carrerenter}
                alt="Icon"
                 className=" w-full h-full"
              />     
      </div>
       <div className="flex items-center flex-col md:mb-[48px] mb-[20px] relative z-30">
          <span className="m-auto bg-white text-sm leading-5 sm:mb-2 mb-4 font-semibold  text-[#1B5795] px-4 py-1 rounded-full inline-block border border-[#CED7FF]">
            CAREER PATHWAY
          </span>
          <h2 className="md:text-[44px] text-[28px] md:leading-[56px] font-semibold text-center">Your Career In Tech Path</h2>
       </div>
      <div className="flex flex-wrap md:flex-nowrap justify-between gap-12  px-5 lg:pl-[82px] lg:pr-[48] m-auto max-w-[] ">
        {/* Left Content */}
        <div className="md:max-w-[376px] 2xl:max-w-[450px] w-full">
          <div >
            <h3 className="md:text-[28px] text-[22px] leading-[36px] mb-[20px] font-semibold">
              Steps To Your Pathways
            </h3>
            <p className=" mb-[20px] text-[18px] leading-[24px] font-normal" >
              Whether you’re starting fresh or upskilling, our guided pathway helps you build confidence, gain credentials, and move into a high-demand tech career, one step at a time.
            </p>
            <p className=" mb-[20px] text-[18px] leading-[24px] font-normal">
              Foundational training, skill specialization, and job-ready support, all in one flexible learning path.
            </p>
          </div>
          <Link href="/" className=" px-4 py-2  bg-[#FB971B] rounded-lg text-[14px] leading-[20px] font-medium hover:bg-orange-600">Find Your Path</Link>
        </div>

        {/* Right Pathway Boxes */}
        <div className="relative flex md:gap-[54px] gap-[30px]   md:max-w-[437px] 2xl:max-w-[750px] w-full ">
           <div className=" flex flex-col md:gap-[79px] gap-[70px] relative h-fit mt-[47px]">
                <div className="w-[2px] border border-dotted border-[#fff] h-full absolute top-0 left-0 right-0 m-auto z-[-1px]"></div>
                <div className="relative z-[2px] w-6 h-6 bg-orange-400 border-dotted border-[#FB971B] rounded-full  text-base text-center justify-center  flex items-center ">1</div>
                <div className="relative z-[2px] v w-6 h-6 bg-orange-400 border-dotted border-[#FB971B] rounded-full text-base text-center  justify-center flex items-center ">2</div>
                <div className="relative z-[2px]  w-6 h-6 bg-orange-400 border-dotted border-[#FB971B] rounded-full text-base text-center  justify-center flex items-center ">3</div>
                <div className="relative z-[2px]  w-6 h-6 bg-orange-400 border-dotted border-[#FB971B]  rounded-full text-base text-center justify-center  flex items-center ">4</div>
           </div>
           <div className="flex flex-col gap-[10px]  w-full">

                <div className="bg-white text-gray-800 px-5 pt-1 pb-3 rounded-lg ">
                  <h4 className=" text-[#1E1E1E] text-[20px] leading-[36px] pb-[8px]   border-b mb-[6px] border-[#D1D1D1] font-semibold">Transform</h4>
                  <p className="text-[16px] leading-[24px] font-normal text-[#707070]">Build foundational skills and growth mindset</p>
                </div>
             
                <div className="bg-white text-gray-800 px-5 pt-1 pb-3 rounded-lg">
                  <h4 className="text-[#1E1E1E] text-[20px] leading-[36px] pb-[8px]   border-b mb-[6px] border-[#D1D1D1] font-semibold">Transition</h4>
                  <p className="text-[16px] leading-[24px] font-normal text-[#707070]">Apply your skills in real-world contexts</p>
                </div>           

                <div className="bg-white text-gray-800 px-5 pt-1 pb-3 rounded-lg">
                  <h4 className="text-[#1E1E1E] text-[20px] leading-[36px] pb-[8px]   border-b mb-[6px] border-[#D1D1D1] font-semibold">Change</h4>
                  <p className="text-[16px] leading-[24px] font-normal text-[#707070]">Deepen your expertise and specialize</p>
                </div>
          
                <div className="bg-white text-gray-800 px-5 pt-1 pb-3 rounded-lg">
                  <h4 className="text-[#1E1E1E] text-[20px] leading-[36px] pb-[8px]   border-b mb-[6px] border-[#D1D1D1] font-semibold">Career Support</h4>
                  <p className="text-[16px] leading-[24px] font-normal text-[#707070]">Get mentorship, resume help, and job guidance</p>
                </div>
          
           </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default career;
