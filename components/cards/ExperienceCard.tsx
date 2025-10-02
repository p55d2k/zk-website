import { Experience } from "@/constants/experience";
import Image from "next/image";
import Link from "next/link";

interface ExperienceCardProps {
  exp: Experience;
}

const ExperienceCard = ({ exp }: ExperienceCardProps) => {
  return (
    <Link
      className="flex flex-col md:flex-row gap-3 divide-y-2 md:divide-y-0 md:divide-x-2 divide-slate-700 p-12 card items-center justify-center"
      href={exp.link}
      target="_blank"
    >
      <Image
        unoptimized
        src={exp.logo}
        alt={exp.companyName}
        width={300}
        height={300}
        className="bg-white border-2 border-slate-700 items-center"
      />

      <div className="flex flex-col space-y-2 md:pl-4">
        <div className="flex flex-col space-y-2 items-center">
          <h1 className="text-center font-extrabold text-4xl pt-3 text-red-500">
            {exp.companyName}
          </h1>

          <div className="flex flex-col">
            <p className="text-center text-sm text-amber-500">
              {exp.start} - {exp.end} <span className="text-white">for</span>{" "}
              {exp.time}
            </p>
            <p className="text-center text-sm">
              as a <span className="text-amber-500">{exp.position}</span>
            </p>
            <p className="text-center text-sm">
              in <span className="text-amber-500">{exp.location}</span>
            </p>
          </div>
        </div>

        <div className="pt-2 text-center text-sm max-w-96">
          {exp.description}
        </div>
      </div>
    </Link>
  );
};

export default ExperienceCard;
