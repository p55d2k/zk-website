import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";

interface PageHeaderProps {
  text: string;
  redirectUrl: string
}

const PageHeader = ({ text, redirectUrl }: PageHeaderProps) => {
  return (
    <Link
      href={redirectUrl}
      className="flex flex-row space-x-2 pb-5 text-amber-500 items-center md:text-xl"
    >
      <IoMdArrowRoundBack />
      <p className="hover:pl-2 transition-all duration-200 ease-in-out">{text}</p>
    </Link>
  );
};

export default PageHeader;
