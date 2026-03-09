import React from 'react';
import { ShieldCheck, Lock, Eye, FileCheck, Award, Building2 } from 'lucide-react';

export default function Security() {
  const features = [
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Bank-Grade Encryption",
      desc: "Your data is protected with AES-256 encryption, the same level used by major banks."
    },
    {
      icon: <Lock className="w-5 h-5" />,
      title: "Secure Login",
      desc: "Use Face ID, Fingerprint, or PIN to secure your account."
    },
    {
      icon: <Eye className="w-5 h-5" />,
      title: "Privacy First",
      desc: "We never share your data with anyone without your consent."
    },
    {
      icon: <FileCheck className="w-5 h-5" />,
      title: "KYC Compliant",
      desc: "Fully compliant with BOT (Bank of Tanzania) identity verification regulations."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="bg-slate-50 dark:bg-slate-900/50 p-4 md:p-6 rounded-xl md:rounded-2xl text-center">
                <div className="w-10 md:w-12 h-10 md:h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Award className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm md:text-base">ISO 27001</h4>
                <p className="text-[10px] md:text-xs text-slate-500 mt-1">Certified</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900/50 p-4 md:p-6 rounded-xl md:rounded-2xl text-center">
                <div className="w-10 md:w-12 h-10 md:h-12 bg-purple-100 dark:bg-purple-900/30 text-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <ShieldCheck className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm md:text-base">SOC 2</h4>
                <p className="text-[10px] md:text-xs text-slate-500 mt-1">Type II</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900/50 p-4 md:p-6 rounded-xl md:rounded-2xl text-center">
                <div className="w-10 md:w-12 h-10 md:h-12 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Building2 className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm md:text-base">BOT</h4>
                <p className="text-[10px] md:text-xs text-slate-500 mt-1">Regulated</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900/50 p-4 md:p-6 rounded-xl md:rounded-2xl text-center">
                <div className="w-10 md:w-12 h-10 md:h-12 bg-orange-100 dark:bg-orange-900/30 text-orange-600 rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Lock className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm md:text-base">PCI DSS</h4>
                <p className="text-[10px] md:text-xs text-slate-500 mt-1">Compliant</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-2 mb-3 md:mb-4">
              <span className="text-2xl md:text-3xl">🇹🇿</span>
              <h2 className="text-blue-600 font-bold tracking-[0.3em] uppercase text-[10px]">Security</h2>
            </div>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tighter mb-4 md:mb-6">
              Safe & <br />
              <span className="text-slate-400">Reliable.</span>
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm md:text-lg leading-relaxed mb-6 md:mb-8">
              Your money's security is our top priority. We use cutting-edge technology to ensure your funds are always safe.
            </p>

            <div className="space-y-3 md:space-y-4">
              {features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-slate-50 dark:bg-slate-900/40 rounded-xl md:rounded-2xl">
                  <div className="w-8 md:w-10 h-8 md:h-10 bg-white dark:bg-slate-800 text-blue-600 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm md:text-base">{feature.title}</h4>
                    <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
