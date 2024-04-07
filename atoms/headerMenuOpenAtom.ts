import { atom } from "@/lib/recoil";

export const headerMenuOpenAtom = atom<boolean>({
  key: "headerMenuOpenAtom",
  default: false,
});
