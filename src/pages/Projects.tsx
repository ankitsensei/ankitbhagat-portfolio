import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

import ProjectComp from "../components/ProjectsComp";
import Navbar from "../components/Navbar";
import FocusMode from "../assets/imgs/focusModeExtension.png";
import BillSplitter from "../assets/imgs/Bill-splitter.png";
import BookList from "../assets/imgs/bookList.jpg";
import XClone from "../assets/imgs/XClone.jpg";
import UrlShortener from "../assets/imgs/UrlShortener.jpg";
import Rhythm from "../assets/imgs/rhythm.jpg";
import theNorthFace from "../assets/imgs/theNorthFace.jpg";

import Footer from "../components/Footer";

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
    <div className="h-full w-full flex flex-col justify-between mx-auto px-6 font-geist bg-white dark:bg-zinc-950 text-black dark:text-white">
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
            <ProjectComp
              image={theNorthFace}
              heading="theNorthFace"
              description="A full-stack MERN e-commerce application with secure authentication, product management, shopping cart, Stripe payments, Cash on Delivery, order tracking, an admin dashboard.
"
              onImageClick={setPreviewImage}
              techStack={["ReactJs", "Nodejs", "Expressjs", "MongoDB"]}
              github="https://github.com/ankitsensei/theNorthFace"
              liveLink="https://the-north-face-kappa.vercel.app/"
            />
            <ProjectComp
              image={Rhythm}
              heading="rhythm"
              description="A modern music player built with React, TypeScript, Tailwind CSS, and the YouTube Data API. Search songs, play music instantly, control playback with keyboard shortcuts, and enjoy a clean Spotify-inspired experience."
              onImageClick={setPreviewImage}
              techStack={["ReactJs", "tailwind css", "typescript"]}
              github="https://github.com/ankitsensei/rhythm"
              liveLink="https://rhythm-topaz.vercel.app/"
            />
            <ProjectComp
              image={UrlShortener}
              heading="url-shortener"
              description="A URL shortener converts long web links into shorter, easy-to-share URLs while redirecting users to the original page."
              onImageClick={setPreviewImage}
              techStack={["Nodejs", "Expressjs", "MongoDB", "ReactJs"]}
              github="https://github.com/ankitsensei/url-shortener"
              // liveLink="https://x-clone-phi-one.vercel.app/"
            />
            <ProjectComp
              image={XClone}
              heading="X-Clone"
              description="A full-stack CRUD web app for X-posts collection. Users can add, edit, delete, and view X-posts with details like texts and images in one place."
              onImageClick={setPreviewImage}
              techStack={["Nodejs", "Expressjs", "MongoDB", "ReactJs"]}
              github="https://github.com/ankitsensei/Bill-Splitter-with-History"
              liveLink="https://x-clone-phi-one.vercel.app/"
            />
            <ProjectComp
              image={BookList}
              heading="Book List"
              description="A full-stack CRUD web app for managing a personal book collection. Users can add, edit, delete, and view books with details like title, author, publish year, and cover images in one place."
              onImageClick={setPreviewImage}
              techStack={["NodeJs", "ExpressJs", "MongoDB", "ReactJs"]}
              github="https://github.com/ankitsensei/book-store"
              liveLink="https://book-store-one-lac.vercel.app/"
            />
            <ProjectComp
              image={FocusMode}
              heading="Focus Mode"
              description="A Chrome extension that helps improve productivity by blocking distracting websites. Users can add sites to a custom block list and stay focused on tasks without interruptions during work sessions."
              onImageClick={setPreviewImage}
              techStack={["HTML", "CSS", "JavaScript"]}
              github="https://github.com/ankitsensei/Focus-Mode-Extension"
              liveLink="https://github.com/ankitsensei/Focus-Mode-Extension"
            />
            <ProjectComp
              image={BillSplitter}
              heading="Bill Splitter"
              description="A bill splitter web app that tracks shared expenses and keeps a history of transactions among friends. It includes settled and unsettled sections to clearly show who has paid or still owes money."
              onImageClick={setPreviewImage}
              techStack={["ReactJs", "TypeScript", "Supabase"]}
              github="https://github.com/ankitsensei/Bill-Splitter-with-History"
              liveLink="https://bill-splitter-with-history.vercel.app/"
            />
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
