"use client";

import {
  backEnd,
  frontEnd,
  utilities,
  languages,
  libraries,
} from "@/constants/skills";
import SkillsCard from "../cards/SkillsCard";
import SubsectionHeader from "../SubsectionHeader";

const Skills = () => {
  return (
    <div
      className="flex flex-col text-white space-y-6 mt-12 items-center"
      id="skills"
    >
      <SubsectionHeader
        subtitle="what do i use?"
        sequence={["programming skillset", 4000, "编程技能", 4000]}
      />
      <div className="flex flex-col px-8 sm:px-16 md:px-20 space-y-4 items-center justify-center">
        <SkillsCard
          title="Front-End"
          description="Front-End, also known as UI/UX, is where the user interacts with the website."
          skills={frontEnd}
        />
        <SkillsCard
          title="Back-End"
          description="Back-End, also known as server-side, is where the server communicates with the database."
          skills={backEnd}
        />
        <SkillsCard
          title="Tools"
          description="These are the tools that I use to make my workflow more efficient."
          skills={utilities}
        />
        <SkillsCard
          title="Languages"
          description="Here are some other languages that I have experience with."
          skills={languages}
        />
        <SkillsCard
          title="Libraries"
          description="These are some other libraries that I know how to use, and am proficient in."
          skills={libraries}
        />
      </div>
    </div>
  );
};

export default Skills;
