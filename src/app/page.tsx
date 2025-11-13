import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EducationBackground from "@/components/EducationBackground";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-gray-900">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <EducationBackground />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <ScrollToTopButton />
      <hr />
      <footer className="max-w-4xl mx-auto px-6 py-8 text-center text-md text-gray-500">
        © {new Date().getFullYear()} Khin Sakphearoth
      </footer>
    </div>
  );
}
