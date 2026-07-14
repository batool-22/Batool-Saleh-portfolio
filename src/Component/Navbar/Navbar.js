import React, { useEffect, useState } from "react";
import "./navbar.css";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Work" },
  { id: "tools", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(
      Boolean
    );
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const go = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="nav">
      <a href="#home" className="nav-logo" onClick={(e) => go(e, "home")}>
        <span className="nav-logo-text">Batool Saleh</span>
      </a>

      <nav className={`nav-pill ${open ? "open" : ""}`}>
        {LINKS.map((l) => (
          <a
            key={l.id}
            href={`#${l.id}`}
            onClick={(e) => go(e, l.id)}
            className={active === l.id ? "on" : ""}
          >
            {l.label}
          </a>
        ))}
      </nav>

      <a href="#contact" className="nav-cta" onClick={(e) => go(e, "contact")}>
        Let’s talk
      </a>

      <button
        className={`nav-burger ${open ? "open" : ""}`}
        aria-label="Menu"
        onClick={() => setOpen((o) => !o)}
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  );
};

export default Navbar;
