import React from 'react';

export default function MissionStatement() {
  return (
    <section className="py-24 px-6 flex justify-center bg-white dark:bg-slate-950 transition-colors">
      {/* The Modern Island with Purple-Blue Gradient */}
      <div className="max-w-5xl w-full relative rounded-[2rem] p-12 md:p-24 bg-gradient-to-br from-indigo-600 via-blue-600 to-purple-600 overflow-hidden shadow-2xl shadow-indigo-500/20 transition-all">
        
        {/* Animated Background Orbs for Depth */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-white/10 blur-[80px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-purple-400/20 blur-[100px] rounded-full" />
        
        {/* Glassmorphism Overlay Layer */}
        <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px]" />

        {/* Content */}
        <div className="relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-[10px] font-bold uppercase tracking-[0.4em] mb-10">
            <span className="w-2 h-2 bg-purple-300 rounded-full animate-ping" />
            The Cosmic Vision
          </div>
          
          <h2 className="text-4xl md:text-7xl font-black text-white leading-[0.95] tracking-tighter mb-10 max-w-4xl mx-auto">
            TUNAWEZESHA UCHUMI <br className="hidden md:block" /> 
            <span className="text-indigo-200">KWA KASI YA COSMIC.</span>
          </h2>
          
          <p className="text-white/80 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-12 leading-relaxed">
            We are building the universal layer for value exchange—making finance as borderless and instant as the stars.
          </p>
          
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto rounded-full" />
        </div>

        {/* Subtle Grainy Texture for Premium Feel */}
        <div className="absolute inset-0 opacity-[0.1] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
      </div>
    </section>
  );
}