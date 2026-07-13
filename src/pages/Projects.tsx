import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import ProjectComp from "../components/ProjectsComp";
import Navbar from "../components/Navbar";
import { ProjectData } from "../assets/ProjectsData";
import Footer from "../components/Footer";
import SideStripes from "../components/ui/SideStripes";

const Projects = () => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key == "Escape") {
        setPreviewImage(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <motion.div className="min-h-screen bg-white dark:bg-zinc-950 text-black dark:text-white">
      <div className="relative mx-auto max-w-3xl px-4 md:px-6 font-geist">
        <SideStripes />
        <Navbar />
        <motion.div
          initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full h-full"
        >
          <div className="mb-8 md:mb-10">
            <h1 className="text-xl md:text-2xl dark:text-zinc-400 text-zinc-600">
              Projects
            </h1>
            <p className="text-sm dark:text-zinc-500 text-zinc-400 mt-1">
              A collection of things I've built
            </p>
          </div>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
            {ProjectData.map((project, index) => (
              <motion.div
                key={project.heading}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
              >
                <ProjectComp {...project} onImageClick={setPreviewImage} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Image Preview Popup */}
        <AnimatePresence>
          {previewImage && (
            <motion.div
              key="preview"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setPreviewImage(null)}
              className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 cursor-pointer"
            >
              <motion.img
                src={previewImage}
                alt="Preview"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="max-h-[90%] max-w-[90%] rounded-2xl"
              />
            </motion.div>
          )}
        </AnimatePresence>
        <Footer />
      </div>
    </motion.div>
  );
};

export default Projects;
