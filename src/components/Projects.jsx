import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  Layers, 
  Sparkles, 
  Eye, 
  Code2, 
  Check, 
  DollarSign, 
  BookOpen, 
  PenTool,
  HelpCircle,
  TrendingUp,
  Award
} from 'lucide-react';
import { projects } from '../data/portfolioData';

// Interactive Tasteful Mockup for Quizzle
function QuizzlePreview() {
  const [selectedOption, setSelectedOption] = useState(1);
  return (
    <div className="w-full bg-gradient-to-br from-blue-50/80 via-sky-50/50 to-indigo-50/80 p-5 rounded-xl border border-[#DCEEFF] text-left">
      <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#BFDBFE]/50 text-xs font-semibold text-[#1E40AF]">
        <span className="flex items-center gap-1.5">
          <HelpCircle className="w-3.5 h-3.5 text-[#3B82F6]" />
          <span>Interactive Quiz • Question 03/10</span>
        </span>
        <span className="bg-[#DCEEFF] text-[#1E40AF] px-2 py-0.5 rounded-full text-[11px] font-bold">
          Score: 80 / 100
        </span>
      </div>
      <p className="text-xs sm:text-sm font-semibold text-[#1E293B] mb-3">
        Which data structure provides O(1) average time complexity for key lookups?
      </p>
      <div className="space-y-1.5 text-xs">
        {['Binary Search Tree', 'Hash Map / Table (Selected)', 'Linked List', 'Array'].map((opt, i) => (
          <div
            key={i}
            onClick={() => setSelectedOption(i)}
            className={`px-3 py-1.5 rounded-lg border transition-all cursor-pointer flex items-center justify-between ${
              selectedOption === i
                ? 'bg-white border-[#3B82F6] text-[#2563EB] font-bold shadow-2xs'
                : 'bg-white/70 border-slate-200/80 text-slate-700 hover:bg-white'
            }`}
          >
            <span>{opt}</span>
            {selectedOption === i && <Check className="w-3.5 h-3.5 text-[#3B82F6]" />}
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between text-[11px] text-[#64748B] pt-2 border-t border-blue-100">
        <span>MERN Auth & Persistence</span>
        <span className="text-[#3B82F6] font-medium flex items-center gap-1">
          <CheckCircle2 className="w-3 h-3" /> Real-time Analytics
        </span>
      </div>
    </div>
  );
}

// Interactive Tasteful Mockup for BlogNest
function BlogNestPreview() {
  return (
    <div className="w-full bg-gradient-to-br from-sky-50/80 via-blue-50/50 to-cyan-50/80 p-5 rounded-xl border border-[#DCEEFF] text-left">
      <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#BFDBFE]/50 text-xs font-semibold text-[#0369A1]">
        <span className="flex items-center gap-1.5">
          <PenTool className="w-3.5 h-3.5 text-[#0284C7]" />
          <span>BlogNest Publishing Engine</span>
        </span>
        <span className="bg-sky-100 text-[#0284C7] px-2 py-0.5 rounded-full text-[11px] font-bold">
          CRUD: Active
        </span>
      </div>
      <div className="bg-white rounded-lg p-3 border border-sky-100 shadow-2xs mb-2">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-[10px] uppercase font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded">
            Engineering
          </span>
          <span className="text-[10px] text-slate-400">4 min read • Published</span>
        </div>
        <h5 className="text-xs sm:text-sm font-bold text-[#1E293B] line-clamp-1">
          Building Resilient Full-Stack Applications with MERN Architecture
        </h5>
        <p className="text-[11px] text-slate-600 line-clamp-2 mt-1">
          Exploring API design patterns, MongoDB schema structuring, and state caching for optimal front-end responsiveness...
        </p>
      </div>
      <div className="flex items-center justify-between text-[11px] text-[#64748B] pt-1">
        <span className="text-[#0284C7] font-medium">MongoDB • Express • React</span>
        <span className="flex items-center gap-1">
          <CheckCircle2 className="w-3 h-3 text-sky-500" /> Full CRUD Suite
        </span>
      </div>
    </div>
  );
}

// Interactive Tasteful Mockup for SmartSpend
function SmartSpendPreview() {
  return (
    <div className="w-full bg-gradient-to-br from-indigo-50/80 via-blue-50/50 to-sky-50/80 p-5 rounded-xl border border-[#DCEEFF] text-left">
      <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#BFDBFE]/50 text-xs font-semibold text-[#3730A3]">
        <span className="flex items-center gap-1.5">
          <DollarSign className="w-3.5 h-3.5 text-[#4F46E5]" />
          <span>SmartSpend • AI Finance Dashboard</span>
        </span>
        <span className="bg-indigo-100 text-[#4338CA] px-2 py-0.5 rounded-full text-[11px] font-bold">
          MySQL + AI API
        </span>
      </div>
      <div className="grid grid-cols-2 gap-2 mb-2">
        <div className="bg-white p-2.5 rounded-lg border border-indigo-100 shadow-2xs">
          <span className="text-[10px] text-slate-500 font-medium">Monthly Budget</span>
          <div className="text-xs sm:text-sm font-bold text-[#1E293B]">$1,200.00</div>
          <div className="w-full bg-slate-100 h-1.5 rounded-full mt-1.5 overflow-hidden">
            <div className="bg-indigo-500 h-full w-3/4 rounded-full" />
          </div>
        </div>
        <div className="bg-white p-2.5 rounded-lg border border-indigo-100 shadow-2xs">
          <span className="text-[10px] text-slate-500 font-medium">Total Spent</span>
          <div className="text-xs sm:text-sm font-bold text-indigo-600">$840.50</div>
          <span className="text-[10px] text-emerald-600 font-semibold flex items-center gap-0.5 mt-1">
            <TrendingUp className="w-2.5 h-2.5" /> 70% of Cap
          </span>
        </div>
      </div>
      <div className="bg-white/90 p-2 rounded-lg border border-indigo-100 flex items-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
        <span className="text-[11px] text-slate-700 italic">
          <strong>AI Insight:</strong> Grocery spending is within safe margins. 15% budget remaining for savings!
        </span>
      </div>
    </div>
  );
}

export default function Projects({ onSelectProject }) {
  const [selectedTech, setSelectedTech] = useState('All');

  const allTechs = ['All', 'React.js', 'Node.js', 'MongoDB', 'Java', 'OpenAI API'];

  const filteredProjects = selectedTech === 'All'
    ? projects
    : projects.filter(p => p.technologies.some(t => t.toLowerCase().includes(selectedTech.toLowerCase())));

  return (
    <section id="projects" className="py-20 lg:py-28 bg-[#F7FBFF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-xs font-semibold text-[#1E40AF] mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Portfolio Highlights</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E293B] tracking-tight mb-4">
            Featured <span className="text-gradient-blue">Projects</span>
          </h2>
          <p className="text-base text-[#475569] leading-relaxed">
            Full-stack web applications and software systems built with modern frameworks, robust database design, and clean architecture.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {allTechs.map((tech) => (
            <button
              key={tech}
              onClick={() => setSelectedTech(tech)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                selectedTech === tech
                  ? 'bg-[#3B82F6] text-white shadow-soft'
                  : 'bg-white text-[#475569] hover:text-[#1E293B] hover:bg-[#EFF6FF] border border-[#DCEEFF]'
              }`}
            >
              {tech}
            </button>
          ))}
        </div>

        {/* Responsive Grid: Two Columns on Desktop, One on Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {filteredProjects.map((project, index) => {
            return (
              <motion.div
                key={project.id}
                className="bg-white rounded-2xl border border-[#DCEEFF] shadow-card hover:shadow-soft hover:border-[#BFDBFE] transition-all duration-300 flex flex-col justify-between overflow-hidden group"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div>
                  {/* Card Header & Preview */}
                  <div className="p-6 pb-4">
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#3B82F6] bg-[#EFF6FF] px-2.5 py-1 rounded-md border border-[#BFDBFE]">
                          {project.category}
                        </span>
                      </div>
                      <span className="text-xs font-semibold text-[#64748B] bg-slate-100 px-2.5 py-0.5 rounded-full">
                        {project.badge}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-[#1E293B] group-hover:text-[#2563EB] transition-colors mb-2">
                      {project.title}
                    </h3>
                    
                    <p className="text-sm text-[#475569] leading-relaxed mb-5">
                      {project.shortDescription}
                    </p>

                    {/* Interactive UI Mockup Representation */}
                    <div className="mb-5">
                      {project.previewType === 'quiz' && <QuizzlePreview />}
                      {project.previewType === 'blog' && <BlogNestPreview />}
                      {project.previewType === 'finance' && <SmartSpendPreview />}
                    </div>

                    {/* Core Features List */}
                    <div className="space-y-2 mb-5">
                      <span className="text-xs font-bold text-[#1E293B] block">
                        Key Capabilities:
                      </span>
                      <ul className="space-y-1.5">
                        {project.features.slice(0, 3).map((feat, fIdx) => (
                          <li key={fIdx} className="text-xs text-[#475569] flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#3B82F6] shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 text-xs font-medium text-[#1E40AF] bg-[#EFF6FF] border border-[#DCEEFF] rounded-lg"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="px-6 py-4 bg-[#F8FAFC] border-t border-[#EFF6FF] flex items-center justify-between gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#475569] hover:text-[#1E293B] bg-white px-3.5 py-2 rounded-xl border border-[#DCEEFF] hover:border-[#BFDBFE] transition-colors shadow-2xs"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>View Repository</span>
                  </a>

                  <button
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-[#3B82F6] hover:bg-[#2563EB] px-4 py-2 rounded-xl shadow-xs hover:shadow transition-all"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Project Details</span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* GitHub Repositories Callout */}
        <div className="mt-12 text-center bg-white rounded-2xl p-6 border border-[#DCEEFF] max-w-2xl mx-auto shadow-2xs">
          <p className="text-xs sm:text-sm text-[#475569] mb-3">
            Want to see the code implementations and more repositories?
          </p>
          <a
            href="https://github.com/Sanjanaa1604"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-[#1E40AF] bg-[#EFF6FF] hover:bg-[#DCEEFF] border border-[#BFDBFE] transition-colors"
          >
            <Github className="w-4 h-4 text-[#2563EB]" />
            <span>Explore Sanjanaa's GitHub Repositories</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

      </div>
    </section>
  );
}

