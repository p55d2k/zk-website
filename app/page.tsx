import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";

import TechStack from "@/components/subsections/TechStack";
import OtherContact from "@/components/subsections/OtherContact";
import Testimonials from "@/components/subsections/Testimonials";

import BackToTop from "@/components/BackToTop";

const Home = () => {
  return (
    <div>
      <Hero />
      <BackToTop />
      <div
        className="flex flex-col mb-12 divide-y-2 divide-slate-600"
        id="mainContent"
      >
        <div className="flex flex-col">
          <About />
          <TechStack />
        </div>
        <Experience />
        <Projects />
        <Achievements />
        <div className="flex flex-col">
          <Contact />
          <OtherContact />
        </div>
      </div>
    </div>
  );
};

export default Home;
