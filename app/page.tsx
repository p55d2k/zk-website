import Projects from "@/components/sections/Projects";
import Skills from "@/components/subsections/Skills";
import Hobbies from "@/components/subsections/Hobbies";
import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="flex flex-col mb-32" id="mainContent">
        <About />
        <Skills />
        <Hobbies />
        {/* <Experience /> */}
        <Projects />
        {/* <Contact /> */}
      </div>
    </div>
  );
};

export default Home;
