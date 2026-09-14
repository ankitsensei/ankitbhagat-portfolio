import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ProjectData, type Category } from "../assets/ProjectsData";
import DockNavbar from "../components/DockNavbar";
import Footer from "../components/Footer";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink, FiSearch, FiX } from "react-icons/fi";

const categories: ("All" | Category)[] = [
  "All",
  "Full-Stack",
  "Frontend",
  "Extensions",
];

export const Projects: React.FC = () => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<"All" | Category>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(() => {
    return ProjectData.filter((p) => {
      const matchesCategory =
        activeCategory === "All" || p.category === activeCategory;

      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const query = searchQuery.toLowerCase().trim();
      const titleMatch = p.heading.toLowerCase().includes(query);
      const descMatch = p.description.toLowerCase().includes(query);
      const techMatch = p.techStack.some((tech) =>
        tech.toLowerCase().includes(query)
      );
      const catMatch = p.category.toLowerCase().includes(query);

      return titleMatch || descMatch || techMatch || catMatch;
    });
  }, [activeCategory, searchQuery]);

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

        {/* Filter Controls: Category Pills & Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-8">
          {/* Category Filters with Smooth Floating Indicator */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-lg bg-[#121314] border border-[#232426] w-fit">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              const count =
                cat === "All"
                  ? ProjectData.length
                  : ProjectData.filter((p) => p.category === cat).length;

              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative jetbrains-mono text-xs px-3 py-1.5 rounded-md transition-colors duration-200 cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? "text-black font-semibold"
                      : "text-[#8B8D91] hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeProjectCategory"
                      className="absolute inset-0 bg-white rounded-md shadow-sm"
                      transition={{ type: "spring", stiffness: 450, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                  <span
                    className={`relative z-10 text-[10px] ${
                      isActive ? "text-black/60 font-mono" : "text-[#71717A]"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input with Clear Button */}
          <div className="relative w-full md:w-64">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-[#71717A] pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects..."
              className="w-full pl-8 pr-8 py-1.5 text-xs bg-[#121314] border border-[#232426] focus:border-white/40 rounded-lg text-white placeholder-[#71717A] focus:outline-none transition-all duration-200 shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-[#8B8D91] hover:text-white cursor-pointer"
                title="Clear search"
              >
                <FiX />
              </button>
            )}
          </div>
        </div>

        {/* Results Counter if search query is present */}
        {searchQuery && (
          <div className="text-xs text-[#8B8D91] mb-4 flex items-center justify-between">
            <span>
              Found <span className="text-white font-medium">{filteredProjects.length}</span> project{filteredProjects.length !== 1 ? "s" : ""} matching "<span className="text-white">{searchQuery}</span>"
            </span>
            <button
              onClick={() => setSearchQuery("")}
              className="text-emerald-400 hover:underline cursor-pointer"
            >
              Clear search
            </button>
          </div>
        )}

        {/* Projects Grid with Smooth Layout and Enter/Exit Animations */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 min-h-[300px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.heading}
                initial={{ opacity: 0, scale: 0.94, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: -10 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="group relative flex flex-col rounded-lg border border-dashed border-[#2D2E2F] hover:border-white/30 bg-[#121314]/40 hover:bg-[#151618]/70 p-2.5 transition-colors duration-200"
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
                    className="h-full w-full object-cover object-top opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105"
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
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State when no project matches */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="py-16 flex flex-col items-center justify-center text-center border border-dashed border-[#232426] rounded-xl bg-[#121314]/30 p-6 my-4"
          >
            <div className="h-10 w-10 rounded-full bg-[#1C1D1F] border border-[#2D2E2F] flex items-center justify-center text-[#8B8D91] mb-3">
              <FiSearch className="text-base" />
            </div>
            <p className="text-sm text-white font-medium">No projects found</p>
            <p className="text-xs text-[#8B8D91] mt-1 max-w-sm">
              We couldn't find any project matching "{searchQuery}". Try searching with different keywords or reset the category.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All");
              }}
              className="mt-4 px-3.5 py-1.5 text-xs rounded-md bg-[#1F2023] hover:bg-[#2A2B2F] text-white border border-[#2D2E2F] transition-colors cursor-pointer"
            >
              Reset filters
            </button>
          </motion.div>
        )}

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
