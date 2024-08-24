import { nanoid } from "nanoid";
import { ReactNode } from "react";
import { FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { IconType } from "react-icons";
export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#projects", text: "projects" },
];
export const skills: {
  id: string;
  title: string;
  icon: ReactNode;
  text: string;
}[] = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experieces",
  },
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaJs />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experieces",
  },
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaReact />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experieces",
  },
];
