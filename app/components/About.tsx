import React from 'react';
import { Rocket, Target, Zap } from 'lucide-react';

export default function About() {
  const stats = [
    { value: "500K+", label: "Users" },
    { value: "Tsh 10B+", label: "Transacted" },
    { value: "99.99%", label: "Uptime" },
    { value: "24/7", label: "Support" }
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        <div className="text-center mb-10 md:mb-16">
          <div className="flex items-center justify-center gap-2 mb-3 md:mb-4">
            <span className="text-3xl md:text-4xl">🇹🇿</span>
            <h2 className="text-blue-600 font-bold tracking-[0.3em] uppercase text-[10px]">Proudly Tanzanian</h2>
          </div>
          <h3 className="text-3xl md:text-4xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tighter mb-4 md:mb-6">
            Powering Tanzania's<br />
            <span className="text-slate-400">Digital Future.</span>
          </h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed px-2 md:px-0">
            Cosmic is a next-generation financial platform powered by blockchain technology, built specifically for Tanzania. Our mission is to make financial transactions simple, fast, and affordable for everyone.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-10 md:mb-16">
          {stats.map((stat, i) => (
            <div key={i} className="bg-slate-50 dark:bg-slate-900/40 p-4 md:p-8 rounded-[1.5rem] md:rounded-[2rem] text-center border border-slate-100 dark:border-white/5">
              <p className="text-2xl md:text-4xl font-black text-blue-600 mb-1 md:mb-2">{stat.value}</p>
              <p className="text-[10px] md:text-sm font-bold text-slate-500 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          <div className="bg-slate-50 dark:bg-slate-900/40 p-6 md:p-8 rounded-[2rem] border border-slate-100 dark:border-white/5">
            <div className="w-10 md:w-12 h-10 md:h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6">
              <Target className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <h4 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-3 md:mb-4">Our Mission</h4>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm md:text-base">
              To become the leading fintech platform in Tanzania and East Africa, delivering modern financial solutions to every household.
            </p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-900/40 p-6 md:p-8 rounded-[2rem] border border-slate-100 dark:border-white/5">
            <div className="w-10 md:w-12 h-10 md:h-12 bg-purple-100 dark:bg-purple-900/30 text-purple-600 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6">
              <Rocket className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <h4 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-3 md:mb-4">Our Vision</h4>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm md:text-base">
              A Tanzania where everyone has access to modern financial services, regardless of location or income level.
            </p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-900/40 p-6 md:p-8 rounded-[2rem] border border-slate-100 dark:border-white/5">
            <div className="w-10 md:w-12 h-10 md:h-12 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6">
              <Zap className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <h4 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-3 md:mb-4">Our Values</h4>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm md:text-base">
              We prioritize security, transparency, and community welfare in everything we do. Your money is our responsibility.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
