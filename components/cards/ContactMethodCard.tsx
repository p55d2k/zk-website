import { ContactMethod } from "@/constants/contact";
import Link from "next/link";
import React from "react";

interface ContactMethodCardProps {
  method: ContactMethod;
}

const ContactMethodCard = ({ method }: ContactMethodCardProps) => {
  return (
    <Link
      href={method.link}
      target="_blank"
      className="flex flex-col items-center justify-center space-y-2 p-5 min-h-[250px] md:min-h-[300px] lg:min-h-[350px] card w-full"
    >
      <method.icon className="text-5xl" />
      <div className="text-center">
        <p className={`text-lg md:text-xl lg:text-2xl font-semibold text-blue-500`}>
          {method.name}
        </p>
        <p className="text-sm md:text-base lg:text-lg">{method.description}</p>
      </div>
    </Link>
  );
};

export default ContactMethodCard;
