"use client";

import { ContactMethod, otherContactMethods } from "@/constants/contact";
import SubsectionHeader from "../SubsectionHeader";
import Link from "next/link";

const OtherContact = () => {
  return (
    <div
      className="flex flex-col text-white space-y-6 mt-12 items-center"
      id="otherContact"
    >
      <SubsectionHeader
        subtitle="other platforms you can find me and my skills on"
        sequence={["other contact methods", 4000, "怎么跟我联络？", 4000]}
      />
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center items-center">
        {otherContactMethods.map((contactMethod: ContactMethod) => (
          <Link
            className="flex flex-row justify-center items-center card px-3 py-1 space-x-2 !bg-black"
            target="_blank"
            href={contactMethod.link}
            key={contactMethod.name}
          >
            <contactMethod.icon className="text-3xl sm:text-4xl md:text-5xl" />
            <p className="text-lg sm:text-xl md:text-2xl text-center">
              {contactMethod.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OtherContact;
