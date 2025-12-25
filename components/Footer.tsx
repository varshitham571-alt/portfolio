
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-slate-800/50 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-sm text-slate-500 font-medium">
          © {new Date().getFullYear()} Varshitha M. All rights reserved.
        </div>
        <div className="text-xs font-bold tracking-widest uppercase text-slate-600">
          Built for Excellence • Bangalore University
        </div>
      </div>
    </footer>
  );
};
