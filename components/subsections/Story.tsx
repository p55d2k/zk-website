"use client";

import Image from "next/image";

import SubsectionHeader from "../SubsectionHeader";

import { useMedia } from "react-use";

const Story = () => {
  const flexSection = useMedia("(max-width: 900px)", false);

  return (
    <div
      className="flex flex-col text-white px-8 sm:px-16 md:px-20 space-y-3"
      id="story"
    >
      <SubsectionHeader
        sequence={["the story of my life", 4000, "我的故事", 4000]}
        subtitle="a short autobiography"
        className="!pb-2"
      />
      <div
        className={`flex ${
          flexSection
            ? "flex-col space-y-4"
            : "flex-row space-x-6 lg:space-x-14 xl:space-x-20"
        } items-center justify-center h-full pt-5`}
      >
        <Image
          unoptimized
          src="/imgs/zk1.png"
          alt=""
          width={450}
          height={500}
          className="flex"
        />

        <div
          className={`flex flex-col space-y-1 ${
            flexSection
              ? "max-w-[400px] md:max-w-[500px]"
              : "max-w-[400px] xl:max-w-[500px]"
          }`}
        >
          <h3 className="text-xl md:text-2xl lg:text-3xl text-center md:text-left">
            Who am I?
          </h3>
          <div className="flex flex-col space-y-3 text-sm lg:text-base text-left md:text-left font-light pt-2">
            <p>
              I&apos;m a{" "}
              <span className="text-amber-500">student developer</span> based in{" "}
              <span className="text-amber-500">Singapore</span> with a passion
              for{" "}
              <span className="text-amber-500">
                web development, programming, and technology
              </span>
              . My journey began during Singapore&apos;s 2020 circuit breaker,
              where I had the opportunity to explore coding beyond the
              classroom.
            </p>
            <p>
              I started with{" "}
              <span className="text-amber-500">Scratch and Python</span>, and
              soon transitioned into web development. Since then, I&apos;ve
              built several{" "}
              <span className="text-amber-500">personal projects</span> and
              continually refined my{" "}
              <span className="text-amber-500">frontend skills</span>.
            </p>
            <p>
              After completing the PSLE, I interned at{" "}
              <span className="text-amber-500">Xcidic</span> as a{" "}
              <span className="text-amber-500">Frontend Developer</span>, where
              I worked on{" "}
              <span className="text-amber-500">production-level web apps</span>{" "}
              and{" "}
              <span className="text-amber-500">collaborated with a team</span>{" "}
              of developers. This experience gave me{" "}
              <span className="text-amber-500">practical exposure</span> to
              real-world development and helped solidify my technical
              foundation.
            </p>
            <p>
              I&apos;m currently a student at{" "}
              <span className="text-amber-500">Hwa Chong Institution</span>,
              where I&apos;m also a member of the Infocomm Club, actively
              participating in the club&apos;s programming projects.
            </p>
            <p className="text-blue-500">
              I&apos;m always looking to grow as a person. I&apos;m excited
              about the future — and all the projects and people I&apos;ll meet
              along the way.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
