import "./App.css";
import React, { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useScroll,
} from "framer-motion";
import Navbar from "./Component/Navbar/Navbar";
import HomePage from "./Component/HomePage/HomePage";
import { AboutPage } from "./Component/AboutPage/AboutPage";
import ProjectsPage from "./Component/ProjectsPage/ProjectsPage";
import ToolsPage from "./Component/ToolsPage/ToolsPage";
import ContactPage from "./Component/ContactPage/ContactPage";

/* soft blob that trails the pointer — a little frontend flourish */
function Cursor() {
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);
  const ringX = useSpring(dotX, { stiffness: 500, damping: 30 });
  const ringY = useSpring(dotY, { stiffness: 150, damping: 20 });
  const scale = useSpring(1, { stiffness: 300, damping: 20 });

  useEffect(() => {
    const move = (e) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
    };
    const over = (e) => {
      if (e.target.closest("a, button, .tilt, .magnetic")) scale.set(1.9);
    };
    const out = () => scale.set(1);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    window.addEventListener("mouseout", out);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("mouseout", out);
    };
  }, [dotX, dotY, scale]);

  return (
    <>
      <motion.div className="cursor-dot" style={{ x: dotX, y: dotY }} />
      <motion.div
        className="cursor-ring"
        style={{ x: ringX, y: ringY, scale }}
      />
    </>
  );
}

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });
  const mainRef = useRef(null);

  return (
    <div className="app" ref={mainRef}>
      <Cursor />
      <motion.div className="scroll-progress" style={{ scaleX }} />
      <Navbar />
      <main>
        <HomePage />
        <AboutPage />
        <ProjectsPage />
        <ToolsPage />
        <ContactPage theme="light" />
      </main>
      <footer className="site-footer">
        <div className="wrap footer-inner">
          <span className="footer-mid">Designed &amp; built by Batool</span>
          <span>© {new Date().getFullYear()} · Dubai, UAE</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
