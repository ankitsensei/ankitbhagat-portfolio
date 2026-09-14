import React from "react";
import DockNavbar from "../components/DockNavbar";
import Footer from "../components/Footer";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaFigma,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaLinux,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiPostman,
  SiTypescript,
  SiPostgresql,
  SiVercel,
  SiSupabase,
  SiFirebase,
  SiNextdotjs,
  SiPrisma,
  SiCloudflare,
  SiVite,
} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFramerMotion, TbBrandCpp, TbFileTypeSql } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";

interface SkillItem {
  name: string;
  icon: React.ReactNode;
}

interface SkillCategory {
  tag: string;
  skills: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    tag: "<core/>",
    skills: [
      { name: "JavaScript", icon: <IoLogoJavascript className="text-yellow-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "SQL", icon: <TbFileTypeSql className="text-emerald-400" /> },
      { name: "Python", icon: <FaPython className="text-yellow-300" /> },
      { name: "C / C++", icon: <TbBrandCpp className="text-blue-400" /> },
    ],
  },
  {
    tag: "<frameworks & libs/>",
    skills: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-white/80" /> },
      { name: "TailwindCSS", icon: <RiTailwindCssFill className="text-cyan-400" /> },
      { name: "Motion", icon: <TbBrandFramerMotion className="text-fuchsia-400" /> },
    ],
  },
  {
    tag: "<databases & backend/>",
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-emerald-500" /> },
      { name: "Supabase", icon: <SiSupabase className="text-emerald-400" /> },
      { name: "Prisma ORM", icon: <SiPrisma className="text-teal-300" /> },
      { name: "Firebase", icon: <SiFirebase className="text-amber-400" /> },
    ],
  },
  {
    tag: "<tools & platforms/>",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
      { name: "GitHub", icon: <FaGithub className="text-white" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
      { name: "Vercel", icon: <SiVercel className="text-white" /> },
      { name: "Cloudflare", icon: <SiCloudflare className="text-amber-500" /> },
      { name: "Linux", icon: <FaLinux className="text-yellow-400" /> },
      { name: "Vite", icon: <SiVite className="text-purple-400" /> },
      { name: "Figma", icon: <FaFigma className="text-pink-400" /> },
    ],
  },
];

export const SkillsPage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#0A0B0C] text-[#EDEDED] antialiased">
      <main className="page">
        {/* Page Header */}
        <div className="page-col mb-8">
          <div>
            <div className="jetbrains-mono flex items-center gap-1.5 text-xs tracking-tighter text-[#8B8D91]/70 mb-1.5">
              <span>Stack & Tooling</span>
            </div>
            <h1 className="doto-font text-3xl font-bold tracking-tight text-white">
              Skills
            </h1>
            <p className="text-sm text-[#8B8D91] mt-1.5">
              Which technologies I use to build scalable products? See below.
            </p>
          </div>
        </div>

        {/* Narrative Box */}
        <div className="rounded-xl border border-[#232426] bg-[#121314]/60 p-5 sm:p-6 mb-10 text-sm text-[#8B8D91] leading-relaxed">
          My primary tech stack centers around{" "}
          <span className="font-semibold text-white">React</span> &{" "}
          <span className="font-semibold text-white">Next.js</span> with{" "}
          <span className="font-semibold text-white">TailwindCSS</span> on the frontend. On the backend, I engineer robust RESTful APIs with{" "}
          <span className="font-semibold text-white">Node.js</span>,{" "}
          <span className="font-semibold text-white">Express</span>, and{" "}
          <span className="font-semibold text-white">TypeScript</span>. For data persistence, I work with{" "}
          <span className="font-semibold text-white">PostgreSQL</span> and{" "}
          <span className="font-semibold text-white">MongoDB</span> paired with{" "}
          <span className="font-semibold text-white">Prisma / Supabase</span>. Everything is automated and deployed with modern cloud platforms like{" "}
          <span className="font-semibold text-white">Vercel & Cloudflare</span>.
        </div>

        {/* Categorized Skills */}
        <div className="flex flex-col gap-8">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="flex flex-col gap-3">
              <span className="jetbrains-mono text-xs font-semibold text-white/90">
                {cat.tag}
              </span>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#232426] bg-[#141517]/80 hover:bg-[#1A1B1E] hover:border-white/20 transition-all duration-200 cursor-default"
                  >
                    <span className="text-sm">{skill.icon}</span>
                    <span className="text-xs font-medium text-[#D1D5DB]">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
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

export default SkillsPage;
