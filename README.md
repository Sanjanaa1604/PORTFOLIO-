# Sanjanaa S — Personal Developer Portfolio

A modern, elegant, fully-responsive personal developer portfolio website for **Sanjanaa S**, Computer Science and Engineering student at **Chennai Institute of Technology**.

Designed with a **Pastel Blue Minimalist** aesthetic, featuring smooth animations, interactive project showcases, responsive layouts, and verified resume credentials.

---

## 🎨 Design Theme & Palette

- **Theme**: Pastel Blue Minimalist
- **Main Background**: `#F7FBFF`
- **Secondary Background**: `#EFF6FF`
- **Pastel Blue Accents**: `#DCEEFF`
- **Light Blue Accent Borders**: `#93C5FD` / `#BFDBFE`
- **Primary Buttons**: `#3B82F6` (Hover: `#2563EB`)
- **Dark Headings**: `#1E293B`
- **Body Text**: `#475569`
- **Cards**: Clean `#FFFFFF` with soft shadows (`0 4px 20px -2px rgba(147, 197, 253, 0.15)`)
- **Typography**: Poppins (Headings) & Inter (Body) via Google Fonts

---

## ⚡ Tech Stack

- **React 18** — Component-driven frontend architecture
- **Vite 5** — High-speed build tool and dev server
- **Tailwind CSS 3** — Utility-first styling with custom pastel tokens
- **Framer Motion** — Smooth scroll reveals, transitions, and typing effects
- **Lucide React** — Crisp, clean developer and UI icons

---

## 📂 Project Structure

```
├── public/
│   ├── favicon.svg               # SS initials favicon
│   ├── og-image.svg              # Social share metadata card
│   └── Sanjanaa_S_Resume.pdf     # Direct downloadable resume PDF
├── src/
│   ├── components/
│   │   ├── Navbar.jsx            # Sticky navbar with blur, active link tracking, mobile menu
│   │   ├── Hero.jsx              # Typing animation, intro, CTA buttons, avatar badge, metrics
│   │   ├── About.jsx             # Academic summary, CIT highlights, info panel
│   │   ├── Experience.jsx        # Dnyx Academy & EduSkills internships
│   │   ├── Skills.jsx            # Categorized skills (Languages, Web, Databases, Concepts, Tools, Soft)
│   │   ├── Projects.jsx          # Quizzle, BlogNest, SmartSpend with interactive UI previews
│   │   ├── Education.jsx         # CIT B.E. CSE vertical timeline with CGPA 8.8 highlight
│   │   ├── Achievements.jsx      # LeetCode 400+, EY Techathon 6.0, E-Summit '25 & Cisco/Udemy certs
│   │   ├── Contact.jsx           # Form with validation, mailto fallback, copy-email button
│   │   ├── Footer.jsx            # Back to top button, social links, copyright
│   │   ├── ResumeModal.jsx       # In-browser full resume preview & print / download
│   │   └── ProjectModal.jsx      # Detailed project modal viewer
│   ├── data/
│   │   └── portfolioData.js      # Central source of truth for all portfolio details
│   ├── App.jsx                   # Main layout container
│   ├── index.css                 # Global styles, Tailwind directives, custom scrollbar
│   └── main.jsx                  # React entrypoint
├── index.html                    # SEO tags, OpenGraph, Google Fonts
├── tailwind.config.js            # Custom pastel blue color theme extensions
├── vite.config.js                # Vite configuration
└── vercel.json                   # Vercel SPA routing rewrite configuration
```

---

## 🚀 Local Development Setup

To run this portfolio locally on your machine:

1. **Clone or navigate to the directory**:
   ```bash
   cd Portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:3000` (or the port displayed in the console).

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Preview the production build**:
   ```bash
   npm run preview
   ```

---

## 🌐 Deploy to Vercel

### Method 1: Deploy with Vercel CLI

1. Install the Vercel CLI (if not already installed):
   ```bash
   npm i -g vercel
   ```
2. Run the deployment command from the project directory:
   ```bash
   vercel
   ```
3. Follow the prompts (Vite settings are detected automatically). For production, run:
   ```bash
   vercel --prod
   ```

### Method 2: Deploy via GitHub & Vercel Dashboard

1. Push your portfolio repository to your GitHub account (`https://github.com/Sanjanaa1604/portfolio`).
2. Go to [vercel.com](https://vercel.com) and log in.
3. Click **"Add New Project"** and select **"Import Git Repository"**.
4. Select your portfolio repository.
5. Vercel will automatically detect:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Click **"Deploy"**. Your website will be live with free HTTPS and global CDN in under 1 minute!

---

## ✏️ Customization Guide

All personal information, experiences, projects, skills, and links are kept in a single easily editable file:
👉 `src/data/portfolioData.js`

To update your contact details, add a new project, or add a new certification, simply edit that file and the changes will automatically propagate across all components!

---

## 📄 Verified Resume Information Included

- **Name**: Sanjanaa S
- **College**: Chennai Institute of Technology
- **Degree**: Bachelor of Engineering in Computer Science and Engineering (CGPA: 8.8)
- **Email**: ssanjanaa2007@gmail.com
- **Phone**: 7397113527
- **LinkedIn**: https://www.linkedin.com/in/sanjanaa-s-26017536b/
- **GitHub**: https://github.com/Sanjanaa1604
- **Internships**: Dnyx Academy (MERN Full Stack Intern) & EduSkills (Python Full Stack Developer Intern)
- **Projects**: Quizzle (Full Stack MERN), BlogNest (Blog Management), SmartSpend (Java + OpenAI API + MySQL)
- **Achievements**: 400+ LeetCode Solved, EY Techathon 6.0, E-Summit '25
- **Certificates**: Cisco Python Essentials 1 & 2, Cisco Cybersecurity, Udemy Bootcamp

