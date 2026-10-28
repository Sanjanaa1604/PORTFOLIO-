import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Send, 
  Linkedin, 
  Github, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  ExternalLink,
  MessageSquare,
  Sparkles,
  AlertCircle
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [copied, setCopied] = useState(false);
  const [submittedStatus, setSubmittedStatus] = useState(null);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your name.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters.';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Honest mailto-based trigger
    const subjectEncoded = encodeURIComponent(formData.subject || `Portfolio Inquiry from ${formData.name}`);
    const bodyEncoded = encodeURIComponent(
      `Hello Sanjanaa,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
    );
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;

    // Open mail client
    window.location.href = mailtoUrl;

    // Show transparent status notification
    setSubmittedStatus({
      type: 'mailto',
      message: 'Your default email client has been opened with your prefilled message to ssanjanaa2007@gmail.com!'
    });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#EFF6FF]/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-xs font-semibold text-[#1E40AF] mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-[#3B82F6]" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E293B] tracking-tight mb-4">
            Let's <span className="text-gradient-blue">Connect</span>
          </h2>
          <p className="text-base text-[#475569] leading-relaxed">
            I am actively seeking software engineering internships and collaborative development opportunities. Feel free to reach out directly or drop a message!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* LEFT: Contact Information & Direct Channels */}
          <motion.div 
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#DCEEFF] shadow-card">
              <h3 className="text-xl font-bold text-[#1E293B] mb-2">
                Contact Information
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] mb-6">
                Have an internship opportunity, project idea, or just want to chat about tech?
              </p>

              <div className="space-y-4">
                {/* Email Item */}
                <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#EFF6FF] flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center text-[#2563EB] shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="truncate">
                      <span className="text-[11px] font-semibold text-[#64748B] block">Email</span>
                      <a 
                        href={`mailto:${personalInfo.email}`}
                        className="text-xs sm:text-sm font-bold text-[#1E293B] hover:text-[#2563EB] truncate block"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg text-[#64748B] hover:text-[#1E293B] hover:bg-white transition-colors shrink-0"
                    title="Copy email to clipboard"
                    aria-label="Copy email"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#EFF6FF] flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center text-[#2563EB] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-[#64748B] block">Phone</span>
                    <a 
                      href={`tel:${personalInfo.phoneRaw}`}
                      className="text-xs sm:text-sm font-bold text-[#1E293B] hover:text-[#2563EB]"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Location Item */}
                <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#EFF6FF] flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center text-[#2563EB] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-[#64748B] block">Location</span>
                    <span className="text-xs sm:text-sm font-bold text-[#1E293B]">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Channels List */}
              <div className="mt-8 pt-6 border-t border-[#EFF6FF]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#64748B] mb-3">
                  Professional Profiles
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white hover:bg-[#EFF6FF] border border-[#DCEEFF] hover:border-[#BFDBFE] flex items-center gap-2.5 transition-all group"
                  >
                    <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                    <span className="text-xs font-semibold text-[#1E293B] group-hover:text-[#0A66C2]">
                      LinkedIn
                    </span>
                  </a>

                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white hover:bg-[#EFF6FF] border border-[#DCEEFF] hover:border-[#BFDBFE] flex items-center gap-2.5 transition-all group"
                  >
                    <Github className="w-4 h-4 text-[#1E293B]" />
                    <span className="text-xs font-semibold text-[#1E293B] group-hover:text-[#2563EB]">
                      GitHub
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Contact Form */}
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#DCEEFF] shadow-card">
              <h3 className="text-xl font-bold text-[#1E293B] mb-1">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] mb-6">
                Fill in the details below to compose an inquiry directly to Sanjanaa's verified mailbox.
              </p>

              {submittedStatus && (
                <div className="mb-6 p-4 rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-[#1E40AF]">
                    {submittedStatus.message}
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-semibold text-[#1E293B] mb-1.5">
                      Your Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Johnson"
                      className={`w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-[#F8FAFC] border ${
                        errors.name ? 'border-rose-400 focus:border-rose-500' : 'border-[#DCEEFF] focus:border-[#3B82F6]'
                      } focus:bg-white focus:outline-none transition-colors text-[#1E293B]`}
                    />
                    {errors.name && (
                      <span className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-xs font-semibold text-[#1E293B] mb-1.5">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. alex@company.com"
                      className={`w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-[#F8FAFC] border ${
                        errors.email ? 'border-rose-400 focus:border-rose-500' : 'border-[#DCEEFF] focus:border-[#3B82F6]'
                      } focus:bg-white focus:outline-none transition-colors text-[#1E293B]`}
                    />
                    {errors.email && (
                      <span className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label className="block text-xs font-semibold text-[#1E293B] mb-1.5">
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Full-Stack Internship Opportunity"
                    className="w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-[#F8FAFC] border border-[#DCEEFF] focus:border-[#3B82F6] focus:bg-white focus:outline-none transition-colors text-[#1E293B]"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label className="block text-xs font-semibold text-[#1E293B] mb-1.5">
                    Your Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your note or project inquiry here..."
                    className={`w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-[#F8FAFC] border ${
                      errors.message ? 'border-rose-400 focus:border-rose-500' : 'border-[#DCEEFF] focus:border-[#3B82F6]'
                    } focus:bg-white focus:outline-none transition-colors text-[#1E293B] resize-none`}
                  />
                  {errors.message && (
                    <span className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-[#3B82F6] hover:bg-[#2563EB] shadow-sm hover:shadow-soft transition-all duration-200"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via Email</span>
                </button>

                <p className="text-[11px] text-[#94A3B8] text-center pt-1">
                  Clicking will open your prefilled email client to send securely to {personalInfo.email}.
                </p>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

