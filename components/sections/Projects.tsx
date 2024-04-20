"use client";

import SectionHeader from "../SectionHeader";
import projects from "@/constants/projects";
import ProjectCard from "../cards/ProjectCard";
import Link from "next/link";
import ShinyButton from "../ShinyButton";

const Projects = () => {
  return (
    <div className="mt-16 flex flex-col" id="projects">
      <div className="flex flex-col text-white px-8 sm:px-16 md:px-20 space-y-6 items-center">
        <SectionHeader
          sequence={["my project showcase", 4000, "作品展示", 4000]}
        >
          what have i <span className="text-blue-500">built</span>?
        </SectionHeader>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 place-items-center">
          {projects.slice(0, 3).map((proj, index) => (
            <ProjectCard key={index} proj={proj} />
          ))}
        </div>
        <div className="flex flex-row w-full justify-end items-center">
          <Link href="/project">
            <ShinyButton text="view all" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
