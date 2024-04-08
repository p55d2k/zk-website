"use client";

import { TypeAnimation } from "react-type-animation";

interface SectionHeaderProps {
  sequence: (string | number)[];
  children: React.ReactNode;
}

const SectionHeader = ({ sequence, children }: SectionHeaderProps) => {
  return (
    <div
      className={`w-screen bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30`}
    >
      <div className="flex flex-col space-y-1 p-4 px-8 sm:px-16 md:px-20">
        <div
          className={`text-2xl md:text-4xl font-thin text-red-500 text-center`}
        >
          <TypeAnimation
            sequence={sequence}
            speed={40}
            repeat={Infinity}
            cursor={true}
          />
        </div>
        <h1
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center`}
        >
          {children}
        </h1>
      </div>
    </div>
  );
};

export default SectionHeader;
