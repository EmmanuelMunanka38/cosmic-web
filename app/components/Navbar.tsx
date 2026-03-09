import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-slate-100 dark:border-white/5 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-14 md:h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 md:gap-3">
          <img 
            src="/cosmic-logo.jpeg" 
            alt="Cosmic" 
            className="w-8 md:w-9 h-8 md:h-9 object-contain rounded-lg md:rounded-xl"
          />
          <div className="flex flex-col">
            <span className="text-slate-900 dark:text-white font-black text-lg md:text-xl leading-none tracking-tight">COSMIC</span>
            <span className="text-[8px] md:text-[10px] text-blue-600 font-bold tracking-widest uppercase">Tanzania</span>
          </div>
        </div>
        
        <button className="bg-blue-600 text-white px-4 md:px-6 py-1.5 md:py-2 rounded-full font-bold hover:bg-blue-700 transition-all active:scale-95 text-xs md:text-sm">
          Launch App
        </button>
      </div>
    </nav>
  );
}
