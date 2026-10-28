import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  Trophy, 
  ShieldCheck, 
  Sparkles, 
  Flame, 
  Rocket, 
  Lock, 
  ExternalLink, 
  CheckCircle2,
  Building,
  GraduationCap
} from 'lucide-react';
import { certifications, achievements } from '../data/portfolioData';

export default function Achievements() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <section id="achievements" className="py-20 lg:py-28 bg-[#F7FBFF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-xs font-semibold text-[#1E40AF] mb-3">
            <Trophy className="w-3.5 h-3.5 text-[#3B82F6]" />
            <span>Honors & Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E293B] tracking-tight mb-4">
            Certifications & <span className="text-gradient-blue">Achievements</span>
          </h2>
          <p className="text-base text-[#475569] leading-relaxed">
            Recognized certifications from Cisco Networking Academy and Udemy, alongside competitive programming milestones and hackathon participation.
          </p>
        </div>

        {/* 1. KEY ACHIEVEMENTS (Top Priority Showcase) */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <Trophy className="w-5 h-5 text-[#2563EB]" />
            <h3 className="text-xl font-bold text-[#1E293B]">
              Key Milestones & Achievements
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((item, index) => {
              const iconComponents = {
                Flame: Flame,
                Trophy: Trophy,
                Rocket: Rocket
              };
              const IconComp = iconComponents[item.icon] || Trophy;

              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-6 border border-[#DCEEFF] shadow-card hover:shadow-soft hover:border-[#BFDBFE] transition-all duration-300 flex flex-col justify-between group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div>
                    {/* Top Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#EFF6FF] to-[#DCEEFF] border border-[#BFDBFE] flex items-center justify-center text-[#2563EB] group-hover:scale-110 transition-transform">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-bold text-[#1E40AF] bg-[#EFF6FF] px-2.5 py-1 rounded-full border border-[#BFDBFE]">
                        {item.badge}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-[#1E293B] group-hover:text-[#2563EB] transition-colors mb-2">
                      {item.title}
                    </h4>

                    <div className="text-xs font-semibold text-[#64748B] mb-3">
                      {item.organization} • {item.category}
                    </div>

                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-[#EFF6FF] flex items-center justify-between text-xs font-semibold text-[#2563EB]">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-[#3B82F6]" />
                      Verified Milestone
                    </span>
                    <span className="text-[11px] font-bold text-[#64748B]">
                      {item.highlight}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* 2. CERTIFICATIONS SECTION */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Award className="w-5 h-5 text-[#2563EB]" />
            <h3 className="text-xl font-bold text-[#1E293B]">
              Professional Certifications
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => {
              const iconMap = {
                ShieldCheck,
                Award,
                Lock,
                Sparkles
              };
              const CertIcon = iconMap[cert.icon] || Award;

              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-6 border border-[#DCEEFF] shadow-card hover:shadow-soft hover:border-[#BFDBFE] transition-all duration-300 flex flex-col justify-between"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div>
                    {/* Issuer Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center text-[#2563EB]">
                        <CertIcon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-semibold text-[#1E40AF] bg-[#EFF6FF] px-2 py-0.5 rounded-md border border-[#BFDBFE]">
                        {cert.badge}
                      </span>
                    </div>

                    <h4 className="text-sm sm:text-base font-bold text-[#1E293B] mb-2 leading-snug">
                      {cert.title}
                    </h4>

                    <div className="text-xs font-semibold text-[#3B82F6] mb-3">
                      {cert.issuer}
                    </div>

                    <p className="text-xs text-[#64748B] leading-relaxed">
                      {cert.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#EFF6FF] flex items-center justify-between text-[11px] text-[#64748B]">
                    <span>Credentialed</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

