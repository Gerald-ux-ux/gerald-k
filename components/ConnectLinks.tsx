/**
 *This component is in charge of defining the structure of the links
 */
import { FaYoutube, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

// Creating the interface type
type ConnectLink = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

// Having the type as an array so we can be able to map over it
const ConnectLinks: ConnectLink[] = [
  {
    label: "Email",
    href: "mailto:kamaugerald36@gmail.com",
    icon: <IoIosMail />,
  },
  {
    label: "Youtube",
    href: "https://www.youtube.com/@geralddd.g/featured",
    icon: <FaYoutube />,
  },
  {
    label: "Github",
    href: "https://github.com/Gerald-ux-ux",
    icon: <FaGithub />,
  },
  {
    label: "Linkedin",
    href: "https://www.linkedin.com/in/gerald-kamau-3bab10248",
    icon: <FaLinkedin />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/geralddd.g/",
    icon: <FaInstagram />,
  },
];

export default ConnectLinks;
