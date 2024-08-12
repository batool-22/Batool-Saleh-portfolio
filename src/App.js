import "./App.css";
import React, { useState, useEffect } from "react";
import ParticleBg from "./Backgroundmotion/ParticleBg";
import ProjectSections from "./ProjectSections/ProjectSections";
import StyleSwitcher from "./StyleSwitcher/StyleSwitcher";

function App() {
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="App">
      <ParticleBg />
      <StyleSwitcher />
      <ProjectSections />
      <div className={`preloader ${!isVisible ? "opacity-0" : ""}`}>
        {" "}
        <div class="loader"></div>
      </div>
    </div>
  );
}

export default App;
