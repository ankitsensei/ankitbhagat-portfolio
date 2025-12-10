import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "motion/react"

// import { useState } from "react";
import ProjectComp from "../components/ProjectsComp"
import FocusMode from "../assets/imgs/focusModeExtension.png"
import BillSplitter from "../assets/imgs/Bill-splitter.png"

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
    }
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mt-10 px-4  w-full h-full bg-white dark:bg-black">
        <h1 className="text-lg font-medium">Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <ProjectComp image={BillSplitter} heading='Bill Splitter' description='A bill Splitter Web App, which stores the history of bill splits among friends. It has two sections Unsettled and Settled which shows dues paid by friends or not. And other features too.' onImageClick={setPreviewImage} />
          <ProjectComp image={FocusMode} heading='Focus Mode' description='It is a chrome extension which block any sites you put in it. It really helps you to be productive without any distractions.' onImageClick={setPreviewImage} />
        </div>

      </motion.div >
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
    </>
  )
}

export default Projects