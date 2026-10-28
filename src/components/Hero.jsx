import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Download,
  Mail,
  Github,
  Linkedin,
  Code2,
  Sparkles
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing effect for the rotating roles
  useEffect(() => {
    const currentRole = personalInfo.roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
        if (displayedText.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex]);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 72;
      const topPos = element.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({ top: topPos, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] pt-28 pb-16 lg:pt-36 lg:pb-20 flex items-center bg-gradient-to-b from-[#F7FBFF] via-[#EFF6FF]/60 to-[#F7FBFF] overflow-hidden"
    >
      {/* Background Subtle Grid Pattern & Soft Ambient Glow */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-12 left-1/4 w-96 h-96 bg-[#DCEEFF]/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-[#93C5FD]/25 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* LEFT SIDE: Introductory Details */}
          <motion.div
            className="lg:col-span-7 flex flex-col justify-center text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Top Pill Greeting */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-xs font-semibold text-[#1E40AF] w-fit mb-4 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#3B82F6] animate-pulse" />
              <span>Available for Software Engineering Internships</span>
            </div>

            {/* Small Introductory Text */}
            <p className="text-base sm:text-lg font-medium text-[#64748B] mb-1">
              Hello, I'm
            </p>

            {/* Large Name Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1E293B] tracking-tight mb-2">
              <span className="text-gradient">{personalInfo.name}</span>
            </h1>

            {/* Subtitle */}
            <h2 className="text-xl sm:text-2xl font-semibold text-[#2563EB] mb-3">
              {personalInfo.title}
            </h2>

            {/* Subtle Typing Animation */}
            <div className="flex items-center h-8 sm:h-9 mb-5 text-[#475569] font-medium text-base sm:text-lg">
              <span className="mr-2 text-[#94A3B8] font-mono">&gt;</span>
              <span className="text-[#1E293B] font-semibold">{displayedText}</span>
              <span className="w-0.5 h-5 ml-1 bg-[#3B82F6] animate-pulse" />
            </div>

            {/* Professional Summary based on resume */}
            <p className="text-[#475569] text-sm sm:text-base leading-relaxed max-w-2xl mb-8">
              Computer Science and Engineering student at <strong className="text-[#1E293B] font-semibold">{personalInfo.institution}</strong> with a strong foundation in full-stack web development and algorithmic problem solving. Experienced in building responsive MERN and Python applications, with <span className="font-semibold text-[#2563EB] bg-[#DCEEFF]/60 px-1.5 py-0.5 rounded">400+ LeetCode problems</span> solved.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8">
              {/* Button 1: View My Projects */}
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, 'projects')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-[#3B82F6] hover:bg-[#2563EB] shadow-sm hover:shadow-soft transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Button 2: Download Resume */}
              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-[#1E40AF] bg-white hover:bg-[#EFF6FF] border border-[#BFDBFE] shadow-2xs hover:shadow-soft transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Download className="w-4 h-4 text-[#3B82F6]" />
                <span>Download Resume</span>
              </button>

              {/* Button 3: Contact Me */}
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-[#475569] hover:text-[#1E293B] hover:bg-white/80 border border-transparent hover:border-[#DCEEFF] transition-all duration-200"
              >
                <Mail className="w-4 h-4 text-[#64748B]" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social & Professional Links */}
            <div className="flex items-center gap-4 pt-2 border-t border-[#DCEEFF]">
              <span className="text-xs font-medium text-[#64748B]">Profiles:</span>
              <div className="flex items-center gap-2.5">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white text-[#475569] hover:text-[#1E293B] hover:bg-[#EFF6FF] border border-[#DCEEFF] shadow-2xs hover:shadow transition-all duration-200 hover:-translate-y-0.5"
                  aria-label="GitHub Profile"
                  title="GitHub: Sanjanaa1604"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white text-[#475569] hover:text-[#0A66C2] hover:bg-[#EFF6FF] border border-[#DCEEFF] shadow-2xs hover:shadow transition-all duration-200 hover:-translate-y-0.5"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn: Sanjanaa S"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2.5 rounded-xl bg-white text-[#475569] hover:text-[#EA4335] hover:bg-[#EFF6FF] border border-[#DCEEFF] shadow-2xs hover:shadow transition-all duration-200 hover:-translate-y-0.5"
                  aria-label="Send Email"
                  title={`Email: ${personalInfo.email}`}
                >
                  <Mail className="w-4 h-4" />
                </a>

                <a
                  href={personalInfo.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white text-[#475569] hover:text-[#FFA116] hover:bg-[#FFFBEB] border border-[#DCEEFF] shadow-2xs hover:shadow transition-all duration-200 text-xs font-semibold hover:-translate-y-0.5"
                  aria-label="LeetCode Profile"
                  title="LeetCode: 400+ Problems Solved"
                >
                  <Code2 className="w-3.5 h-3.5 text-[#FFA116]" />
                  <span>LeetCode 400+</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Clean Profile Picture Showcase without floating details */}
          <motion.div
            className="lg:col-span-5 flex justify-center items-center relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative">
              {/* Soft Ambient Pastel Glow Behind Photo */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#93C5FD]/30 to-[#DCEEFF]/50 rounded-3xl blur-2xl -z-10" />

              {/* Outer decorative pastel border frame */}
              <div className="p-3 bg-gradient-to-b from-[#DCEEFF] via-[#EFF6FF] to-white rounded-3xl border border-[#BFDBFE] shadow-soft">

                {/* Profile Photo Container */}
                <div className="w-64 h-80 sm:w-72 sm:h-92 md:w-80 md:h-100 rounded-2xl overflow-hidden bg-slate-100 shadow-inner relative">
                  <img
                    src={personalInfo.profilePhoto}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-center transform hover:scale-102 transition-transform duration-500"
                    loading="eager"
                  />
                  {/* Subtle bottom shadow vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/15 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Bottom Quick Metrics Bar */}
        <motion.div
          className="mt-14 pt-8 border-t border-[#DCEEFF]/80 grid grid-cols-2 sm:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {personalInfo.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="bg-white/80 backdrop-blur-xs p-4 rounded-2xl border border-[#DCEEFF] shadow-2xs hover:shadow-soft hover:bg-white transition-all duration-200"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-[#2563EB]">
                {metric.value}
              </div>
              <div className="text-xs font-bold text-[#1E293B] mt-0.5">
                {metric.label}
              </div>
              <div className="text-[11px] text-[#64748B] mt-0.5 truncate">
                {metric.detail}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
