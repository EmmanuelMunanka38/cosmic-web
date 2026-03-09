import React from 'react';
import { Zap, ShieldCheck, Cpu, BarChart3, Globe, Layers, Box, Terminal } from 'lucide-react';

export default function CosmicEcosystem() {
  const products = [
    { 
      title: "Cosmic Ledger (L1)", 
      desc: "Proprietary high-throughput blockchain layer optimized for the Tanzanian shilling. Handles 100k+ TPS with 0.4s finality.", 
      icon: <Layers className="w-5 h-5 md:w-6 md:h-6" />,
      label: "Core Infra"
    },
    { 
      title: "Cosmic Wallet SDK", 
      desc: "Seamlessly integrate Tsh payments into your app. Supports M-Pesa, Tigo Pesa, and Bank bridge protocols out of the box.", 
      icon: <Terminal className="w-5 h-5 md:w-6 md:h-6" />,
      label: "Dev Tools"
    },
    { 
      title: "Galactic Validator Nodes", 
      desc: "Distributed node network across East Africa ensuring 99.99% uptime and decentralized verification for every shilling.", 
      icon: <Box className="w-5 h-5 md:w-6 md:h-6" />,
      label: "Network"
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-10 md:mb-20 gap-6 md:gap-8">
          <div className="max-w-2xl w-full">
            <div className="flex items-center gap-2 mb-3 md:mb-4">
              <span className="text-xl md:text-2xl">🇹🇿</span>
              <h2 className="text-blue-600 font-bold tracking-[0.3em] uppercase text-[10px]">Enterprise Grade Platform</h2>
            </div>
            <h3 className="text-3xl md:text-4xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tighter leading-none mb-4 md:mb-6">
              Financial Infrastructure <br /> 
              <span className="text-slate-400">built for Tanzania's future.</span>
            </h3>
          </div>
          <div className="flex gap-6 md:gap-12 border-l border-slate-100 dark:border-white/10 pl-4 md:pl-8 mb-1 md:mb-2 w-full lg:w-auto justify-between lg:justify-start">
            <div>
              <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-1">Uptime</p>
              <p className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white font-mono">99.99%</p>
            </div>
            <div>
              <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-1">Latency</p>
              <p className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white font-mono">&lt;400ms</p>
            </div>
          </div>
        </div>

        {/* Main Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {products.map((item, i) => (
            <div key={i} className="relative group p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-white/5 hover:bg-white dark:hover:bg-slate-900 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10">
              
              <div className="flex justify-between items-start mb-6 md:mb-10">
                <div className="w-12 md:w-14 h-12 md:h-14 bg-white dark:bg-slate-800 rounded-xl md:rounded-2xl flex items-center justify-center text-blue-600 shadow-sm border border-slate-50 dark:border-white/5 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                
                <span className="px-2 md:px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[9px] font-black uppercase tracking-widest">
                  {item.label}
                </span>
              </div>
              
              <h4 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3 md:mb-4 tracking-tight">{item.title}</h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-medium mb-6 md:mb-8">
                {item.desc}
              </p>

              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 text-xs font-bold cursor-pointer hover:gap-3 transition-all">
                Technical Docs <Zap size={14} fill="currentColor" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Feature Bar */}
        <div className="mt-10 md:mt-16 py-6 md:py-8 border-t border-slate-100 dark:border-white/5 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
           {[
             { icon: <ShieldCheck size={14}/>, text: "AES-256 Vault Encryption" },
             { icon: <Cpu size={14}/>, text: "AI Fraud Prevention" },
             { icon: <BarChart3 size={14}/>, text: "Real-time Settlement" },
             { icon: <Globe size={14}/>, text: "Tsh-Interoperability" }
           ].map((feature, idx) => (
             <div key={idx} className="flex items-center gap-2 md:gap-3 text-slate-400 dark:text-slate-500 font-bold text-[8px] md:text-[10px] uppercase tracking-wider">
               <span className="text-blue-600">{feature.icon}</span>
               <span className="hidden sm:block">{feature.text}</span>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
