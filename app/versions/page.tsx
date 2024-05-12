import PageHeader from "@/components/PageHeader";
import SectionHeader from "@/components/SectionHeader";
import { Version, versions } from "@/constants/version";
import Link from "next/link";

const VersionPage = () => {
  return (
    <div className="flex flex-col divide-y-2 divide-slate-700 px-4 sm:px-6 md:px-10 lg:px-14 pb-12">
      <PageHeader text="Back" goBack className="pt-5" />
      <div className="flex flex-col w-full" id="version">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center p-4 md:p-8">
          Version History
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {versions.map((version: Version, index) => (
            <Link
              key={index}
              className={`card flex flex-col space-y-2 p-4 ${
                index === 0 && "!bg-slate-800"
              } ${!version.link && "!cursor-default"} h-32 justify-center`}
              href={version?.link ? version.link : "#"}
              target={version?.link ? "_blank" : "_self"}
            >
              <h2 className="text-2xl font-bold">
                v{version.version}
                {version.lastUpdated && ` - ${version.lastUpdated}`}
              </h2>
              {version?.commit && (
                <Link
                  href={version.commit}
                  target="_blank"
                  className="text-blue-500 hover:text-blue-300 transition-colors duration-150 ease-in-out"
                >
                  View Commit
                </Link>
              )}
              <p className="text-lg text-amber-500">
                {version.link
                  ? version.link
                  : index === 0
                  ? "This version is the current version!"
                  : "This version is not available."}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VersionPage;
