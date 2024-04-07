import Link from "next/link";

const Footer = () => {
  return (
    <div
      id="footer"
      className="bg-slate-600 text-2xl flex flex-col w-full justify-center items-center p-8 space-y-2"
    >
      <div className="flex flex-row items-center justify-center space-x-4 w-full">
        <Link href="#about" className="footer-link">
          About
        </Link>
        <Link href="#projects" className="footer-link">
          Projects
        </Link>
        <Link href="#contact" className="footer-link">
          Contact
        </Link>
      </div>
      <small>
        Copyright &copy; {new Date().getFullYear()}{" "}
        <Link
          href="https://github.com/p55d2k" target="_blank"
          className="text-gray-400 hover:text-gray-300 transition-all ease-in-out duration-300"
        >
          p55d2k
        </Link>{" "}
        (Zhi Kai)
      </small>
    </div>
  );
};

export default Footer;
