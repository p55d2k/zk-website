import { Project } from "@/constants/projects";
import { atom } from "@/lib/recoil";

export const modalAtom = atom<boolean>({
  key: "modalAtom",
  default: false,
});

export const modalContentAtom = atom<Project | null>({
  key: "modalContentAtom",
  default: null,
});
