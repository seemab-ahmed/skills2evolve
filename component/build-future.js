import React from "react";
import Link from "next/link";
const Future = () => {
  return (
     <div>
        <div className="relative m-auto mx-5 bg-[#242F3B] lg:pr-[37px] pr-[20px] lg:pl-[57px] pl-[20px] pt-[44px] pb-[56px] rounded-2xl">
         <div className="text-col md:max-w-[641px] w-full md:pt-8">
            <h2 className="text-[30px] lg:text-[44px] lg:leading-14 leading-10 font-semibold font-[Inter] text-[#fff]"> Ready To Build <span className="text-[#FB971B]">Your Future</span></h2>
            <p className="mb-6 text-[16px] font-[Inter] font-normal leading-6 text-[#FFFFFFA3]">Choose your learning path and start today</p>
             <Link href={"/"} className="text-[14px] font-[Inter] font-medium leading-6 text-[#fff] rounded-[8px] bg-[#FB971B] px-6 py-2" >Get Started Now</Link>
         </div>
         <div className="sm:max-w-[609px] w-full absolute top-0 bottom-0 md:right-[37px] right-[20px]">
           <svg className="h-full w-full" viewBox="0 0 609 216" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.08" fillRule="evenodd" clipRule="evenodd" d="M0 44.3077C0 19.8372 19.8297 0 44.2909 0H121.8V44.3077H44.2909V83.0769H138.409C162.87 83.0769 182.7 102.914 182.7 127.385V171.692C182.7 196.163 162.87 216 138.409 216H22.1455V171.692H138.409V127.385H44.2909C19.8297 127.385 0 107.547 0 83.0769V44.3077ZM359.864 44.3077H143.945V0H359.864C384.325 0 404.155 19.8372 404.155 44.3077V83.0769C404.155 107.547 384.325 127.385 359.864 127.385H254.673V171.692H459.518V216H210.382V127.385C210.382 102.914 230.212 83.0769 254.673 83.0769H359.864V44.3077ZM609 49.8462H420.764V0H609V49.8462ZM609 127.385H420.764V83.0769H609V127.385ZM609 216H487.2V171.692H609V216Z" fill="white"/>
            </svg>
         </div>
       </div>
    </div>
  );
};

export default Future;
