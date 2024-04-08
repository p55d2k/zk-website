import { IconType } from "react-icons";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

interface ContactMethod {
  name: string;
  description: string;
  icon: IconType;
  link: string;
}

const contactMethods: ContactMethod[] = [
  {
    name: "Email",
    description:
      "My primary contact method - email! You can contact it anytime.",
    icon: MdOutlineMailOutline,
    link: "mailto:peanutandscuffy1@gmail.com",
  },
  {
    name: "LinkedIn",
    description:
      "My professional profile, LinkedIn. I don't check it regularly though. You can find me by clicking on this to go to my profile.",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/zk-w-68507a273/",
  },
  {
    name: "Instagram",
    description:
      "My personal and social profile - Instagram! Do feel free to drop me a message, or send a follow request. You can find me by clicking on this to go to my profile.",
    icon: FaInstagram,
    link: "https://instagram.com/p55d2k",
  },
  {
    name: "Github",
    description:
      "My code repository, GitHub. You can find my projects, contributions, and profile there.",
    icon: FaGithub,
    link: "https://github.com/p55d2k",
  },
  {
    name: "X",
    description:
      "Lastly, another social profile, X. You can find me by clicking on this to go to my profile.",
    icon: FaXTwitter,
    link: "https://twitter.com/p55d2k",
  },
];

export default contactMethods;
