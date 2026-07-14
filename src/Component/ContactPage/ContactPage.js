import React from "react";
import "./contact.css";
import { motion } from "framer-motion";

const methods = [
  {
    icon: "fa-envelope",
    label: "Email",
    value: "Batool.saleh288@gmail.com",
    href: "mailto:Batool.saleh288@gmail.com",
  },
  {
    icon: "fa-phone",
    label: "Phone",
    value: "+971 56 154 1428",
    href: "tel:+971561541428",
  },
  {
    icon: "fa-map-marker",
    label: "Location",
    value: "Dubai, UAE",
    href: null,
  },
];

const ease = [0.22, 1, 0.36, 1];
const reveal = {
  hide: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const ContactPage = () => {
  return (
    <section className="contact section" id="contact">
      <div className="wrap">
        <motion.div
          className="contact-simple"
          initial="hide"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
        >
          <motion.span className="eyebrow" variants={reveal}>
            <span className="dot" /> Contact
          </motion.span>
          <motion.h2 className="section-title" variants={reveal}>
            Get in <em>touch</em>
          </motion.h2>
          <motion.p className="section-lead" variants={reveal}>
            Open to new opportunities and collaborations — feel free to reach out.
          </motion.p>

          <motion.div className="contact-methods" variants={reveal}>
            {methods.map((m) => {
              const inner = (
                <>
                  <span className="cm-icon">
                    <i className={`fa ${m.icon}`} />
                  </span>
                  <span className="cm-text">
                    <small>{m.label}</small>
                    <strong>{m.value}</strong>
                  </span>
                  {m.href && <i className="fa fa-arrow-right cm-arrow" aria-hidden="true" />}
                </>
              );
              return m.href ? (
                <a className="cm" key={m.label} href={m.href}>
                  {inner}
                </a>
              ) : (
                <div className="cm cm-static" key={m.label}>
                  {inner}
                </div>
              );
            })}
          </motion.div>

          <motion.div className="contact-socials" variants={reveal}>
            <a href="https://linkedin.com/in/batool-saleh-76641b1a2" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-linkedin" /> LinkedIn
            </a>
            <a href="https://github.com/batool-22" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-github" /> GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactPage;
