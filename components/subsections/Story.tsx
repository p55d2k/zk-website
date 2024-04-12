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
        typeSequence={["the story of my life", 4000, "我的故事", 4000]}
        subtitle=""
        className="!pb-2"
      />
      <div
        className={`flex ${
          flexSection
            ? "flex-col space-y-4"
            : "flex-row space-x-6 lg:space-x-14 xl:space-x-20"
        } items-center justify-center h-full pt-5`}
      >
        <div
          className={`${
            flexSection ? "hidden" : "flex"
          } flex-col space-y-20 items-center justify-center`}
        >
          <div className="flex flex-col space-y-1 items-center justify-center">
            <Image
              unoptimized
              src="/imgs/zk3.jpeg"
              alt=""
              width={400}
              height={500}
            />
          </div>
          <div className="flex flex-col space-y-1 items-center justify-center">
            <Image
              unoptimized
              src="/imgs/zk4.jpeg"
              alt=""
              width={400}
              height={500}
            />
          </div>
        </div>
        <div
          className={`flex-col space-y-1 ${flexSection ? "flex" : "hidden"}`}
        >
          <Image
            unoptimized
            src="/imgs/zk3.jpeg"
            alt=""
            width={400}
            height={500}
          />
        </div>
        <div
          className={`flex flex-col space-y-1 ${
            flexSection ? "max-w-[500px]" : "max-w-[400px] lg:max-w-[500px]"
          }`}
        >
          <h3 className="text-xl md:text-2xl lg:text-3xl text-center md:text-left">
            Who am I?
          </h3>
          <div className="flex flex-col space-y-3 text-sm md:text-base text-left md:text-left font-light pt-2">
            <p>
              I was born in 2010 in{" "}
              <span className="text-amber-500">London, United Kingdom</span>. My
              father was Singaporean, and my mother was Indonesian. We moved
              back to Singapore when I was{" "}
              <span className="text-amber-500">2</span> years old. I grew up in
              a family of
              <span className="text-amber-500">4</span>, with my parents, my
              younger brother, and me.
            </p>
            <p>
              I grew up in Singapore, and I was able to learn{" "}
              <span className="text-amber-500">both English and Chinese</span>.
              With my parents, I spoke English, and with my grandparents, I
              spoke Chinese.
            </p>
            <p>
              I went to a{" "}
              <span className="text-amber-500">Nanyang Primary School</span>,
              and joined the String Orchestra CCA, played the violin. When
              COVID-19 struck, and Singapore fell into a{" "}
              <span className="text-amber-500">circut breaker lockdown</span>,
              where I was forced to stay at home.
            </p>
            <p>
              This allowed me to{" "}
              <span className="text-amber-500">self-learn programming</span>. As
              I already had prior experience with Python, I was able to pick up{" "}
              <span className="text-amber-500">web development</span>
              quickly. I started to learn how to make websites, and I started to
              <span className="text-amber-500">make my own projects</span>.
            </p>
            <p>
              After <span className="text-amber-500">PSLE</span> (the Primary
              School Leaving Examination, an examination Primary 6s take in
              Singapore to decide their secondary school), I had lot of time,
              and joined <span className="text-amber-500">Xcidic</span> as a{" "}
              <span className="text-amber-500">Frontend Developer Intern</span>.
              I was able to learn a lot of new things, and meet a lot of new
              people of similar interests as well.
            </p>
            <p>
              Furthermore, I also had time to learn new sports. I picked up
              <span className="text-amber-500">Canoeing</span>, was able to
              learn how to paddle, and I was able to go for competitions.
            </p>
            <p>
              When the results for PSLE came out, I was accepted into{" "}
              <span className="text-amber-500">Hwa Chong Institution</span>{" "}
              through <span className="text-amber-500">Infocomm DSA</span>{" "}
              (Direct School Admission).{" "}
              {new Date().getFullYear() > 2028
                ? "I have already left the school."
                : "I am still studying there now!"}{" "}
              I was then accepted into the school&apos;s{" "}
              <span className="text-amber-500">Infocomm Club</span>, where I
              further developed my programming skills.
            </p>
            <p className="text-blue-500">
              Now, I am proud to be who I am, and I am excited to see what the
              future holds for me.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
