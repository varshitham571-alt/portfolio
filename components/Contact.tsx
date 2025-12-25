
import React, { useRef } from 'react';
import { Mail, Github, MapPin, Send, Download, FileUp } from 'lucide-react';

export const Contact: React.FC = () => {
  const GITHUB_PROFILE = "https://github.com/varshitham571-alt";
  const resumeInputRef = useRef<HTMLInputElement>(null);

  const handleResumeUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const resumeData = {
          data: reader.result as string,
          name: file.name
        };
        localStorage.setItem('varshitha_resume', JSON.stringify(resumeData));
        alert("Resume uploaded successfully!");
      };
      reader.readAsDataURL(file);
    }
  };

  const downloadResume = () => {
    const saved = localStorage.getItem('varshitha_resume');
    if (!saved) {
      alert("Please upload a resume first using the upload icon next to the button.");
      return;
    }
    const resumeData = JSON.parse(saved);
    const link = document.createElement('a');
    link.href = resumeData.data;
    link.download = resumeData.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="py-32 px-6 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-10">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">Let's Connect.</h2>
              <p className="text-slate-400 text-lg leading-relaxed max-w-md font-medium">
                I am actively looking for internship and entry-level opportunities in Software and AI Engineering.
              </p>
            </div>

            <div className="space-y-8">
              <a href="mailto:varshitham571@gmail.com" className="flex items-center gap-6 group">
                <div className="p-5 bg-slate-900 border border-slate-800 group-hover:bg-blue-600 group-hover:border-blue-500 transition-all rounded-2xl">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em] mb-1">Email Me</p>
                  <p className="text-white font-bold text-lg">varshitham571@gmail.com</p>
                </div>
              </a>

              <a href={GITHUB_PROFILE} target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                <div className="p-5 bg-slate-900 border border-slate-800 group-hover:bg-purple-600 group-hover:border-purple-500 transition-all rounded-2xl">
                  <Github className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em] mb-1">Github Profile</p>
                  <p className="text-white font-bold text-lg">@varshitham571-alt</p>
                </div>
              </a>

              <div className="flex items-center gap-6">
                <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em] mb-1">Base Location</p>
                  <p className="text-white font-bold text-lg">Bengaluru, India</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button 
                onClick={downloadResume}
                className="flex-1 sm:flex-none px-12 py-5 bg-white text-slate-950 font-black rounded-2xl flex items-center justify-center gap-3 hover:bg-blue-600 hover:text-white transition-all shadow-xl"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </button>
              <button 
                onClick={() => resumeInputRef.current?.click()}
                className="p-5 border border-slate-700 text-slate-500 hover:text-blue-400 hover:border-blue-500 transition-all rounded-2xl"
                title="Upload Resume"
              >
                <FileUp className="w-5 h-5" />
              </button>
              <input type="file" ref={resumeInputRef} className="hidden" accept=".pdf,.doc,.docx" onChange={handleResumeUpload} />
            </div>
          </div>

          <div className="glass-card p-8 md:p-12 rounded-[2.5rem] border border-slate-800 bg-slate-950/40">
            <h3 className="text-xl font-black text-white uppercase tracking-widest mb-8">Send a Quick Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Your Name</label>
                  <input type="text" className="w-full bg-slate-900 border border-slate-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Professional Email</label>
                  <input type="email" className="w-full bg-slate-900 border border-slate-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 transition-all" placeholder="john@company.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Message Content</label>
                <textarea rows={5} className="w-full bg-slate-900 border border-slate-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 transition-all resize-none" placeholder="How can I help you today?"></textarea>
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-5 rounded-xl flex items-center justify-center gap-3 transition-all transform active:scale-95 shadow-lg shadow-blue-500/20">
                <Send className="w-5 h-5" />
                Submit Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
