"use client";

import { getProject } from "@/constants/projects";
import { useEffect } from "react";
import { redirect } from "next/navigation";

interface ProjectPageProps {
  params: {
    projectName: string;
  };
}

const ProjectPage = ({ params: { projectName } }: ProjectPageProps) => {
  useEffect(() => {
    const currentProject = getProject(projectName);
    if (!currentProject || !currentProject.live) {
      redirect("/404");
    }
    redirect(currentProject.live);
  }, [projectName]);

  return <p>Loading...</p>;
};

export default ProjectPage;
