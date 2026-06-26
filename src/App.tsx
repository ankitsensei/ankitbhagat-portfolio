import { ThemeProvider } from "./components/ThemeContext";
import { motion } from "motion/react";
import DotField from "./components/DotField";
import Home from "./pages/Home";

const App = () => {
  return (
    <ThemeProvider>
      <motion.div className=" bg-white dark:bg-zinc-950 w-full h-max md:h-screen lg:h-full text-black dark:text-white px-6 relative">
        <DotField
          dotRadius={2.5}
          dotSpacing={10}
          bulgeStrength={29}
          glowRadius={50}
          sparkle={false}
          waveAmplitude={2}
          cursorRadius={500}
          cursorForce={0}
          bulgeOnly
          gradientFrom="#0d0d0d"
          gradientTo="#535353"
          glowColor="#120F17"
        />
        <div className="h-full flex flex-col w-full max-w-xl mx-auto font-geist">
          <Home />
        </div>
      </motion.div>
    </ThemeProvider>
  );
};

export default App;
