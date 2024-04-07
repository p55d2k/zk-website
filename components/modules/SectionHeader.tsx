"use client";

import { TypeAnimation } from "react-type-animation";

interface SectionHeaderProps {
  sequence: (string | number)[];
  children: React.ReactNode;
}

const SectionHeader = ({ sequence, children }: SectionHeaderProps) => {
  return (
    <div className="flex flex-col space-y-1 bg-gradient-to-r p-4 rounded-lg w-screen px-8 sm:px-16 md:px-20 from-slate-900 to-slate-500">
      <div className="text-2xl md:text-4xl font-thin text-red-500 text-center md:text-left">
        <TypeAnimation
          sequence={sequence}
          speed={10}
          repeat={Infinity}
          cursor={true}
        />
      </div>
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center md:text-left">
        {children}
      </h1>
    </div>
  );
};

export default SectionHeader;
