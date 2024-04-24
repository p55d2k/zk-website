import { IconType } from "react-icons";
import { MdOutlineMailOutline } from "react-icons/md";
import {
  FaDiscord,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export interface ContactMethod {
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
    name: "Telegram",
    description: "I use Telegram on a daily basis! You can contact me there.",
    icon: FaTelegram,
    link: "https://t.me/p55d2k",
  },
  {
    name: "Instagram",
    description:
      "My personal and social profile - Instagram! You can drop me a message, or send a follow request.",
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
    name: "LinkedIn",
    description:
      "My professional profile, LinkedIn. I don't check it regularly though.",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/zk-w-68507a273/",
  },
  {
    name: "Discord",
    description:
      "A social messaging platform, Discord. I'm not active there, but you can still find me there.",
    icon: FaDiscord,
    link: "https://discordapp.com/users/812219026473746453",
  },
  {
    name: "X",
    description: "Another social profile, X. I don't use it much though.",
    icon: FaXTwitter,
    link: "https://twitter.com/p55d2k",
  },
];

export default contactMethods;
