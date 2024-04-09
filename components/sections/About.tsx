"use client";

import Image from "next/image";
import Link from "next/link";

import { useMedia } from "react-use";

import SectionHeader from "../SectionHeader";

const About = () => {
  const flexSection = useMedia("(max-width: 900px)", false);

  return (
    <div className="pt-20 flex flex-col" id="about">
      <div className="flex flex-col text-white px-8 sm:px-16 md:px-20 space-y-6 items-center">
        <SectionHeader sequence={["about me", 4000, "自我介绍", 4000]}>
          i am <span className="text-blue-500">wan zhi kai</span>
        </SectionHeader>
        <div
          className={`flex ${
            flexSection
              ? "flex-col space-y-4"
              : "flex-row space-x-6 lg:space-x-14 xl:space-x-20"
          } items-center justify-center py-3`}
        >
          <div className="flex flex-col space-y-1">
            <Image
              unoptimized
              src="/imgs/zk2.jpeg"
              alt=""
              width={400}
              height={400}
            />
            <div className="text-center italic">Me riding a camel in Hatta (حتا), Dubai, UAE 2023</div>
          </div>
          <div className="flex flex-col space-y-1 max-w-[500px]">
            <h3 className="text-2xl md:text-3xl text-center md:text-left">
              Hi there! 👋
            </h3>
            <div className="flex flex-col space-y-3 text-sm md:text-base text-left font-light pt-2">
              <p>
                I am <span className="text-blue-500">Wan Zhi Kai</span>, a
                software engineer, specialised in frontend development, based in
                Singapore. I am currently a high school student at{" "}
                <Link
                  className="text-red-500"
                  href="https://hci.edu.sg"
                  target="_blank"
                >
                  Hwa Chong Institution
                </Link>
                , and I am {new Date().getFullYear() - 2010} years old this
                year! 🎉
              </p>{" "}
              <p>
                I have self-taught programming since I was 5. I am passionate
                about building{" "}
                <span className="text-blue-500">
                  beautiful, functional, and intuitive
                </span>{" "}
                web applications.
              </p>
              <p>
                I mainly use{" "}
                <Link
                  className="text-red-500"
                  href="https://www.typescriptlang.org/"
                  target="_blank"
                >
                  TypeScript
                </Link>
                ,{" "}
                <Link
                  className="text-red-500"
                  href="https://reactjs.org/"
                  target="_blank"
                >
                  ReactJS
                </Link>
                ,{" "}
                <Link
                  className="text-red-500"
                  href="https://nextjs.org/"
                  target="_blank"
                >
                  NextJS
                </Link>
                , and{" "}
                <Link
                  className="text-red-500"
                  href="https://tailwindcss.com/"
                  target="_blank"
                >
                  TailwindCSS
                </Link>{" "}
                in my projects, including this website! 🚀
              </p>
              <p>
                I am also fluent in{" "}
                <span className="text-blue-500">English</span>,{" "}
                <span className="text-blue-500">Chinese</span>, and am learning{" "}
                <span className="text-blue-500">Indonesian</span>!
              </p>
              <Link className="button" href="/story">
                Read more about my story 📖
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
