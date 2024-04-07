import { IconType } from "react-icons/lib";
import { useMedia } from "react-use";

interface SkillsCardProps {
  title: string;
  description: string;
  skills: {
    name: string;
    icon: IconType;
  }[];
}

// TODO: add link to the icons
const SkillsCard = ({ title, description, skills }: SkillsCardProps) => {
  const isSmallScreen = useMedia("(max-width: 430px)", false);

  return (
    <div className="flex flex-col lg:flex-row w-full bg-slate-900 rounded-lg p-3 border-slate-700 border-4 border-t-0 border-l-0 divide-y-2 lg:divide-x-2 lg:divide-y-0 divide-slate-700">
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
          isSmallScreen ? "grid-cols-1" : "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        } lg:text-left font-light w-full`}
      >
        {skills.map((skill, index) => (
          <div className="flex flex-row space-x-3 items-center m-3" key={index}>
            <skill.icon className="h-6 w-6 sm:w-12 sm:h-12 text-amber-300" />
            <span className="items-center flex text-amber-300 text-sm lg:text-base">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCard;
