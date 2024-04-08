import Link from "next/link";
import SectionHeader from "../modules/SectionHeader";
import contactMethods from "@/constants/contact";

const Contact = () => {
  return (
    <div className="pt-20 flex flex-col" id="contact">
      <div className="flex flex-col text-white px-8 sm:px-16 md:px-20 space-y-6 items-center">
        <SectionHeader sequence={["get in touch", 4000, "联络我", 4000]}>
          <span className="text-orange-500">contact</span> me
        </SectionHeader>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center">
          {contactMethods.map((method, index) => (
            <Link
              href={method.link}
              target="_blank"
              key={index}
              className="flex flex-col items-center justify-center space-y-2 bg-slate-900 rounded-lg p-5 min-h-[250px] md:min-h-[300px] lg:min-h-[350px] border-slate-700 border-4 border-t-0 border-l-0 hover:border-8 hover:border-t-0 hover:border-l-0 transition-all duration-300 ease-in-out w-full"
            >
              <method.icon className="text-5xl" />
              <div className="text-center">
                <p className="text-lg md:text-xl lg:text-2xl font-semibold text-blue-500">{method.name}</p>
                <p className="text-sm md:text-base lg:text-lg">{method.description}</p>
              </div>
            </Link>
          ))}
        </div>
        {/* <div className="flex flex-col space-y-4 text-center text-lg">
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
        </div> */}
      </div>
    </div>
  );
};

export default Contact;
