import React from "react";
import "./about.css";
import { motion } from "framer-motion";
import sattam2 from "../../assets/images/sattam2.png";
import lendo from "../../assets/images/lendo.jpg";
import axenda from "../../assets/images/axenda.png";
import hailoLogo from "../../assets/images/HailoLogo.png";
import Resume from "../../assets/images/Resume.pdf";

const education = [
  {
    logo: sattam2,
    date: "2018 — 2022",
    role: "B.Sc. Software Engineering",
    place: "Prince Sattam bin Abdulaziz University",
  },
];

const experience = [
  {
    logo: hailoLogo,
    date: "2026 — Present",
    role: "Co-Founder",
    place: "Hailo",
    badge: "Building",
  },
  {
    logo: lendo,
    date: "2025 — Present",
    role: "Software Engineer II",
    place: "Lendo Financing",
  },
  {
    logo: lendo,
    date: "2022 — 2025",
    role: "Software Engineer I",
    place: "Lendo Financing",
  },
  {
    logo: axenda,
    date: "2021 — 2022",
    role: "Software Engineer",
    place: "Axenda",
  },
  {
    logo: sattam2,
    date: "2021 — 2022",
    role: "Frontend Developer",
    place: "Deanship of IT & Distance Learning",
  },
];

const stats = [
  { num: "6+", label: "Years of experience" },
  { num: "10+", label: "Projects shipped" },
  { num: "5+", label: "Production stacks" },
];

const reveal = {
  hide: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70, damping: 15 } },
};

export const AboutPage = () => {
  return (
    <section className="about section" id="about">
      <div className="wrap">
        <motion.div
          initial="hide"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.span className="eyebrow" variants={reveal}>
            <span className="dot" /> About me
          </motion.span>
          <motion.h2 className="section-title" variants={reveal}>
            A developer who loves the <em>details</em>
          </motion.h2>

          <div className="about-grid">
            <motion.div className="about-bio" variants={reveal}>
              <p>
                I’m <strong>Batool Saleh</strong>, a Software Engineer with a
                Bachelor’s degree in Software Engineering and a passion for
                frontend. I’ve worked across web development, UI engineering and
                UI design — and I’m always chasing the next thing to learn.
              </p>
              <p>
                I care about accessible, performant interfaces that feel good to
                use: smooth animations, thoughtful states, and pixel-tight
                layouts.
              </p>

              <div className="about-stats">
                {stats.map((s) => (
                  <div className="stat" key={s.label}>
                    <span className="stat-num">{s.num}</span>
                    <span className="stat-label">{s.label}</span>
                  </div>
                ))}
              </div>

              <div className="about-actions">
                <a href={Resume} className="btn magnetic" download="Batool Saleh Resume.pdf">
                  <i className="fa fa-download" /> Download CV
                </a>
                <a href="#contact" className="btn ghost magnetic">
                  Contact me
                </a>
              </div>
            </motion.div>

            <motion.div className="timeline" variants={reveal}>
              <motion.h3 className="tl-milestone edu" variants={reveal}>
                <span className="tl-mark">
                  <i className="fa fa-graduation-cap" />
                </span>
                Education
              </motion.h3>
              {education.map((t, i) => (
                <motion.div className="tl-item edu" key={`edu-${i}`} variants={reveal}>
                  <span className="tl-node" />
                  <div className="tl-content">
                    <span className="tl-date">{t.date}</span>
                    <div className="tl-row">
                      <div className="tl-logo">
                        <img src={t.logo} alt={t.place} />
                      </div>
                      <div className="tl-body">
                        <h4>{t.role}</h4>
                        <p>{t.place}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              <motion.h3 className="tl-milestone" variants={reveal}>
                <span className="tl-mark">
                  <i className="fa fa-briefcase" />
                </span>
                Experience
              </motion.h3>
              {experience.map((t, i) => (
                <motion.div
                  className={`tl-item ${i === experience.length - 1 ? "tl-last" : ""}`}
                  key={`exp-${i}`}
                  variants={reveal}
                >
                  <span className="tl-node" />
                  <div className="tl-content">
                    <span className="tl-date">{t.date}</span>
                    <div className="tl-row">
                      <div className="tl-logo">
                        <img src={t.logo} alt={t.place} />
                      </div>
                      <div className="tl-body">
                        <h4>
                          {t.role}
                          {t.badge && <span className="tl-badge">{t.badge}</span>}
                        </h4>
                        <p>{t.place}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
