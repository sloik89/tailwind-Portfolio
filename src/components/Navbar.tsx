import { links } from "../assets/data";
import { FaGit } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="bg-emerald-100">
      <div className="mx-auto max-w-7xl px-8 py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8">
        <h2 className="text-3xl font-bold">
          Web <span className="text-emerald-500">Dev</span>
        </h2>
        <div className="flex gap-x-3 tracking-wide">
          {links.map((item) => {
            return (
              <a
                href={item.href}
                className="hover:text-emerald-600 duration-300"
              >
                {item.text}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
