import { TypeAnimation } from "react-type-animation";

interface SubsectionHeaderProps {
  subtitle?: string;
  sequence: (number | string)[];
  className?: string;
}

const SubsectionHeader = ({
  subtitle,
  sequence,
  className
}: SubsectionHeaderProps) => {
  return (
    <div className="flex flex-col">
      <div
        className={`${
          subtitle
            ? "text-2xl sm:text-3xl md:text-4xl"
            : "text-3xl sm:text-4xl md:text-5xl"
        } lg:text-5xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-opacity-0 ${
          subtitle && "pb-3"
        } text-white bg-clip-text text-center ${className}`}
      >
        <TypeAnimation
          sequence={sequence}
          speed={70}
          repeat={Infinity}
          cursor={true}
        />
      </div>
      {subtitle && (
        <h1 className="text-xl md:text-3xl font-thin text-center">
          {subtitle}
        </h1>
      )}
    </div>
  );
};

export default SubsectionHeader;
