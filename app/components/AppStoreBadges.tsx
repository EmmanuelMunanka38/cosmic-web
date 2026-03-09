import React from 'react';
import { Download } from 'lucide-react';

export default function AppStoreBadges() {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-slate-950 transition-colors relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/10 dark:bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 md:px-6 text-center relative z-10">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-2xl md:text-3xl">🇹🇿</span>
          <h2 className="text-blue-600 font-bold tracking-[0.3em] uppercase text-[10px]">Download Now</h2>
        </div>
        <h3 className="text-3xl md:text-4xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tighter mb-4 md:mb-6">
          Get Our App
        </h3>
        <p className="text-slate-500 dark:text-slate-400 text-sm md:text-lg mb-8 md:mb-12 max-w-xl mx-auto px-2 md:px-0">
          Download Cosmic on your phone. Available on Play Store, App Store, or get our APK directly.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center px-2 sm:px-0">
          <a 
            href="https://play.google.com/store" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 md:gap-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-4 md:px-6 py-2 md:py-3 rounded-xl md:rounded-2xl font-bold hover:bg-slate-800 dark:hover:bg-slate-100 transition-all hover:scale-105 w-full sm:w-auto justify-center"
          >
            <svg className="w-6 md:w-7 h-6 md:h-7" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
            </svg>
            <div className="text-left">
              <p className="text-[10px] opacity-70">Get it on</p>
              <p className="text-sm">Google Play</p>
            </div>
          </a>

          <a 
            href="https://apps.apple.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 md:gap-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-4 md:px-6 py-2 md:py-3 rounded-xl md:rounded-2xl font-bold hover:bg-slate-800 dark:hover:bg-slate-100 transition-all hover:scale-105 w-full sm:w-auto justify-center"
          >
            <svg className="w-6 md:w-7 h-6 md:h-7" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <div className="text-left">
              <p className="text-[10px] opacity-70">Download on the</p>
              <p className="text-sm">App Store</p>
            </div>
          </a>

          <a 
            href="https://www.mediafire.com/file/wv96svlbki119ol/app-release.apk/file" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 md:gap-3 bg-blue-600 hover:bg-blue-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-xl md:rounded-2xl font-bold transition-all hover:scale-105 shadow-lg shadow-blue-200 dark:shadow-blue-900/40 w-full sm:w-auto justify-center"
          >
            <Download className="w-5 md:w-6 h-5 md:h-6" />
            <div className="text-left">
              <p className="text-[10px] opacity-70">Direct</p>
              <p className="text-sm">Download APK</p>
            </div>
          </a>
        </div>

        <p className="mt-6 md:mt-8 text-xs text-slate-400 font-medium">
          Available on all Android and iOS devices
        </p>
      </div>
    </section>
  );
}
