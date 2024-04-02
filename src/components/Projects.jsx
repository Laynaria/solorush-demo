import PropTypes from "prop-types";
import { arrayProjects } from "../data/data";

const Projects = ({ isDarkTheme }) => {
  return (
    <section
      className={`mt-[49px] pt-8 flex gap-8 justify-center flex-wrap  ${
        isDarkTheme ? "bg-[#242424] text-white" : "bg-white"
      }`}
      id="projects"
    >
      <h2 className="w-full text-3xl">Projects</h2>
      {arrayProjects.reverse().map((card) => (
        <article
          key={card.id}
          className={`w-72 flex flex-col gap-4 border rounded-xl py-8 px-4 ${
            isDarkTheme ? "border-yellow-300 " : "border-black"
          }`}
        >
          <h1 className="text-2xl mb-auto">{card.name}</h1>
          <p>{card.desc}</p>
        </article>
      ))}
    </section>
  );
};

Projects.propTypes = {
  isDarkTheme: PropTypes.bool.isRequired,
};

export default Projects;
