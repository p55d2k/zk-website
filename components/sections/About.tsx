"use client";

import Image from "next/image";
import Link from "next/link";

import { useMedia } from "react-use";

import SectionHeader from "../SectionHeader";

const About = () => {
  const flexSection = useMedia("(max-width: 900px)", false);

  return (
    <div className="flex flex-col" id="about">
      <div className="flex flex-col text-white px-8 sm:px-16 md:px-20 space-y-6 items-center justify-center min-h-screen">
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
          <Image src="/imgs/zk2.jpeg" alt="" width={500} height={500} />
          <div
            className={`flex flex-col space-y-1 ${
              flexSection
                ? "max-w-[500px]"
                : "max-w-[400px] lg:max-w-[475px] xl:max-w-[550px]"
            }`}
          >
            <h3 className="text-2xl md:text-3xl lg:text-5xl xl:text-6xl text-center md:text-left">
              Hi there! 👋
            </h3>
            <div className="flex flex-col space-y-3 text-sm md:text-base xl:text-lg text-left font-light pt-2">
              <p>
                I am <span className="text-amber-500">Wan Zhi Kai</span>, a
                Singaporean software engineer, specialised in frontend
                development. I am currently a high school student at{" "}
                <span className="text-amber-500">Hwa Chong Instituion</span>,
                and I am {new Date().getFullYear() - 2010} years old this year!
                🎉
              </p>{" "}
              <p>
                I have self-taught programming since I was 5. I am passionate
                about building{" "}
                <span className="text-amber-500">
                  beautiful, functional, and intuitive
                </span>{" "}
                web applications.
              </p>
              <p>
                I mainly use technologies like{" "}
                <span className="text-amber-500">
                  TypeScript, ReactJS, NextJS, and TailwindCSS
                </span>{" "}
                in my projects, including this website! 🚀
              </p>
              <p>
                I am also fluent in{" "}
                <span className="text-amber-500">English</span>,{" "}
                <span className="text-amber-500">Chinese</span>, and am learning{" "}
                <span className="text-amber-500">
                  Bahasa Indonesia (Indonesian)
                </span>
                !
              </p>
              <Link className="button uppercase !font-light" href="/story">
                read more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
