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
        typeSequence={["my hobbies", 4000, "我的爱好", 4000]}
        subtitle=""
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
          <h3 className="text-xl md:text-2xl text-center md:text-left">
            What do I do during my free time?
          </h3>
          <div className="flex flex-col space-y-3 text-sm md:text-base text-left md:text-left font-light pt-2">
            <p>
              Ever since I was young, I always enjoyed{" "}
              <span className="text-blue-500">mobile gaming</span> (which was
              also due to the encouragement from my peers). These include games
              such as{" "}
              <Link
                className="text-red-500"
                href="https://supercell.com/en/games/brawlstars/"
                target="_blank"
              >
                Brawl Stars
              </Link>{" "}
              and{" "}
              <Link
                className="text-red-500"
                href="https://marvelsnap.com/"
                target="_blank"
              >
                Marvel SNAP
              </Link>
              . I also enjoy{" "}
              <span className="text-blue-500">reading fiction novels 📖</span>.
            </p>
            <p>
              I definitely also enjoy{" "}
              <span className="text-blue-500">canoeing</span>. So far, I have
              been paddling for {new Date().getFullYear() - 2022} years, and
              continue to train weekly at{" "}
              <span className="text-blue-500">Macritchie Reservoir</span> in
              Singapore.
            </p>
            <p>
              Not only that, I also can play the{" "}
              <span className="text-blue-500">violin</span>. I have achieved
              grade 8, and have been playing for{" "}
              {new Date().getFullYear() - 2014} years, and definitely continue
              to enjoy playing classical pieces.
            </p>
          </div>
        </div>
        <div className="flex flex-col space-y-1">
          <Image
            unoptimized
            src="/imgs/zk1.jpeg"
            alt=""
            width={400}
            height={500}
          />
          <div className="text-center italic">Me in Pisa, Italy, 2019</div>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
