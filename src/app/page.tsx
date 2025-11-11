import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EducationBackground from "@/components/EducationBackground";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";

export default function App() {
  return (
    <div className="min-h-screen bg-rose-50 text-gray-900">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <EducationBackground />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <footer className="max-w-4xl mx-auto px-6 py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Khin Sakphearoth
      </footer>
    </div>
  );
}
