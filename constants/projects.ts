import { IconType } from "react-icons";
import {
  Astro,
  CSS3,
  Clerk,
  Docusaurus,
  ExpressJS,
  Firebase,
  HTML5,
  JavaScript,
  MUI,
  MongoDB,
  NextJS,
  Python,
  ReactJS,
  Redux,
  Selenium,
  TailwindCSS,
  TypeScript,
} from "./skills";

export interface Project {
  name: string;
  screenshot: string;
  description: string;
  detailedDescription: string;
  techStack: {
    name: string;
    icon: IconType;
  }[];
  github?: string;
  live?: string;
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
    screenshot: "/imgs/screenshots/zkwebsite.jpeg",
  },
  {
    name: "ZKFlix-Next",
    description:
      "A Netflix clone made with NextJS, TailwindCSS, and TypeScript. It has authentication fully implemented and a database with firebase and firestore.",
    detailedDescription:
      "I wanted to make this project when I was loved to binge-watch TV shows and movies. I wanted to make a project that would be useful for me, and I thought that a Netflix clone would be a fun. It uses TMDB's API for its movie list. I learned a lot about how to use Firebase and Firestore while making this project.",
    techStack: [NextJS, TypeScript, TailwindCSS, Firebase],
    github: "https://github.com/p55d2k/zkflix-next",
    live: "https://zkflix-next.vercel.app",
    screenshot: "/imgs/screenshots/zkflixnext.jpeg",
  },
  {
    name: "PyF Converter",
    description:
      "Inspired by JSF, PyF is a Python obfuscator that converts Python code into unreadable code.",
    detailedDescription:
      "I was inspired by JSF, a JavaScript obfuscator that converts JavaScript code into unreadable code. I wanted to make a similar project, but for Python. For this project, it was rather simple, hence I used HTML and Javascript while using the Tailwind CSS Play CDN. I learned about Javascript and its string functions while developing this project.",
    techStack: [HTML5, JavaScript, TailwindCSS, Python],
    github: "https://github.com/p55d2k/pyf-converter",
    live: "https://pyf-converter.vercel.app",
    screenshot: "/imgs/screenshots/pyfconverter.jpeg",
  },
  {
    name: "Synth Zaobao Bot",
    description:
      "My school has a Zaobao schools website to practice Chinese exercises, but I created a bot to do it for you.",
    detailedDescription:
      "As my school has a zaobao schools website to practice Chinese exercises, I thought that it would be a interesting to make a bot that would do the exercises for you, and get to the top of the leaderboard. I learned about how to use Selenium and how to use it to automate tasks on the web while making this project. I have also created a website for the documentation of this project with Docusaurus.",
    techStack: [Python, Selenium, Docusaurus],
    github: "https://github.com/p55d2k/synth2-zb-bot",
    live: "https://synthbot.vercel.app",
    screenshot: "/imgs/screenshots/synthbot.jpeg",
  },
  {
    name: "Project TaskCraft",
    description: "The free, open-source, project management tool for everyone.",
    detailedDescription:
      "I am actually doing this for my school's graded project work. I wanted to make a project management tool that would be free and open-source for everyone, especially secondary and junior college students in Singapore, to use. I am still developing this project, with my 3 other friends! I will be doing the frontend made with TailwindCSS and NextJS using TypeScript, while the others work on the design and backend. My key learning points from this project is focusing on learning the Gemini API, as we are integrating Artificial Intelligence into our project. We are also planning to use ExpressJS for the backend, and Firebase for the database.",
    techStack: [NextJS, Firebase, Clerk, ExpressJS],
    github: "https://github.com/p55d2k/project-taskcraft-frontend",
    live: "https://taskcraft.vercel.app",
    screenshot: "/imgs/screenshots/taskcraft.jpeg",
  },
  {
    name: "ZKShortLinks",
    description: "A simple URL shortener made with Next.js and Firebase",
    detailedDescription:
      "A URL shortener would be a fun project. I learned a lot about how to use dynamic API routes while making this project.",
    techStack: [NextJS, Firebase],
    live: "https://zksl.vercel.app",
    screenshot: "/imgs/screenshots/zkshortlinks.jpeg",
  },
  {
    name: "Pokedex",
    description:
      "A simple Pokedex made with NextJS, MUI, TypeScript, Vanilla CSS, and Redux.",
    detailedDescription:
      "This is actually the second version of this- the first one was made without Redux. I actually made this as a part to learn to use Redux and MUI. This was the first project I made with them, and I learned a lot about how to use them both and how to use it with NextJS.",
    techStack: [NextJS, MUI, Redux, CSS3],
    github: "https://github.com/p55d2k/redux-mui-pokedex-app",
    live: "https://zkpokedex2.vercel.app",
    screenshot: "/imgs/screenshots/pokedex.jpeg",
  },
  {
    name: "ZK Astro Blog",
    description: "The default Astro blog - but with my own customizations!",
    detailedDescription:
      "Finally - a website that I made that is not made with NextJS! I made this project as a part of learning Astro in my CCA, and I learnt how to make a blog. I learned a lot about how to use Astro and how to use it with React while making this project. I also learned how to use MUI and how to use it with Astro.",
    techStack: [Astro, TailwindCSS],
    github: "https://github.com/p55d2k/ec3-astrojs-blog/",
    live: "https://zkastroblog.vercel.app",
    screenshot: "/imgs/screenshots/astroblog.jpeg",
  },
];

export default projects;

export const getProject = (name: string): Project | undefined => {
  return projects.find(
    (project) =>
      project.name.toLowerCase().replaceAll(" ", "_") ===
      name.toLowerCase().replaceAll(" ", "_")
  );
};
