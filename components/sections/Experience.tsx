"use client";

import experiences from "@/constants/experience";
import SectionHeader from "../SectionHeader";
import ExperienceCard from "../cards/ExperienceCard";

const Experience = () => {
  return (
    <div className="pt-20 flex flex-col" id="experience">
      <div className="flex flex-col text-white px-8 sm:px-16 md:px-20 space-y-6 items-center">
        <SectionHeader
          sequence={["what have i done in work?", 4000, "我的工作经验", 4000]}
        >
          my work <span className="text-green-500">experience</span>
        </SectionHeader>
        <div
          className={`grid grid-cols-1 ${
            experiences.length <= 1
              ? "xl:grid-cols-1"
              : "xl:grid-cols-2"
          } gap-4`}
        >
          {experiences.map((exp, index) => (
            <ExperienceCard exp={exp} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
