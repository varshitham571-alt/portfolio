import React, { useEffect } from 'react';
import { X, Code, Terminal, Cpu, Info, Github } from 'lucide-react';

interface Project {
  title: string;
  badge: string;
  badgeColor: string;
  description: string;
  tech: string[];
  codeSnippet: string;
  highlights: string[];
  language: string;
  repoUrl: string;
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // CRITICAL RULE: All code links must point here
  const GITHUB_PROFILE = "https://github.com/varshitham571-alt";

  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [project]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8">
      <div 
        className="absolute inset-0 bg-slate-950/90 backdrop-blur-xl transition-opacity" 
        onClick={onClose} 
      />
      
      <div className="relative w-full max-w-5xl max-h-[90vh] bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-slate-900/50">
          <div className="flex items-center gap-4">
            <div className={`px-3 py-1 rounded-full text-[10px] font-bold border uppercase tracking-widest ${project.badgeColor}`}>
              {project.badge}
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white truncate max-w-[200px] md:max-w-none">
              {project.title}
            </h3>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-slate-800 rounded-full text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="p-6 md:p-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-8">
              <div className="space-y-4">
                <h4 className="flex items-center gap-2 text-blue-400 font-bold uppercase tracking-widest text-xs">
                  <Info className="w-4 h-4" />
                  Project Overview
                </h4>
                <p className="text-slate-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="flex items-center gap-2 text-blue-400 font-bold uppercase tracking-widest text-xs">
                  <Cpu className="w-4 h-4" />
                  Key Highlights
                </h4>
                <ul className="space-y-3">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-400">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="text-blue-400 font-bold uppercase tracking-widest text-xs">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-800 text-slate-300 text-[10px] font-bold rounded uppercase tracking-wider">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4 flex flex-col h-full">
              <div className="flex items-center justify-between">
                <h4 className="flex items-center gap-2 text-purple-400 font-bold uppercase tracking-widest text-xs">
                  <Code className="w-4 h-4" />
                  Implementation Logic
                </h4>
                <span className="text-[10px] text-slate-500 font-mono uppercase tracking-widest">{project.language}</span>
              </div>
              
              <div className="flex-1 bg-slate-950 border border-slate-800 rounded-xl overflow-hidden font-mono text-xs md:text-sm shadow-inner">
                <div className="bg-slate-900 px-4 py-2 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-3 h-3 text-slate-500" />
                    <span className="text-slate-500 text-[10px]">core_module.{project.language === 'Python' ? 'py' : project.language === 'C++' ? 'cpp' : project.language === 'JavaScript' ? 'js' : 'php'}</span>
                  </div>
                </div>
                <div className="p-4 overflow-x-auto text-slate-300 custom-scrollbar">
                  <pre className="whitespace-pre">
                    <code>{project.codeSnippet}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-slate-800 bg-slate-900/50 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <p className="text-slate-500 text-xs italic">
            This module represents the architectural foundation of the project.
          </p>
          <div className="flex gap-4">
             <a 
               href={GITHUB_PROFILE} 
               target="_blank" 
               rel="noopener noreferrer"
               className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-lg flex items-center gap-2 transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/20"
             >
                <Github className="w-4 h-4" />
                Access Repository
             </a>
          </div>
        </div>
      </div>
    </div>
  );
};