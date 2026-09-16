import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ProjectData, type Category } from "../assets/ProjectsData";
import DockNavbar from "../components/DockNavbar";
import Footer from "../components/Footer";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink, FiSearch, FiX } from "react-icons/fi";
import { Skeleton } from "../components/Skeleton";

const categories: ("All" | Category)[] = [
  "All",
  "Full-Stack",
  "Frontend",
  "Extensions",
];

const ProjectCardSkeleton: React.FC = () => (
  <div className="flex flex-col rounded-lg border border-dashed border-[var(--border-dashed)] bg-[var(--card-bg)] p-2.5 shadow-sm">
    <Skeleton className="h-44 min-h-44 rounded-md" />
    <div className="mt-3 flex flex-col gap-1.5 flex-1 justify-between">
      <div>
        <div className="flex items-center justify-between gap-2">
          <Skeleton className="h-4 w-28" />
          <Skeleton className="h-4 w-16" />
        </div>
        <Skeleton className="h-3 w-full mt-1" />
        <Skeleton className="h-3 w-3/4 mt-0.5" />
      </div>
      <div className="flex flex-wrap gap-1 mt-3 pt-2 border-t border-[var(--border-color)]">
        <Skeleton className="h-4 w-12 rounded" />
        <Skeleton className="h-4 w-14 rounded" />
        <Skeleton className="h-4 w-10 rounded" />
      </div>
    </div>
  </div>
);

const ProjectsSkeleton: React.FC = () => (
  <div className="relative min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)] antialiased">
    <main className="page">
      <div className="page-col mb-5">
        <Skeleton className="h-8 w-32" />
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
        <div className="flex gap-1 p-1 rounded-lg bg-[var(--pill-bg)] border border-[var(--border-color)] w-fit">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-8 w-16 rounded-md" />
          ))}
        </div>
        <Skeleton className="h-8 w-60 rounded-lg" />
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <ProjectCardSkeleton key={i} />
        ))}
      </div>
      <Footer />
    </main>
    <DockNavbar />
    <div className="bottom-progressive-blur" />
  </div>
);

export const Projects: React.FC = () => {
  const [mounted, setMounted] = useState(false);
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

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <ProjectsSkeleton />;
  }

  return (
    <div className="relative min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)] antialiased">
      <main className="page">
        {/* Page Header */}
        <div className="page-col mb-5">
          <div>
            <h1 className="doto-font text-3xl font-bold tracking-tight text-[var(--text-primary)]">
              Projects
            </h1>
          </div>
        </div>

        {/* Filter Controls: Category Pills & Search Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-1 p-1 rounded-lg bg-[var(--pill-bg)] border border-[var(--border-color)] w-fit max-w-full overflow-hidden">
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
                  className={`relative jetbrains-mono text-xs px-2.5 sm:px-3 py-1.5 rounded-md transition-colors duration-200 cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? "text-[var(--bg-page)] font-semibold"
                      : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeProjectCategory"
                      className="absolute inset-0 bg-[var(--text-primary)] rounded-md shadow-sm"
                      transition={{ type: "spring", stiffness: 500, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                  <span
                    className={`relative z-10 text-[10px] ${
                      isActive ? "text-[var(--bg-page)] opacity-80 font-mono" : "text-[var(--text-subtle)]"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-60">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-[var(--text-subtle)] pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects..."
              className="w-full pl-8 pr-8 py-1.5 text-xs bg-[var(--input-bg)] border border-[var(--border-color)] focus:border-[var(--text-muted)] rounded-lg text-[var(--text-primary)] placeholder-[var(--text-subtle)] focus:outline-none transition-all duration-200 shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] cursor-pointer"
                title="Clear search"
              >
                <FiX />
              </button>
            )}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3">
          <AnimatePresence mode="popLayout" initial={false}>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.heading}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.97, transition: { duration: 0.15 } }}
                transition={{ duration: 0.2, delay: idx * 0.03 }}
                className="group relative flex flex-col rounded-lg border border-dashed border-[var(--border-dashed)] hover:border-[var(--text-muted)] bg-[var(--card-bg)] p-2.5 transition-colors duration-200 shadow-sm"
              >
                {/* Corner hover crosshairs */}
                <div className="pointer-events-none absolute inset-0 z-10 -m-px opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="absolute -left-px -top-px h-2 w-2 border-l border-t border-[var(--text-primary)]" />
                  <div className="absolute -right-px -top-px h-2 w-2 border-r border-t border-[var(--text-primary)]" />
                  <div className="absolute -bottom-px -right-px h-2 w-2 border-b border-r border-[var(--text-primary)]" />
                  <div className="absolute -bottom-px -left-px h-2 w-2 border-b border-l border-[var(--text-primary)]" />
                </div>

                {/* Project Image Preview */}
                <div
                  onClick={() => setPreviewImage(project.image)}
                  className="z-10 h-44 min-h-44 overflow-hidden rounded-md border border-[var(--border-color)] bg-[var(--pill-bg)] relative cursor-zoom-in"
                >
                  <img
                    src={project.image}
                    alt={project.heading}
                    className="h-full w-full object-cover object-top opacity-70 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105"
                  />
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="absolute top-2.5 right-2.5 p-1.5 rounded-md bg-black/70 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:text-white hover:bg-black"
                    >
                      <FiExternalLink className="text-xs" />
                    </a>
                  )}
                </div>

                {/* Project Meta */}
                <div className="mt-3 flex flex-col gap-1.5 flex-1 justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-sm font-semibold text-[var(--text-primary)] transition-colors">
                        {project.heading}
                      </span>

                      <div className="flex items-center gap-2 text-[var(--text-muted)]">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[var(--text-primary)] transition-colors"
                            title="View Source on GitHub"
                          >
                            <FaGithub className="text-xs" />
                          </a>
                        )}
                        <span className="jetbrains-mono text-[10px] rounded px-1.5 py-0.5 bg-[var(--badge-subtle-bg)] text-[var(--badge-subtle-text)] border border-[var(--badge-subtle-border)]">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    <p className="jetbrains-mono line-clamp-2 text-xs tracking-tight text-[var(--text-muted)] leading-relaxed mt-1">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1 mt-3 pt-2 border-t border-[var(--border-color)]">
                    {project.techStack?.map((tech, i) => (
                      <span
                        key={i}
                        className="jetbrains-mono text-[9px] px-1.5 py-0.5 rounded bg-[var(--badge-subtle-bg)] text-[var(--badge-subtle-text)] border border-[var(--badge-subtle-border)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-12 flex flex-col items-center justify-center text-center border border-dashed border-[var(--border-dashed)] rounded-xl bg-[var(--card-bg)] p-6 my-2"
          >
            <p className="text-sm text-[var(--text-muted)]">No projects found</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All");
              }}
              className="mt-3 px-3 py-1 text-xs rounded-md bg-[var(--badge-subtle-bg)] hover:bg-[var(--border-color)] text-[var(--text-primary)] border border-[var(--border-color)] transition-colors cursor-pointer"
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
