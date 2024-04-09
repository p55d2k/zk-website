"use client";

import Image from "next/image";

import SubsectionHeader from "../modules/SubsectionHeader";

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
        } items-center justify-center h-full`}
      >
        <div
          className={`${
            flexSection ? "hidden" : "flex"
          } flex-col space-y-40`}
        >
          <div className="flex flex-col space-y-1">
            <Image
              unoptimized
              src="/imgs/zk3.jpeg"
              alt=""
              width={400}
              height={500}
            />
            <div className="text-center italic">Me in Dubai, UAE, 2023</div>
          </div>
          <div className="flex flex-col space-y-1">
            <Image
              unoptimized
              src="/imgs/zk4.jpeg"
              alt=""
              width={400}
              height={500}
            />
            <div className="text-center italic">Me paddling at Kallang Water Sports Centre for a Competition, Jan 2024</div>
          </div>
          <div className="flex flex-col space-y-1">
            <Image
              unoptimized
              src="/imgs/zk5.jpeg"
              alt=""
              width={400}
              height={500}
            />
            <div className="text-center italic">Me at Marina Bay Sands, Singapore</div>
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
          <div className="text-center italic">Me in Dubai, UAE, 2023</div>
        </div>
        <div className="flex flex-col space-y-1 max-w-[400px] lg:max-w-[500px]">
          <h3 className="text-xl md:text-2xl text-center md:text-left">
            Who am I?
          </h3>
          <div className="flex flex-col space-y-3 text-sm md:text-base text-left md:text-left font-light pt-2">
            <p>
              I was born in 2010 in London, United Kingdom. My parents happened
              to be there for a work trip, and I was born there. For the next 2
              years, my parents brought me to the surrounding countries in
              Europe, and I was exposed to many different cultures.
            </p>
            <p>
              My father was Singaporean, and my mother was Indonesian. She came
              to Singapore for her work, when she met my father. They moved back
              to Singapore when I was 2 years old.
            </p>
            <p>
              I grew up in Singapore, and I was exposed to the Chinese culture.
              I was brought up in a Chinese-speaking environment where my
              grandparents could not speak English, and spent a lot of time with
              them. With my parents, I spoke English, and with my grandparents,
              I spoke Chinese.
            </p>
            <p>
              I went to a Nanyang Primary School, and made a lot of good
              memories and friends there. I was in the String Orchestra CCA, and
              played the violin. However, in 2020, when I was Primary 4,
              COVID-19 struck, and Singapore fell into a circut breaker
              lockdown. I had to stay at home, and I was not able to go to
              school. I had to do Home-Based Learning, and I had to adapt to the
              new normal.
            </p>
            <p>
              However, amdist the COVID-19 pandemic, the intensive use of
              laptops allowed me to explore the world of programming. As I
              already had prior experience with Python, I was able to pick up
              web development quickly. I started to learn how to make websites,
              and I started to make my own projects.
            </p>
            <p>
              Personally, I feel that the Singaporean School System is rather
              stressful. When the COVID period ended, I went back to school, and
              it was already 2021, when I was P5. I had to prepare for the PSLE
              (Primary School Leaving Examination), and I had to study hard.
            </p>
            <p>
              After PSLE, I had lot of time, and joined Xcidic as a Frontend
              Developer Intern. I was able to learn a lot of new things, and
              meet a lot of new people of similar interests as well.
            </p>
            <p>
              Furthermore, I also had time to learn new sports. My parents
              signed me up for Canoeing and Water Polo, but I was more
              interested in Canoeing. I was able to learn how to paddle, and I
              was able to go for competitions. One year later, I stopped playing
              Water Polo, to focus more on Canoeing.
            </p>
            <p>
              When the results for PSLE came out, I was accepted into Hwa Chong
              Institution through Infocomm DSA (Direct School Admission).{" "}
              {new Date().getFullYear() > 2028
                ? "I have already left the school."
                : "I am still studying there now!"}{" "}
              I was then accepted into the school&apos;s Infocomm Club, where I
              further developed my programming skills.
            </p>
            <p>
              In Secondary 2, I was accepted into my school&apos;s Student
              Council. I was rather excited for that. I got to meet with a lot
              of new people, and develop on my leadership skills. I then became
              a buddy for the Secondary 1s, and I was able to help them adapt to
              the new environment.
            </p>
            <p>
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
