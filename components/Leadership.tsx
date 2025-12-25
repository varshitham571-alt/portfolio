
import React from 'react';
import { ShieldCheck, Trophy, UsersRound, Zap } from 'lucide-react';

export const Leadership: React.FC = () => {
  const responsibilities = [
    {
      icon: <Trophy className="w-5 h-5 text-amber-400" />,
      text: "Served as Team Leader in Coding, Data Analytics, and Quiz Competitions"
    },
    {
      icon: <UsersRound className="w-5 h-5 text-blue-400" />,
      text: "Coordinated tasks and guided team members during problem-solving sessions"
    },
    {
      icon: <Zap className="w-5 h-5 text-purple-400" />,
      text: "Handled technical challenges and ensured smooth collaboration across diverse teams"
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
      text: "Developed strong leadership, communication, and proactive teamwork skills"
    },
    {
      icon: <Zap className="w-5 h-5 text-blue-400" />,
      text: "Gained hands-on experience in managing time, responsibilities, and pressure situations"
    }
  ];

  return (
    <section id="leadership" className="py-24 px-6 relative scroll-mt-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Leadership & Responsibility</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Proven track record of taking initiative and guiding teams toward successful outcomes.</p>
        </div>

        <div className="glass-card p-8 md:p-12 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden group">
          {/* Subtle Decorative Gradient */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[80px] rounded-full -mr-20 -mt-20 group-hover:bg-blue-500/10 transition-all duration-700" />
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
              <div className="space-y-1">
                <h3 className="text-2xl font-bold text-white">Team Leader</h3>
                <p className="text-blue-400 font-medium text-lg">Technical & Academic Competitions</p>
              </div>
              <div className="px-4 py-2 bg-slate-800/50 rounded-lg border border-slate-700/50 text-slate-400 text-sm font-mono">
                Key Coordinator Role
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {responsibilities.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-all border border-transparent hover:border-slate-800">
                  <div className="mt-1 p-2 bg-slate-900 rounded-lg shrink-0">
                    {item.icon}
                  </div>
                  <p className="text-slate-300 leading-relaxed font-medium">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-slate-800/50">
              <p className="text-slate-500 text-sm italic">
                Focusing on leadership potential, teamwork ability, and readiness for fast-paced professional environments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
