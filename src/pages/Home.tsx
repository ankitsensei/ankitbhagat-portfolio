import React from "react";
import { motion } from "motion/react";
import Hero from "../components/Hero";
import ActivityCalendar from "../components/ActivityCalendar";
import ExperienceTimeline from "../components/ExperienceTimeline";
import SocialLinks from "../components/SocialLinks";
import FeaturedProjects from "../components/FeaturedProjects";
import Footer from "../components/Footer";
import DockNavbar from "../components/DockNavbar";

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut" as const,
    },
  }),
};

export const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)] antialiased">
      <main className="page">
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <Hero />
        </motion.div>
        <motion.div
          custom={1}
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <ActivityCalendar />
        </motion.div>
        <motion.div
          custom={2}
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <ExperienceTimeline />
        </motion.div>
        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <SocialLinks />
        </motion.div>
        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <FeaturedProjects />
        </motion.div>
        <Footer />
      </main>

      {/* Floating Bottom Dock Navigation Menu */}
      <DockNavbar />

      {/* Bottom Progressive Blur Gradient Overlay */}
      <div className="bottom-progressive-blur" />
    </div>
  );
};

export default Home;
