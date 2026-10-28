import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2, Building, ExternalLink, Layers } from 'lucide-react';
import { internships } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-28 bg-[#EFF6FF]/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-xs font-semibold text-[#1E40AF] mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Practical Industry Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E293B] tracking-tight mb-4">
            Internship <span className="text-gradient-blue">Experience</span>
          </h2>
          <p className="text-base text-[#475569] leading-relaxed">
            Real-world software engineering internships focused on full-stack architecture, backend API development, and production workflows.
          </p>
        </div>

        {/* Experience Timeline Cards */}
        <div className="max-w-4xl mx-auto space-y-8">
          {internships.map((intern, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-[#DCEEFF] shadow-card hover:shadow-soft hover:border-[#BFDBFE] transition-all duration-300 relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              {/* Top Row: Role, Company, Period */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 pb-5 border-b border-[#EFF6FF]">
                <div className="flex items-start gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#EFF6FF] to-[#DCEEFF] border border-[#BFDBFE] flex items-center justify-center text-[#2563EB] shrink-0 mt-0.5">
                    <Building className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#1E293B] group-hover:text-[#2563EB] transition-colors">
                      {intern.role}
                    </h3>
                    <div className="flex items-center gap-2 text-sm font-semibold text-[#475569] mt-0.5">
                      <span>{intern.company}</span>
                      <span className="w-1 h-1 rounded-full bg-[#94A3B8]" />
                      <span className="text-xs text-[#2563EB] bg-[#EFF6FF] px-2 py-0.5 rounded-md border border-[#BFDBFE]">
                        {intern.badge}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-xs font-semibold text-[#64748B] w-fit">
                  <Calendar className="w-3.5 h-3.5 text-[#3B82F6]" />
                  <span>{intern.period}</span>
                </div>
              </div>

              {/* Bullet Points from Resume */}
              <ul className="space-y-3 mb-6">
                {intern.highlights.map((highlight, hIdx) => (
                  <li key={hIdx} className="flex items-start gap-3 text-sm text-[#475569] leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-[#3B82F6] shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies Pills */}
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <span className="text-xs font-semibold text-[#64748B] mr-1 flex items-center gap-1">
                  <Layers className="w-3.5 h-3.5 text-[#3B82F6]" />
                  Technologies:
                </span>
                {intern.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-1 text-xs font-medium text-[#1E40AF] bg-[#EFF6FF] border border-[#DCEEFF] rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

