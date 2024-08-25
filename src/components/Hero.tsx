import { FaGithubSquare, FaLinkedin, FaGitSquare } from "react-icons/fa";
import hero from "../assets/hero.svg";
const Hero = () => {
  return (
    <div className="bg-emerald-100 py-24">
      <div className="mx-auto max-w-7xl px-8 grid md:grid-cols-2 ">
        <article>
          <h1 className="text-7xl font-bold tracking-wide">I'm Sebastian</h1>
          <p className="text-slate-700 capitalize text-2xl tracking-wider">
            Front-End Developer
          </p>
          <p className="text-lg tracking-wide text-slate-700 capitalize">
            turning ideas into interactive reality
          </p>
          <div className="flex gap-x-4 mt-4">
            <a href="#">
              <FaGithubSquare className="w-8 h-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a href="#">
              <FaLinkedin className="w-8 h-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a href="#">
              <FaGitSquare className="w-8 h-8 text-slate-500 hover:text-black duration-300" />
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img src={hero} alt="" className="h-80 lg:h-96" />
        </article>
      </div>
    </div>
  );
};

export default Hero;
