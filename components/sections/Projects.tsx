"use client";

import Image from "next/image";
import SectionHeader from "../modules/SectionHeader";
import projects from "@/constants/projects";

import { modalAtom, modalContentAtom } from "@/atoms/modalAtom";
import { useRecoilState } from "recoil";

const Projects = () => {
  const [modalContent, setModalContent] = useRecoilState(modalContentAtom);
  const [modalOpen, setModalOpen] = useRecoilState(modalAtom);

  return (
    <div
      className="flex flex-col text-white px-8 sm:px-16 md:px-20 space-y-6 pt-20 items-center"
      id="projects"
    >
      <SectionHeader sequence={["my project showcase", 4000, "作品展示", 4000]}>
        what have i <span className="text-green-500">built</span>?
      </SectionHeader>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 place-items-center">
        {projects.map((proj, index) => (
          <div
            key={index}
            className="flex flex-col space-y-3 bg-slate-900 rounded-lg border-slate-700 border-4 border-t-0 border-l-0 divide-y-2 divide-slate-700 p-12 hover:border-8 hover:border-t-0 hover:border-l-0 cursor-pointer transition-all duration-200 ease-in-out h-[450px] items-center justify-center"
            onClick={() => {
              setModalContent(proj);
              setModalOpen(true);
            }}
          >
            <div className="flex flex-col space-y-2">
              <Image
                src={proj.screenshot}
                alt={proj.name}
                width={400}
                height={400}
                className="bg-white w-full"
                unoptimized
              />
              <div className="text-center bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-opacity-0 pb-3 text-white bg-clip-text font-extrabold text-4xl pt-3">
                {proj.name}
              </div>
              <p className="text-center text-sm text-amber-500">
                {proj.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
