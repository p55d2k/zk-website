import { IconType } from "react-icons";
import {
  Firebase,
  HTML5,
  JavaScript,
  NextJS,
  Python,
  Selenium,
  TailwindCSS,
  TypeScript,
} from "./skills";

export interface Project {
  name: string;
  description: string;
  detailedDescription: string;
  techStack: {
    name: string;
    icon: IconType;
  }[];
  github: string;
  live: string;
  screenshot: string;
}

const projects: Project[] = [
  {
    name: "ZK Website",
    description:
      "This website! It acts as a portfolio, while showcasing my projects, experiences, and hobbies.",
    detailedDescription:
      "I originally made this project as my own website, and it is open-source so that others can use it as a template for their own websites (even though it might not be the best). While it is a simple project, I learned a lot about not only myself, but also about web development in general. I learned how to use Cloudflare pages and is-a.dev while making this project.",
    techStack: [NextJS, TypeScript, TailwindCSS],
    github: "https://github.com/p55d2k/zk-website",
    live: "https://zk.is-a.dev",
    screenshot: "/imgs/screenshots/zkwebsite.jpeg",
  },
  {
    name: "ZKFlix-Next",
    description:
      "A Netflix clone made with NextJS, TailwindCSS, and TypeScript. It fully has authentication and a database with firebase and firestore.",
    detailedDescription:
      "I wanted to make this project when I was loved to binge-watch TV shows and movies. I wanted to make a project that would be useful for me, and I thought that a Netflix clone would be a good idea. I learned a lot about how to use Firebase and Firestore while making this project.",
    techStack: [NextJS, TypeScript, TailwindCSS, Firebase],
    github: "https://github.com/p55d2k/zkflix-next",
    live: "https://zkflix-next.vercel.app",
    screenshot: "/imgs/screenshots/zkflixnext.jpeg",
  },
  {
    name: "PyF Converter",
    description:
      "Inspired by JSF***, PyF is a Python obfuscator that converts Python code into unreadable code.",
    detailedDescription:
      "I was inspired by JSF***, a JavaScript obfuscator that converts JavaScript code into unreadable code. I wanted to make a similar project, but for Python. For this project, it was rather simple, hence I used HTML and Javascript while using the Tailwind CSS Play CDN. I learned about Javascript and its string functions while developing this project.",
    techStack: [HTML5, JavaScript, TailwindCSS],
    github: "https://github.com/p55d2k/pyf-converter",
    live: "https://pyf-converter.vercel.app",
    screenshot: "/imgs/screenshots/pyfconverter.jpeg",
  },
  {
    name: "Synth Zaobao Bot",
    description:
      "My school has a Zaobao schools website to practice Chinese exercises, but I created a bot to do it for you.",
    detailedDescription:
      "As my school has a zaobao schools website to practice Chinese exercises, I thought that it would be a good idea to make a bot that would do the exercises for you, and get to the top of the leaderboard. I learned about how to use Selenium and how to use it to automate tasks on the web while making this project. I have also created a website for the documentation of this project.",
    techStack: [Python, Selenium],
    github: "https://github.com/p55d2k/synth2-zb-bot",
    live: "https://synthbot.vercel.app",
    screenshot: "/imgs/screenshots/synthbot.jpeg",
  },
];

export default projects;
