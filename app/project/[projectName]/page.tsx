"use client";

import PageHeader from "@/components/PageHeader";
import { Project, getProject } from "@/constants/projects";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { TfiNewWindow } from "react-icons/tfi";
import { redirect } from "next/navigation";

type ProjectPageProps = {
  params: {
    projectName: string;
  };
};

const ProjectPage = ({ params: { projectName } }: ProjectPageProps) => {
  const [project, setProject] = useState<Project | undefined>(undefined);

  useEffect(() => {
    const currentProject = getProject(projectName);
    if (!currentProject) {
      redirect("/project");
    }
    setProject(currentProject);
  }, [projectName]);

  return (
    <div className="p-4 sm:p-6 md:p-10 lg:p-14 flex flex-col divide-y-2 divide-slate-700">
      <PageHeader text="Back to Projects Page" redirectUrl="/project" />
      <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-10 xl:space-x-16 pt-5">
        <div className="flex flex-col items-center justify-center space-y-2 lg:max-w-[80%]">
          {project?.screenshot && (
            <Image
              src={project.screenshot}
              alt=""
              width={0}
              height={0}
              className="w-full rounded-lg"
              unoptimized
            />
          )}
          {project?.techStack && (
            <div className="sm:flex hidden flex-row justify-between pt-3 w-full">
              {project.techStack.map((util, index) => (
                <div
                  key={index}
                  className="flex flex-row space-x-2 items-center text-amber-500"
                >
                  <util.icon />
                  <p>{util.name}</p>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="flex flex-col h-full w-full divide-y-2 divide-slate-700">
          <div className="flex flex-col pb-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-opacity-0 text-white bg-clip-text pb-2">
              {project?.name}
            </h1>
            <p className="text-sm sm:text-base md:text-lg">
              {project?.detailedDescription}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-between w-full pt-4">
            {project?.github && (
              <Link
                href={project.github}
                target="_blank"
                className="flex flex-row items-end justify-center space-y-0 space-x-2"
              >
                <p className="text-center border-b-2 border-white pt-1 hover:pt-0 hover:pb-1 transition-all duration-300 ease-in-out">
                  Github
                </p>
                <TfiNewWindow className="w-8 h-8" />
              </Link>
            )}
            {project?.live && (
              <Link
                href={project?.live || ""}
                target="_blank"
                className="flex flex-row items-end justify-center space-y-0 space-x-2"
              >
                <p className="text-center border-b-2 border-white pt-1 hover:pt-0 hover:pb-1 transition-all duration-300 ease-in-out">
                  Live Website
                </p>
                <TfiNewWindow className="w-8 h-8" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
