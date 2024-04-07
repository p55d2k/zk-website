"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

import { useGSAP } from "@gsap/react";
import { usePathname } from "next/navigation";
import gsap from "gsap";

const SocialIcons = () => {
  const [isHomepage, setIsHomepage] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setIsHomepage(pathname === "/");
  }, [pathname]);

  useGSAP(() => {
    gsap.to("#socialIcons", {
      opacity: 1,
      delay: isHomepage ? 2 : 0,
      x: 0,
    });
  }, []);

  return (
    <div
      id="socialIcons"
      className="fixed bottom-0 right-0 hidden md:flex flex-row items-end justify-center p-5 space-x-5 z-50 opacity-0 translate-x-60"
    >
      <Link
        className={`${
          isHomepage ? "bg-white" : "bg-black"
        } rounded-full items-center justify-center p-2`}
        href={"https://github.com/p55d2k"}
        target="_blank"
      >
        <FaGithub className="h-10 w-10" />
      </Link>
      <Link
        className={`${
          isHomepage ? "bg-white" : "bg-black"
        } rounded-full items-center justify-center p-2`}
        href={"https://instagram.com/p55d2k"}
        target="_blank"
      >
        <FaInstagram className="h-10 w-10" />
      </Link>
      <Link
        className={`${
          isHomepage ? "bg-white" : "bg-black"
        } rounded-full items-center justify-center p-2`}
        href={"https://www.linkedin.com/in/zk-w-68507a273/"}
        target="_blank"
      >
        <FaLinkedin className="h-10 w-10" />
      </Link>
    </div>
  );
};

export default SocialIcons;
