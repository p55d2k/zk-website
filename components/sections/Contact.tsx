import SectionHeader from "../modules/SectionHeader";

const Contact = () => {
  return (
    <div className="pt-20 flex flex-col" id="contact">
      <div className="flex flex-col text-white px-8 sm:px-16 md:px-20 space-y-6 items-center">
        <SectionHeader sequence={["get in touch", 4000, "联络我", 4000]}>
          <span className="text-orange-500">contact</span> me
        </SectionHeader>
        <div className="flex flex-col space-y-4 text-center text-lg">
          <p>
            If you would like to get in touch with me, feel free to reach out to
            me via my email at{" "}
            <a
              href="mailto:peanutandscuffy1@gmail.com"
              className="text-blue-500"
            >
              peanutandscuffy1@gmail.com
            </a>
            .
          </p>
          <p>
            You can also find me on{" "}
            <a
              href="https://www.linkedin.com/in/zk-w-68507a273/"
              target="_blank"
              className="text-blue-500"
            >
              LinkedIn
            </a>
            ,{" "}
            <a
              href="https://instagram.com/p55d2k"
              target="_blank"
              className="text-blue-500"
            >
              Instagram
            </a>
            ,{" "}
            <a
              href="https://github.com/p55d2k/"
              target="_blank"
              className="text-blue-500"
            >
              GitHub
            </a>
            , and{" "}
            <a
              href="https://twitter.com/p55d2k"
              target="_blank"
              className="text-blue-500"
            >
              Twitter
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
