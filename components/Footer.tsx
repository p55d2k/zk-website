import { versionData } from "@/constants/version";
import Link from "next/link";

const Footer = async () => {
  return (
    <div
      id="footer"
      className="bg-slate-900 text-2xl flex flex-col w-full justify-center items-center p-8 space-y-2"
    >
      <div className="flex flex-col gap-1 md:gap-4 md:flex-row items-center justify-center w-full">
        <div className="flex flex-row justify-center gap-4">
          <Link href="/#about" className="footer-link">
            About
          </Link>
          <Link href="/#experience" className="footer-link">
            Experience
          </Link>
        </div>

        <div className="flex flex-row justify-center gap-4">
          <Link href="/#projects" className="footer-link">
            Projects
          </Link>
          <Link href="/#achievements" className="footer-link">
            Achievements
          </Link>
        </div>

        <div className="flex flex-row justify-center gap-4">
          <Link href="/#contact" className="footer-link">
            Contact
          </Link>
        </div>
      </div>

      <div className="flex flex-col space-y-1 text-center text-white">
        <p className="text-sm">
          Copyright &copy; {new Date().getFullYear()} p55d2k
        </p>
        <p className="text-sm">
          <Link
            href="https://github.com/p55d2k/zk-website"
            target="_blank"
            className="text-amber-500 hover:text-amber-300 transition-all ease-in-out duration-300"
          >
            Source Code
          </Link>{" "}
          • v{versionData.version} • {versionData.lastUpdated}
        </p>
      </div>
    </div>
  );
};

export default Footer;
