"use client";

import Image from "next/image";
import Link from "next/link";

import { TypeAnimation } from "react-type-animation";
import { useMedia } from "react-use";

const About = () => {
  const flexSection = useMedia("(max-width: 900px)", false);

  return (
    <div
      className="flex flex-col text-white px-8 sm:px-16 md:px-20 space-y-6"
      id="about"
    >
      <div className="flex flex-col space-y-1">
        <div className="text-2xl md:text-4xl font-thin text-red-500 text-center md:text-left">
          <TypeAnimation
            sequence={[1000, "About Me", 4000, "自我介绍", 3000]}
            speed={10}
            repeat={Infinity}
            cursor={true}
          />
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center md:text-left">
          my name is <span className="text-blue-500">wan zhi kai</span>
        </h1>
      </div>
      <div className={`flex ${
        flexSection? "flex-col space-y-4" : "flex-row space-x-20"
      } items-center justify-center`}>
        <div className="flex flex-col space-y-1">
          <Image
            unoptimized
            src="/imgs/zk1.jpeg"
            alt=""
            width={400}
            height={400}
          />
          <div className="text-center italic">Me in Pisa, Italy, 2019</div>
        </div>
        <div className="flex flex-col space-y-1 max-w-[500px]">
          <h3 className="text-2xl md:text-3xl text-center md:text-left">
            Hi there! 👋
          </h3>
          <div className="flex flex-col space-y-3 text-sm md:text-base text-center md:text-left font-light">
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
              , and am {new Date().getFullYear() - 2010} years old this year. 🎉
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
            <Link className="button" href="/story">Read more about my story</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
