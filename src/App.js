import "./App.css";
import React, { useState, useEffect } from "react";
import ParticleBg from "./Component/Backgroundmotion/ParticleBg";
import ProjectSections from "./Component/ProjectSections/ProjectSections";
import StyleSwitcher from "./Component/StyleSwitcher/StyleSwitcher";

function App() {
  const [theme, setTheme] = useState("light");
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="App">
      <ParticleBg theme={theme} id="tsparticles" />
      <ProjectSections />
      {/* <div className={`preloader ${!isVisible ? "opacity-0" : ""}`}>
        {" "}
        <div class="loader"></div>
      </div> */}
      <StyleSwitcher theme={theme} setTheme={setTheme} />
    </div>
  );
}

export default App;
