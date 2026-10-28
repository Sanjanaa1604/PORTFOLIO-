import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  MapPin, 
  BookOpen, 
  Code, 
  Sparkles, 
  Calendar,
  CheckCircle2,
  Briefcase,
  Terminal
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Proficient with MERN (MongoDB, Express, React, Node.js) and Python-based full-stack application development."
    },
    {
      icon: Terminal,
      title: "Problem Solving & DSA",
      description: "Strong foundation in data structures and algorithmic efficiency with 400+ problems solved on LeetCode."
    },
    {
      icon: Briefcase,
      title: "Industry Internships",
      description: "Hands-on experience developing backend APIs and responsive user interfaces at Dnyx Academy and EduSkills."
    },
    {
      icon: Sparkles,
      title: "AI & Innovation",
      description: "Practical exposure to AI API integration (SmartSpend Java App) and machine learning fundamentals."
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#F7FBFF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-xs font-semibold text-[#1E40AF] mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Discover My Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E293B] tracking-tight mb-4">
            About <span className="text-gradient-blue">Me</span>
          </h2>
          <p className="text-base text-[#475569] leading-relaxed">
            A dedicated Computer Science and Engineering student driven by curiosity, analytical thinking, and a commitment to writing clean, maintainable code.
          </p>
        </div>

        {/* Two-Column Grid: Biography & Information Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Biography & Core Narrative */}
          <motion.div 
            className="lg:col-span-7 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-2xl p-7 sm:p-8 border border-[#DCEEFF] shadow-card">
              <h3 className="text-xl font-bold text-[#1E293B] mb-4 flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#3B82F6]" />
                <span>Academic & Engineering Journey</span>
              </h3>
              
              <div className="space-y-4 text-sm sm:text-base text-[#475569] leading-relaxed">
                <p>
                  I am currently pursuing my <strong>Bachelor of Engineering in Computer Science and Engineering</strong> at <strong>Chennai Institute of Technology</strong>, maintaining an academic record of <strong>8.8 CGPA</strong>. My academic coursework has provided me with a rigorous foundation in Object-Oriented Programming (OOPs), Data Structures, Algorithms, and Modern Web Architectures.
                </p>
                <p>
                  My core development passion revolves around full-stack development. Through hands-on internships at <strong>Dnyx Academy</strong> and <strong>EduSkills</strong>, I have built production-ready applications, integrated RESTful APIs, handled complex database relationships with MongoDB and MySQL, and designed user interfaces that prioritize usability.
                </p>
                <p>
                  Beyond web development, I am an enthusiastic competitive programmer who has solved <strong>400+ problems on LeetCode</strong>. I believe that rigorous algorithmic practice directly translates into writing scalable, optimized, and bug-resistant code in real-world software engineering.
                </p>
              </div>

              {/* Core Strengths Checklist */}
              <div className="mt-6 pt-6 border-t border-[#EFF6FF] grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-medium text-[#1E293B]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#3B82F6] shrink-0" />
                  <span>MERN & Full-Stack Architecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#3B82F6] shrink-0" />
                  <span>Data Structures & Algorithmic Problem Solving</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#3B82F6] shrink-0" />
                  <span>Backend REST APIs & Database Design</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#3B82F6] shrink-0" />
                  <span>Clean UI/UX with Tailwind CSS</span>
                </div>
              </div>
            </div>

            {/* 4 Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div 
                    key={idx}
                    className="bg-white p-5 rounded-2xl border border-[#DCEEFF] shadow-2xs hover:shadow-soft hover:border-[#BFDBFE] transition-all duration-200"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center text-[#2563EB] mb-3">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold text-[#1E293B] mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#64748B] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Information Panel & Profile Highlights */}
          <motion.div 
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Quick Details Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#DCEEFF] shadow-card">
              <h3 className="text-base font-bold text-[#1E293B] mb-5 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-[#3B82F6]" />
                <span>Academic Information Panel</span>
              </h3>

              <div className="divide-y divide-[#EFF6FF] text-sm">
                
                <div className="py-3 flex items-start justify-between gap-4">
                  <span className="text-xs font-semibold text-[#64748B] uppercase tracking-wider flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-[#3B82F6]" />
                    College
                  </span>
                  <span className="text-right font-semibold text-[#1E293B]">
                    {personalInfo.institution}
                  </span>
                </div>

                <div className="py-3 flex items-start justify-between gap-4">
                  <span className="text-xs font-semibold text-[#64748B] uppercase tracking-wider flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-[#3B82F6]" />
                    Degree
                  </span>
                  <span className="text-right font-semibold text-[#1E293B]">
                    {personalInfo.degree}
                  </span>
                </div>

                <div className="py-3 flex items-start justify-between gap-4">
                  <span className="text-xs font-semibold text-[#64748B] uppercase tracking-wider flex items-center gap-1.5">
                    <Code className="w-3.5 h-3.5 text-[#3B82F6]" />
                    Department
                  </span>
                  <span className="text-right font-semibold text-[#1E293B]">
                    {personalInfo.department}
                  </span>
                </div>

                <div className="py-3 flex items-start justify-between gap-4">
                  <span className="text-xs font-semibold text-[#64748B] uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#3B82F6]" />
                    CGPA
                  </span>
                  <span className="text-right font-bold text-[#2563EB] bg-[#EFF6FF] px-2.5 py-0.5 rounded-full border border-[#BFDBFE]">
                    8.8 / 10.0
                  </span>
                </div>

                <div className="py-3 flex items-start justify-between gap-4">
                  <span className="text-xs font-semibold text-[#64748B] uppercase tracking-wider flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#3B82F6]" />
                    Location
                  </span>
                  <span className="text-right font-semibold text-[#1E293B]">
                    {personalInfo.location}
                  </span>
                </div>

                <div className="py-3 flex items-start justify-between gap-4">
                  <span className="text-xs font-semibold text-[#64748B] uppercase tracking-wider flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#3B82F6]" />
                    Date of Birth
                  </span>
                  <span className="text-right font-medium text-[#1E293B]">
                    {personalInfo.dob}
                  </span>
                </div>

              </div>
            </div>

            {/* Quote / Philosophy Box */}
            <div className="bg-gradient-to-br from-[#EFF6FF] via-[#DCEEFF]/50 to-[#EFF6FF] rounded-2xl p-6 border border-[#BFDBFE] text-left">
              <span className="text-3xl text-[#3B82F6] font-serif leading-none block mb-2">“</span>
              <p className="text-xs sm:text-sm font-medium text-[#1E3A8A] leading-relaxed italic">
                I love turning complex software problems into intuitive, well-crafted applications. Combining algorithmic depth with modern full-stack development lets me build software that works seamlessly and scales reliably.
              </p>
              <div className="mt-4 pt-3 border-t border-[#BFDBFE]/60 flex items-center justify-between text-xs">
                <span className="font-bold text-[#1E293B]">{personalInfo.name}</span>
                <span className="text-[#3B82F6] font-medium">B.E. CSE Student</span>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

