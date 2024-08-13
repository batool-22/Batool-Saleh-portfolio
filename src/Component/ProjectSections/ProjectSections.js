import React from "react";
import Navbar from "../Navbar/Navbar";
import HomePage from "../HomePage/HomePage";
import { AboutPage } from "../AboutPage/AboutPage";
import ProjectsPage from "../ProjectsPage/ProjectsPage";
import ToolsPage from "../ToolsPage/ToolsPage";
import ContactPage from "../ContactPage/ContactPage";

const ProjectSections = () => {
  return (
    <>
      <Navbar />
      <div class="main-content">
        <HomePage />
        <AboutPage />
        <ProjectsPage />
        <ToolsPage />
        <ContactPage />
      </div>
    </>
  );
};

export default ProjectSections;
