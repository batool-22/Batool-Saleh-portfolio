import React, { useEffect, useState } from "react";
import "./home.css";
import { motion, AnimatePresence } from "framer-motion";
import TechOrbit from "./TechOrbit";

const ease = [0.22, 1, 0.36, 1];
const ROLES = ["Frontend Developer", "UI Engineer", "React Specialist", "Motion Enthusiast"];

const HomePage = () => {
  const [role, setRole] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setRole((r) => (r + 1) % ROLES.length), 2600);
    return () => clearInterval(id);
  }, []);

  const container = { show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } } };
  const item = {
    hide: { opacity: 0, y: 22 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
  };

  return (
    <section className="home" id="home">
      <div className="home-grid-lines" aria-hidden="true" />

      <div className="wrap home-inner">
        <motion.div className="home-copy" variants={container} initial="hide" animate="show">
          <motion.span className="eyebrow" variants={item}>
            <span className="dot" /> Available for new work
          </motion.span>

          <motion.h1 className="home-name" variants={item}>
            Batool Saleh
          </motion.h1>

          <motion.div className="home-role" variants={item}>
            <span className="home-role-static">Software Engineer</span>
            <span className="home-role-sep">·</span>
            <span className="home-role-rotator">
              <AnimatePresence mode="wait">
                <motion.span
                  key={role}
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-110%" }}
                  transition={{ duration: 0.5, ease }}
                >
                  {ROLES[role]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.div>

          <motion.p className="home-blurb" variants={item}>
            I turn complex products into clean, fast, accessible interfaces —
            with React, TypeScript &amp; a real love for motion and detail.
          </motion.p>

          <motion.div className="home-actions" variants={item}>
            <a href="#projects" className="btn primary magnetic">View work</a>
            <a href="#contact" className="btn ghost magnetic">Get in touch</a>
          </motion.div>

          <motion.div className="home-social" variants={item}>
            <a href="https://linkedin.com/in/batool-saleh-76641b1a2" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fa fa-linkedin" />
            </a>
            <a href="https://github.com/batool-22" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fa fa-github" />
            </a>
            <span className="home-social-line" />
            <span className="home-social-note">Dubai, UAE</span>
          </motion.div>
        </motion.div>

        <motion.div
          className="home-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease, delay: 0.25 }}
        >
          <TechOrbit />
          <span className="home-visual-hint">Hover to explore my stack</span>
        </motion.div>
      </div>

      <a href="#about" className="hero-scroll" aria-label="Scroll down">
        <span>Scroll</span>
        <motion.span
          className="hero-scroll-line"
          animate={{ scaleY: [0.2, 1, 0.2] }}
          style={{ originY: 0 }}
          transition={{ duration: 1.8, repeat: Infinity, ease }}
        />
      </a>
    </section>
  );
};

export default HomePage;
