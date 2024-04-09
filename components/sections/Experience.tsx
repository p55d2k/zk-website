"use client";

import experience from "@/constants/experience";
import SectionHeader from "../modules/SectionHeader";
import Image from "next/image";
import Link from "next/link";

const Experience = () => {
  return (
    <div className="pt-20 flex flex-col" id="experience">
      <div className="flex flex-col text-white px-8 sm:px-16 md:px-20 space-y-6 items-center">
        <SectionHeader
          sequence={["what have i done in work?", 4000, "我的工作经验", 4000]}
        >
          my work <span className="text-purple-500">experience</span>
        </SectionHeader>
        {/* TODO: remove when got more jobs */}
        <div className="flex flex-row items-center justify-center space-x-6">
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 place-items-center"> */}
          {experience.map((exp, index) => (
            <Link
              key={index}
              className="flex flex-col space-y-3 bg-slate-900 rounded-lg divide-y-2 divide-slate-700 p-12 border-2 border-transparent hover:border-slate-700 transition-all duration-200 ease-in-out"
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
                  unoptimized
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
