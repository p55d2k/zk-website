"use client";

import { backEnd, frontEnd, utilities, other } from "@/constants/skills";
import SubsectionHeader from "../modules/SubsectionHeader";
import SkillsCard from "./SkillsCard";

const Skills = () => {
  return (
    <div
      className="flex flex-col text-white px-8 sm:px-16 md:px-20 space-y-6 mt-12"
      id="skills"
    >
      <SubsectionHeader
        typeSequence={["programming skillset", 4000, "编程技能", 4000]}
        subtitle="list of my skillset - and what i do best"
      />
      <div className="flex flex-col space-y-4 items-center justify-center">
        <SkillsCard
          title="Front-End"
          description="Front-End, also known as UI/UX, is where the user interacts with the website. In fact, I used Next.js, TypeScript, and TailwindCSS to build this website!"
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
          title="Other Languages"
          description="lorem ipsum description"
          skills={other}
        />
      </div>
    </div>
  );
};

export default Skills;
