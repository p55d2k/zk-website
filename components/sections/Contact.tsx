import SectionHeader from "../SectionHeader";
import contactMethods from "@/constants/contact";
import ContactMethodCard from "../cards/ContactMethodCard";

const Contact = () => {
  return (
    <div className="mt-16 flex flex-col" id="contact">
      <div className="flex flex-col text-white px-8 sm:px-16 md:px-20 space-y-6 items-center">
        <SectionHeader sequence={["get in touch", 4000, "联络我", 4000]}>
          <span className="text-purple-500">contact</span> me
        </SectionHeader>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 place-items-center">
          {contactMethods.map((method, index) => (
            <ContactMethodCard method={method} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
