import React from 'react';
import { Twitter, Github, Linkedin, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-white/5 pt-12 md:pt-20 pb-8 md:pb-10 overflow-hidden transition-colors">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[200px] md:h-[300px] bg-blue-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-12 mb-10 md:mb-16">
          
          {/* Brand Column */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
              <img 
                src="/cosmic-logo.jpeg" 
                alt="Cosmic Logo" 
                className="w-8 h-8 object-contain rounded-lg"
              />
              <span className="text-slate-900 dark:text-white font-black text-lg md:text-xl tracking-tight">COSMIC</span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed max-w-[240px] mb-4 md:mb-8">
              The universal layer for Tanzanian finance. Fast, secure, and borderless.
            </p>
            <div className="flex gap-3 md:gap-4">
              {[Twitter, Github, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-9 md:w-10 h-9 md:h-10 rounded-lg md:rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-white/5 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-600/30 transition-all">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Sitemaps */}
          <div>
            <h4 className="text-slate-900 dark:text-white font-bold text-sm mb-4 md:mb-6">Product</h4>
            <ul className="space-y-2 md:space-y-4 text-sm font-medium text-slate-500 dark:text-slate-400">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Wallet</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Business API</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Cosmic Nodes</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Fees</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 dark:text-white font-bold text-sm mb-4 md:mb-6">Company</h4>
            <ul className="space-y-2 md:space-y-4 text-sm font-medium text-slate-500 dark:text-slate-400">
              <li><a href="#" className="hover:text-blue-600 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="col-span-2">
            <h4 className="text-slate-900 dark:text-white font-bold text-sm mb-3 md:mb-6">Stay Updated</h4>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-3 md:mb-4">Join our newsletter to get the latest news.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Your email..." 
                className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-white/5 rounded-xl md:rounded-2xl py-2.5 md:py-3 px-3 md:px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition-all"
              />
              <button className="absolute right-1.5 md:right-2 top-1.5 md:top-2 bg-blue-600 text-white p-1.5 rounded-lg md:rounded-xl hover:bg-blue-700 transition-colors">
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 md:pt-8 border-t border-slate-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 text-[8px] md:text-[10px] font-black uppercase tracking-widest text-slate-400">
            <span>Privacy Policy</span>
            <span className="w-1 h-1 bg-slate-300 rounded-full" />
            <span>Terms of Service</span>
            <span className="w-1 h-1 bg-slate-300 rounded-full hidden sm:inline" />
            <span className="hidden sm:inline">© 2026 Cosmic Labs</span>
          </div>
          
          <div className="flex items-center gap-2 px-2 md:px-3 py-1 rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-white/5">
            <span className="text-[8px] md:text-[10px] font-bold text-slate-500 uppercase tracking-tighter">Made by Emmanuel Mnanka Samo, TZ</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
