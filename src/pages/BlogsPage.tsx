import React from "react";
import DockNavbar from "../components/DockNavbar";
import Footer from "../components/Footer";
import { FiArrowUpRight } from "react-icons/fi";

interface BlogPost {
  title: string;
  date: string;
  readTime: string;
  description: string;
  tags: string[];
  link?: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "Building a Lightweight AI Assistant with Next.js 15 & Gemini Flash",
    date: "Feb 2026",
    readTime: "5 min read",
    description:
      "A deep dive into streaming LLM responses, efficient token handling, and clean responsive UI design using Next.js App Router and Google Gemini API.",
    tags: ["Next.js", "AI", "TypeScript"],
    link: "https://github.com/ankitsensei/mini-chatbot",
  },
  {
    title: "Full-Stack Architecture: Designing Resilient REST APIs with Node & Postgres",
    date: "Jan 2026",
    readTime: "7 min read",
    description:
      "Best practices for structuring backend controllers, handling relational data modeling with Prisma ORM, and implementing JWT authentication.",
    tags: ["Node.js", "PostgreSQL", "Backend"],
    link: "https://github.com/ankitsensei/findIt",
  },
  {
    title: "Building Developer Productivity Tools with Chrome Extension Manifest V3",
    date: "Dec 2025",
    readTime: "4 min read",
    description:
      "How to build offline-first Chrome extensions with background service workers, declarativeNetRequest rules, and local storage state sync.",
    tags: ["JavaScript", "Extensions", "Web APIs"],
    link: "https://github.com/ankitsensei/Focus-Mode-Extension",
  },
];

export const BlogsPage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#0A0B0C] text-[#EDEDED] antialiased">
      <main className="page">
        {/* Page Header */}
        <div className="page-col mb-8">
          <div>
            <div className="jetbrains-mono flex items-center gap-1.5 text-xs tracking-tighter text-[#8B8D91]/70 mb-1.5">
              <span>Articles & Notes</span>
            </div>
            <h1 className="doto-font text-3xl font-bold tracking-tight text-white">
              Blog
            </h1>
            <p className="text-sm text-[#8B8D91] mt-1.5">
              Thoughts on software engineering, full-stack architecture, and developer tooling.
            </p>
          </div>
        </div>

        {/* Blog Posts List */}
        <div className="flex flex-col gap-4">
          {blogPosts.map((post, idx) => (
            <a
              key={idx}
              href={post.link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col rounded-xl border border-[#232426] bg-[#121314]/60 p-5 transition-all duration-300 hover:border-white/20 hover:bg-[#151618]"
            >
              <div className="flex items-start justify-between gap-3">
                <h2 className="text-base font-semibold text-white/95 group-hover:text-white transition-colors flex items-center gap-1.5">
                  <span>{post.title}</span>
                  <FiArrowUpRight className="text-xs text-[#8B8D91] group-hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-200" />
                </h2>

                <div className="jetbrains-mono shrink-0 text-[11px] text-[#8B8D91]">
                  <span>{post.date}</span>
                </div>
              </div>

              <p className="text-xs text-[#8B8D91] leading-relaxed mt-2 line-clamp-2">
                {post.description}
              </p>

              <div className="flex items-center gap-2 mt-3 pt-3 border-t border-[#232426]/40">
                <span className="jetbrains-mono text-[10px] text-[#71717A]">
                  {post.readTime}
                </span>
                <span className="text-[#3F3F46]">•</span>
                <div className="flex gap-1.5">
                  {post.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="jetbrains-mono text-[9px] px-1.5 py-0.5 rounded bg-[#18191B] text-[#A1A1AA] border border-[#232426]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
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

export default BlogsPage;
