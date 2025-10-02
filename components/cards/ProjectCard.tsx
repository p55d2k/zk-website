import { Project } from "@/constants/projects";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  proj: Project;
  whiteText?: boolean;
}

const ProjectCard = ({ proj, whiteText }: ProjectCardProps) => {
  return (
    <Link
      href={`/project/${proj.name.toLowerCase().replaceAll(" ", "_")}`}
      className="flex flex-col space-y-3 card divide-y-2 divide-slate-700 p-12 h-[500px] items-center justify-center max-w-[100%]"
    >
      <div className="flex flex-col space-y-2">
        <Image
          unoptimized
          src={proj.screenshot}
          alt={proj.name}
          width={400}
          height={200}
          className="bg-white border border-slate-700 w-full max-h-[300px]"
        />
        <div className="text-center bg-gradient-to-r pb-3 text-red-500 font-extrabold text-4xl pt-3">
          {proj.name}
        </div>
        <p className={`text-center text-sm ${!whiteText && "text-amber-500"}`}>
          {proj.description}
        </p>
      </div>
    </Link>
  );
};

export default ProjectCard;
