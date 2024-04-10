import { Experience } from "@/constants/experience";
import Image from "next/image";
import Link from "next/link";

interface ExperienceCardProps {
  exp: Experience;
}

const ExperienceCard = ({ exp }: ExperienceCardProps) => {
  return (
    <Link
      className="flex flex-col space-y-3 divide-y-2 divide-slate-700 p-12 card"
      href={exp.link}
      target="_blank"
    >
      <div className="flex flex-col space-y-2 items-center">
        <Image
          src={exp.logo}
          alt={exp.companyName}
          width={300}
          height={300}
          // TODO: remove when got more jobs
          // className="bg-white w-full"
          className="bg-white items-center"
        />
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
      <div className="pt-4 text-center text-sm">{exp.description}</div>
    </Link>
  );
};

export default ExperienceCard;
