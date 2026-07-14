import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import reactjs from "../../assets/Tech/reactjs.png";
import javascript from "../../assets/Tech/javascript.png";
import typescript from "../../assets/Tech/typescript.png";
import html from "../../assets/Tech/html.png";
import css from "../../assets/Tech/css.png";
import tailwind from "../../assets/Tech/tailwind.png";
import nodejs from "../../assets/Tech/nodejs.png";
import redux from "../../assets/Tech/redux.png";
import git from "../../assets/Tech/git.png";
import figma from "../../assets/Tech/figma.png";
import reactQuery from "../../assets/Tech/react-query.png";

const rings = [
  {
    r: 100,
    dur: 24,
    dir: "cw",
    items: [
      { i: reactjs, n: "React" },
      { i: javascript, n: "JavaScript" },
      { i: typescript, n: "TypeScript" },
    ],
  },
  {
    r: 160,
    dur: 38,
    dir: "ccw",
    items: [
      { i: html, n: "HTML" },
      { i: css, n: "CSS" },
      { i: tailwind, n: "Tailwind" },
      { i: nodejs, n: "Node.js" },
    ],
  },
  {
    r: 220,
    dur: 52,
    dir: "cw",
    items: [
      { i: redux, n: "Redux" },
      { i: git, n: "Git" },
      { i: figma, n: "Figma" },
      { i: reactQuery, n: "React Query" },
    ],
  },
];

const TechOrbit = () => {
  const wrap = useRef(null);
  const rx = useSpring(useMotionValue(0), { stiffness: 60, damping: 14 });
  const ry = useSpring(useMotionValue(0), { stiffness: 60, damping: 14 });
  const transform = useMotionTemplate`perspective(1100px) rotateX(${rx}deg) rotateY(${ry}deg)`;

  const onMove = (e) => {
    const b = wrap.current.getBoundingClientRect();
    const px = (e.clientX - b.left) / b.width - 0.5;
    const py = (e.clientY - b.top) / b.height - 0.5;
    rx.set(-py * 18);
    ry.set(px * 18);
  };
  const onLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <div className="orbit-viewport" ref={wrap} onMouseMove={onMove} onMouseLeave={onLeave}>
      <motion.div className="orbit-system" style={{ transform }}>
        {/* planet */}
        <div className="planet-atmo" aria-hidden="true" />
        <div className="planet" aria-hidden="true">
          <span className="planet-surface" />
          <span className="planet-shine" />
        </div>

        {/* orbits */}
        {rings.map((ring, ri) => (
          <div
            key={ri}
            className={`orbit ${ring.dir}`}
            style={{
              width: ring.r * 2,
              height: ring.r * 2,
              marginLeft: -ring.r,
              marginTop: -ring.r,
              animationDuration: `${ring.dur}s`,
            }}
          >
            {ring.items.map((it, idx) => {
              const a = (360 / ring.items.length) * idx;
              return (
                <div
                  key={it.n}
                  className="sat"
                  style={{ "--a": `${a}deg`, "--r": `${ring.r}px` }}
                >
                  <div className="sat-orient" style={{ "--a": `${a}deg` }}>
                    <div
                      className={`sat-spin ${ring.dir === "cw" ? "ccw" : "cw"}`}
                      style={{ animationDuration: `${ring.dur}s` }}
                    >
                      <div className="sat-icon">
                        <img src={it.i} alt={it.n} />
                        <span className="sat-label">{it.n}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default TechOrbit;
