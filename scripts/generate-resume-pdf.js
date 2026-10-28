import fs from 'fs';
import path from 'path';

// Generate a valid PDF-1.4 file with standard Helvetica typography and resume content
function createResumePdf() {
  const content = [];
  
  // PDF standard header and helper
  const lines = [
    "%PDF-1.4",
    "%âãÏÓ",
    "1 0 obj",
    "<< /Type /Catalog /Pages 2 0 R >>",
    "endobj",
    "2 0 obj",
    "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
    "endobj",
    "3 0 obj",
    "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595.28 841.89] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>",
    "endobj",
    "4 0 obj",
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
    "endobj",
    "5 0 obj",
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>",
    "endobj"
  ];

  // Text stream for resume
  const streamCommands = [
    // Header
    "BT",
    "/F2 20 Tf",
    "50 800 Td",
    "(SANJANAA S) Tj",
    "ET",

    // Horizontal line
    "0.2 w",
    "50 790 m 545 790 l S",

    // Subheader / Contact
    "BT",
    "/F1 9 Tf",
    "50 775 Td",
    "(Email: ssanjanaa2007@gmail.com  |  Phone: 7397113527  |  DOB: 16 Apr 2007) Tj",
    "0 -13 Td",
    "(LinkedIn: https://www.linkedin.com/in/sanjanaa-s-26017536b/  |  GitHub: https://github.com/Sanjanaa1604) Tj",
    "ET",

    // EDUCATION
    "BT",
    "/F2 11 Tf",
    "50 740 Td",
    "(EDUCATION) Tj",
    "ET",
    "50 735 m 545 735 l S",

    "BT",
    "/F2 10 Tf",
    "50 722 Td",
    "(Bachelor of Engineering, Chennai Institute of Technology) Tj",
    "/F1 9.5 Tf",
    "0 -12 Td",
    "(Computer Science and Engineering) Tj",
    "0 -12 Td",
    "/F2 9.5 Tf (CGPA - 8.8) Tj",
    "ET",

    // INTERNSHIP EXPERIENCE
    "BT",
    "/F2 11 Tf",
    "50 675 Td",
    "(INTERNSHIP EXPERIENCE) Tj",
    "ET",
    "50 670 m 545 670 l S",

    "BT",
    "/F2 10 Tf",
    "50 656 Td",
    "(MERN Full Stack Intern, Dnyx Academy) Tj",
    "350 0 Td /F1 9 Tf (May 2026 - Jun 2026) Tj -350 0 Td",
    "/F1 9 Tf",
    "0 -12 Td (  * Developed full-stack web applications using the MERN stack.) Tj",
    "0 -11 Td (  * Implemented backend APIs, database integration, and responsive user interfaces.) Tj",
    "0 -11 Td (  * Collaborated on real-world projects following modern web development practices.) Tj",
    
    "/F2 10 Tf",
    "0 -16 Td (Python Full Stack Developer Intern, EduSkills) Tj",
    "350 0 Td /F1 9 Tf (Virtual Internship) Tj -350 0 Td",
    "/F1 9 Tf",
    "0 -12 Td (  * Worked on Python-based web application development and backend programming.) Tj",
    "0 -11 Td (  * Gained hands-on experience in full-stack development concepts and software development workflows.) Tj",
    "0 -11 Td (  * Developed problem-solving and debugging skills through project-based learning.) Tj",
    "ET",

    // PROJECTS
    "BT",
    "/F2 11 Tf",
    "50 540 Td",
    "(PROJECTS) Tj",
    "ET",
    "50 535 m 545 535 l S",

    "BT",
    "/F2 10 Tf",
    "50 522 Td (Quizzle) Tj",
    "/F1 8.5 Tf 0 -10 Td (Full Stack Web Application) Tj",
    "0 -11 Td (  * Developed a full-stack quiz platform for interactive learning and assessment.) Tj",
    "0 -11 Td (  * Implemented user authentication, score tracking, and quiz management features.) Tj",
    "0 -11 Td (  * Designed responsive interfaces and integrated database functionality for efficient data handling.) Tj",

    "/F2 10 Tf 0 -15 Td (BlogNest) Tj",
    "/F1 8.5 Tf 0 -10 Td (Blog Management Platform) Tj",
    "0 -11 Td (  * Developed a blogging platform enabling users to create, edit, and manage blog posts.) Tj",
    "0 -11 Td (  * Implemented CRUD operations and database integration for content management.) Tj",
    "0 -11 Td (  * Designed a responsive user interface for an enhanced user experience.) Tj",

    "/F2 10 Tf 0 -15 Td (SmartSpend - Expense Tracker with AI [Java]) Tj",
    "/F1 8.5 Tf 0 -10 Td (Personal Finance Management Application) Tj",
    "0 -11 Td (  * Developed a Java-based expense tracking application with AI-powered spending insights.) Tj",
    "0 -11 Td (  * Implemented features like expense categorization, budget planning, and personalized recommendations.) Tj",
    "0 -11 Td (  * Integrated data persistence using MySQL and built a clean, user-friendly interface.) Tj",
    "/F2 8.5 Tf 0 -11 Td (Technology Used: ) Tj /F1 8.5 Tf (Java, MySQL, HTML, CSS, JavaScript, AI [OpenAI API]) Tj",
    "ET",

    // TECHNICAL SKILLS
    "BT",
    "/F2 11 Tf",
    "50 340 Td",
    "(TECHNICAL SKILLS) Tj",
    "ET",
    "50 335 m 545 335 l S",

    "BT",
    "/F1 9 Tf",
    "50 320 Td",
    "/F2 9 Tf (Programming Languages: ) Tj /F1 9 Tf (Python, C, C++, JavaScript) Tj",
    "0 -13 Td",
    "/F2 9 Tf (Web Technologies: ) Tj /F1 9 Tf (HTML, CSS, Tailwind CSS, Express.js, Node.js) Tj",
    "0 -13 Td",
    "/F2 9 Tf (Database: ) Tj /F1 9 Tf (MySQL, MongoDB) Tj",
    "0 -13 Td",
    "/F2 9 Tf (Programming Concepts: ) Tj /F1 9 Tf (OOPs, Data Structures and Algorithms [DSA]) Tj",
    "0 -13 Td",
    "/F2 9 Tf (Development Tools: ) Tj /F1 9 Tf (VS Code) Tj",
    "0 -13 Td",
    "/F2 9 Tf (Version Control: ) Tj /F1 9 Tf (Git, GitHub) Tj",
    "0 -13 Td",
    "/F2 9 Tf (Soft Skills: ) Tj /F1 9 Tf (Communication, Team Collaboration, Problem Solving, Leadership, Time Management, Adaptability) Tj",
    "ET",

    // CERTIFICATES
    "BT",
    "/F2 11 Tf",
    "50 205 Td",
    "(CERTIFICATES) Tj",
    "ET",
    "50 200 m 545 200 l S",

    "BT",
    "/F1 9 Tf",
    "50 188 Td",
    "(  * Python Essentials 1 - Cisco Networking Academy) Tj",
    "0 -12 Td (  * Python Essentials 2 - Cisco Networking Academy) Tj",
    "0 -12 Td (  * Introduction to Cybersecurity - Cisco Networking Academy) Tj",
    "0 -12 Td (  * Complete Data Science, Machine Learning, Deep Learning & NLP Bootcamp - Udemy) Tj",
    "ET",

    // ACHIEVEMENTS
    "BT",
    "/F2 11 Tf",
    "50 120 Td",
    "(ACHIEVEMENTS) Tj",
    "ET",
    "50 115 m 545 115 l S",

    "BT",
    "/F1 9 Tf",
    "50 102 Td",
    "(  * Solved 400+ problems on LeetCode.) Tj",
    "0 -12 Td (  * Participated in EY Techathon 6.0.) Tj",
    "0 -12 Td (  * Participated in E-Summit '25.) Tj",
    "ET"
  ];

  const streamData = streamCommands.join("\n");
  const streamLength = Buffer.byteLength(streamData);

  const obj6 = [
    "6 0 obj",
    `<< /Length ${streamLength} >>`,
    "stream",
    streamData,
    "endstream",
    "endobj"
  ];

  const allParts = [...lines, ...obj6];
  
  // Calculate xref offsets
  let offset = 0;
  const xref = ["xref", "0 7", "0000000000 65535 f "];
  
  // Calculate offsets for objects 1 through 6
  const fullTextBefore = allParts.join("\n") + "\n";
  
  for (let i = 1; i <= 6; i++) {
    const objHeader = `${i} 0 obj`;
    const pos = fullTextBefore.indexOf(objHeader);
    const posStr = String(pos).padStart(10, '0');
    xref.push(`${posStr} 00000 n `);
  }

  const xrefPos = Buffer.byteLength(fullTextBefore);
  const trailer = [
    "trailer",
    "<< /Size 7 /Root 1 0 R >>",
    "startxref",
    xrefPos,
    "%%EOF"
  ];

  const finalPdf = fullTextBefore + xref.join("\n") + "\n" + trailer.join("\n") + "\n";

  const publicDir = path.resolve('public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  fs.writeFileSync(path.join(publicDir, 'Sanjanaa_S_Resume.pdf'), finalPdf);
  console.log('Successfully generated public/Sanjanaa_S_Resume.pdf');
}

createResumePdf();

