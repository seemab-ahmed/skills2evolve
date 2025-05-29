import React from 'react';
import DetailImage from '../Images/blog-detail.png';
import RelatedImage from '../Images/related-post.png';
import Image from 'next/image';
import Link from 'next/link';
export default function Blogdetail() {
return (
<div className="bg-gray-50 px-5 md:pt-[120px] pt-[80px] pb-[66px]">
<div className="relative flex md:flex-row flex-col gap-10 justify-between sm:max-w-[540px] md:max-w-[720px]  lg:max-w-[960px] xl:max-w-[1170px]  m-auto">

{/* Main Content */}
<div className="md:max-w-[774px] lg:max-w-[890px] w-full flex flex-col gap-6">
{/* Header */}
<h1 className="text-[#1E1E1E] md:text-[32px] text-[22px] font-semibold md:leading-[46px]">
    Scholarships in Technology: Maximizing Your Educational Investment
</h1>
<div className="flex items-center justify-between w-full">
    {/* Left: Author Info */}
    <div className="flex items-center gap-2">
        <img
        src="https://randomuser.me/api/portraits/men/32.jpg" // Replace with actual image
        alt="Author"
        className="w-[48px] h-[48px] rounded-full object-cover"
        />
        <div>
        <p className="text-sm font-semibold text-[#1E1E1E]">Ron Ashkenas</p>
        <p className="text-xs text-[#707070]">January 22, 2025</p>
        </div>
    </div>
    {/* Right: Comment Count */}
    <div className="flex items-center gap-1 text-gray-500 text-sm">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1_2449)">
            <path d="M8.00033 15.3332C7.82351 15.3332 7.65394 15.2629 7.52892 15.1379C7.4039 15.0129 7.33366 14.8433 7.33366 14.6665V12.6665H4.66699C4.31337 12.6665 3.97423 12.526 3.72418 12.276C3.47413 12.0259 3.33366 11.6868 3.33366 11.3332V4.6665C3.33366 4.31288 3.47413 3.97374 3.72418 3.72369C3.97423 3.47365 4.31337 3.33317 4.66699 3.33317H14.0003C14.3539 3.33317 14.6931 3.47365 14.9431 3.72369C15.1932 3.97374 15.3337 4.31288 15.3337 4.6665V11.3332C15.3337 11.6868 15.1932 12.0259 14.9431 12.276C14.6931 12.526 14.3539 12.6665 14.0003 12.6665H11.267L8.80032 15.1398C8.66699 15.2665 8.50033 15.3332 8.33366 15.3332H8.00033ZM8.66699 11.3332V13.3865L10.7203 11.3332H14.0003V4.6665H4.66699V11.3332H8.66699ZM2.00033 9.99984H0.666992V1.99984C0.666992 1.64622 0.807468 1.30708 1.05752 1.05703C1.30756 0.80698 1.6467 0.666504 2.00033 0.666504H12.667V1.99984H2.00033V9.99984Z" fill="#707070"/>
            </g>
            <defs>
            <clipPath id="clip0_1_2449">
            <rect width="16" height="16" fill="white"/>
            </clipPath>
            </defs>
            </svg>
        <span>0</span>
    </div>
</div>
<div className='flex' data-aos="zoom-in" data-aos-duration="2000">
    <Image
src={DetailImage}
alt="Tech Image"
className="rounded-lg  w-full"
/>
</div>

{/* Blog Content */}
<div className="flex flex-col gap-6 border-b border-[#D1D1D1] pb-[40px]">
<p className='text-[#1E1E1E] text-[16px] font-normal'>
    As we explore opportunities in the tech and cybersecurity fields, it’s important to consider 
    how scholarships can support your education. Scholarships aren’t just a financial aid tool; they 
    are a strategic way to maximize the time value of your investment in education and accelerate your
    path to a rewarding career.
</p>
<h2 className='text-[#1E1E1E] text-[18px] font-semibold'>Why Scholarships Matter</h2>
<p className='text-[#1E1E1E] text-[16px] font-normal'>
    Education in technology and cybersecurity is an investment of both time and money. Scholarships
        can alleviate financial burdens, allowing you to focus on developing the skills and knowledge 
        necessary for a successful career. Programs like the PG&E Better Together STEM Scholarships, 
        offering up to $10,000, directly address the rising cost of education. By reducing the financial 
        strain, scholarships allow you to prioritize your studies and professional development rather than
        worrying about mounting student debt.
</p>
<p className='text-[#1E1E1E] text-[16px] font-normal'>
    Other programs, such as the Mastercard Vancouver Scholarship, go even further by integrating
        work experience through internships. These opportunities provide funding and practical,
        real-world experience, adding to your experience with Skills 2 Evolve and positioning you 
        to enter the workforce with more knowledge and hands-on experience.
</p>
<h2 className='text-[#1E1E1E] text-[18px] font-semibold'>
    Accelerating Workforce Readiness
</h2>
<p className='text-[#1E1E1E] text-[16px] font-normal'>
    Scholarships in technology often go beyond financial support to help build pipelines 
    of skilled professionals in high-demand fields. For example, 
    the Vectra AI scholarship program, in partnership with Baidam Solutions, focuses on developing
        talent in AI and cybersecurity while addressing the lack of diversity in these fields.
</p>
<p className='text-[#1E1E1E] text-[16px] font-normal'>
    Similarly, the National Science Foundation’s $15 million investment in cybersecurity programs 
    at multiple universities creates opportunities for women, BIPOC students, and other 
    underrepresented groups. By combining financial aid with specialized education, these 
    scholarships empower individuals to succeed in critical industries and diversify the workforce.
</p>
<h2 className='text-[#1E1E1E] text-[18px] font-semibold'>
    The Time Value of Money
</h2>
<p className='text-[#1E1E1E] text-[16px] font-normal'>
    When considering your education, the concept of the time value of money cannot be ignored. Every dollar saved through scholarships is a dollar that doesn’t accrue interest as student debt. This means you can graduate with less financial stress and more freedom to pursue opportunities, even if they aren’t immediately lucrative.
</p>
<p className='text-[#1E1E1E] text-[16px] font-normal'>
    Scholarships also save time by integrating educational funding with career readiness. For example, programs like the Mastercard Vancouver Scholarship include paid internships and research initiatives, allowing students to graduate with a competitive edge in the job market. These opportunities reduce the gap between education and employment, accelerating your ability to earn and grow.
</p>
<h2 className='text-[#1E1E1E] text-[18px] font-semibold'>
    Maximizing Scholarship Opportunities
</h2>
To make the most of these opportunities, it’s essential to approach scholarships with a strategic mindset:
<ul className='list-decimal ml-5 text-[#1E1E1E] text-[16px] font-normal'>
    <li><strong>Plan Ahead:</strong>Many scholarships, like PG&E’s, have early deadlines. Start preparing your application materials well in advance to ensure you don’t miss out.</li>
    <li><strong>Research Specific Programs:</strong>   Scholarships tailored to specific industries, such as Vectra AI’s focus on cybersecurity, can be less competitive and more aligned with your career goals</li>
    <li><strong>Personalize Your Applications:</strong>  Highlight your unique story, including the challenges you’ve overcome and your aspirations. A strong, tailored application can set you apart from other candidates.</li>
</ul>

<h2 className='text-[#1E1E1E] text-[18px] font-semibold'>Conclusion: A Strategic Investment in Your Future</h2>
<p className='text-[#1E1E1E] text-[16px] font-normal'>
    While college may not be the right path for everyone, if it’s part of your journey, scholarships are a critical tool for optimizing your educational investment. By reducing costs, accelerating career readiness, and opening doors to new opportunities, scholarships ensure your education is not only a personal achievement but a smart financial decision.
</p>
<p className='text-[#1E1E1E] text-[16px] font-normal'>
    Don’t wait! Begin exploring scholarship opportunities today and take control of your future in technology. The time and effort you invest now will yield dividends for years to come.
</p>
</div>
{/* share col */}
<div className='flex gap-2 justify-between items-center border-b border-[#D1D1D1] pb-[40px] flex-wrap'>
    <div className='flex flex-wrap gap-2'>
        <h2 className='text-[#1E1E1E] text-[16px]'>Categories:</h2>
        <ul className='flex text-[#1B5795] text-[16px] flex-wrap' >
            <li><Link href={"/"} >Academic experience</Link>,</li>
            <li><Link href={"/"}>General</Link>,</li>
            <li><Link href={"/"}>Technology development ecosystem awareness</Link></li>
        </ul>
    </div>
    <div >
         <ul className='flex gap-3 items-center '>
            <li><Link href={"/"}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1_2464)">
                <path d="M7.99935 15.3337C7.82254 15.3337 7.65297 15.2634 7.52794 15.1384C7.40292 15.0134 7.33268 14.8438 7.33268 14.667V12.667H4.66602C4.31239 12.667 3.97325 12.5265 3.72321 12.2765C3.47316 12.0264 3.33268 11.6873 3.33268 11.3337V4.66699C3.33268 4.31337 3.47316 3.97423 3.72321 3.72418C3.97325 3.47413 4.31239 3.33366 4.66602 3.33366H13.9993C14.353 3.33366 14.6921 3.47413 14.9422 3.72418C15.1922 3.97423 15.3327 4.31337 15.3327 4.66699V11.3337C15.3327 11.6873 15.1922 12.0264 14.9422 12.2765C14.6921 12.5265 14.353 12.667 13.9993 12.667H11.266L8.79935 15.1403C8.66602 15.267 8.49935 15.3337 8.33268 15.3337H7.99935ZM8.66602 11.3337V13.387L10.7193 11.3337H13.9993V4.66699H4.66602V11.3337H8.66602ZM1.99935 10.0003H0.666016V2.00033C0.666016 1.6467 0.806491 1.30756 1.05654 1.05752C1.30659 0.807468 1.64573 0.666992 1.99935 0.666992H12.666V2.00033H1.99935V10.0003Z" fill="#707070"/>
                </g>
                <defs>
                <clipPath id="clip0_1_2464">
                <rect width="16" height="16" fill="white"/>
                </clipPath>
                </defs>
                </svg>

            </Link></li>
            <li><Link href={"/"}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.74648 11.3485L5.94714 9.82181C5.58168 10.2125 5.10713 10.4843 4.58519 10.6017C4.06325 10.7192 3.51804 10.677 3.02043 10.4805C2.52281 10.284 2.09579 9.94245 1.79486 9.50011C1.49393 9.05777 1.33301 8.53514 1.33301 8.00014C1.33301 7.46515 1.49393 6.94252 1.79486 6.50018C2.09579 6.05784 2.52281 5.71625 3.02043 5.51979C3.51804 5.32333 4.06325 5.28109 4.58519 5.39855C5.10713 5.51602 5.58168 5.78777 5.94714 6.17848L8.74714 4.65181C8.58842 4.02245 8.66467 3.35681 8.96162 2.77966C9.25858 2.2025 9.75583 1.75347 10.3602 1.51672C10.9645 1.27998 11.6345 1.27178 12.2444 1.49366C12.8544 1.71554 13.3625 2.15228 13.6735 2.72199C13.9845 3.2917 14.077 3.95528 13.9337 4.58833C13.7904 5.22139 13.4212 5.78045 12.8952 6.16073C12.3692 6.541 11.7226 6.71638 11.0765 6.65399C10.4304 6.5916 9.82932 6.29572 9.38581 5.82181L6.58581 7.34848C6.6935 7.77602 6.6935 8.2236 6.58581 8.65115L9.38581 10.1778C9.82955 9.70414 10.4308 9.40856 11.0769 9.34648C11.723 9.28441 12.3695 9.46009 12.8953 9.84061C13.4211 10.2211 13.7901 10.7803 13.9331 11.4134C14.0761 12.0466 13.9832 12.7101 13.672 13.2796C13.3608 13.8492 12.8525 14.2857 12.2425 14.5073C11.6324 14.7289 10.9625 14.7205 10.3583 14.4835C9.75402 14.2465 9.25695 13.7973 8.96023 13.22C8.66351 12.6428 8.58751 11.9771 8.74648 11.3478M3.99981 9.33315C4.35343 9.33315 4.69257 9.19267 4.94262 8.94262C5.19267 8.69257 5.33314 8.35343 5.33314 7.99981C5.33314 7.64619 5.19267 7.30705 4.94262 7.057C4.69257 6.80695 4.35343 6.66648 3.99981 6.66648C3.64619 6.66648 3.30705 6.80695 3.057 7.057C2.80695 7.30705 2.66648 7.64619 2.66648 7.99981C2.66648 8.35343 2.80695 8.69257 3.057 8.94262C3.30705 9.19267 3.64619 9.33315 3.99981 9.33315ZM11.3331 5.33315C11.6868 5.33315 12.0259 5.19267 12.276 4.94262C12.526 4.69257 12.6665 4.35343 12.6665 3.99981C12.6665 3.64619 12.526 3.30705 12.276 3.057C12.0259 2.80695 11.6868 2.66648 11.3331 2.66648C10.9795 2.66648 10.6404 2.80695 10.3903 3.057C10.1403 3.30705 9.99981 3.64619 9.99981 3.99981C9.99981 4.35343 10.1403 4.69257 10.3903 4.94262C10.6404 5.19267 10.9795 5.33315 11.3331 5.33315ZM11.3331 13.3331C11.6868 13.3331 12.0259 13.1927 12.276 12.9426C12.526 12.6926 12.6665 12.3534 12.6665 11.9998C12.6665 11.6462 12.526 11.3071 12.276 11.057C12.0259 10.807 11.6868 10.6665 11.3331 10.6665C10.9795 10.6665 10.6404 10.807 10.3903 11.057C10.1403 11.3071 9.99981 11.6462 9.99981 11.9998C9.99981 12.3534 10.1403 12.6926 10.3903 12.9426C10.6404 13.1927 10.9795 13.3331 11.3331 13.3331Z" fill="#707070"/>
                </svg>

            </Link></li>
        </ul>
    </div>
</div>

{/* Related Posts */}
<div className="md:mt-10 mt-6 border-b border-[#D1D1D1] pb-[40px]">
<h3 className="text-[#1E1E1E] text-[18px] font-semibold mb-6">Related Articles</h3>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
    <div data-aos="zoom-in" data-aos-duration="1500" className="bg-white  rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all ease-in-out duration-500 ">
        <div className='flex'>
            <Image
           src={RelatedImage}
           className=" w-full h-full"
           alt="Post 1"
         />
        </div>
       <div className='p-[15px]'>
          <h4 className='text-[#1E1E1E] text-[18px] font-semibold mb-3'>Exploit: Breaches and the Data Insights they Offer</h4>
          <p className='text-[#707070] text-[14px] font-normal mb-3'>
           The development of the Internet and the interconnectivity of the world go hand in hand
            with the advancement of the exploitations of computers. As the…
          </p>
          <div className="flex items-center justify-between w-full">
            {/* Left: Author Info */}
            <div className="flex items-center gap-2">
                <img
                src="https://randomuser.me/api/portraits/men/32.jpg" // Replace with actual image
                alt="Author"
                className="w-[48px] h-[48px] rounded-full object-cover"
                />
                <div>
                <p className="text-sm font-semibold text-[#1E1E1E]">Ron Ashkenas</p>
                <p className="text-xs text-[#707070]">January 22, 2025</p>
                </div>
            </div>
            {/* Right: Comment Count */}
            <div className="flex items-center gap-1 text-gray-500 text-sm">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_1_2449)">
                    <path d="M8.00033 15.3332C7.82351 15.3332 7.65394 15.2629 7.52892 15.1379C7.4039 15.0129 7.33366 14.8433 7.33366 14.6665V12.6665H4.66699C4.31337 12.6665 3.97423 12.526 3.72418 12.276C3.47413 12.0259 3.33366 11.6868 3.33366 11.3332V4.6665C3.33366 4.31288 3.47413 3.97374 3.72418 3.72369C3.97423 3.47365 4.31337 3.33317 4.66699 3.33317H14.0003C14.3539 3.33317 14.6931 3.47365 14.9431 3.72369C15.1932 3.97374 15.3337 4.31288 15.3337 4.6665V11.3332C15.3337 11.6868 15.1932 12.0259 14.9431 12.276C14.6931 12.526 14.3539 12.6665 14.0003 12.6665H11.267L8.80032 15.1398C8.66699 15.2665 8.50033 15.3332 8.33366 15.3332H8.00033ZM8.66699 11.3332V13.3865L10.7203 11.3332H14.0003V4.6665H4.66699V11.3332H8.66699ZM2.00033 9.99984H0.666992V1.99984C0.666992 1.64622 0.807468 1.30708 1.05752 1.05703C1.30756 0.80698 1.6467 0.666504 2.00033 0.666504H12.667V1.99984H2.00033V9.99984Z" fill="#707070"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_1_2449">
                    <rect width="16" height="16" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
                <span>0</span>
            </div>
          </div>  
       </div>
    </div>

     <div data-aos="zoom-in" data-aos-duration="1500" className="bg-white  rounded-xl shadow-lg overflow-hidden  hover:shadow-2xl transition-all ease-in-out duration-500">
        <div className='flex'>
            <Image
           src={RelatedImage}
           className=" w-full h-full"
           alt="Post 1"
         />
        </div>
       <div className='p-[15px]'>
          <h4 className='text-[#1E1E1E] text-[18px] font-semibold mb-3'>Exploit: Breaches and the Data Insights they Offer</h4>
          <p className='text-[#707070] text-[14px] font-normal mb-3'>
           The development of the Internet and the interconnectivity of the world go hand in hand
            with the advancement of the exploitations of computers. As the…
          </p>
          <div className="flex items-center justify-between w-full">
            {/* Left: Author Info */}
            <div className="flex items-center gap-2">
                <img
                src="https://randomuser.me/api/portraits/men/32.jpg" // Replace with actual image
                alt="Author"
                className="w-[48px] h-[48px] rounded-full object-cover"
                />
                <div>
                <p className="text-sm font-semibold text-[#1E1E1E]">Ron Ashkenas</p>
                <p className="text-xs text-[#707070]">January 22, 2025</p>
                </div>
            </div>
            {/* Right: Comment Count */}
            <div className="flex items-center gap-1 text-gray-500 text-sm">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_1_2449)">
                    <path d="M8.00033 15.3332C7.82351 15.3332 7.65394 15.2629 7.52892 15.1379C7.4039 15.0129 7.33366 14.8433 7.33366 14.6665V12.6665H4.66699C4.31337 12.6665 3.97423 12.526 3.72418 12.276C3.47413 12.0259 3.33366 11.6868 3.33366 11.3332V4.6665C3.33366 4.31288 3.47413 3.97374 3.72418 3.72369C3.97423 3.47365 4.31337 3.33317 4.66699 3.33317H14.0003C14.3539 3.33317 14.6931 3.47365 14.9431 3.72369C15.1932 3.97374 15.3337 4.31288 15.3337 4.6665V11.3332C15.3337 11.6868 15.1932 12.0259 14.9431 12.276C14.6931 12.526 14.3539 12.6665 14.0003 12.6665H11.267L8.80032 15.1398C8.66699 15.2665 8.50033 15.3332 8.33366 15.3332H8.00033ZM8.66699 11.3332V13.3865L10.7203 11.3332H14.0003V4.6665H4.66699V11.3332H8.66699ZM2.00033 9.99984H0.666992V1.99984C0.666992 1.64622 0.807468 1.30708 1.05752 1.05703C1.30756 0.80698 1.6467 0.666504 2.00033 0.666504H12.667V1.99984H2.00033V9.99984Z" fill="#707070"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_1_2449">
                    <rect width="16" height="16" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
                <span>0</span>
            </div>
          </div>  
       </div>
    </div>
</div>
</div>

{/* form  */}
<div>
    <h2 className="text-[#1E1E1E] text-[18px] font-semibold mb-6">Responses</h2>
      <div className="md:p-[30px] p-[15px]  border border-[#D6D6D6] rounded-xl bg-white shadow">
      
      <p className="text-[#707070] text-[16px] font-normal mb-6">
        Your email address will not be published. Required fields are marked *
      </p>

      <textarea
        placeholder="Write a response..."
        className="text-[#707070] text-[16px] font-normal w-full h-[147px] p-3 border border-[#D6D6D6] rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-[#1B5795] mb-6"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        <div>
            <label className='flex mb-[10px] text-[16px] font-normal text-[#1E1E1E]'>Name</label>
          <input
            type="text"
          placeholder=""
          className="text-[#707070] text-[16px] font-normal w-full p-3 border border-[#D6D6D6] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1B5795]"
         />
        </div>
        <div>
            <label className='flex mb-[10px] text-[16px] font-normal text-[#1E1E1E]'>Email</label>
              <input
          type="email"
          placeholder=""
          className="text-[#707070] text-[16px] font-normal w-full p-3 border border-[#D6D6D6] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1B5795]"
        />
        </div>
        <div>
          <label className='flex mb-[10px] text-[16px] font-normal text-[#1E1E1E]'>Website</label>
          <input
          type="url"
          placeholder=""
          className="text-[#707070] text-[16px] font-normal w-full p-3 border border-[#D6D6D6] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1B5795]"
          />
        </div>
      </div>

      <div className="flex items-center space-x-2 mb-6">
        <input type="checkbox" id="save-info" className="w-4 h-4" />
        <label htmlFor="save-info" className="text-sm text-gray-600">
          Save my name, email, and website in this browser for the next time I comment.
        </label>
      </div>

      <button className="bg-[#1B5795] hover:bg-[#FB971B] text-white text-4 px-[39px] py-[10px] rounded-md font-medium ml-auto flex">
        Publish
      </button>
    </div>
</div>


</div>

{/* Sidebar */}
<div className="md:max-w-[242px]  w-full flex md:flex-col gap-6 md:flex-nowrap flex-wrap sticky top-0 h-fit">
{/* Search Box */}
<div data-aos="zoom-in" data-aos-duration="2000" className="bg-white p-3 rounded-lg shadow-sm hover:shadow-2xl transition-all ease-in-out duration-500 w-full">
<h3 className="font-semibold text-[#1E1E1E] text-[18px] mb-5">Search</h3>
<div className="flex justify-between gap-1">
    <div className="relative w-full md:max-w-xs">
            <input
                type="text"
                placeholder="Search"
                className="w-full pl-8 pr-2 py-2 border border-[#D6D6D6] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1B5795]"
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                <svg
                width="16"  height="16"  viewBox="0 0 14 14"  fill="none" xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    d="M10.3333 10.1709L13 12.8354M1 6.17418C1 7.58751 1.5619 8.94295 2.5621 9.94233C3.56229 10.9417 4.91885 11.5031 6.33333 11.5031C7.74782 11.5031 9.10438 10.9417 10.1046 9.94233C11.1048 8.94295 11.6667 7.58751 11.6667 6.17418C11.6667 4.76085 11.1048 3.40541 10.1046 2.40603C9.10438 1.40666 7.74782 0.845215 6.33333 0.845215C4.91885 0.845215 3.56229 1.40666 2.5621 2.40603C1.5619 3.40541 1 4.76085 1 6.17418Z"
                    stroke="#707070" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                />
                </svg>
            </div>
            </div>
    <Link href={"/"} className="bg-[#1B5795] text-white px-4 py-2 rounded-md hover:bg-[#FB971B] transition-all ease-in-out duration-500">
        signup
    </Link>
</div>
</div>
{/* Recent Posts */}
<div data-aos="zoom-in" data-aos-duration="2000" className='bg-white shadow-sm p-3 rounded-lg hover:shadow-2xl transition-all ease-in-out duration-500 w-full'>
    <h3 className="font-semibold text-[#1E1E1E] text-[18px] mb-5">Recent Posts</h3>
    <ul className="flex flex-col gap-3 text-sm text-[#1E1E1E] text-[14px] font-normal">
    <li>Scholarships in Technology: Maximizing Your Educational Investment</li>
    <li>Worms in the Wild: Real-World Examples and Their Consequences</li>
    <li>Largest Healthcare Data Breaches: Is Your Data Safe from Attack?</li>
    <li>Data Breach Breakdown: What You Need to Know</li>
    <li>Ransomware Exploits: Case Studies and How to Protect Yourself</li>
    </ul>
</div>
{/* Categories */}
<div data-aos="zoom-in" data-aos-duration="2000" className='bg-white shadow-sm p-3 rounded-lg hover:shadow-2xl transition-all ease-in-out duration-500 w-full'>
    <h3 className="font-semibold text-[#1E1E1E] text-[18px] mb-5">Categories</h3>
    <ul className="flex flex-col gap-3 text-[#1E1E1E] text-[14px] font-normal">
    <li><a className='transition-all ease-in-out duration-300 hover:text-[#1B5795]' href="#" >Academic experience</a></li>
    <li><a className='transition-all ease-in-out duration-300 hover:text-[#1B5795]' href="#">Cybersecurity tips</a></li>
    <li><a className='transition-all ease-in-out duration-300 hover:text-[#1B5795]' href="#">General</a></li>
    <li><a className='transition-all ease-in-out duration-300 hover:text-[#1B5795]' href="#">Getting started with tech</a></li>
    <li><a className='transition-all ease-in-out duration-300 hover:text-[#1B5795]' href="#">Learning & domain experience</a></li>
    <li><a className='transition-all ease-in-out duration-300 hover:text-[#1B5795]' href="#">Technology development ecosystem awareness</a></li>
    <li><a className='transition-all ease-in-out duration-300 hover:text-[#1B5795]' href="#">Uncategorized</a></li>
    </ul>
</div>
</div>

</div>
</div>
);
}
