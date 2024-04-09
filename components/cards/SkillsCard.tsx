import { Skill } from "@/constants/skills";
import Link from "next/link";
import { useMedia } from "react-use";

interface SkillsCardProps {
  title: string;
  description: string;
  skills: Skill[];
}

const SkillsCard = ({ title, description, skills }: SkillsCardProps) => {
  const isSmallScreen = useMedia("(max-width: 430px)", false);

  return (
    <div className="flex flex-col lg:flex-row w-full card !cursor-default p-3 divide-y-2 lg:divide-x-2 lg:divide-y-0 divide-slate-700">
      <div className="flex flex-col space-y-1 p-2 pr-4 w-full lg:w-[45%]">
        <h3 className="text-2xl lg:text-3xl font-thin text-red-500 text-center lg:text-left">
          {title}
        </h3>
        <p className="text-xs md:text-sm text-amber-500 text-center lg:text-left">
          {description}
        </p>
      </div>
      <div
        className={`pl-4 grid ${
          isSmallScreen
            ? "grid-cols-1"
            : "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        } lg:text-left font-light w-full`}
      >
        {skills.map((skill: Skill, index) => (
          <Link
            className="flex flex-row space-x-3 items-center p-3 card hover:bg-slate-700/40"
            href={skill.link}
            target="_blank"
            key={index}
          >
            <skill.icon className="h-6 w-6 sm:w-12 sm:h-12 text-amber-300" />
            <span className="items-center flex text-amber-300 text-sm lg:text-base">
              {skill.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SkillsCard;
