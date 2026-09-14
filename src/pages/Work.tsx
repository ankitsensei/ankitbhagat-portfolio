import React from "react";
import DockNavbar from "../components/DockNavbar";
import Footer from "../components/Footer";

interface WorkExperience {
  company: string;
  type: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  skills?: string[];
}

const workData: WorkExperience[] = [
  {
    company: "Freelance & Independent Projects",
    type: "Freelance",
    role: "Full Stack Web Developer",
    period: "Jan 2024 - Present",
    location: "Remote",
    description: [
      "Designed and developed full-stack web applications from scratch with modern technologies like React, Next.js, Node.js, Express, and PostgreSQL/MongoDB.",
      "Engineered secure authentication workflows with JWT & OAuth, RESTful API architecture, and dynamic database schemas.",
      "Optimized frontend rendering performance, responsive mobile-first interfaces, and smooth micro-interactions.",
      "Deployed and maintained continuous production applications on Vercel, Supabase, and Cloudflare.",
    ],
    skills: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "MongoDB", "TailwindCSS"],
  },
  {
    company: "Open Source & Web Tooling",
    type: "Contributor",
    role: "Open Source Developer",
    period: "2023 - Present",
    location: "Global / GitHub",
    description: [
      "Authored and published developer-centric open source tools including Graphite (markdown notes), mini-chatbot (AI assistant), and productivity extensions.",
      "Built interactive web applications with custom rich-text editors, syntax highlighting, and API integrations.",
      "Maintained modular, clean, and reusable component libraries with thorough documentation and TypeScript type safety.",
    ],
    skills: ["Next.js", "React", "Gemini API", "Tiptap", "Chrome Extensions", "Git"],
  },
  {
    company: "B.Tech Computer Science & Engineering",
    type: "Education",
    role: "Undergraduate Student",
    period: "Aug 2022 - Expected 2026",
    location: "Jharkhand, India",
    description: [
      "Studying core computer science fundamentals including Data Structures & Algorithms, Database Management Systems, Computer Networks, and Operating Systems.",
      "Active problem solver on competitive programming platforms and passionate learner of scalable backend architectures.",
    ],
    skills: ["C/C++", "Python", "Data Structures", "Algorithms", "DBMS", "OS"],
  },
];

export const Work: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#0A0B0C] text-[#EDEDED] antialiased">
      <main className="page">
        {/* Page Header */}
        <div className="page-col mb-10">
          <div>
            <div className="jetbrains-mono flex items-center gap-1.5 text-xs tracking-tighter text-[#8B8D91]/70 mb-1.5">
              <span>Career & Journey</span>
            </div>
            <h1 className="doto-font text-3xl font-bold tracking-tight text-white">
              Work
            </h1>
            <p className="text-sm text-[#8B8D91] mt-1.5">
              Here is my work experience and journey as a full stack developer!
            </p>
          </div>
        </div>

        {/* Work Timeline List */}
        <div className="flex flex-col gap-6">
          {workData.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col rounded-xl border border-[#232426] bg-[#121314]/60 p-5 sm:p-6 transition-all duration-300 hover:border-white/20 hover:bg-[#141517]"
            >
              {/* Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#232426]/60">
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h2 className="text-base font-semibold text-white">
                      {item.company}
                    </h2>
                    <span className="jetbrains-mono text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#1F2023] text-[#A1A1AA] border border-[#2D2E2F]">
                      {item.type}
                    </span>
                  </div>
                  <p className="text-xs font-medium text-white/80 mt-0.5">
                    {item.role}
                  </p>
                </div>

                <div className="flex flex-col sm:items-end">
                  <span className="jetbrains-mono text-xs text-[#8B8D91]">
                    {item.period}
                  </span>
                  <span className="text-[11px] text-[#71717A]">
                    {item.location}
                  </span>
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="mt-4 flex flex-col gap-2.5 text-xs text-[#8B8D91] leading-relaxed">
                {item.description.map((desc, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-white/40 select-none mt-0.5">▹</span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>

              {/* Skills Tags */}
              {item.skills && (
                <div className="mt-4 pt-3 border-t border-[#232426]/40 flex flex-wrap gap-1.5">
                  {item.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="jetbrains-mono text-[10px] px-2 py-0.5 rounded bg-[#18191B] text-[#A1A1AA] border border-[#232426]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <Footer />
      </main>

      {/* Floating Bottom Dock Navigation */}
      <DockNavbar />
      <div className="bottom-progressive-blur" />
    </div>
  );
};

export default Work;
