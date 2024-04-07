import About from "@/components/About";
import Hero from "@/components/Hero";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="flex flex-col space-y-32 mt-20 mb-32">
        <About />
        {/* <Skills />
        <Hobbies />
        <Experience />
        <Projects />
        <Contact /> */}
      </div>
    </div>
  );
};

export default Home;
