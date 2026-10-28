import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart, Code2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-[#DCEEFF] py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left: Brand & Info */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#3B82F6] to-[#93C5FD] flex items-center justify-center text-white font-bold text-sm shadow-xs">
              {personalInfo.initials}
            </div>
            <div>
              <div className="font-bold text-base text-[#1E293B]">
                {personalInfo.name}
              </div>
              <p className="text-xs text-[#64748B]">
                Computer Science and Engineering • Chennai Institute of Technology
              </p>
            </div>
          </div>

          {/* Center: Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#F8FAFC] text-[#475569] hover:text-[#1E293B] hover:bg-[#EFF6FF] border border-[#DCEEFF] transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#F8FAFC] text-[#475569] hover:text-[#0A66C2] hover:bg-[#EFF6FF] border border-[#DCEEFF] transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-xl bg-[#F8FAFC] text-[#475569] hover:text-[#EA4335] hover:bg-[#EFF6FF] border border-[#DCEEFF] transition-colors"
              aria-label="Email Sanjanaa"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Right: Back to top button */}
          <div>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-[#1E40AF] bg-[#EFF6FF] hover:bg-[#DCEEFF] border border-[#BFDBFE] transition-colors"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="mt-8 pt-6 border-t border-[#EFF6FF] flex flex-col sm:flex-row items-center justify-between text-xs text-[#94A3B8] gap-3 text-center sm:text-left">
          <p>
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p className="flex items-center justify-center gap-1.5">
            Crafted with React, Tailwind CSS & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}

