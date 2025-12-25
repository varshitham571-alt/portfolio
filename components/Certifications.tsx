
import React from 'react';
import { Award, BookOpen, Laptop, BarChart3, Calendar, CheckCircle2 } from 'lucide-react';

export const Certifications: React.FC = () => {
  const certs = [
    {
      title: "Data Analytics Workshop",
      org: "Rockwell Automation",
      year: "2025",
      icon: <BarChart3 className="w-5 h-5 text-blue-400" />,
      skills: ["Data Interpretation", "Professional Visualization", "Industry Standards"]
    },
    {
      title: "Power BI Workshop",
      org: "KLE Society’s Degree College",
      year: "2025",
      icon: <Award className="w-5 h-5 text-amber-400" />,
      skills: ["Dashboard Creation", "KPI Visualization", "Reporting"]
    },
    {
      title: "Web Development Workshop",
      org: "Learn On-Line",
      year: "2025",
      icon: <Laptop className="w-5 h-5 text-purple-400" />,
      skills: ["HTML5/CSS3", "JavaScript ES6", "Responsive Architecture"]
    },
    {
      title: "Python for Data Science",
      org: "Analogica",
      year: "2023",
      icon: <BookOpen className="w-5 h-5 text-emerald-400" />,
      skills: ["Data Handling", "Logic Building", "Algorithm Basics"]
    }
  ];

  return (
    <section id="certifications" className="py-24 px-6 bg-slate-900/10 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase tracking-tighter">Certifications & Workshops</h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-6" />
          <p className="text-slate-400 max-w-2xl mx-auto">Professional development and skill validation in key technology domains.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certs.map((cert, idx) => (
            <div key={idx} className="glass-card p-6 md:p-8 rounded-2xl border border-slate-800 flex flex-col sm:flex-row gap-6 hover:border-blue-500/30 transition-all group">
              <div className="p-4 bg-slate-800/50 rounded-xl shrink-0 h-fit w-fit group-hover:rotate-12 transition-transform shadow-inner">
                {cert.icon}
              </div>
              <div className="space-y-4 flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{cert.title}</h3>
                  <div className="flex items-center gap-2 text-slate-500 text-[10px] font-black uppercase tracking-widest">
                    <Calendar className="w-3 h-3" />
                    {cert.year}
                  </div>
                </div>
                <div className="text-blue-400 text-xs font-black uppercase tracking-[0.2em]">{cert.org}</div>
                
                <div className="flex flex-wrap gap-x-6 gap-y-2 mt-2">
                  {cert.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2 text-slate-400 text-xs font-medium">
                      <CheckCircle2 className="w-3 h-3 text-blue-500" />
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
