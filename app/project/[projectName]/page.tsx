import PageHeader from "@/components/PageHeader";
import AnimatedTitle from "@/components/AnimatedTitle";
import { Project, getProject } from "@/constants/projects";

import Image from "next/image";
import Link from "next/link";

import { TfiNewWindow } from "react-icons/tfi";
import { notFound } from "next/navigation";

interface ProjectPageProps {
  params: Promise<{
    projectName: string;
  }>;
}

const ProjectPage = async ({ params }: ProjectPageProps) => {
  const { projectName } = await params;
  const project = getProject(projectName);

  if (!project) {
    notFound();
  }

  return (
    <div className="p-4 sm:p-6 md:p-10 lg:p-14 !pt-2 flex flex-col divide-y-2 divide-slate-700">
      <PageHeader text="Back to Projects Page" redirectUrl="/project" />
      <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-10 xl:space-x-16 pt-5">
        <div className="flex flex-col items-center justify-center space-y-2 lg:max-w-[80%]">
          {project?.screenshot && (
            <Image
              unoptimized
              src={project.screenshot}
              alt=""
              width={0}
              height={0}
              className="w-full"
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
            {project?.name && (
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold shiny-text pb-2">
                <AnimatedTitle text={project?.name} />
              </h1>
            )}
            <p className="text-sm sm:text-base md:text-lg">
              {project?.detailedDescription}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-between w-full pt-4">
            {project?.github && (
              <Link
                href={project.github}
                target="_blank"
                className="flex flex-row items-end justify-center space-y-0 space-x-2 group"
              >
                <p className="text-center border-b-2 border-white pt-1 group-hover:pt-0 group-hover:pb-1 duration-150 ease-in-out transition-all">
                  Github
                </p>
                <TfiNewWindow className="w-8 h-8" />
              </Link>
            )}
            {project?.live && (
              <Link
                href={project?.live || ""}
                target="_blank"
                className="flex flex-row items-end justify-center space-y-0 space-x-2 group"
              >
                <p className="text-center border-b-2 border-white pt-1 group-hover:pt-0 group-hover:pb-1 duration-150 ease-in-out transition-all">
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

export async function generateStaticParams() {
  const projects = (await import("@/constants/projects")).default;
  return projects.map((project) => ({
    projectName: project.name.toLowerCase().replaceAll(" ", "_"),
  }));
}
