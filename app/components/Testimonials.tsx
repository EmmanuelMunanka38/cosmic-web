import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Anna Mkamba",
      role: "Vegetable Vendor",
      location: "Dar es Salaam",
      text: "Cosmic has helped me send money to my family in Arusha so quickly. No more waiting for hours.",
      rating: 5
    },
    {
      name: "David Joseph",
      role: "Business Owner",
      location: "Mwanza",
      text: "I use Cosmic for my milk business. Payments come instantly, and the fees are much lower than the bank.",
      rating: 5
    },
    {
      name: "Sarah Hamis",
      role: "Teacher",
      location: "Dodoma",
      text: "I was struggling with M-Pesa for school fees. Now everything is so easy. BIG UP Cosmic!",
      rating: 5
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900/40 transition-colors relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-blue-600 font-bold tracking-[0.3em] uppercase text-[10px] mb-3 md:mb-4">Testimonials</h2>
          <h3 className="text-3xl md:text-4xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tighter">
            What Our Customers Say
          </h3>
          <p className="text-slate-500 dark:text-slate-400 mt-3 md:mt-4 max-w-xl mx-auto text-sm md:text-base px-2 md:px-0">
            Hear from our users. Here's what people are saying about Cosmic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-white dark:bg-slate-950 border border-slate-100 dark:border-white/5 p-6 md:p-8 rounded-[2rem] h-full">
                <Quote className="w-8 md:w-10 h-8 md:h-10 text-blue-200 dark:text-blue-900 mb-3 md:mb-4" />
                
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-3 md:w-4 h-3 md:h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 md:w-12 h-10 md:h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 dark:text-white text-sm md:text-base">{testimonial.name}</h5>
                    <p className="text-xs md:text-sm text-slate-500">{testimonial.role}, {testimonial.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
