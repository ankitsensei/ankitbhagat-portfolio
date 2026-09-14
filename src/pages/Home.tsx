import React from "react";
import Hero from "../components/Hero";
import ActivityCalendar from "../components/ActivityCalendar";
import ExperienceTimeline from "../components/ExperienceTimeline";
import SocialLinks from "../components/SocialLinks";
import FeaturedProjects from "../components/FeaturedProjects";
import Footer from "../components/Footer";
import DockNavbar from "../components/DockNavbar";

export const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#0A0B0C] text-[#EDEDED] antialiased">
      <main className="page">
        <Hero />
        <ActivityCalendar />
        <ExperienceTimeline />
        <SocialLinks />
        <FeaturedProjects />
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
