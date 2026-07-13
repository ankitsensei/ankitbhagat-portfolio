import { ThemeProvider } from "./components/ThemeContext";
import { motion } from "motion/react";
import Home from "./pages/Home";

const AppContent = () => {
  return (
    <motion.div className=" bg-white dark:bg-zinc-950 w-full h-max md:h-screen lg:h-full text-black dark:text-white px-4 md:px-6 relative">
      <div className="h-full flex flex-col w-full max-w-xl mx-auto font-geist">
        <Home />
      </div>
    </motion.div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
