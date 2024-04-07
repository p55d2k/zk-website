"use client";

import SectionHeader from "../modules/SectionHeader";
import { useMedia } from "react-use";

const Projects = () => {
  const flexSection = useMedia("(max-width: 900px)", false);

  return (
    <div
      className="flex flex-col text-white px-8 sm:px-16 md:px-20 space-y-6 pt-20 items-center"
      id="projects"
    >
      <SectionHeader sequence={["my project showcase", 4000, "作品展示", 4000]}>
        what have i <span className="text-green-500">built</span>?
      </SectionHeader>
    </div>
  );
};

export default Projects;
