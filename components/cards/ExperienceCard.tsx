import { Experience } from "@/constants/experience";
import Image from "next/image";
import Link from "next/link";

interface ExperienceCardProps {
  exp: Experience;
}

const ExperienceCard = ({ exp }: ExperienceCardProps) => {
  return (
    <Link
      className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3 divide-y-2 md:divide-y-0 md:divide-x-2 divide-slate-700 p-12 card items-center justify-center"
      href={exp.link}
      target="_blank"
    >
      <Image
        src={exp.logo}
        alt={exp.companyName}
        width={300}
        height={300}
        className="bg-white items-center"
      />
      <div className="flex flex-col space-y-2 divide-y-2 divide-slate-700 md:pl-4">
        <div className="flex flex-col space-y-2 items-center">
          <h1 className="text-center font-extrabold text-4xl pt-3 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-opacity-0 pb-3 text-white bg-clip-text hover:underline transition-all duration-300 ease-in-out">
            {exp.companyName}
          </h1>
          <p className="text-center text-sm text-amber-500">
            {exp.start} - {exp.end} | {exp.time}
          </p>
        </div>
        <div className="flex flex-col pt-4 text-center text-sm">
          <p>
            as a <span className="text-amber-500">{exp.position}</span>
          </p>
          <p>
            in <span className="text-amber-500">{exp.location}</span>
          </p>
        </div>
        <div className="pt-4 text-center text-sm max-w-96">
          {exp.description}
        </div>
      </div>
    </Link>
  );
};

export default ExperienceCard;
