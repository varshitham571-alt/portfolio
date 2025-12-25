
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      window.history.pushState(null, '', `#${id}`);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/95 backdrop-blur-md border-b border-slate-800/50 h-20 shadow-xl">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <div 
          className="flex items-center gap-2 group cursor-pointer flex-shrink-0" 
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        >
          <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center font-black text-white shadow-lg shadow-blue-600/20 group-hover:rotate-12 transition-transform shrink-0">V</div>
          <div className="text-xl font-black tracking-tighter text-white uppercase whitespace-nowrap inline-block">
            Varshitha<span className="text-blue-500">.M</span>
          </div>
        </div>
        
        {/* Desktop Navigation - Strictly Text Links with Separators */}
        <nav className="hidden lg:flex items-center">
          {navItems.map((item, index) => (
            <React.Fragment key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`px-3 py-2 text-[11px] font-bold uppercase tracking-widest transition-all whitespace-nowrap ${
                  activeSection === item.id 
                  ? 'text-blue-400' 
                  : 'text-slate-400 hover:text-white underline-offset-4 hover:underline'
                }`}
              >
                {item.label}
              </a>
              {index < navItems.length - 1 && (
                <span className="text-slate-700 font-light select-none px-1">|</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden p-2 text-slate-400 hover:text-white transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-slate-950 border-b border-slate-800 shadow-2xl animate-in slide-in-from-top duration-300 overflow-y-auto max-h-[calc(100vh-5rem)]">
          <nav className="flex flex-col p-6 gap-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`text-sm font-bold uppercase tracking-widest py-3 border-b border-slate-900/50 ${
                  activeSection === item.id ? 'text-blue-400' : 'text-slate-400'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
