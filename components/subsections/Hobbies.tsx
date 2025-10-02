"use client";

import Link from "next/link";
import Image from "next/image";

import SubsectionHeader from "../SubsectionHeader";

import { useMedia } from "react-use";

const Hobbies = () => {
  const flexSection = useMedia("(max-width: 900px)", false);

  return (
    <div
      className="flex flex-col text-white px-8 sm:px-16 md:px-20 space-y-3"
      id="hobbies"
    >
      <SubsectionHeader
        sequence={["my hobbies", 4000, "我的爱好", 4000]}
        subtitle="what i enjoy doing!"
        className="!pb-2"
      />
      <div
        className={`flex ${
          flexSection
            ? "flex-col space-y-4"
            : "flex-row space-x-6 lg:space-x-14 xl:space-x-20"
        } items-center justify-center pt-5`}
      >
        <div className="flex flex-col space-y-1 max-w-[500px]">
          <h3 className="text-xl md:text-2xl lg:text-3xl text-center md:text-left">
            What do I do during my free time?
          </h3>
          <div className="flex flex-col space-y-3 text-sm md:text-base text-left md:text-left font-light pt-2">
            <p>
              Beyond software development, I&apos;m an avid canoeist and have
              been training and competing for the past three years. I also hold
              a Grade 8 certification in violin, having played since I was
              young, and continue to enjoy performing classical music.
            </p>
            <p>
              In my spare time, I enjoy reading fiction and exploring mobile
              game design and mechanics, which often inspires the UX side of my
              web projects.
            </p>
          </div>
        </div>
        <div className="flex flex-col space-y-1">
          <Image
            src="/imgs/zk3.jpeg"
            alt=""
            width={300}
            height={500}
            unoptimized
          />
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
