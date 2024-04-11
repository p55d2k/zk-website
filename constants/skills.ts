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
  SiDocusaurus,
} from "react-icons/si";
import { GoCopilot } from "react-icons/go";
import { RiOpenaiFill } from "react-icons/ri";
import { IconType } from "react-icons";

export const HTML5 = {
  name: "HTML5",
  icon: FaHtml5,
  link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
};
export const CSS3 = {
  name: "CSS3",
  icon: FaCss3,
  link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
};
export const JavaScript = {
  name: "JavaScript",
  icon: SiJavascript,
  link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
};
export const TypeScript = {
  name: "TypeScript",
  icon: SiTypescript,
  link: "https://www.typescriptlang.org/",
};
export const ReactJS = {
  name: "ReactJS",
  icon: FaReact,
  link: "https://reactjs.org/",
};
export const NextJS = {
  name: "NextJS",
  icon: SiNextdotjs,
  link: "https://nextjs.org/",
};
export const TailwindCSS = {
  name: "Tailwind CSS",
  icon: SiTailwindcss,
  link: "https://tailwindcss.com/",
};
export const ReactNative = {
  name: "React Native",
  icon: TbBrandReactNative,
  link: "https://reactnative.dev/",
};
export const Expo = {
  name: "Expo",
  icon: SiExpo,
  link: "https://expo.dev/",
};
export const Redux = {
  name: "Redux",
  icon: SiRedux,
  link: "https://redux.js.org/",
};
export const MUI = {
  name: "Material-UI",
  icon: SiMui,
  link: "https://mui.com/",
};
export const Astro = {
  name: "Astro",
  icon: SiAstro,
  link: "https://astro.build/",
};
export const Docusaurus = {
  name: "Docusaurus",
  icon: SiDocusaurus,
  link: "https://docusaurus.io/",
};

const frontEnd = [
  HTML5,
  CSS3,
  JavaScript,
  TypeScript,
  ReactJS,
  NextJS,
  ReactNative,
  Expo,
];

export const ExpressJS = {
  name: "ExpressJS",
  icon: SiExpress,
  link: "https://expressjs.com/",
};
export const Firebase = {
  name: "Firebase",
  icon: SiFirebase,
  link: "https://firebase.google.com/",
};
export const MongoDB = {
  name: "MongoDB",
  icon: SiMongodb,
  link: "https://www.mongodb.com/",
};
export const Clerk = {
  name: "Clerk",
  icon: FaRegUserCircle,
  link: "https://clerk.dev/",
};

const backEnd = [ExpressJS, Firebase, MongoDB, Clerk];

export const VSCode = {
  name: "VSCode",
  icon: TbBrandVscode,
  link: "https://code.visualstudio.com/",
};
export const macOS = {
  name: "macOS",
  icon: SiMacos,
  link: "https://www.apple.com/macos/",
};
export const NodeJS = {
  name: "NodeJS",
  icon: FaNodeJs,
  link: "https://nodejs.org/en/",
};
export const Yarn = {
  name: "Yarn",
  icon: SiYarn,
  link: "https://yarnpkg.com/",
};
export const Bun = { name: "Bun", icon: SiBun, link: "https://bun.sh/" };
export const Deno = { name: "Deno", icon: SiDeno, link: "https://deno.land/" };
export const Prettier = {
  name: "Prettier",
  icon: SiPrettier,
  link: "https://prettier.io/",
};
export const Git = {
  name: "Git",
  icon: FaGitAlt,
  link: "https://git-scm.com/",
};
export const Github = {
  name: "Github",
  icon: FaGithub,
  link: "https://github.com/",
};
export const Vercel = {
  name: "Vercel",
  icon: SiVercel,
  link: "https://vercel.com/",
};
export const StackOverflow = {
  name: "Stack Overflow",
  icon: SiStackoverflow,
  link: "https://stackoverflow.com/",
};
export const ChatGPT = {
  name: "ChatGPT",
  icon: RiOpenaiFill,
  link: "https://chat.openai.com/",
};
export const Copilot = {
  name: "Copilot",
  icon: GoCopilot,
  link: "https://github.com/features/copilot/",
};
export const Cloudflare = {
  name: "Cloudflare",
  icon: FaCloudflare,
  link: "https://www.cloudflare.com/",
};

const utilities = [
  VSCode,
  NodeJS,
  Bun,
  Prettier,
  Git,
  Github,
  Vercel,
  StackOverflow,
  Copilot,
  Cloudflare,
];

export const Python = {
  name: "Python",
  icon: SiPython,
  link: "https://www.python.org/",
};
export const CPlusPlus = {
  name: "C++",
  icon: SiCplusplus,
  link: "https://isocpp.org/",
};
export const Unity = {
  name: "Unity",
  icon: SiUnity,
  link: "https://unity.com/",
};

const languages = [Python, CPlusPlus, Unity];

export const Selenium = {
  name: "Selenium",
  icon: SiSelenium,
  link: "https://www.selenium.dev/",
};

const libraries = [TailwindCSS, MUI, Docusaurus, Redux, Selenium];

const practicalSkills = [
  HTML5,
  CSS3,
  JavaScript,
  TypeScript,
  ReactJS,
  NextJS,
  TailwindCSS,
  Redux,
  MUI,
  Astro,
  Docusaurus,
  ExpressJS,
  Firebase,
  MongoDB,
  Clerk,
  Python,
  Selenium,
];

export { frontEnd, backEnd, utilities, languages, libraries, practicalSkills };

export interface Skill {
  name: string;
  link: string;
  icon: IconType;
}
