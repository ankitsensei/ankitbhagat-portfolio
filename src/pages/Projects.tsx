import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import DotField from "../components/DotField";
import { useTheme } from "../components/ThemeContext";
import ProjectComp from "../components/ProjectsComp";
import Navbar from "../components/Navbar";
import { ProjectData } from "../assets/ProjectsData";
import Footer from "../components/Footer";

const Projects = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
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
    <div className="h-full w-full flex flex-col justify-between mx-auto px-6 font-geist bg-white dark:bg-zinc-950 text-black dark:text-white relative">
      <DotField
        dotRadius={2.5}
        dotSpacing={10}
        bulgeStrength={29}
        glowRadius={0}
        sparkle
        waveAmplitude={2}
        cursorRadius={500}
        cursorForce={0}
        bulgeOnly
        gradientFrom={isDark ? "#1e1e1e" : "#f0f0f0"}
        gradientTo={isDark ? "#1e1e1e" : "#f0f0f0"}
        glowColor={isDark ? "#120F17" : "#ffffff"}
      />
      <div className="max-w-4xl h-full flex flex-col justify-between mx-auto">
        <Navbar />
        <motion.div
          initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full h-full "
        >
          <h1 className="text-2xl">Projects 🚀</h1>
          <div className="mt-10 grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
            {ProjectData.map((project) => (
              <ProjectComp
                key={project.heading}
                {...project}
                onImageClick={setPreviewImage}
              />
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
    </div>
  );
};

export default Projects;
