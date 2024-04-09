"use client";

import PageHeader from "@/components/modules/PageHeader";
import ProjectCard from "@/components/modules/ProjectCard";
import projects, { Project } from "@/constants/projects";
import { Skill, practicalSkills } from "@/constants/skills";

import { useState, useEffect } from "react";

const ProjectListing = () => {
  const [projectsToShow, setProjectsToShow] = useState<Project[]>(projects);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filter, setFilter] = useState<Skill | null>(null);

  useEffect(() => {
    let filteredProjects = projects.filter((proj) => {
      if (searchTerm === "") return true;
      return proj.name
        .toLowerCase()
        .replaceAll(" ", "")
        .includes(searchTerm.toLowerCase().replaceAll(" ", ""));
    });

    if (filter) {
      filteredProjects = filteredProjects.filter((proj) =>
        proj.techStack.find((skill) => skill.name === filter.name)
      );
    }

    setProjectsToShow(filteredProjects);
  }, [searchTerm, filter]);

  return (
    <div className="p-4 sm:p-6 md:p-10 lg:p-14 flex flex-col divide-y-2 divide-slate-700">
      <PageHeader text="Back to Projects" redirectUrl="/#projects" />
      <div className="flex flex-col space-y-8 py-5">
        <div className="flex flex-col">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-opacity-0 text-white bg-clip-text pb-1">
            Projects
          </h1>
          <p className="text-sm sm:text-base md:text-lg">
            Here are some of the projects I have worked on.
          </p>
          <div className="flex flex-col md:flex-row w-full space-y-2 md:space-y-0 md:space-x-4 mt-5">
            <input
              type="text"
              placeholder="Search"
              className="button p-2 border-2 border-slate-700 hover:bg-slate-500/60 outline-none rounded-md !text-left w-full md:w-[80%]"
              onChange={(e) => setSearchTerm(e.target.value)}
              value={searchTerm}
            />
            <select
              className="button p-2 border-2 border-slate-700 hover:bg-slate-500/60 outline-none rounded-md !text-left w-full md:w-[20%]"
              style={{ appearance: "none" }}
              onChange={(e) =>
                setFilter(
                  practicalSkills.find((s) => s.name === e.target.value) || null
                )
              }
            >
              <option value="">Filter</option>
              {practicalSkills.map((skill, index) => (
                <option key={index} value={skill.name}>
                  {skill.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        {projectsToShow.length ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 place-items-center">
            {projectsToShow.map((proj, index) => (
              <ProjectCard key={index} proj={proj} />
            ))}
          </div>
        ) : (
          <div className="text-center text-xl md:text-2xl lg:text-3xl font-light text-red-500">
            No projects found. Try searching for something else!
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectListing;
