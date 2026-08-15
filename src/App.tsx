import { motion } from "motion/react";
import Home from "./pages/Home";
import SideStripes from "./components/ui/SideStripes";

const App = () => {
  return (
    <motion.div className="min-h-screen bg-white dark:bg-[#121212] text-black dark:text-white">
      <div className="relative mx-auto max-w-3xl px-4 md:px-6 font-geist">
        <SideStripes />
        <Home />
      </div>
    </motion.div>
  );
};

export default App;
