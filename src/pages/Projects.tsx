import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "motion/react"

import ProjectComp from "../components/ProjectsComp"
import Navbar from '../components/Navbar';
import FocusMode from "../assets/imgs/focusModeExtension.png"
import BillSplitter from "../assets/imgs/Bill-splitter.png"
import BookList from "../assets/imgs/bookList.png"
import Connect from '../components/Connect';
import Footer from '../components/Footer';


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
    <div className='h-full w-full flex flex-col mx-auto px-6 font-geist bg-white dark:bg-black text-black dark:text-white'>
      <div className='max-w-4xl h-full flex flex-col justify-between mx-auto'>
        <Navbar />
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full h-full bg-white dark:bg-black">
          <h1 className="text-2xl">Projects 🚀</h1>
          <div className="mt-10 grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <ProjectComp
              image={BillSplitter}
              heading='Bill Splitter'
              description='A bill Splitter Web App, which stores the history of bill splits among friends. It has two sections Unsettled and Settled which shows dues paid by friends or not. And other features too.'
              onImageClick={setPreviewImage}
              techStack={["ReactJs", "TypeScript", "Supabase"]}
              github="https://github.com/ankitsensei/Bill-Splitter-with-History" />
            <ProjectComp image={FocusMode} heading='Focus Mode' description='It is a chrome extension which block 
            any sites you put in it. It really helps you to be productive without any distractions.' onImageClick={setPreviewImage} techStack={["HTML", "CSS", "JavaScript"]} github="https://github.com/ankitsensei/Focus-Mode-Extension" />
            <ProjectComp image={BookList} heading='Book List' description='A simple full-stack CRUD (Create, Read, Update, Delete) web application for managing a collection of books. This app allows users to store and manage book details including title, author, publish year, and a book cover image.' onImageClick={setPreviewImage} techStack={["NodeJs", "ExpressJs", "MongoDB", "ReactJs"]} github="https://github.com/ankitsensei/book-store" />
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
        <Connect />
        <Footer />
      </div>
    </div>
  )
}

export default Projects