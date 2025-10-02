"use client";

import { satoshiFont } from "@/constants/fonts";

import { TypeAnimation } from "react-type-animation";

interface SectionHeaderProps {
  sequence?: (string | number)[];
  children?: React.ReactNode;
  hideSequence?: boolean;
  gradientHeader?: boolean;
  showSubtitle?: boolean;
  subtitle?: string;
}

const SectionHeader = ({
  sequence,
  children,
  hideSequence,
  gradientHeader,
  showSubtitle,
  subtitle,
}: SectionHeaderProps) => {
  return (
    <div className="w-screen flex flex-col">
      <div className="flex flex-col space-y-1 p-4 pt-8 px-8 sm:px-16 md:px-20">
        {!hideSequence && sequence && (
          <div
            className={`text-2xl md:text-4xl font-thin text-amber-500 text-center ${satoshiFont.className}`}
          >
            <TypeAnimation
              sequence={sequence}
              speed={40}
              repeat={Infinity}
              cursor={true}
            />
          </div>
        )}
        {showSubtitle && subtitle && (
          <div
            className={`text-2xl md:text-4xl font-thin text-amber-500 text-center ${satoshiFont.className}`}
          >
            {subtitle}
          </div>
        )}
        <h1
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[90px] font-bold text-center ${satoshiFont.className} ${
            gradientHeader &&
            "bg-clip-text text-transparent bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 pb-2"
          }`}
        >
          {children}
        </h1>
      </div>
    </div>
  );
};

export default SectionHeader;
