import React from "react";
import { Link } from "react-router";
import { ProjectData } from "../assets/ProjectsData";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

export const FeaturedProjects: React.FC = () => {
  // Select top featured projects
  const featured = ProjectData.slice(0, 4);

  return (
    <div className="box flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <span className="text-sm text-[#8B8D91]">
          still not sure? Check out my <span className="font-medium text-white">Projects</span>
        </span>
        <Link
          to="/projects"
          className="jetbrains-mono text-xs text-[#8B8D91] hover:text-white transition-colors duration-200"
        >
          View all ({ProjectData.length}) →
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {featured.map((project, idx) => (
          <div
            key={idx}
            className="group relative flex flex-col rounded-lg border border-dashed border-[#2D2E2F] hover:border-white/30 bg-[#121314]/40 hover:bg-[#151618]/70 p-2.5 transition-all duration-300"
          >
            {/* Corner hover crosshairs */}
            <div className="pointer-events-none absolute inset-0 z-10 -m-px opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute -left-px -top-px h-2 w-2 border-l border-t border-white/90" />
              <div className="absolute -right-px -top-px h-2 w-2 border-r border-t border-white/90" />
              <div className="absolute -bottom-px -right-px h-2 w-2 border-b border-r border-white/90" />
              <div className="absolute -bottom-px -left-px h-2 w-2 border-b border-l border-white/90" />
            </div>

            {/* Project Image Preview */}
            <div className="z-10 h-44 min-h-44 overflow-hidden rounded-md border border-[#232426] bg-[#0E0F10] relative">
              <img
                src={project.image}
                alt={project.heading}
                className="h-full w-full object-cover object-top opacity-55 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105"
              />
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-2.5 right-2.5 p-1.5 rounded-md bg-black/60 backdrop-blur-md text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:text-white hover:bg-black/90"
                >
                  <FiExternalLink className="text-xs" />
                </a>
              )}
            </div>

            {/* Project Meta */}
            <div className="mt-3 flex flex-col gap-1.5">
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

              <p className="jetbrains-mono line-clamp-2 text-xs tracking-tight text-[#8B8D91] leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-1 mt-1 pt-1">
                {project.techStack?.slice(0, 3).map((tech, i) => (
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
      </div>
    </div>
  );
};

export default FeaturedProjects;
