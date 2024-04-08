import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

import Skills from "@/components/subsections/Skills";
import Hobbies from "@/components/subsections/Hobbies";

import Modal from "@/components/Modal";

const Home = () => {
  return (
    <div>
      <Hero />
      <Modal />
      <div className="flex flex-col mb-12" id="mainContent">
        <About />
        <Skills />
        <Hobbies />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
