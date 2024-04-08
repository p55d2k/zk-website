import {
  FaCss3,
  FaHtml5,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaCloudflare,
  FaNodeJs,
  FaRegUserCircle,
} from "react-icons/fa";
import { TbBrandReactNative, TbBrandVscode } from "react-icons/tb";
import {
  SiExpo,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiTypescript,
  SiVercel,
  SiStackoverflow,
  SiDeno,
  SiSelenium,
  SiPython,
  SiUnity,
  SiCplusplus,
  SiRedux,
  SiMacos,
  SiPrettier,
  SiBun,
  SiYarn,
  SiMui,
  SiAstro,
} from "react-icons/si";
import { GoCopilot } from "react-icons/go";
import { RiOpenaiFill } from "react-icons/ri";

export const HTML5 = { name: "HTML5", icon: FaHtml5 };
export const CSS3 = { name: "CSS3", icon: FaCss3 };
export const JavaScript = { name: "JavaScript", icon: SiJavascript };
export const TypeScript = { name: "TypeScript", icon: SiTypescript };
export const ReactJS = { name: "ReactJS", icon: FaReact };
export const NextJS = { name: "NextJS", icon: SiNextdotjs };
export const TailwindCSS = { name: "Tailwind CSS", icon: SiTailwindcss };
export const ReactNative = { name: "React Native", icon: TbBrandReactNative };
export const Expo = { name: "Expo", icon: SiExpo };
export const Redux = { name: "Redux", icon: SiRedux };
export const MUI = { name: "Material-UI", icon: SiMui };
export const Astro = { name: "Astro", icon: SiAstro };

const frontEnd = [
  HTML5,
  CSS3,
  JavaScript,
  TypeScript,
  ReactJS,
  NextJS,
  TailwindCSS,
  ReactNative,
  Expo,
  Redux,
  MUI,
];

export const ExpressJS = { name: "ExpressJS", icon: SiExpress };
export const Firebase = { name: "Firebase", icon: SiFirebase };
export const MongoDB = { name: "MongoDB", icon: SiMongodb };
export const Clerk = { name: "Clerk", icon: FaRegUserCircle };

const backEnd = [ExpressJS, Firebase, MongoDB, Clerk];

export const VSCode = { name: "VSCode", icon: TbBrandVscode };
export const macOS = { name: "macOS", icon: SiMacos };
export const NodeJS = { name: "NodeJS", icon: FaNodeJs };
export const Yarn = { name: "Yarn", icon: SiYarn };
export const Bun = { name: "Bun", icon: SiBun };
export const Deno = { name: "Deno", icon: SiDeno };
export const Prettier = { name: "Prettier", icon: SiPrettier };
export const Git = { name: "Git", icon: FaGitAlt };
export const Github = { name: "Github", icon: FaGithub };
export const Vercel = { name: "Vercel", icon: SiVercel };
export const StackOverflow = { name: "Stack Overflow", icon: SiStackoverflow };
export const ChatGPT = { name: "ChatGPT", icon: RiOpenaiFill };
export const Copilot = { name: "Copilot", icon: GoCopilot };
export const Cloudflare = { name: "Cloudflare", icon: FaCloudflare };

const utilities = [
  VSCode,
  macOS,
  NodeJS,
  Yarn,
  Bun,
  Deno,
  Prettier,
  Git,
  Github,
  Vercel,
  StackOverflow,
  ChatGPT,
  Copilot,
  Cloudflare,
];

export const Python = { name: "Python", icon: SiPython };
export const CPlusPlus = { name: "C++", icon: SiCplusplus };
export const Unity = { name: "Unity", icon: SiUnity };
export const Selenium = { name: "Selenium", icon: SiSelenium };

const other = [Python, CPlusPlus, Unity, Selenium];

export { frontEnd, backEnd, utilities, other };
