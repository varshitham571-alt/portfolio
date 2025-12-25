
import React from 'react';
import { Code2, Settings, Users, Terminal } from 'lucide-react';

export const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Technical Skills",
      icon: <Code2 className="w-6 h-6 text-blue-400" />,
      skills: ["C, Java, Python (Basics)", "HTML5, CSS3, JavaScript ES6", "Power BI, MS Excel", "SQL Fundamentals"]
    },
    {
      title: "Tools & Frameworks",
      icon: <Settings className="w-6 h-6 text-purple-400" />,
      skills: ["XAMPP (PHP/SQL)", "Visual Studio Code", "Git & GitHub", "Data Visualization Tools"]
    },
    {
      title: "Core Concepts",
      icon: <Terminal className="w-6 h-6 text-emerald-400" />,
      skills: ["Problem Solving & Debugging", "Relational Databases", "AI Systems Logic", "Computer Vision Basics"]
    },
    {
      title: "Soft Skills",
      icon: <Users className="w-6 h-6 text-amber-400" />,
      skills: ["Leadership & Coordination", "Professional Communication", "Adaptability", "Time Management"]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase tracking-tighter">Skills & Expertise</h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-6" />
          <p className="text-slate-400 max-w-2xl mx-auto italic">A professional blend of technical proficiency and essential soft skills.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="glass-card p-8 rounded-2xl border border-slate-800 hover:border-blue-500/40 transition-all group hover:-translate-y-1 duration-300 bg-slate-900/40">
              <div className="mb-6 inline-block p-4 bg-slate-800/50 rounded-2xl group-hover:scale-110 transition-transform shadow-inner">
                {category.icon}
              </div>
              <h3 className="text-lg font-black text-white mb-6 tracking-tight uppercase tracking-widest">{category.title}</h3>
              <ul className="space-y-4">
                {category.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center gap-3 text-slate-400 text-sm font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
