import React from "react";
import "./tool-page.css";
import { motion } from "framer-motion";
import { technologies, Frontend, Backend, Design } from "../../Constant";

const AI = [
  { name: "OpenAI API", icon: "https://img.icons8.com/color/480/chatgpt.png" },
  { name: "LLM Integration", icon: "https://img.icons8.com/fluency/480/artificial-intelligence.png" },
  { name: "Prompt Engineering", icon: "https://img.icons8.com/color/480/idea.png" },
  { name: "LangChain", icon: "https://img.icons8.com/color/480/link.png" },
  { name: "RAG & Embeddings", icon: "https://img.icons8.com/color/480/database.png" },
];

const groups = [
  { title: "Frontend", note: "My core focus", items: Frontend },
  { title: "AI", note: "Building with AI", items: AI },
  { title: "Backend", note: "Comfortable across the stack", items: Backend },
  { title: "Design", note: "Design-minded engineering", items: Design },
  { title: "Tools & Platforms", note: "Day-to-day workflow", items: technologies },
];

const reveal = {
  hide: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const ToolsPage = () => {
  return (
    <section className="tools section" id="tools">
      <div className="wrap">
        <motion.div
          initial="hide"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
        >
          <motion.span className="eyebrow" variants={reveal}>
            <span className="dot" /> Skills &amp; tools
          </motion.span>
          <motion.h2 className="section-title" variants={reveal}>
            The stack I build <em>with</em>
          </motion.h2>
          <motion.p className="section-lead" variants={reveal}>
            A frontend-focused toolkit, backed by full-stack fundamentals and a
            design-driven approach.
          </motion.p>

          <div className="skills-list">
            {groups.map((g) => (
              <motion.div className="skill-row" key={g.title} variants={reveal}>
                <div className="skill-row-head">
                  <h3>{g.title}</h3>
                  <span className="skill-row-note">{g.note}</span>
                </div>
                <div className="skill-row-items">
                  {g.items.map((t) => (
                    <span className="skill-pill" key={t.name}>
                      <img
                        src={t.icon}
                        alt=""
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                      {t.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ToolsPage;
