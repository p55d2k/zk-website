"use client";

import achievements from "@/constants/achievements";

import Link from "next/link";

import SectionHeader from "../SectionHeader";
import AchievementCard from "../cards/AchievementCard";
import ShinyButton from "../ShinyButton";

const Achievements = () => {
  return (
    <div className="flex flex-col pb-16" id="achievements">
      <div className="flex flex-col text-white px-8 sm:px-16 md:px-20 space-y-6 items-center">
        <SectionHeader
          sequence={[
            "what have i achieved in life so far",
            4000,
            "我的成就",
            4000,
          ]}
        >
          my <span className="text-blue-800">achievements</span>
        </SectionHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements
            .filter((achievement) => {
              return achievement.year === new Date().getFullYear();
            })
            .map((achievement, index) => {
              if (index > 2) return;
              return <AchievementCard achievement={achievement} key={index} />;
            })}
        </div>
        <div className="flex flex-row w-full justify-end items-center">
          <Link href="/achievements">
            <ShinyButton text="view all" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
