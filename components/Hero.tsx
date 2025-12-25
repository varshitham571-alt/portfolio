
import React, { useState, useRef, useEffect } from 'react';
import { Download, Github, ChevronDown, Sparkles, Send, Upload, User, FileUp } from 'lucide-react';

export const Hero: React.FC = () => {
  // Persistence for Profile Photo
  const [profileImg, setProfileImg] = useState<string | null>(() => {
    return localStorage.getItem('varshitha_profile_photo');
  });
  
  // Persistence for Resume
  const [resumeData, setResumeData] = useState<{data: string, name: string} | null>(() => {
    const saved = localStorage.getItem('varshitha_resume');
    return saved ? JSON.parse(saved) : null;
  });

  const fileInputRef = useRef<HTMLInputElement>(null);
  const resumeInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (profileImg) {
      try {
        localStorage.setItem('varshitha_profile_photo', profileImg);
      } catch (e) {
        console.error("Storage error:", e);
      }
    }
  }, [profileImg]);

  useEffect(() => {
    if (resumeData) {
      localStorage.setItem('varshitha_resume', JSON.stringify(resumeData));
    }
  }, [resumeData]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert("Image too large (Max 2MB)");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => setProfileImg(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleResumeUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setResumeData({
          data: reader.result as string,
          name: file.name
        });
        alert("Resume uploaded successfully!");
      };
      reader.readAsDataURL(file);
    }
  };

  const downloadResume = () => {
    if (!resumeData) {
      alert("Please upload a resume first using the upload icon next to the button.");
      return;
    }
    const link = document.createElement('a');
    link.href = resumeData.data;
    link.download = resumeData.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-32 pb-12 overflow-hidden bg-[#020617] scroll-mt-24">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative max-w-5xl mx-auto w-full flex flex-col items-center gap-10">
        
        <div className="relative flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[380px] lg:h-[380px] group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 opacity-20 blur-[60px] group-hover:opacity-40 transition-opacity" />
            
            <div 
              onClick={() => fileInputRef.current?.click()}
              className="absolute inset-2 rounded-full overflow-hidden z-20 bg-slate-900 border-2 border-dashed border-slate-700 group-hover:border-blue-500 transition-all cursor-pointer shadow-2xl flex items-center justify-center"
            >
              {profileImg ? (
                <img src={profileImg} alt="Varshitha.M" className="w-full h-full object-cover" />
              ) : (
                <div className="flex flex-col items-center gap-4 text-slate-500 group-hover:text-blue-400 transition-colors">
                  <User className="w-20 h-20 opacity-20" />
                  <div className="flex flex-col items-center">
                    <Upload className="w-6 h-6 mb-2" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-center">Click to Upload<br/>Professional Photo</span>
                  </div>
                </div>
              )}
              {profileImg && (
                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Upload className="w-6 h-6 text-white" />
                </div>
              )}
            </div>
            <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleImageUpload} />

            <div className="absolute top-4 right-4 z-30 bg-slate-900/90 backdrop-blur-xl p-4 rounded-2xl border border-white/10 shadow-2xl transform rotate-6 group-hover:rotate-0 transition-all">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-white font-black text-[10px] uppercase tracking-widest whitespace-nowrap">Open for Opportunities</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center space-y-6 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-500/10 border border-blue-500/20 rounded-full">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <p className="text-blue-400 font-black tracking-[0.2em] uppercase text-[11px]">Aspiring Software & AI Engineer</p>
          </div>
          
          <h1 className="hero-name text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white leading-none">
            Varshitha<span className="text-blue-600">.M</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed">
            Specializing in intelligent systems and data analytics, delivering clean code and impactful AI solutions for modern business challenges.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-8 w-full sm:w-auto">
            <a 
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group w-full sm:w-auto px-12 py-5 bg-blue-600 text-white font-black rounded-2xl flex items-center justify-center gap-3 transition-all hover:bg-blue-500 hover:scale-105 active:scale-95 shadow-2xl shadow-blue-600/30"
            >
              <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              Contact Me
            </a>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button 
                onClick={downloadResume}
                className="flex-1 sm:flex-none px-10 py-5 border border-slate-700 text-slate-300 font-bold rounded-2xl flex items-center justify-center gap-3 hover:bg-slate-800 transition-all hover:border-slate-500 backdrop-blur-md"
              >
                <Download className="w-5 h-5" />
                Get Resume
              </button>
              <button 
                onClick={() => resumeInputRef.current?.click()}
                className="p-5 border border-slate-700 text-slate-500 hover:text-blue-400 hover:border-blue-500 transition-all rounded-2xl backdrop-blur-md"
                title="Upload/Update Resume"
              >
                <FileUp className="w-5 h-5" />
              </button>
              <input type="file" ref={resumeInputRef} className="hidden" accept=".pdf,.doc,.docx" onChange={handleResumeUpload} />
            </div>
          </div>

          <div className="flex items-center justify-center gap-8 pt-10 border-t border-slate-800/50 mt-12 w-full max-w-lg">
            <a href="https://github.com/varshitham571-alt" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
              <Github className="w-8 h-8" />
            </a>
            <div className="h-8 w-px bg-slate-800" />
            <div className="flex flex-col text-left">
              <span className="text-sm font-black text-white">8.8 CGPA</span>
              <span className="text-[10px] uppercase tracking-widest text-slate-500">Bangalore University</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 flex flex-col items-center gap-4 opacity-40 animate-bounce cursor-pointer" onClick={() => document.getElementById('about')?.scrollIntoView({behavior: 'smooth'})}>
        <span className="text-[10px] uppercase font-black tracking-[0.5em] text-slate-500">Begin Journey</span>
        <ChevronDown className="text-slate-500 w-8 h-8" />
      </div>
    </section>
  );
};
