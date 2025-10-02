"use client";

import Image from "next/image";
import Link from "next/link";

import { useMedia } from "react-use";

import SectionHeader from "../SectionHeader";
import ShinyButton from "../ShinyButton";

const About = () => {
  const flexSection = useMedia("(max-width: 900px)", false);

  return (
    <div
      id="about"
      className="flex flex-col text-white px-8 sm:px-16 md:px-20 space-y-6 items-center"
    >
      <SectionHeader sequence={["about me", 4000, "自我介绍", 4000]}>
        i am <span className="text-red-500">wan zhi kai</span>
      </SectionHeader>
      <div
        className={`flex ${
          flexSection
            ? "flex-col space-y-4"
            : "flex-row space-x-6 lg:space-x-14 xl:space-x-20"
        } items-center justify-center py-3`}
      >
        <Image
          unoptimized
          src="/imgs/zk2.png"
          alt=""
          width={450}
          height={450}
        />
        <div
          className={`flex flex-col space-y-1 ${
            flexSection
              ? "max-w-[500px]"
              : "max-w-[400px] lg:max-w-[475px] xl:max-w-[550px]"
          }`}
        >
          <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center md:text-left">
            Hello there! 👋
          </h3>
          <div className="flex flex-col space-y-3 text-sm md:text-base xl:text-lg text-left font-light pt-2">
            <p>
              I&apos;m <span className="text-amber-500">Zhi Kai</span>, a
              Singapore-based frontend developer, with a strong focus on
              building{" "}
              <span className="text-amber-500">
                beautiful, responsive, and user-friendly
              </span>{" "}
              web applications. I&apos;ve been programming since I was 5, and am
              currently a high school student at{" "}
              <span className="text-amber-500">Hwa Chong Institution</span>.
            </p>
            <p>
              Over the years, I&apos;ve developed a deep interest in{" "}
              <span className="text-amber-500">
                frontend technologies and modern UI frameworks
              </span>
              . I primarily work with{" "}
              <span className="text-amber-500">
                TypeScript, React, Next.js, and Tailwind CSS
              </span>{" "}
              — including for this site you&apos;re viewing.
            </p>
            <p>
              Beyond coding, I&apos;m fluent in{" "}
              <span className="text-amber-500">English </span> and{" "}
              <span className="text-amber-500">Mandarin Chinese</span>, and
              I&apos;m currently learning{" "}
              <span className="text-amber-500">Bahasa Indonesia</span>!
            </p>
            <p>
              I enjoy turning ideas into{" "}
              <span className="text-amber-500">
                polished, performant digital experiences
              </span>{" "}
              — and I&apos;m always looking to{" "}
              <span className="text-amber-500">
                learn more, build more, and grow as a developer
              </span>
              .
            </p>
            <Link href="/story">
              <ShinyButton text="read more" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
