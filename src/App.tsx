import { ThemeProvider, useTheme } from "./components/ThemeContext";
import { motion } from "motion/react";
import DotField from "./components/DotField";
import Home from "./pages/Home";

const AppContent = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <motion.div className=" bg-white dark:bg-zinc-950 w-full h-max md:h-screen lg:h-full text-black dark:text-white px-6 relative">
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
