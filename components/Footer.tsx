import versionData from "@/constants/version";
import Link from "next/link";

const Footer = async () => {
  return (
    <div
      id="footer"
      className="bg-slate-600 text-2xl flex flex-col w-full justify-center items-center p-8 space-y-2"
    >
      <div className="flex flex-row items-center justify-center space-x-4 w-full">
        <Link href="#about" className="footer-link">
          About
        </Link>
        <Link href="#experience" className="footer-link">
          Experience
        </Link>
        <Link href="#projects" className="footer-link">
          Projects
        </Link>
        <Link href="#contact" className="footer-link">
          Contact
        </Link>
      </div>
      <div className="flex flex-col space-y-1 text-center">
        <p>
          Copyright &copy; {new Date().getFullYear()}{" "}
          <Link
            href="https://github.com/p55d2k"
            target="_blank"
            className="text-gray-400 hover:text-gray-300 transition-all ease-in-out duration-300"
          >
            p55d2k
          </Link>{" "}
          (Zhi Kai)
        </p>
        <p className="text-sm">This was created in 2024, when I was 14! 🎉</p>
        <p className="text-sm">
          <Link
            href="https://github.com/p55d2k/zk-website"
            target="_blank"
            className="text-gray-400 hover:text-gray-300 transition-all ease-in-out duration-300"
          >
            Source Code
          </Link>{" "}
          • v{versionData.version} • Last updated: {versionData.lastUpdated}
        </p>
      </div>
    </div>
  );
};

export default Footer;
