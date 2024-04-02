import PropTypes from "prop-types";

const Contact = ({ isDarkTheme }) => {
  return (
    <form
      className={`flex flex-col gap-8 items-center pt-8 pb-12 ${
        isDarkTheme ? "bg-[#242424] text-white" : "bg-white"
      }`}
      id="contact"
    >
      <h3 className="w-full text-3xl">Contact</h3>
      <label className="flex flex-col gap-2 items-start">
        Name:
        <input
          type="text"
          className={`w-[25rem] border ${isDarkTheme ? "" : "border-black"}`}
        />
      </label>
      <label className="flex flex-col gap-2 items-start">
        Object:
        <input
          type="text"
          className={`w-[25rem] border ${isDarkTheme ? "" : "border-black"}`}
        />
      </label>
      <label className="flex flex-col gap-2 items-start">
        Message:
        <textarea
          name=""
          id=""
          cols="22"
          rows="10"
          className={`w-[25rem] border ${isDarkTheme ? "" : "border-black"}`}
        />
      </label>
      <button
        className={`border rounded-md px-4 py-2 ${
          isDarkTheme ? "" : "border-black"
        }`}
      >
        Envoyer
      </button>
    </form>
  );
};

Contact.propTypes = {
  isDarkTheme: PropTypes.bool.isRequired,
};

export default Contact;
