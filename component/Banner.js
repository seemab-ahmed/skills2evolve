const Banner = () => {
    return (
      <div className="mt-[100px]">
        <div className="max-w-[1080px]  m-auto">
          <div className=" relative bg-gray-900  px-[20px] py-5 md:px-[50px] overflow-hidden rounded-[4px]">
            <div className="relative z-10 max-w-5xl mx-auto">
              <h1 className="leading-[44px] text-[32px] md:text- font-semibold text-[#FB971B] mb-1">
                Skills2Evolve <span className="text-white">Blog</span>
              </h1>
              <p className="text-white  md:text-[16px]">
                Insights, guides and best practices to <span className="font-semibold">Learn</span> . <span className="font-semibold">Evolve</span> . <span className="font-semibold">Secure your future</span> 
              </p>
            </div>
            
            {/* Background gradient overlay */}
            <div  className="absolute bg-[#242F3B] " />
              <div className="absolute lg:right-30 right-5 top-0 w-full h-full flex justify-end items-center">
                <svg width="405" height="116" viewBox="0 0 405 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.12" fillRule="evenodd" clipRule="evenodd" d="M0 13.6C0 -2.74763 13.1873 -16 29.4545 -16H81V13.6H29.4545V39.5H92.0455C108.313 39.5 121.5 52.7524 121.5 69.1V102.4C121.5 118.748 108.313 132 92.0455 132H14.7273V102.4H92.0455V69.1H29.4545C13.1873 69.1 0 55.8476 0 39.5V13.6ZM239.318 13.6H95.7273V-16H239.318C255.585 -16 268.773 -2.74762 268.773 13.6V39.5C268.773 55.8476 255.585 69.1 239.318 69.1H169.364V98.7H305.591V128.3H139.909V69.1C139.909 52.7524 153.096 39.5 169.364 39.5H239.318V13.6ZM405 17.3H279.818V-12.3H405V17.3ZM405 69.1H279.818V39.5H405V69.1ZM401.318 128.3H324V98.7H401.318V128.3Z" fill="white"/>
                  </svg>
              </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Banner;