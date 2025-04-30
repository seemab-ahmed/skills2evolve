const Banner = () => {
    return (
      <div className="relative bg-gray-900 py-12 px-6 md:py-16 md:px-12 overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">
            Skills2Evolve Blog
          </h1>
          <p className="text-white text-lg md:text-xl">
            Insights, guides and best practices to <span className="font-medium">Learn</span> . <span className="font-medium">Evolve</span> . <span className="font-medium">Secure</span> your future
          </p>
        </div>
        
        {/* Background gradient overlay */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{ 
            background: 'linear-gradient(135deg, #022c43 0%, #053f5e 50%, #115173 100%)',
            backgroundSize: '200% 200%',
          }}
        />
        
        {/* S2E large background logo */}
        <div className="absolute right-0 top-0 w-full h-full flex justify-end items-center opacity-10">
          <div className="text-white text-[20rem] font-bold">S2E</div>
        </div>
      </div>
    );
  };
  
  export default Banner;