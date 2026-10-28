import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Layout, 
  Database, 
  Brain, 
  Wrench, 
  UserCheck, 
  Sparkles,
  CheckCircle2,
  GitBranch,
  Terminal,
  FileCode2,
  Layers,
  Server,
  Boxes,
  Cpu,
  Coffee,
  Globe,
  Palette,
  Workflow,
  Box,
  Github,
  FileCode,
  Users,
  MessageSquare,
  Compass,
  Clock,
  RefreshCw
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

// Icon mapping helper
const iconMap = {
  Code2,
  FileCode2,
  Code: Code2,
  Terminal,
  Cpu,
  Coffee,
  Atom: Sparkles,
  Server,
  Boxes,
  Globe,
  Palette,
  Sparkles,
  Layers,
  Database,
  Workflow,
  Box,
  GitBranch,
  Github,
  FileCode,
  CheckCircle: CheckCircle2,
  Users,
  MessageSquare,
  Compass,
  Clock,
  RefreshCw,
  Layout,
  Brain,
  Wrench,
  UserCheck
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...skillCategories.map(c => c.title)];

  const filteredCategories = selectedCategory === 'All'
    ? skillCategories
    : skillCategories.filter(c => c.title === selectedCategory);

  return (
    <section id="skills" className="py-20 lg:py-28 bg-[#F7FBFF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-xs font-semibold text-[#1E40AF] mb-3">
            <Code2 className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E293B] tracking-tight mb-4">
            My <span className="text-gradient-blue">Skills</span>
          </h2>
          <p className="text-base text-[#475569] leading-relaxed">
            Technologies, programming languages, frameworks, and core engineering concepts practiced through projects and coursework.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-[#3B82F6] text-white shadow-soft shadow-blue-200'
                  : 'bg-white text-[#475569] hover:text-[#1E293B] hover:bg-[#EFF6FF] border border-[#DCEEFF]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category, index) => {
            const CategoryIcon = iconMap[category.icon] || Code2;

            return (
              <motion.div
                key={category.title}
                className="bg-white rounded-2xl p-6 border border-[#DCEEFF] shadow-card hover:shadow-soft hover:border-[#BFDBFE] transition-all duration-300 flex flex-col justify-between"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-5 pb-4 border-b border-[#EFF6FF]">
                    <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center text-[#2563EB]">
                      <CategoryIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#1E293B]">
                        {category.title}
                      </h3>
                      <span className="text-[11px] text-[#64748B]">
                        {category.skills.length} skills listed
                      </span>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-1 gap-2.5">
                    {category.skills.map((skill, sIdx) => {
                      const SkillIcon = iconMap[skill.icon] || Code2;
                      return (
                        <div
                          key={sIdx}
                          className="group flex items-center justify-between p-2.5 rounded-xl bg-[#F8FAFC] hover:bg-[#EFF6FF] border border-transparent hover:border-[#BFDBFE] transition-all duration-200"
                        >
                          <div className="flex items-center gap-2.5">
                            <div className="w-7 h-7 rounded-lg bg-white border border-[#E2E8F0] group-hover:border-[#BFDBFE] flex items-center justify-center text-[#475569] group-hover:text-[#2563EB] transition-colors">
                              <SkillIcon className="w-3.5 h-3.5" />
                            </div>
                            <span className="text-xs sm:text-sm font-semibold text-[#1E293B]">
                              {skill.name}
                            </span>
                          </div>
                          
                          {skill.highlight && (
                            <span className="text-[11px] font-medium text-[#64748B] group-hover:text-[#2563EB] bg-white group-hover:bg-white px-2 py-0.5 rounded-md border border-[#E2E8F0] transition-colors">
                              {skill.highlight}
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Bottom subtle accent bar */}
                <div className="mt-5 pt-3 border-t border-[#EFF6FF] flex items-center justify-between text-[11px] text-[#94A3B8]">
                  <span>Verified via Resume</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

