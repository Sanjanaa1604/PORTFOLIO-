import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import ProjectModal from './components/ProjectModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-screen bg-[#F7FBFF] text-[#475569] font-sans relative selection:bg-[#DCEEFF] selection:text-[#1E293B]">
      {/* Sticky Navigation Bar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* About Me Section (Includes CIT Academic Information) */}
        <About />

        {/* Internship Experience Section (Dnyx Academy & EduSkills) */}
        <Experience />

        {/* Technical Skills Section */}
        <Skills />

        {/* Featured Projects Section */}
        <Projects onSelectProject={(project) => setSelectedProject(project)} />

        {/* Certifications & Achievements Section */}
        <Achievements />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modal Previews */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
