const experiences: Experience[] = [
  {
    start: "Nov 2023",
    end: "Dec 2023",
    time: "2 months",
    companyName: "Xcidic",
    position: "Frontend Developer Intern",
    location: "Singapore/Remote",
    logo: "/imgs/experience/xcidic.svg",
    link: "https://xcidic.com",
    description:
      "I was really excited for my internship, mainly to gain experiences while meeting new people. Worked on the frontend of another company's website using Next.js and Tailwind CSS.",
  },
];

export default experiences;

export interface Experience {
  start: string;
  end: string;
  time: string;
  companyName: string;
  position: string;
  location: string;
  logo: string;
  link: string;
  description: string;
}
