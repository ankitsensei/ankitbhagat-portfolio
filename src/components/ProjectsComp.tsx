import { motion } from "motion/react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

type ProjectProps = {
  image: string;
  heading: string;
  description: string;
  onImageClick?: (image: string) => void;
  techStack?: string[];
  github: string;
  liveLink?: string;
};

const ProjectsComp = ({
  image,
  heading,
  description,
  onImageClick,
  techStack,
  github,
  liveLink,
}: ProjectProps) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group bg-zinc-50 dark:bg-zinc-900 w-full border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-zinc-200 dark:hover:shadow-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300"
    >
      <div className="flex flex-col h-full font-inter">
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={heading || "Project image"}
            className="w-full h-48 object-cover hover:cursor-zoom-in transition-transform duration-500 group-hover:scale-105"
            onClick={() => onImageClick && onImageClick(image)}
          />
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              className="absolute top-3 right-3 p-1.5 bg-black/50 backdrop-blur-sm rounded-lg text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-black/70"
            >
              <FiExternalLink className="text-sm" />
            </a>
          )}
        </div>
        <div className="px-4 py-3 flex flex-col gap-2.5 flex-1">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-medium dark:text-zinc-200 text-zinc-800 truncate">
              {heading}
            </h2>
            <a
              href={github}
              target="_blank"
              className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors shrink-0"
            >
              <FaGithub className="text-base" />
            </a>
          </div>
          <p className="text-zinc-500 dark:text-zinc-500 text-xs leading-relaxed line-clamp-2">
            {description}
          </p>
          <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
            {techStack?.map((element, index) => (
              <span
                key={index}
                className="px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded text-[11px]"
              >
                {element}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsComp;
