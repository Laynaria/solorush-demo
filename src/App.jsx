import { useState } from "react";
import Header from "./components/Header";
import Aside from "./components/Aside";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import "./App.css";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  return (
    <>
      <Header isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
      <Aside isDarkTheme={isDarkTheme} />

      <Projects isDarkTheme={isDarkTheme} />
      <Contact isDarkTheme={isDarkTheme} />
    </>
  );
}

export default App;
