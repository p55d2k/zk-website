"use client";

import SectionHeader from "../modules/SectionHeader";
import projects from "@/constants/projects";
import ProjectCard from "../modules/ProjectCard";

const Projects = () => {
  return (
    <div className="pt-20 flex flex-col" id="projects">
      <div className="flex flex-col text-white px-8 sm:px-16 md:px-20 space-y-6 items-center">
        <SectionHeader
          sequence={["my project showcase", 4000, "作品展示", 4000]}
        >
          what have i <span className="text-green-500">built</span>?
        </SectionHeader>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 place-items-center">
          {projects.map((proj, index) => (
            <ProjectCard key={index} proj={proj} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
