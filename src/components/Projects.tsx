import SectionTitle from "./SectionTitle";
import { BsFillWebcamFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";
import { projects } from "../assets/data";

SectionTitle;
const Projects = () => {
  return (
    <section className=" bg-slate-100 py-24 " id="projects">
      <div className="align-element">
        <SectionTitle title="Web Creation" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 ">
          {projects.map((item) => {
            return (
              <article className="bg-white rounded-xl pb-8">
                <img
                  className="h-60 w-full rounded-t-xl"
                  src={item.img}
                  alt=""
                />
                <div className="px-4">
                  <h3 className="mt-4 mb-4 font-semibold capitalize text-lg">
                    {item.title}
                  </h3>
                  <p className="mb-4">{item.text}</p>
                  <div className="flex gap-x-6">
                    <FaGithub className="text-3xl" />
                    <BsFillWebcamFill className="text-3xl" />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
