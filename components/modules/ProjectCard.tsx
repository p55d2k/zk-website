import { Project } from "@/constants/projects";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  proj: Project;
}

const ProjectCard = ({ proj }: ProjectCardProps) => {
  return (
    <Link
      href={`/project/${proj.name.toLowerCase().replaceAll(" ", "_")}`}
      className="flex flex-col space-y-3 bg-slate-900 rounded-lg border-slate-700 border-4 border-t-0 border-l-0 divide-y-2 divide-slate-700 p-12 hover:border-8 hover:border-t-0 hover:border-l-0 cursor-pointer transition-all duration-200 ease-in-out h-[450px] items-center justify-center max-w-[100%]"
    >
      <div className="flex flex-col space-y-2">
        <Image
          src={proj.screenshot}
          alt={proj.name}
          width={400}
          height={400}
          className="bg-white w-full border-2 border-white rounded-lg"
          unoptimized
        />
        <div className="text-center bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-opacity-0 pb-3 text-white bg-clip-text font-extrabold text-4xl pt-3">
          {proj.name}
        </div>
        <p className="text-center text-sm text-amber-500">{proj.description}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;
