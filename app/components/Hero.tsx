import React from 'react';
import { ArrowRight, Download, Smartphone, Zap, Globe, ShieldCheck } from 'lucide-react';
import DeviceMockup from './DeviceMockup';
import LiveTransactionFeed from './LiveTransactionFeed';


export default function Hero() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-500 min-h-[80vh] md:min-h-[90vh] flex items-center">
      
      {/* BACKGROUND ARCHITECTURE */}
      <div className="absolute inset-0 z-0 opacity-[0.15] dark:opacity-[0.2] [mask-image:radial-gradient(ellipse_at_center,black,transparent)] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      {/* COSMIC ORBS */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-400/10 dark:bg-blue-600/20 blur-[130px] rounded-full animate-pulse-slow" />
      <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-purple-400/10 dark:bg-indigo-900/20 blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10">
        
        {/* LEFT COLUMN: TEXT & CTA */}
        <div className="text-center lg:text-left order-1 lg:order-1">
          <div className="inline-flex items-center gap-1 md:gap-2 px-2 md:px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-[8px] md:text-[10px] font-black uppercase tracking-widest mb-4 md:mb-6">
            <span className="text-sm md:text-base">🇹🇿</span>
            <Zap size={10} fill="currentColor" />
            No. 1 Next-Gen Fintech in Tanzania
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 dark:text-white leading-[0.95] md:leading-[0.9] mb-4 md:mb-6 tracking-tight">
            TRANSFER FUNDS <br /> 
            <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
              WITH COSMIC'S LIGHTING SPEED.
            </span>
          </h1>
          
          <p className="text-sm md:text-lg text-slate-500 dark:text-slate-400 mb-6 md:mb-10 max-w-lg mx-auto lg:mx-0 font-medium leading-relaxed px-2 lg:px-0">
            Send and receive TSH instantly with minimal fees. COSMIC is the modern financial platform built for Tanzania's new generation.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start w-full max-w-sm mx-auto lg:mx-0">
            <button className="group bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 sm:px-8 sm:py-3 md:py-4 rounded-2xl font-bold text-sm sm:text-base transition-all shadow-xl shadow-blue-200 dark:shadow-blue-900/40 active:scale-95 flex items-center justify-center gap-2 w-full sm:w-auto">
              Get Started
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a 
              href="https://www.mediafire.com/file/wv96svlbki119ol/app-release.apk/file" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 px-5 py-2.5 sm:px-8 sm:py-3 md:py-4 rounded-2xl font-bold text-sm sm:text-base hover:bg-slate-50 dark:hover:bg-slate-800 transition-all shadow-sm w-full sm:w-auto"
            >
              <Download size={16} /> Download App
            </a>
          </div>

          {/* TRUST BADGES */}
          <div className="mt-8 md:mt-12 flex items-center justify-center lg:justify-start gap-6 md:gap-8 opacity-50 dark:opacity-40 grayscale hover:grayscale-0 transition-all">
             <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-[10px] md:text-xs">
                <ShieldCheck size={14} /> SECURE
             </div>
             <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-[10px] md:text-xs">
                <Globe size={14} /> BORDERLESS
             </div>
          </div>
        </div>

        {/* RIGHT COLUMN: INTERACTIVE APP MOCKUP */}
        <div className="relative group order-2 lg:order-2">
          <div className="absolute -inset-10 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
          
          <DeviceMockup>
            <div className="p-4 md:p-5 pt-8 md:pt-12 h-full bg-white dark:bg-slate-950 transition-colors flex flex-col">
              
              {/* WALLET CARD WITH OFFICIAL LOGO WATERMARK */}
              <div className="w-full p-4 md:p-6 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[1.5rem] md:rounded-[2rem] mb-4 md:mb-6 shadow-xl relative overflow-hidden">
                {/* Logo integrated as a professional watermark */}
                <img 
                  src="/cosmic-logo.jpeg" 
                  alt="" 
                  className="absolute top-3 md:top-4 right-3 md:right-4 w-8 md:w-10 h-8 md:h-10 opacity-20 grayscale brightness-200"
                />
                
                <div className="absolute top-0 left-0 w-16 md:w-24 h-16 md:h-24 bg-white/5 rounded-full -ml-6 md:-ml-8 -mt-6 md:-mt-8" />
                <p className="text-blue-100 text-[8px] md:text-[10px] font-bold uppercase tracking-widest mb-1">Salio lako</p>
                <div className="flex items-baseline gap-1 text-white">
                  <span className="text-xs md:sm font-bold">Tsh</span>
                  <span className="text-2xl md:text-3xl font-black tracking-tight">2,450,000</span>
                </div>
                
                <div className="mt-4 md:mt-6 flex justify-between items-center">
                   <div className="w-6 md:w-8 h-4 md:h-5 bg-white/20 rounded-md" />
                   <span className="text-[8px] md:text-[10px] text-blue-100 font-mono italic">Cosmic Premium</span>
                </div>
              </div>

              {/* ACTION BUTTONS (In-App) */}
              <div className="grid grid-cols-2 gap-2 md:gap-3 mb-4 md:mb-6">
                 <div className="bg-slate-50 dark:bg-slate-900 p-2 md:p-3 rounded-xl md:rounded-2xl flex flex-col items-center gap-1 md:gap-2 border border-slate-100 dark:border-white/5">
                    <div className="w-6 md:w-8 h-6 md:h-8 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-full flex items-center justify-center overflow-hidden">
                       <img src="/cosmic-logo.jpeg" alt="" className="w-full h-full object-cover p-1 md:p-1.5" />
                    </div>
                    <span className="text-[8px] md:text-[10px] font-bold text-slate-600 dark:text-slate-400">Tuma</span>
                 </div>
                 <div className="bg-slate-50 dark:bg-slate-900 p-2 md:p-3 rounded-xl md:rounded-2xl flex flex-col items-center gap-1 md:gap-2 border border-slate-100 dark:border-white/5">
                    <div className="w-6 md:w-8 h-6 md:h-8 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full flex items-center justify-center">
                       <Smartphone size={12} />
                    </div>
                    <span className="text-[8px] md:text-[10px] font-bold text-slate-600 dark:text-slate-400">Toa Pesa</span>
                 </div>
              </div>

              {/* TRANSACTIONS */}
              <LiveTransactionFeed />
            </div>
          </DeviceMockup>
        </div>
      </div>
    </section>
  );
}