import React from "react";
import DockNavbar from "../components/DockNavbar";
import Footer from "../components/Footer";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
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
  SiDocker,
  SiRedis,
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
      { name: "C / C++", icon: <TbBrandCpp className="text-blue-400" /> },
      { name: "Python", icon: <FaPython className="text-yellow-300" /> },
    ],
  },
  {
    tag: "<frameworks & libs/>",
    skills: [
      { name: "Next.js", icon: <SiNextdotjs className="text-[var(--text-primary)]" /> },
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-[var(--text-primary)] opacity-80" /> },
      { name: "TailwindCSS", icon: <RiTailwindCssFill className="text-cyan-400" /> },
      { name: "Framer Motion", icon: <TbBrandFramerMotion className="text-fuchsia-400" /> },
    ],
  },
  {
    tag: "<databases & backend/>",
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-emerald-500" /> },
      { name: "Prisma ORM", icon: <SiPrisma className="text-teal-400" /> },
      { name: "Supabase", icon: <SiSupabase className="text-emerald-400" /> },
      { name: "Firebase", icon: <SiFirebase className="text-amber-400" /> },
      { name: "Redis", icon: <SiRedis className="text-red-500" /> },
    ],
  },
  {
    tag: "<tools & devops/>",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
      { name: "GitHub", icon: <FaGithub className="text-[var(--text-primary)]" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
      { name: "Vercel", icon: <SiVercel className="text-[var(--text-primary)]" /> },
      { name: "Cloudflare", icon: <SiCloudflare className="text-amber-500" /> },
      { name: "Docker", icon: <SiDocker className="text-blue-400" /> },
      { name: "Linux", icon: <FaLinux className="text-yellow-400" /> },
      { name: "Vite", icon: <SiVite className="text-purple-400" /> },
    ],
  },
];

export const SkillsPage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)] antialiased">
      <main className="page">
        {/* Page Header */}
        <div className="page-col mb-5">
          <div>
            <h1 className="doto-font text-3xl font-bold tracking-tight text-[var(--text-primary)]">
              Skills
            </h1>
          </div>
        </div>

        {/* Narrative paragraph with inline pill buttons */}
        <div className="rounded-lg p-3 sm:p-4 mb-4 text-sm text-[var(--text-muted)] leading-relaxed">
          <p className="flex flex-wrap items-center gap-y-1.5">
            <span>My main Tech stack is</span>
            <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded border border-[var(--border-color)] bg-[var(--pill-bg)] text-[11px] text-[var(--text-primary)] font-medium">
              <SiNextdotjs className="text-xs" /> Next.js
            </span>
            <span>with</span>
            <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded border border-[var(--border-color)] bg-[var(--pill-bg)] text-[11px] text-[var(--text-primary)] font-medium">
              <RiTailwindCssFill className="text-cyan-400 text-xs" /> TailwindCSS
            </span>
            <span>. Backend with</span>
            <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded border border-[var(--border-color)] bg-[var(--pill-bg)] text-[11px] text-[var(--text-primary)] font-medium">
              <FaNodeJs className="text-green-500 text-xs" /> Node.js
            </span>
            <span>&</span>
            <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded border border-[var(--border-color)] bg-[var(--pill-bg)] text-[11px] text-[var(--text-primary)] font-medium">
              <SiExpress className="text-xs" /> Express
            </span>
            <span>in</span>
            <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded border border-[var(--border-color)] bg-[var(--pill-bg)] text-[11px] text-[var(--text-primary)] font-medium">
              <SiTypescript className="text-blue-400 text-xs" /> TypeScript
            </span>
            <span>. Databases:</span>
            <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded border border-[var(--border-color)] bg-[var(--pill-bg)] text-[11px] text-[var(--text-primary)] font-medium">
              <SiPostgresql className="text-blue-400 text-xs" /> PostgreSQL
            </span>
            <span>&</span>
            <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded border border-[var(--border-color)] bg-[var(--pill-bg)] text-[11px] text-[var(--text-primary)] font-medium">
              <SiMongodb className="text-emerald-500 text-xs" /> MongoDB
            </span>
            <span>. Deployed on</span>
            <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded border border-[var(--border-color)] bg-[var(--pill-bg)] text-[11px] text-[var(--text-primary)] font-medium">
              <SiVercel className="text-xs" /> Vercel
            </span>
            <span>&</span>
            <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded border border-[var(--border-color)] bg-[var(--pill-bg)] text-[11px] text-[var(--text-primary)] font-medium">
              <SiCloudflare className="text-amber-500 text-xs" /> Cloudflare
            </span>
          </p>
        </div>

        {/* Categorized Skills Section */}
        <div className="flex flex-col gap-4 sm:gap-5">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="flex flex-col gap-1.5">
              <div className="jetbrains-mono text-xs font-semibold text-[var(--text-muted)] tracking-wider">
                {cat.tag}
              </div>

              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium border border-[var(--border-color)] h-[28px] cursor-default gap-1.5 bg-[var(--card-bg)] px-2.5 text-xs text-[var(--text-primary)] hover:border-[var(--text-muted)] hover:bg-[var(--card-hover)] transition-all duration-200 shadow-xs"
                  >
                    <span className="text-sm">{skill.icon}</span>
                    <span className="font-medium text-xs text-[var(--text-primary)]">
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
