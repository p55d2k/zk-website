"use client";

import SubsectionHeader from "../SubsectionHeader";

const Testimonials = () => {
  return (
    <div className="flex flex-col text-white space-y-6 mt-12" id="testimonials">
      <SubsectionHeader
        subtitle="what do people say about me?"
        sequence={["my testimonials", 4000, "我的推荐", 4000]}
      />
      <div className="relative w-full h-[500px]">
        <span className="absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-opacity-0 text-white bg-clip-text text-7xl sm:text-[150px] md:text-[180px] lg:text-[240px] leading-[1] font-extrabold flex items-center justify-center">
          zhi kai
        </span>
      </div>
    </div>
  );
};

export default Testimonials;
