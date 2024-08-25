import { skills } from "../assets/data";
import SectionTitle from "./SectionTitle";
import SkillsCard from "./SkillsCard";
const Skills = () => {
  return (
    <section className="align-element py-20" id="skills">
      <SectionTitle title="tech stack" />
      <div className="py-16 md:grid md:gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((item) => {
          return <SkillsCard key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default Skills;
