import PageHeader from "@/components/PageHeader";
import Hobbies from "@/components/subsections/Hobbies";
import Story from "@/components/subsections/Story";

const StoryPage = () => {
  return (
    <div className="p-4 sm:p-6 md:p-10 lg:p-14 flex flex-col divide-y-2 divide-slate-700">
      <PageHeader text="Back to About" redirectUrl="/#about" />
      <div className="flex flex-col space-y-8 md:space-y-16 lg:space-y-20 xl:space-y-24 pt-5">
        <Story />
        <Hobbies />
      </div>
    </div>
  );
};

export default StoryPage;
