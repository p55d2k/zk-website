"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoMdArrowRoundBack } from "react-icons/io";

interface PageHeaderProps {
  text: string;
  redirectUrl?: string;
  goBack?: boolean;
  className?: string;
}

const PageHeader = ({
  text,
  redirectUrl,
  className,
  goBack,
}: PageHeaderProps) => {
  const router = useRouter();

  return (
    <>
      {goBack && redirectUrl ? (
        <Link
          href={redirectUrl}
          className={`flex flex-row space-x-2 pb-5 text-amber-500 items-center md:text-xl ${className}`}
        >
          <IoMdArrowRoundBack />
          <p className="hover:pl-2 transition-all duration-200 ease-in-out">
            {text}
          </p>
        </Link>
      ) : (
        <button
          onClick={() => router.back()}
          className={`flex flex-row space-x-2 pb-5 text-amber-500 items-center md:text-xl cursor-pointer ${className}`}
        >
          <IoMdArrowRoundBack />
          <p className="hover:pl-2 transition-all duration-200 ease-in-out">
            {text}
          </p>
        </button>
      )}
    </>
  );
};

export default PageHeader;
