import about from "../assets/about.svg";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section id="#about" className="py-20 bg-white ">
      <div className="align-element grid md:grid-cols-2 gap-16 items-center">
        <img src={about} alt="" className="w-full h-64" />
        <article>
          <SectionTitle title="code and coffe" />
          <p className="leading-loose mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            incidunt aut quod cumque ipsa omnis eius laborum assumenda iure
            quisquam magni repellendus autem distinctio expedita cupiditate,
            aliquid, ut ducimus aliquam sed voluptatibus placeat. Assumenda,
            placeat? Provident sit earum, explicabo enim in iusto eos neque
            necessitatibus repellat reiciendis. Corrupti, quod animi.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
