import { nanoid } from "nanoid";
import { ReactNode } from "react";
import { FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { IconType } from "react-icons";
import img1 from "../assets/laptop1.jpg";
import img2 from "../assets/laptop2.jpg";
import img3 from "../assets/laptop3.jpg";
export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#projects", text: "projects" },
];
export type SkillsType = {
  id: string;
  title: string;
  icon: ReactNode;
  text: string;
};
export const skills: SkillsType[] = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experieces",
  },
  {
    id: nanoid(),
    title: "JS",
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experieces",
  },
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experieces",
  },
];
export const projects = [
  {
    id: nanoid(),
    img: img1,
    url: "",
    github: "",
    title: "first project",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse ab aut et. Saepe maiores quam, minus vel harum officia animi.",
  },
  {
    id: nanoid(),
    img: img2,
    url: "",
    github: "",
    title: "second project",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse ab aut et. Saepe maiores quam, minus vel harum officia animi.",
  },
  {
    id: nanoid(),
    img: img3,
    url: "",
    github: "",
    title: "third project",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse ab aut et. Saepe maiores quam, minus vel harum officia animi.",
  },
];
