import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { ProjectData } from "../assets/ProjectsData";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

export const FeaturedProjects: React.FC = () => {
  // Select top featured projects
  const featured = ProjectData.slice(0, 4);

  return (
    <div className="box flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="text-sm text-[var(--text-muted)]">
          Featured <span className="font-medium text-[var(--text-primary)]">Projects</span>
        </span>
        <Link
          to="/projects"
          className="jetbrains-mono text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors duration-200"
        >
          View all ({ProjectData.length}) →
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {featured.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: idx * 0.08, duration: 0.4, ease: "easeOut" }}
            whileHover={{ y: -3 }}
            className="group relative flex flex-col rounded-lg border border-dashed border-[var(--border-dashed)] hover:border-[var(--text-muted)] bg-[var(--card-bg)] p-2.5 transition-all duration-300 shadow-sm"
          >
            {/* Corner hover crosshairs */}
            <div className="pointer-events-none absolute inset-0 z-10 -m-px opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute -left-px -top-px h-2 w-2 border-l border-t border-[var(--text-primary)]" />
              <div className="absolute -right-px -top-px h-2 w-2 border-r border-t border-[var(--text-primary)]" />
              <div className="absolute -bottom-px -right-px h-2 w-2 border-b border-r border-[var(--text-primary)]" />
              <div className="absolute -bottom-px -left-px h-2 w-2 border-b border-l border-[var(--text-primary)]" />
            </div>

            {/* Project Image Preview */}
            <div className="z-10 h-44 min-h-44 overflow-hidden rounded-md border border-[var(--border-color)] bg-[var(--pill-bg)] relative">
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
                  className="absolute top-2.5 right-2.5 p-1.5 rounded-md bg-black/70 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:text-white hover:bg-black"
                >
                  <FiExternalLink className="text-xs" />
                </a>
              )}
            </div>

            {/* Project Meta */}
            <div className="mt-3 flex flex-col gap-1.5">
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

              <p className="jetbrains-mono line-clamp-2 text-xs tracking-tight text-[var(--text-muted)] leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-1 mt-1 pt-1">
                {project.techStack?.slice(0, 3).map((tech, i) => (
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
      </div>
    </div>
  );
};

export default FeaturedProjects;
