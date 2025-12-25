
import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-32 px-6 bg-slate-900/20 scroll-mt-24">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">About Us</h2>
            <div className="w-24 h-2 bg-blue-600 mx-auto rounded-full" />
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-[2.5rem] blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
            <div className="relative glass-card p-10 md:p-16 rounded-[2rem] border border-slate-800/50 shadow-2xl bg-slate-950/40 backdrop-blur-xl space-y-8">
              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-medium">
                I am a BCA student at Bangalore University under the NEP scheme, with a focus on web development, AI-based systems, and data analytics. My academic journey is characterized by a strong CGPA of 8.8 and a hands-on approach to technical problem-solving.
              </p>
              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-medium">
                I excel in collaborative environments, having led multiple teams in coding and data analytics competitions. I am looking for a challenging role in a growth-oriented organization where I can apply my technical skills and proactive learning mindset.
              </p>
              
              <div className="mt-8 pt-8 border-t border-slate-800 flex justify-center gap-12">
                <div className="text-center">
                  <p className="text-blue-400 font-black text-3xl">8.8</p>
                  <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mt-1">Current CGPA</p>
                </div>
                <div className="text-center">
                  <p className="text-purple-400 font-black text-3xl">Intern</p>
                  <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mt-1">Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
