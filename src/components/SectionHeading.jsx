import React from 'react';

const SectionHeading = ({ title, subtitle, id }) => {
  return (
    <div className="mb-16 flex flex-col items-center justify-center text-center relative w-full group animate-fade-up" id={id}>
      {/* Decorative background glow for the heading */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-16 bg-purple-500/20 blur-[40px] -z-10 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
      
      {subtitle && (
        <div className="inline-flex items-center justify-center px-5 py-1.5 mb-5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-lg transform group-hover:-translate-y-1 transition-all duration-300">
           <span className="w-2 h-2 rounded-full bg-pink-500 mr-3 animate-pulse"></span>
           <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 text-sm font-bold tracking-[0.2em] uppercase">
             {subtitle}
           </span>
           <span className="w-2 h-2 rounded-full bg-emerald-400 ml-3 animate-pulse" style={{ animationDelay: '1s' }}></span>
        </div>
      )}
      
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-gray-400 drop-shadow-lg mb-6">
        {title}
      </h2>
      
      {/* Decorative underline */}
      <div className="flex items-center justify-center gap-2 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-12 h-1 bg-gradient-to-r from-transparent to-purple-500 rounded-full group-hover:w-20 transition-all duration-500"></div>
        <div className="w-3 h-1 bg-pink-500 rounded-full animate-pulse"></div>
        <div className="w-12 h-1 bg-gradient-to-l from-transparent to-blue-500 rounded-full group-hover:w-20 transition-all duration-500"></div>
      </div>
    </div>
  );
};

export default SectionHeading;
