import Hobbies from "@/components/subsections/Hobbies";
import Story from "@/components/subsections/Story";

import { IoMdArrowRoundBack } from "react-icons/io";
import Link from "next/link";

const StoryPage = () => {
  return (
    <div className="p-4 sm:p-6 md:p-10 lg:p-14 flex flex-col divide-y-2 divide-slate-700">
      <Link
        href="/#about"
        className="flex flex-row space-x-2 pb-5 text-amber-500 items-center md:text-xl"
      >
        <IoMdArrowRoundBack />
        <p>Back to About</p>
      </Link>
      <div className="flex flex-col space-y-8 xl:space-x-16 pt-5">
        <Story />
        <Hobbies />
      </div>
    </div>
  );
};

export default StoryPage;
