import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { education } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 lg:py-28 bg-[#EFF6FF]/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-xs font-semibold text-[#1E40AF] mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E293B] tracking-tight mb-4">
            My <span className="text-gradient-blue">Education</span>
          </h2>
          <p className="text-base text-[#475569] leading-relaxed">
            Formal engineering foundation in Computer Science with a strong focus on algorithmic rigor, system design, and software craftsmanship.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="max-w-3xl mx-auto">
          {education.map((item, index) => (
            <motion.div
              key={index}
              className="relative pl-8 sm:pl-10 pb-8 last:pb-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* Timeline Vertical Line */}
              <div className="absolute left-3.5 sm:left-4 top-4 bottom-0 w-0.5 bg-[#BFDBFE]" />

              {/* Timeline Marker Dot */}
              <div className="absolute left-0 top-1.5 w-7 sm:w-8 h-7 sm:h-8 rounded-full bg-[#3B82F6] border-4 border-white shadow-soft flex items-center justify-center text-white">
                <GraduationCap className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
              </div>

              {/* Card Container */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#DCEEFF] shadow-card hover:shadow-soft hover:border-[#BFDBFE] transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3 pb-3 border-b border-[#EFF6FF]">
                  <div>
                    <span className="text-xs font-bold text-[#3B82F6] uppercase tracking-wider">
                      {item.specialization}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#1E293B] mt-0.5">
                      {item.degree}
                    </h3>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-xs font-bold text-[#1E40AF] w-fit">
                    <Award className="w-3.5 h-3.5 text-[#3B82F6]" />
                    <span>CGPA: {item.score}</span>
                  </div>
                </div>

                {/* Institution & Details */}
                <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm font-semibold text-[#475569] mb-4">
                  <span className="flex items-center gap-1.5 text-[#1E293B]">
                    <BookOpen className="w-4 h-4 text-[#3B82F6]" />
                    {item.institution}
                  </span>
                  <span className="flex items-center gap-1 text-[#64748B]">
                    <MapPin className="w-3.5 h-3.5 text-[#3B82F6]" />
                    Chennai, India
                  </span>
                </div>

                <p className="text-sm text-[#475569] leading-relaxed mb-5">
                  {item.description}
                </p>

                {/* Academic Highlights */}
                <div className="bg-[#F8FAFC] rounded-xl p-4 border border-[#EFF6FF]">
                  <h4 className="text-xs font-bold text-[#1E293B] uppercase tracking-wider mb-2.5">
                    Coursework & Key Milestones
                  </h4>
                  <ul className="space-y-2">
                    {item.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="text-xs sm:text-sm text-[#475569] flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#3B82F6] shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

