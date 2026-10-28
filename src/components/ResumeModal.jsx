import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Download, 
  Printer, 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  ExternalLink,
  GraduationCap,
  Briefcase,
  Code2,
  Award,
  CheckCircle2,
  Calendar
} from 'lucide-react';
import { personalInfo, internships, education, projects, certifications, achievements } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        {/* Modal Dialog */}
        <motion.div
          className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-[#DCEEFF] overflow-hidden z-10 my-6 flex flex-col max-h-[92vh]"
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.25 }}
        >
          {/* Top Bar Controls */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#EFF6FF] bg-[#F8FAFC]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#3B82F6]" />
              <h3 className="text-sm font-bold text-[#1E293B]">
                Resume Preview • Sanjanaa S
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#475569] hover:text-[#1E293B] bg-white border border-[#DCEEFF] hover:border-[#BFDBFE] transition-colors"
                title="Print or Save as PDF"
              >
                <Printer className="w-3.5 h-3.5 text-[#3B82F6]" />
                <span className="hidden sm:inline">Print / Save PDF</span>
              </button>

              <a
                href={personalInfo.resumeUrl}
                download="Sanjanaa_S_Resume.pdf"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-[#3B82F6] hover:bg-[#2563EB] transition-colors shadow-xs"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </a>

              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-[#64748B] hover:text-[#1E293B] hover:bg-white transition-colors"
                aria-label="Close resume preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Resume Document Container */}
          <div className="p-6 sm:p-10 overflow-y-auto text-left bg-white text-[#1E293B] print:p-0 print:m-0" id="printable-resume">
            
            {/* Header */}
            <div className="text-center border-b border-slate-300 pb-5 mb-6">
              <h1 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-wide text-[#1E293B] mb-2 font-serif">
                SANJANAA S
              </h1>
              
              <div className="flex flex-wrap items-center justify-center gap-y-1 gap-x-4 text-xs font-medium text-[#475569]">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#3B82F6]" /> {personalInfo.dob}
                </span>
                <span>•</span>
                <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-1 hover:text-[#2563EB]">
                  <Mail className="w-3.5 h-3.5 text-[#3B82F6]" /> {personalInfo.email}
                </a>
                <span>•</span>
                <a href={`tel:${personalInfo.phoneRaw}`} className="flex items-center gap-1 hover:text-[#2563EB]">
                  <Phone className="w-3.5 h-3.5 text-[#3B82F6]" /> {personalInfo.phoneRaw}
                </a>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-y-1 gap-x-4 text-xs font-medium text-[#2563EB] mt-2">
                <a 
                  href={personalInfo.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-1 hover:underline text-[#0A66C2]"
                >
                  <Linkedin className="w-3.5 h-3.5" /> {personalInfo.linkedin}
                </a>
                <span>•</span>
                <a 
                  href={personalInfo.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-1 hover:underline text-[#1E293B]"
                >
                  <Github className="w-3.5 h-3.5" /> {personalInfo.github}
                </a>
              </div>
            </div>

            {/* EDUCATION */}
            <div className="mb-6">
              <h2 className="text-sm font-bold uppercase tracking-wider text-[#1E293B] border-b border-slate-300 pb-1 mb-2 font-serif">
                EDUCATION
              </h2>
              <div className="text-xs sm:text-sm">
                <div className="flex justify-between items-baseline font-bold text-[#1E293B]">
                  <span>{education[0].degree}, {education[0].institution}</span>
                </div>
                <div className="flex justify-between items-baseline text-[#475569] font-medium mt-0.5">
                  <span>{education[0].specialization}</span>
                </div>
                <div className="mt-1 font-semibold text-[#1E293B]">
                  CGPA – <span className="font-bold text-[#2563EB]">{education[0].score.split(' ')[0]}</span>
                </div>
              </div>
            </div>

            {/* INTERNSHIP EXPERIENCE */}
            <div className="mb-6">
              <h2 className="text-sm font-bold uppercase tracking-wider text-[#1E293B] border-b border-slate-300 pb-1 mb-3 font-serif">
                INTERNSHIP EXPERIENCE
              </h2>
              
              <div className="space-y-4">
                {/* Dnyx Academy */}
                <div>
                  <div className="flex justify-between items-baseline text-xs sm:text-sm font-bold text-[#1E293B]">
                    <span>MERN Full Stack Intern, Dnyx Academy</span>
                    <span className="font-medium text-slate-500">May 2026 – Jun 2026</span>
                  </div>
                  <ul className="list-disc list-inside text-xs text-[#475569] mt-1.5 space-y-1">
                    <li>Developed full-stack web applications using the MERN stack.</li>
                    <li>Implemented backend APIs, database integration, and responsive user interfaces.</li>
                    <li>Collaborated on real-world projects following modern web development practices.</li>
                  </ul>
                </div>

                {/* EduSkills */}
                <div>
                  <div className="flex justify-between items-baseline text-xs sm:text-sm font-bold text-[#1E293B]">
                    <span>Python Full Stack Developer Intern, EduSkills</span>
                    <span className="font-medium text-slate-500">Virtual Internship</span>
                  </div>
                  <ul className="list-disc list-inside text-xs text-[#475569] mt-1.5 space-y-1">
                    <li>Worked on Python-based web application development and backend programming.</li>
                    <li>Gained hands-on experience in full-stack development concepts and software development workflows.</li>
                    <li>Developed problem-solving and debugging skills through project-based learning.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* PROJECTS */}
            <div className="mb-6">
              <h2 className="text-sm font-bold uppercase tracking-wider text-[#1E293B] border-b border-slate-300 pb-1 mb-3 font-serif">
                PROJECTS
              </h2>

              <div className="space-y-4">
                {/* Quizzle */}
                <div>
                  <div className="text-xs sm:text-sm font-bold text-[#1E293B]">
                    Quizzle
                  </div>
                  <div className="text-xs italic text-slate-500">Full Stack Web Application</div>
                  <ul className="list-disc list-inside text-xs text-[#475569] mt-1 space-y-0.5">
                    <li>Developed a full-stack quiz platform for interactive learning and assessment.</li>
                    <li>Implemented user authentication, score tracking, and quiz management features.</li>
                    <li>Designed responsive interfaces and integrated database functionality for efficient data handling.</li>
                  </ul>
                </div>

                {/* BlogNest */}
                <div>
                  <div className="text-xs sm:text-sm font-bold text-[#1E293B]">
                    BlogNest
                  </div>
                  <div className="text-xs italic text-slate-500">Blog Management Platform</div>
                  <ul className="list-disc list-inside text-xs text-[#475569] mt-1 space-y-0.5">
                    <li>Developed a blogging platform enabling users to create, edit, and manage blog posts.</li>
                    <li>Implemented CRUD operations and database integration for content management.</li>
                    <li>Designed a responsive user interface for an enhanced user experience.</li>
                  </ul>
                </div>

                {/* SmartSpend */}
                <div>
                  <div className="text-xs sm:text-sm font-bold text-[#1E293B]">
                    SmartSpend – Expense Tracker with AI (Java)
                  </div>
                  <div className="text-xs italic text-slate-500">Personal Finance Management Application</div>
                  <ul className="list-disc list-inside text-xs text-[#475569] mt-1 space-y-0.5">
                    <li>Developed a Java-based expense tracking application with AI-powered spending insights.</li>
                    <li>Implemented features like expense categorization, budget planning, and personalized recommendations.</li>
                    <li>Integrated data persistence using MySQL and built a clean, user-friendly interface.</li>
                  </ul>
                  <div className="text-xs text-[#1E293B] font-semibold mt-1">
                    Technology Used: <span className="font-normal text-slate-600">Java, MySQL, HTML, CSS, JavaScript, AI (OpenAI API)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* TECHNICAL SKILLS */}
            <div className="mb-6">
              <h2 className="text-sm font-bold uppercase tracking-wider text-[#1E293B] border-b border-slate-300 pb-1 mb-2 font-serif">
                TECHNICAL SKILLS
              </h2>
              
              <div className="border border-slate-300 text-xs">
                <div className="grid grid-cols-2 divide-x divide-slate-300 border-b border-slate-300">
                  <div className="p-2 text-center">
                    <span className="font-bold block mb-0.5">Programming Languages</span>
                    <span className="text-slate-600">Python, C, C++, JavaScript</span>
                  </div>
                  <div className="p-2 text-center">
                    <span className="font-bold block mb-0.5">Web Technologies</span>
                    <span className="text-slate-600">HTML, CSS, Tailwind CSS, Express.js, Node.js</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 divide-x divide-slate-300 border-b border-slate-300">
                  <div className="p-2 text-center">
                    <span className="font-bold block mb-0.5">Database</span>
                    <span className="text-slate-600">MySQL, MongoDB</span>
                  </div>
                  <div className="p-2 text-center">
                    <span className="font-bold block mb-0.5">Programming Concepts</span>
                    <span className="text-slate-600">OOPs, Data Structures and Algorithms (DSA)</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 divide-x divide-slate-300">
                  <div className="p-2 text-center">
                    <span className="font-bold block mb-0.5">Development Tools</span>
                    <span className="text-slate-600">VS Code</span>
                  </div>
                  <div className="p-2 text-center">
                    <span className="font-bold block mb-0.5">Version Control</span>
                    <span className="text-slate-600">Git, GitHub</span>
                  </div>
                </div>
              </div>

              {/* Soft Skills */}
              <div className="mt-2 text-center text-xs font-semibold text-[#1E293B]">
                <span className="font-bold">Soft Skills:</span> Communication • Team Collaboration • Problem Solving • Leadership • Time Management • Adaptability
              </div>
            </div>

            {/* CERTIFICATES */}
            <div className="mb-6">
              <h2 className="text-sm font-bold uppercase tracking-wider text-[#1E293B] border-b border-slate-300 pb-1 mb-2 font-serif">
                CERTIFICATES
              </h2>
              <ul className="list-disc list-inside text-xs text-[#475569] space-y-1">
                <li>Python Essentials 1 – Cisco Networking Academy</li>
                <li>Python Essentials 2 – Cisco Networking Academy</li>
                <li>Introduction to Cybersecurity – Cisco Networking Academy</li>
                <li>Complete Data Science, Machine Learning, Deep Learning &amp; NLP Bootcamp – Udemy</li>
              </ul>
            </div>

            {/* ACHIEVEMENTS */}
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-[#1E293B] border-b border-slate-300 pb-1 mb-2 font-serif">
                ACHIEVEMENTS
              </h2>
              <ul className="list-disc list-inside text-xs text-[#475569] space-y-1">
                <li>Solved 400+ problems on LeetCode.</li>
                <li>Participated in EY Techathon 6.0.</li>
                <li>Participated in E-Summit '25.</li>
              </ul>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

