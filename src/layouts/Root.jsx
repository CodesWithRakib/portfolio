import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

import Contact from "../components/Contact";
import SkillsSection from "../components/SkillsSection";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import ExperienceSection from "../components/ExperienceSection";
import EducationSection from "../components/EducationSection";
import TestimonialsSection from "../components/TestimonialsSection";
import BlogSection from "../components/BlogSection";

const Root = () => {
  return (
    <div className="">
      <NavBar />
      <Hero />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <TestimonialsSection />
      <BlogSection />
      <Contact />
      <Footer />
    </div>
  );
};

export default Root;
