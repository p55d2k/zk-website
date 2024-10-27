import { Achievement } from "@/constants/achievements";
import Image from "next/image";

interface AchievementCardProps {
  achievement: Achievement;
  whiteText?: boolean;
}

const AchievementCard = ({ achievement, whiteText }: AchievementCardProps) => {
  return (
    <div className="flex flex-col gap-2 divide-y-2 divide-slate-700 p-12 card !cursor-default items-center justify-center">
      <Image
        unoptimized
        src={achievement.image}
        alt={achievement.name}
        width={150}
        height={150}
        className="bg-white items-center"
      />
      <h1 className="text-center font-extrabold text-4xl shiny-text transition-all duration-300 ease-in-out pt-2 w-full">
        {achievement.name}
      </h1>
      <p className="text-center font-bold text-lg lg:text-xl text-amber-500 w-full pt-2">
        Year: {achievement.year}
      </p>
      <p
        className={`text-center text-sm ${
          !whiteText && "text-amber-500"
        } w-full pt-2`}
      >
        {achievement.description}
      </p>
    </div>
  );
};

export default AchievementCard;
