"use client";

import { headerMenuOpenAtom } from "@/atoms/headerMenuOpenAtom";
import { useRecoilState } from "@/lib/recoil";

import { useMedia } from "react-use";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [menuOpen, setMenuOpen] = useRecoilState(headerMenuOpenAtom);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const isSmallDevice = useMedia("(max-width: 640px)", false);
  useEffect(() => {
    if (!isSmallDevice) {
      setMenuOpen(false);
    }
  }, [isSmallDevice, setMenuOpen]);

  return (
    <div className="flex flex-col">
      <header className="w-full bg-slate-900 text-white py-6 px-8 flex flex-row justify-between h-[10vh] items-center">
        <Image
          unoptimized
          src="/icon.jpeg"
          alt=""
          width={40}
          height={40}
          className="block sm:hidden"
        />
        <Image
          unoptimized
          src="/icon.jpeg"
          alt=""
          width={50}
          height={60}
          className="hidden sm:block"
        />
        <div
          className="flex sm:hidden items-center justify-center cursor-pointer"
          onClick={toggleMenu}
        >
          {menuOpen ? <IoMdClose size={32} /> : <CiMenuBurger size={32} />}
        </div>
        <div className="hidden sm:flex sm:flex-row sm:space-x-4 items-center justify-center">
          <Link href={"#about"} className="header-link">
            About
          </Link>
          <Link href={"#portfolio"} className="header-link">
            Portfolio
          </Link>
          <Link href={"#contact"} className="header-link">
            Contact
          </Link>
        </div>
      </header>
      {menuOpen && (
        <div className="w-full bg-slate-900 text-white pt-6 px-8 flex flex-row justify-between sm:hidden transition-all h-[10vh]">
          <Link
            href={"#about"}
            className="footer-link !border-0 !hover:p-0 !text-center"
          >
            About
          </Link>
          <Link
            href={"#portfolio"}
            className="footer-link !border-0 !hover:p-0 !text-center"
          >
            Portfolio
          </Link>
          <Link
            href={"#contact"}
            className="footer-link !border-0 !hover:p-0 !text-center"
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
