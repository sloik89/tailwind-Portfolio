import { type SkillsType } from "../assets/data";
const SkillsCard = ({ id, title, icon, text }: SkillsType) => {
  return (
    <article className="grid gap-y-3">
      <span>{icon}</span>
      <h4 className="font-medium  ">{title}</h4>
      <p className="tracking-wide">{text}</p>
    </article>
  );
};

export default SkillsCard;
