import React from 'react';
import { Smartphone, Send, CheckCircle, ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Install App",
      desc: "Download Cosmic App from Play Store or get our official APK directly.",
      icon: <Smartphone className="w-5 h-5 md:w-6 md:h-6" />
    },
    {
      num: "02",
      title: "Sign Up",
      desc: "Create your account in seconds. No paperwork, no queues, no hassle.",
      icon: <Send className="w-5 h-5 md:w-6 md:h-6" />
    },
    {
      num: "03",
      title: "Send Money",
      desc: "Send TSH to friends or family anytime, anywhere in Tanzania.",
      icon: <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
    },
    {
      num: "04",
      title: "Receive Instantly",
      desc: "Receive money instantly on your phone with no delays.",
      icon: <CheckCircle className="w-5 h-5 md:w-6 md:h-6" />
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900/40 transition-colors">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-blue-600 font-bold tracking-[0.3em] uppercase text-[10px] mb-3 md:mb-4">How It Works</h2>
          <h3 className="text-3xl md:text-4xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tighter">
            Get Started in Minutes
          </h3>
          <p className="text-slate-500 dark:text-slate-400 mt-3 md:mt-4 max-w-xl mx-auto text-sm md:text-base px-2 md:px-0">
            Start using Cosmic in just a few simple steps. It's fast, easy, and secure.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {steps.map((step, i) => (
            <div key={i} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-white dark:bg-slate-950 border border-slate-100 dark:border-white/5 p-6 md:p-8 rounded-[2rem] h-full">
                <span className="text-4xl md:text-6xl font-black text-slate-100 dark:text-slate-800 absolute top-3 right-4 md:top-4 md:right-6">
                  {step.num}
                </span>
                <div className="w-10 md:w-12 h-10 md:h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-xl flex items-center justify-center mb-4 md:mb-6">
                  {step.icon}
                </div>
                <h4 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-2 md:mb-3">{step.title}</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
