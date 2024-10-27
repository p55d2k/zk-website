"use client";

import PageHeader from "@/components/PageHeader";
import AchievementCard from "@/components/cards/AchievementCard";
import achievements, { Achievement } from "@/constants/achievements";

import { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

const AchievementsPage = () => {
  const [achievementsToShow, setAchievementsToShow] =
    useState<Achievement[]>(achievements);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [yearFilter, setYearFilter] = useState<number | null>(null);
  const [years, setYears] = useState<number[]>([]);

  useEffect(() => {
    const years = achievements.map((achievement) => achievement.year);
    setYears(Array.from(new Set(years)));
  }, []);

  useEffect(() => {
    let filteredAchievements = achievements.filter((achievement) => {
      if (searchTerm === "") return true;
      return achievement.name
        .toLowerCase()
        .replaceAll(" ", "")
        .includes(searchTerm.toLowerCase().replaceAll(" ", ""));
    });

    if (yearFilter) {
      filteredAchievements = filteredAchievements.filter(
        (achievement) => achievement.year === yearFilter
      );
    }

    filteredAchievements.sort((a, b) => {
      if (a.year === b.year) {
        return a.name.localeCompare(b.name);
      }
      return a.year - b.year;
    });

    setAchievementsToShow(filteredAchievements);
  }, [searchTerm, yearFilter]);

  return (
    <div className="p-4 sm:p-6 md:p-10 lg:p-14 !pt-2 flex flex-col divide-y-2 divide-slate-700">
      <PageHeader text="Back to Achievements" redirectUrl="/#achievements" />

      <div className="flex flex-col space-y-8 py-5">
        <div className="flex flex-col">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold shiny-text pb-1">
            <TypeAnimation
              sequence={["Achievements", 3000, "成就展示", 3000]}
              speed={50}
              repeat={Infinity}
            />
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-amber-500">
            Here are some of my achievements.
          </p>

          <div className="flex flex-col md:flex-row w-full space-y-2 md:space-y-0 md:space-x-4 mt-5">
            <input
              type="text"
              placeholder="Search"
              className="button cursor-text p-2 border-2 !bg-slate-600 !hover:bg-slate-700 border-slate-700 outline-none !text-left w-full md:w-[80%]"
              onChange={(e) => setSearchTerm(e.target.value)}
              value={searchTerm}
            />

            <select
              className="button p-2 border-2 !bg-slate-600 !hover:bg-slate-700 border-slate-700 outline-none !text-left w-full md:w-[20%]"
              style={{ appearance: "none" }}
              onChange={(e) =>
                setYearFilter(e.target.value ? parseInt(e.target.value) : null)
              }
            >
              <option value="">Filter by Year</option>
              {years.map((year, index) => (
                <option key={index} value={year}>
                  Year: {year}
                </option>
              ))}
            </select>
          </div>
        </div>

        {achievementsToShow.length ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {achievementsToShow.map((achievement, index) => (
              <AchievementCard
                key={index}
                achievement={achievement}
                whiteText
              />
            ))}
          </div>
        ) : (
          <div className="text-center text-xl md:text-2xl lg:text-3xl font-light text-red-500">
            No achievements found. Try searching for something else!
          </div>
        )}
      </div>
    </div>
  );
};

export default AchievementsPage;
