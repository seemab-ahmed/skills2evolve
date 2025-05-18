import React from 'react';

export default function contactform({ heading = "Sign in" }) {
  return (
    <div className='md:pt-[140px] pb-[40px] md:pb-[70px] pt-[100px]'>
        <div className="bg-[#F7F7F7] max-w-[686px] m-auto rounded-[12px] py-[50px] px-5">
        <div className=" max-w-[508px] m-auto">
            <h2 className="text-center text-2xl font-normal text-[#000365] mb-[30px]">
            {heading} <span className="text-[#FB971B] font-semibold">Skills 2 Evolve</span>
            </h2>
        
            <div>
                <form className="mb-[32px]">
                <div className='mb-[14px]'>
                    <label htmlFor="email" className="text-[#000000] text-[14px] leading-[20px] font-medium mb-1 ">Email</label>
                    <input
                    type="email"
                    id="email"
                    placeholder="Enter your email address"
                    className="text-[#606060] text-[14px] leading-[20px] font-normal  bg-[#F4F4F4] w-full px-[12px] py-[10px] border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DEDEDE]"
                    />
                </div>

                <div className='mb-[21px]'>
                    <label htmlFor="password" className="text-[#000000] text-[14px] leading-[20px] font-medium mb-1 ">Password</label>
                    <input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    className="text-[#606060] text-[14px] leading-[20px] font-normal bg-[#F4F4F4]  w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DEDEDE]"
                    />
                </div>

                <button
                    type="submit"
                    className="mb-4 text-[16px] leading-[24px] font-medium w-full bg-[#1B5795] text-white py-2 rounded-lg hover:bg-blue-800 transition-all ease-in-out duration-500"
                >
                    Submit
                </button>

                <div className="text-center text-[#707070] text-[14px] leading-[20px] font-medium  cursor-pointer hover:underline">
                    Forgot password?
                </div>
                </form>

                <div className="mb-[30px] flex items-center gap-[13px]">
                    <hr className="flex-grow border-[#707070]" />
                    <span className="text-[16px] leading-[24px] font-normal ">or</span>
                    <hr className="flex-grow border-[#707070]" />
                </div>

                <div className="flex flex-col gap-4 mb-[38px]">
                    <button className=" text-[14px] leading-[20px] font-normal w-full flex items-center justify-center gap-2 border border-[#D1D5DB] bg-[#FFFFFF] rounded-lg py-3 px-7 hover:bg-gray-50 transition-all ease-in-out duration-500">
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.2509 10.6941C19.2509 9.97471 19.1913 9.44971 19.0624 8.90527H10.6794V12.1525H15.6C15.5009 12.9594 14.9652 14.1747 13.7747 14.9913L13.758 15.1L16.4085 17.1123L16.5921 17.1303C18.2786 15.6039 19.2509 13.358 19.2509 10.6941Z" fill="#4285F4"/>
                        <path d="M10.6789 19.25C13.0896 19.25 15.1133 18.4722 16.5915 17.1305L13.7741 14.9916C13.0201 15.5068 12.0082 15.8666 10.6789 15.8666C8.31779 15.8666 6.31385 14.3402 5.5995 12.2305L5.49479 12.2392L2.73874 14.3295L2.7027 14.4277C4.17093 17.286 7.1868 19.25 10.6789 19.25Z" fill="#34A853"/>
                        <path d="M5.60002 12.2307C5.41153 11.6863 5.30245 11.1029 5.30245 10.5002C5.30245 9.89735 5.41153 9.31403 5.5901 8.7696L5.58511 8.65365L2.79451 6.52979L2.70321 6.57235C2.09808 7.75847 1.75085 9.09044 1.75085 10.5002C1.75085 11.9099 2.09808 13.2418 2.70321 14.4279L5.60002 12.2307Z" fill="#FBBC05"/>
                        <path d="M10.6789 5.13331C12.3555 5.13331 13.4864 5.84303 14.1313 6.43613L16.6511 4.025C15.1035 2.61528 13.0896 1.75 10.6789 1.75C7.18682 1.75 4.17094 3.71387 2.7027 6.57218L5.5896 8.76944C6.31387 6.65972 8.31782 5.13331 10.6789 5.13331Z" fill="#EB4335"/>
                        </svg>
                        Continue with Google
                    </button>

                    <button className="text-[14px] leading-[20px] font-normal w-full flex items-center justify-center gap-2 border border-[#D1D5DB] bg-[#FFFFFF] rounded-lg py-3 px-7 hover:bg-gray-50 transition-all ease-in-out duration-500">
                       <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_212_1159)">
                        <path d="M18.125 0.968822H1.875C1.5063 0.96507 1.15117 1.10774 0.887529 1.36551C0.623892 1.62329 0.473283 1.97513 0.46875 2.34382V18.6594C0.474103 19.0276 0.625072 19.3786 0.88862 19.6357C1.15217 19.8928 1.50683 20.0351 1.875 20.0313H18.125C18.4937 20.0342 18.8486 19.8911 19.1121 19.6332C19.3756 19.3752 19.5263 19.0235 19.5312 18.6548V2.33913C19.5247 1.97152 19.3733 1.62136 19.1099 1.36477C18.8466 1.10817 18.4927 0.965881 18.125 0.968822Z" fill="#0076B2"/>
                        <path d="M3.29061 8.11426H6.1203V17.2189H3.29061V8.11426ZM4.70624 3.58301C5.03079 3.58301 5.34805 3.67927 5.61788 3.85961C5.88772 4.03996 6.098 4.29628 6.22213 4.59615C6.34626 4.89603 6.37865 5.22599 6.31522 5.54428C6.25179 5.86257 6.09538 6.1549 5.86578 6.38428C5.63618 6.61367 5.3437 6.7698 5.02535 6.83292C4.707 6.89605 4.37707 6.86334 4.07732 6.73892C3.77756 6.61451 3.52143 6.40398 3.34135 6.13398C3.16126 5.86397 3.0653 5.54662 3.06561 5.22207C3.06603 4.78722 3.23906 4.37032 3.54669 4.06298C3.85433 3.75564 4.27139 3.58301 4.70624 3.58301ZM7.8953 8.11426H10.6078V9.36426H10.6453C11.0234 8.64863 11.9453 7.89395 13.3219 7.89395C16.1875 7.8877 16.7187 9.77363 16.7187 12.2189V17.2189H13.8891V12.7893C13.8891 11.7346 13.8703 10.3768 12.4187 10.3768C10.9672 10.3768 10.7203 11.5268 10.7203 12.7205V17.2189H7.8953V8.11426Z" fill="white"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_212_1159">
                        <rect width="20" height="20" fill="white" transform="translate(0 0.5)"/>
                        </clipPath>
                        </defs>
                        </svg>

                        Continue with LinkedIn
                    </button>

                    <button className="text-[14px] leading-[20px] font-normal w-full flex items-center justify-center gap-2 border border-[#D1D5DB] bg-[#FFFFFF] rounded-lg py-3 px-7 hover:bg-gray-50 transition-all ease-in-out duration-500">
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_212_1164)">
                        <path d="M10.5 0.5C4.975 0.5 0.5 4.975 0.5 10.5C0.5 14.925 3.3625 18.6625 7.3375 19.9875C7.8375 20.075 8.025 19.775 8.025 19.5125C8.025 19.275 8.0125 18.4875 8.0125 17.65C5.5 18.1125 4.85 17.0375 4.65 16.475C4.5375 16.1875 4.05 15.3 3.625 15.0625C3.275 14.875 2.775 14.4125 3.6125 14.4C4.4 14.3875 4.9625 15.125 5.15 15.425C6.05 16.9375 7.4875 16.5125 8.0625 16.25C8.15 15.6 8.4125 15.1625 8.7 14.9125C6.475 14.6625 4.15 13.8 4.15 9.975C4.15 8.8875 4.5375 7.9875 5.175 7.2875C5.075 7.0375 4.725 6.0125 5.275 4.6375C5.275 4.6375 6.1125 4.375 8.025 5.6625C8.825 5.4375 9.675 5.325 10.525 5.325C11.375 5.325 12.225 5.4375 13.025 5.6625C14.9375 4.3625 15.775 4.6375 15.775 4.6375C16.325 6.0125 15.975 7.0375 15.875 7.2875C16.5125 7.9875 16.9 8.875 16.9 9.975C16.9 13.8125 14.5625 14.6625 12.3375 14.9125C12.7 15.225 13.0125 15.825 13.0125 16.7625C13.0125 18.1 13 19.175 13 19.5125C13 19.775 13.1875 20.0875 13.6875 19.9875C15.673 19.3178 17.3983 18.0421 18.6205 16.34C19.8427 14.638 20.5 12.5954 20.5 10.5C20.5 4.975 16.025 0.5 10.5 0.5Z" fill="black"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_212_1164">
                        <rect width="20" height="20" fill="white" transform="translate(0.5 0.5)"/>
                        </clipPath>
                        </defs>
                        </svg>

                        Continue with Github
                    </button>
                </div>

                <div className=" text-center text-[16px] text-[#1E1E1E] leading-[24px] font-normal">
                  Already have an account?{" "}
                 <a href="#" className="text-[#1B5795] underline">Sign In</a>
                </div>
            </div>
        </div>
        </div>
    </div>
  );
}
