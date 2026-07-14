import React from "react";
import "./projects.css";
import { motion } from "framer-motion";
import Khotta3 from "../../assets/images/Khotta3.JPG";
import Hailo from "../../assets/images/Hailo.png";
import Consumer3 from "../../assets/images/Consumer3.png";
import TenderHand from "../../assets/images/TenderHand.jpg";
import Project2 from "../../assets/images/Project2.jpg";

const projects = [
  { title: "Hailo Apps", org: "Hospitality AI", kind: "Mobile Development", year: "2025", img: Hailo, tags: ["React Native", "AI"], imgPos: "center 24%" },
  { title: "Lendo Portals", org: "Lendo Financing", kind: "Web Development", year: "2022", img: Consumer3, tags: ["React", "Tailwind"] },
  { title: "Khotta App", org: "Axenda", kind: "UI / UX Design", year: "2021", img: Khotta3, tags: ["Figma", "Jira"] },
  { title: "Hybrid Project Management Portal", org: "Project Management", kind: "Web Development", year: "2021", img: Project2, tags: ["Next.js", "Tailwind"] },
  { title: "Tender Hands App", org: "Charity App", kind: "Mobile Development", year: "2020", img: TenderHand, tags: ["Flutter"] },
];

const ease = [0.22, 1, 0.36, 1];
const reveal = {
  hide: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};

const ProjectsPage = () => {
  return (
    <section className="projects section" id="projects">
      <div className="wrap">
        <motion.div
          initial="hide"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ show: { transition: { staggerChildren: 0.05 } } }}
        >
          <motion.span className="eyebrow" variants={reveal}>
            <span className="dot" /> Selected work
          </motion.span>
          <motion.h2 className="section-title" variants={reveal}>
            Things I’ve <em>shipped</em>
          </motion.h2>

          <div className="proj-list">
            {projects.map((p) => (
              <motion.article className="proj-item" key={p.title} variants={reveal}>
                <div className="proj-thumb">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    style={p.imgPos ? { objectPosition: p.imgPos } : undefined}
                  />
                </div>
                <div className="proj-mid">
                  <h3 className="proj-title">{p.title}</h3>
                  <p className="proj-sub">
                    {p.kind} <span className="proj-dot">·</span> {p.tags.join(", ")}
                  </p>
                </div>
                <div className="proj-end">
                  <span className="proj-year">{p.year}</span>
                  <span className="proj-arrow" aria-hidden="true">
                    <i className="fa fa-arrow-right" />
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsPage;
