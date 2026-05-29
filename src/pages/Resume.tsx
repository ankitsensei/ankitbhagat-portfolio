import { PDFViewer } from "../components/ui/PDFViewer";
import Navbar from "../components/Navbar";
import { motion } from "motion/react";

const Resume = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full text-sm bg-zinc-9 font-geist bg-white dark:bg-zinc-950 text-black dark:text-white overflow-hidden">
      <div className="w-full md:w-fit">
        <Navbar />
        <motion.div
          initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <PDFViewer />
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;
