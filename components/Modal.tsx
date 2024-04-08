"use client";

import { useRecoilState } from "recoil";
import { modalAtom, modalContentAtom } from "@/atoms/modalAtom";
import Image from "next/image";
import Link from "next/link";
import { TfiNewWindow } from "react-icons/tfi";

const Modal = () => {
  const [modalContent, setModalContent] = useRecoilState(modalContentAtom);
  const [modalOpen, setModalOpen] = useRecoilState(modalAtom);

  return (
    <div
      className={`${
        modalOpen ? "translate-y-0" : "-translate-y-[200%]"
      } flex flex-col fixed top-5 md:top-10 left-0 right-0 mx-auto w-full max-w-6xl overflow-hidden overflow-y-scroll rounded-xl scrollbar-hide scale-95 md:scale-75 xl:scale-90 2xl:scale-100 border-2 border-white transition-all duration-300 ease-in-out`}
    >
      <button
        onClick={() => setModalOpen(false)}
        className="absolute right-5 top-5 !z-40 h-11 w-11 border-none text-red-500 text-3xl"
      >
        X
      </button>
      <div className="flex flex-col space-y-4 items-center justify-center text-white p-8 rounded-md bg-[#181818]">
        {modalContent?.screenshot && (
          <Image
            unoptimized
            src={modalContent.screenshot}
            className="rounded-lg w-2/3"
            width={200}
            height={200}
            alt=""
          />
        )}
        <div className="flex flex-col md:flex-row justify-between md:space-x-4 w-full divide-y-2 md:divide-y-0 md:divide-x-2 divide-white">
          <div className="flex flex-col space-y-2 w-full mb-2 md:mb-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-opacity-0 text-white bg-clip-text pb-2">
              {modalContent?.name}
            </h1>
            <p className="text-sm sm:text-base md:text-lg">
              {modalContent?.detailedDescription}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row md:flex-col space-y-2 sm:space-y-0 md:space-y-2 w-full md:w-[40%] justify-between items-start pt-3 md:pt-0 md:pl-5 text-sm sm:text-base md:text-lg">
            <div className="flex flex-col items-start">
              {modalContent?.github && (
                <Link
                  href={modalContent.github}
                  target="_blank"
                  className="flex flex-row items-end justify-center space-y-0 space-x-2"
                >
                  <p>Github</p>
                  <TfiNewWindow className="w-8 h-8" />
                </Link>
              )}
              {modalContent?.live && (
                <Link
                  href={modalContent?.live || ""}
                  target="_blank"
                  className="flex flex-row items-end justify-center space-y-0 space-x-2"
                >
                  <p>Live Website</p>
                  <TfiNewWindow className="w-8 h-8" />
                </Link>
              )}
            </div>
            {modalContent?.techStack && (
              <div className="flex flex-col space-y-1 sm:pt-2 md:pt-0">
                {modalContent.techStack.map((util, index) => (
                  <div
                    key={index}
                    className="flex flex-row space-x-2 items-center justify-start sm:justify-end md:justify-start text-amber-500"
                  >
                    <util.icon className="flex sm:hidden md:flex" />
                    <p>{util.name}</p>
                    <util.icon className="hidden sm:flex md:hidden" />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
