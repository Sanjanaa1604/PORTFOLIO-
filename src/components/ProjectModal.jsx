import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, CheckCircle2, Layers, Cpu, Sparkles } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        {/* Modal Window */}
        <motion.div
          className="relative w-full max-w-2xl bg-white rounded-2xl shadow-xl border border-[#DCEEFF] overflow-hidden z-10 my-8"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 pb-4 border-b border-[#EFF6FF] bg-[#F7FBFF]">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#3B82F6] bg-[#EFF6FF] px-2.5 py-0.5 rounded-full border border-[#BFDBFE]">
                {project.category}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#1E293B] mt-1.5">
                {project.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-[#64748B] hover:text-[#1E293B] hover:bg-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
            {/* Detailed Description */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#64748B] mb-2">
                Project Overview
              </h4>
              <p className="text-sm text-[#475569] leading-relaxed">
                {project.longDescription}
              </p>
            </div>

            {/* Key Features */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#64748B] mb-3">
                Key Features & Engineering Highlights
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-[#F8FAFC] border border-[#EFF6FF] text-xs text-[#334155] flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#3B82F6] shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#64748B] mb-2.5 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[#3B82F6]" />
                <span>Technologies & Frameworks</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs font-semibold text-[#1E40AF] bg-[#EFF6FF] border border-[#DCEEFF] rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-4 sm:p-6 bg-[#F8FAFC] border-t border-[#EFF6FF] flex items-center justify-between gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-[#1E293B] bg-white border border-[#DCEEFF] hover:border-[#BFDBFE] transition-colors shadow-2xs"
            >
              <Github className="w-4 h-4" />
              <span>GitHub Repository</span>
            </a>

            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#3B82F6] hover:bg-[#2563EB] transition-colors shadow-2xs"
            >
              Close Window
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

