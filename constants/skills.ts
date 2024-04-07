import {
  FaCss3,
  FaHtml5,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaCloudflare,
  FaNodeJs,
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
} from "react-icons/si";
import { GoCopilot } from "react-icons/go";
import { RiOpenaiFill } from "react-icons/ri";

const frontEnd = [
  { name: "HTML5", icon: FaHtml5 },
  { name: "CSS3", icon: FaCss3 },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "ReactJS", icon: FaReact },
  { name: "NextJS", icon: SiNextdotjs },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "React Native", icon: TbBrandReactNative },
  { name: "Expo", icon: SiExpo },
  { name: "Redux", icon: SiRedux },
];

const backEnd = [
  { name: "ExpressJS", icon: SiExpress },
  { name: "Firebase", icon: SiFirebase },
  { name: "MongoDB", icon: SiMongodb },
];

const utilities = [
  { name: "VSCode", icon: TbBrandVscode },
  { name: "macOS", icon: SiMacos },
  { name: "NodeJS", icon: FaNodeJs },
  { name: "Yarn", icon: SiYarn },
  { name: "Bun", icon: SiBun },
  { name: "Deno", icon: SiDeno },
  { name: "Prettier", icon: SiPrettier },
  { name: "Git", icon: FaGitAlt },
  { name: "Github", icon: FaGithub },
  { name: "Vercel", icon: SiVercel },
  { name: "Stack Overflow", icon: SiStackoverflow },
  { name: "ChatGPT", icon: RiOpenaiFill },
  { name: "Copilot", icon: GoCopilot },
  { name: "Cloudflare", icon: FaCloudflare },
];

const other = [
  { name: "Python", icon: SiPython },
  { name: "C++", icon: SiCplusplus },
  { name: "Unity", icon: SiUnity },
  { name: "Selenium", icon: SiSelenium },
];

export { frontEnd, backEnd, utilities, other };
