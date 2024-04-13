import PageHeader from "@/components/PageHeader";
import SectionHeader from "@/components/SectionHeader";
import { Version, versions } from "@/constants/version";
import Link from "next/link";

const VersionPage = () => {
  return (
    <div className="flex flex-col divide-y-2 divide-slate-700 px-4 sm:px-6 md:px-10 lg:px-14 pb-12">
      <PageHeader text="Back" goBack className="pt-5" />
      <div className="flex flex-col w-full" id="version">
        <SectionHeader gradientHeader showSubtitle subtitle="">
          Version History
        </SectionHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {versions.map((version: Version, index) => (
            <Link
              key={index}
              className={`card flex flex-col space-y-2 p-4 ${
                !version.link && "!bg-slate-800 !cursor-default"
              }`}
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
                  : "This version is the current version!"}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VersionPage;
