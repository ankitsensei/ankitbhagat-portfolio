import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ProjectData, type Category } from "../assets/ProjectsData";
import DockNavbar from "../components/DockNavbar";
import Footer from "../components/Footer";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const categories: ("All" | Category)[] = [
  "All",
  "Full-Stack",
  "Frontend",
  "Extensions",
];

export const Projects: React.FC = () => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<"All" | Category>("All");

  const filteredProjects =
    activeCategory === "All"
      ? ProjectData
      : ProjectData.filter((p) => p.category === activeCategory);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setPreviewImage(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0A0B0C] text-[#EDEDED] antialiased">
      <main className="page">
        {/* Page Header */}
        <div className="page-col mb-8">
          <div>
            <div className="jetbrains-mono flex items-center gap-1.5 text-xs tracking-tighter text-[#8B8D91]/70 mb-1.5">
              <span>Selected Works</span>
            </div>
            <h1 className="doto-font text-3xl font-bold tracking-tight text-white">
              Projects
            </h1>
            <p className="text-sm text-[#8B8D91] mt-1.5">
              A curated collection of full-stack web applications, tools, and extensions I've built.
            </p>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`jetbrains-mono text-xs px-3.5 py-1.5 rounded-md transition-all duration-200 border cursor-pointer ${
                activeCategory === cat
                  ? "bg-white text-black border-white font-semibold shadow-sm"
                  : "bg-[#141517] text-[#8B8D91] border-[#232426] hover:text-white hover:border-[#3A3B3E]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Bento Grid with Smooth Keyed Transition */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 min-h-[300px]"
        >
          {filteredProjects.map((project) => (
            <div
              key={project.heading}
              className="group relative flex flex-col rounded-lg border border-dashed border-[#2D2E2F] hover:border-white/30 bg-[#121314]/40 hover:bg-[#151618]/70 p-2.5 transition-all duration-200"
            >
              {/* Corner hover crosshairs */}
              <div className="pointer-events-none absolute inset-0 z-10 -m-px opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <div className="absolute -left-px -top-px h-2 w-2 border-l border-t border-white/90" />
                <div className="absolute -right-px -top-px h-2 w-2 border-r border-t border-white/90" />
                <div className="absolute -bottom-px -right-px h-2 w-2 border-b border-r border-white/90" />
                <div className="absolute -bottom-px -left-px h-2 w-2 border-b border-l border-white/90" />
              </div>

              {/* Project Image Preview */}
              <div
                onClick={() => setPreviewImage(project.image)}
                className="z-10 h-44 min-h-44 overflow-hidden rounded-md border border-[#232426] bg-[#0E0F10] relative cursor-zoom-in"
              >
                <img
                  src={project.image}
                  alt={project.heading}
                  className="h-full w-full object-cover object-top opacity-60 grayscale transition-all duration-200 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105"
                />
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="absolute top-2.5 right-2.5 p-1.5 rounded-md bg-black/60 backdrop-blur-md text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:text-white hover:bg-black/90"
                  >
                    <FiExternalLink className="text-xs" />
                  </a>
                )}
              </div>

              {/* Project Meta */}
              <div className="mt-3 flex flex-col gap-1.5 flex-1 justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-sm font-semibold text-white/90 group-hover:text-white transition-colors">
                      {project.heading}
                    </span>

                    <div className="flex items-center gap-2 text-[#8B8D91]">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-white transition-colors"
                          title="View Source on GitHub"
                        >
                          <FaGithub className="text-xs" />
                        </a>
                      )}
                      <span className="jetbrains-mono text-[10px] rounded px-1.5 py-0.5 bg-[#1C1D1F] text-[#8B8D91] border border-[#2D2E2F]">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <p className="jetbrains-mono line-clamp-2 text-xs tracking-tight text-[#8B8D91] leading-relaxed mt-1">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-1 mt-3 pt-2 border-t border-[#232426]/40">
                  {project.techStack?.map((tech, i) => (
                    <span
                      key={i}
                      className="jetbrains-mono text-[9px] px-1.5 py-0.5 rounded bg-[#18191B] text-[#A1A1AA] border border-[#232426]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Modal Image Zoom */}
        <AnimatePresence>
          {previewImage && (
            <motion.div
              key="preview"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setPreviewImage(null)}
              className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md cursor-pointer"
            >
              <motion.img
                src={previewImage}
                alt="Preview"
                initial={{ scale: 0.85 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.85 }}
                className="max-h-[85vh] max-w-[90vw] rounded-xl border border-white/20 object-contain shadow-2xl"
              />
            </motion.div>
          )}
        </AnimatePresence>

        <Footer />
      </main>

      {/* Floating Bottom Dock Navigation */}
      <DockNavbar />
      <div className="bottom-progressive-blur" />
    </div>
  );
};

export default Projects;
