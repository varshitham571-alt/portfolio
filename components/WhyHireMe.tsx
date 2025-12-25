
import React from 'react';
import { CheckCircle2, Star } from 'lucide-react';

export const WhyHireMe: React.FC = () => {
  const points = [
    { title: "Technical Excellence", desc: "Strong foundation in AI, systems, and modern web technologies." },
    { title: "Practical Experience", desc: "Hands-on internship and real-world project exposure." },
    { title: "Effective Communication", desc: "Ability to simplify complex concepts and lead teams effectively." },
    { title: "Rapid Adaptation", desc: "A quick learner who masters new tools and domains at high velocity." },
    { title: "Problem Solver", desc: "Driven by logical thinking and efficient system design." }
  ];

  return (
    <section id="why-hire" className="py-32 px-6 relative overflow-hidden scroll-mt-24">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-blue-600/5 to-purple-600/5 blur-[160px] -z-10" />
      
      <div className="max-w-5xl mx-auto">
        <div className="glass-card p-12 md:p-20 rounded-[3rem] border border-slate-800 text-center md:text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-5">
            <Star className="w-64 h-64 text-blue-500" />
          </div>

          <div className="relative z-10 space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">Why Hire Me?</h2>
              <p className="text-slate-400 text-lg font-medium max-w-xl">Combining academic excellence with a proactive mindset to deliver results.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {points.map((point, idx) => (
                <div key={idx} className="flex gap-6 p-6 rounded-3xl hover:bg-white/5 transition-all group">
                  <div className="mt-1">
                    <div className="w-10 h-10 bg-blue-600/10 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                      <CheckCircle2 className="w-6 h-6 text-blue-500 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                  <div className="space-y-2 text-left">
                    <h3 className="text-xl font-black text-white tracking-tight">{point.title}</h3>
                    <p className="text-slate-400 font-medium leading-relaxed">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
