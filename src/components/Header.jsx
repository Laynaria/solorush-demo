import PropTypes from "prop-types";
import logo from "../assets/react.svg";

const Header = ({ isDarkTheme, setIsDarkTheme }) => {
  return (
    <header
      className={`flex justify-between p-2 border-b uppercase ${
        isDarkTheme
          ? "border-yellow-300 bg-[#242424] text-white"
          : "border-black bg-white"
      }`}
    >
      <a href="#">
        <img src={logo} alt="logo" />
      </a>
      <nav className="flex gap-8 mr-4 text-xl">
        <a href="#">projects</a>
        <a href="#contact">contact</a>
        <input
          type="checkbox"
          checked={isDarkTheme ? "checked" : ""}
          onClick={() => setIsDarkTheme(!isDarkTheme)}
        />
      </nav>
    </header>
  );
};

Header.propTypes = {
  isDarkTheme: PropTypes.bool.isRequired,
  setIsDarkTheme: PropTypes.func.isRequired,
};

export default Header;
