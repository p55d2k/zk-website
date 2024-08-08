"use client";

import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col">
      <header
        className={`w-full ${
          pathname === "/" ? "bg-slate-900" : "bg-black"
        } text-white py-6 px-8 flex flex-row justify-between h-[10vh] items-center`}
        id="header"
      >
        <Link href="/">
          <Image
            unoptimized
            src="/favicon.ico"
            alt=""
            width={40}
            height={40}
            className="block sm:hidden"
          />
          <Image
            unoptimized
            src="/favicon.ico"
            alt=""
            width={50}
            height={60}
            className="hidden sm:block"
          />
        </Link>
        <div className="hidden sm:flex sm:flex-row sm:space-x-4 items-center justify-center">
          <Link href={"/#about"} className="header-link">
            About
          </Link>
          <Link href={"/#experience"} className="header-link">
            Experience
          </Link>
          <Link href={"/#projects"} className="header-link">
            Projects
          </Link>
          <Link href={"/#contact"} className="header-link">
            Contact
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
