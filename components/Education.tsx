
import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

export const Education: React.FC = () => {
  const education = [
    {
      degree: "BCA (Bachelor of Computer Applications)",
      period: "2023 – 2026",
      institution: "Bangalore University",
      subText: "KLE Society’s Degree College | Current CGPA: 8.8",
      current: true,
      color: "blue"
    },
    {
      degree: "PUC (Pre-University College)",
      period: "2021 – 2023",
      institution: "KLE Society’s S. Nijalingappa PU College",
      subText: "Commerce / Computer Science focus",
      current: false,
      color: "slate"
    },
    {
      degree: "SSLC (Secondary School Leaving Certificate)",
      period: "Before 2021",
      institution: "St. Maria Sadan Public School",
      subText: "Standard Secondary Education",
      current: false,
      color: "slate"
    }
  ];

  return (
    <section id="education" className="py-32 px-6 bg-slate-900/30 scroll-mt-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase">Academic Background</h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full" />
          <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Foundation of my technical expertise</p>
        </div>

        <div className="space-y-8">
          {education.map((edu, idx) => (
            <div key={idx} className="group relative glass-card p-10 rounded-3xl border border-slate-800 hover:border-blue-500/50 transition-all flex flex-col md:flex-row gap-8 items-center md:items-start overflow-hidden">
              {edu.current && <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 blur-3xl -mr-16 -mt-16" />}
              
              <div className={`p-6 ${edu.current ? 'bg-blue-600/10 text-blue-500' : 'bg-slate-800/50 text-slate-500'} rounded-2xl group-hover:scale-110 transition-transform`}>
                <GraduationCap className="w-10 h-10" />
              </div>
              
              <div className="flex-1 text-center md:text-left space-y-4 relative z-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <h3 className="text-2xl font-black text-white tracking-tight">{edu.degree}</h3>
                  <div className="flex items-center gap-2 px-4 py-1.5 bg-slate-950 border border-slate-800 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-400">
                    <Calendar className="w-3 h-3" />
                    {edu.period}
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-center md:justify-start gap-2 text-blue-400 font-bold text-lg">
                    <MapPin className="w-4 h-4" />
                    {edu.institution}
                  </div>
                  <p className="text-slate-500 font-medium leading-relaxed">{edu.subText}</p>
                </div>

                {edu.current && (
                  <div className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest rounded-lg">
                    Currently Pursuing
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
