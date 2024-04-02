import PropTypes from "prop-types";

import catronus from "../assets/catronus.jpg";

const Aside = ({ isDarkTheme }) => {
  return (
    <aside
      className={`flex justify-center border-l ${
        isDarkTheme ? "border-yellow-300" : "border-black"
      }`}
    >
      <h1 className="absolute text-yellow-800 text-4xl z-[1] top-12">
        Votre Teaching Assistant
      </h1>
      <p className="absolute bottom-20 text-2xl text-yellow-400 w-[70%]">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
        veritatis quis quia? Dolores eaque vero praesentium omnis dignissimos
        qui? Amet.
      </p>
      <img src={catronus} alt="a photo of myself" className="w-full" />
    </aside>
  );
};

Aside.propTypes = {
  isDarkTheme: PropTypes.bool.isRequired,
};

export default Aside;
