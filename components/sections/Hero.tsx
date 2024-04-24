"use client";

import { TypeAnimation } from "react-type-animation";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Image from "next/image";

const Hero = () => {
  useGSAP(() => {
    gsap.to("#intro", { opacity: 1, delay: 0.4, y: 0 });
    gsap.to("#heroTitle", { opacity: 1, delay: 0.7, y: 0 });
    gsap.to("#heroSubtitle1", { opacity: 1, delay: 1, x: 0 });
    gsap.to("#heroSubtitle2", { opacity: 1, delay: 1, x: 0 });
    gsap.to("#typeAnim", { opacity: 1, y: 0, delay: 1.3 });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-[90vh] pb-20 md:pb-0">
      <div className="absolute left-0 right-0 bottom-0 w-screen top-[10vh] h-[90vh]">
        <video
          src="/hero.mp4"
          autoPlay
          loop
          muted
          className="object-cover w-screen h-full pointer-events-none opacity-90 hidden md:flex"
        />
        <Image
          unoptimized
          src={"/hero.jpeg"}
          alt=""
          width={100}
          height={100}
          className="object-cover w-full h-full pointer-events-none opacity-90 md:hidden"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 h-full w-full z-20 bg-gradient-to-b from-slate-900 via-black/0 to-black" />
      </div>
      <div className="px-2 flex flex-col">
        <span
          id="intro"
          className="block text-3xl md:text-4xl text-neutral-300 -translate-y-20 opacity-0"
        >
          hi! i&apos;m
        </span>
        <span
          id="heroTitle"
          className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-opacity-0 text-white bg-clip-text text-7xl sm:text-[150px] md:text-[180px] lg:text-[240px] leading-[1] font-extrabold text-center opacity-0 -translate-y-80"
        >
          zhi kai
        </span>
        <div className="flex flex-row w-full justify-between">
          <span
            className="block text-2xl md:text-3xl font-thin text-red-500 opacity-0 translate-x-40"
            id="heroSubtitle1"
          >
            智凯
          </span>
          <span
            className="block text-2xl md:text-3xl font-thin text-red-500 opacity-0 -translate-x-40"
            id="heroSubtitle2"
          >
            p55d2k
          </span>
        </div>
      </div>
      <span
        id="typeAnim"
        className="block text-2xl sm:text-3xl md:text-4xl mt-4 text-center opacity-0 translate-y-20 max-w-[80vw]"
      >
        a{" "}
        <TypeAnimation
          sequence={[
            1500,
            "software engineer",
            1500,
            "frontend developer",
            1500,
            "game developer",
            1500,
            "python programmer",
            1500,
            "canoeist",
            1500,
            "violinist",
            1500,
            "video editor",
          ]}
          speed={50}
          repeat={Infinity}
        />
      </span>
    </div>
  );
};

export default Hero;
