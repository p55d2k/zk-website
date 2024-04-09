"use client";

import { FaArrowUp } from "react-icons/fa";
import Link from "next/link";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const BackToTop = () => {
  useGSAP(() => {
    gsap.to("#backToTop", {
      opacity: 1,
      delay: 2,
      x: 0,
    });
  }, []);

  return (
    <div
      id="backToTop"
      className="fixed bottom-0 right-0 flex items-end justify-center p-5 space-x-2 z-50 opacity-0 translate-x-60"
    >
      <Link
        className={`items-center justify-center p-3 hover:mb-2 transition-all duration-300 ease-in-out`}
        href={"/#header"}
      >
        <FaArrowUp className="h-10 w-10" />
      </Link>
    </div>
  );
};

export default BackToTop;
