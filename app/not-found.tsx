import Image from "next/image";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="w-full min-h-[80vh] flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-12 items-center justify-center p-8">
      <div className="flex flex-col space-y-1">
        <Image
          unoptimized
          src="/imgs/zk404.jpeg"
          alt="sad zhi kai"
          width={400}
          height={400}
        />
      </div>
      <div className="flex flex-col space-y-3">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-opacity-0 text-white bg-clip-text">
          404
        </h1>
        <p className="text-lg">
          Zhi Kai couldn&apos;t find the page you were looking for. <br />
          He defintitely isn&apos;t happy about it. <br />
          Click{" "}
          <Link
            href="/"
            className="text-amber-500 border-amber-500 border-b-2 hover:pb-1 transition-all duration-300 ease-in-out"
          >
            here
          </Link>{" "}
          to go back to the homepage.
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;
