import React from "react";

// explicit imports (Vite ESM safe)
import Hero from "./sections/Hero/index.jsx";
import About from "./sections/About/index.jsx";
import Skills from "./sections/Skills/index.jsx";
import Projects from "./sections/Projects/index.jsx";
import Experience from "./sections/Experience/index.jsx";
import Contact from "./sections/Contact/index.jsx";
import Footer from "./sections/Footer/index.jsx";

import useActiveSection from "./hooks/useActiveSection.js";

export default function App() {
  // ids must match your <section id="..."> values
  const ids = ["hero", "about", "skills", "projects", "experience", "contact"];
  const active = useActiveSection(ids, "-64px 0px -70% 0px");

  const linkClass = (id) =>
    `px-2 py-1 rounded transition-colors ${
      active === id
        ? "text-blue-600 font-semibold"
        : "text-slate-600 hover:text-slate-900"
    }`;

  return (
    <main className="min-h-screen">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
        <nav className="container flex items-center justify-between py-3">
          <a href="#hero" className="font-semibold">Faheem</a>
          <div className="hidden sm:flex gap-5 text-sm">
            <a className={linkClass("about")} href="#about">About</a>
            <a className={linkClass("skills")} href="#skills">Skills</a>
            <a className={linkClass("projects")} href="#projects">Projects</a>
            <a className={linkClass("experience")} href="#experience">Experience</a>
            <a className={linkClass("contact")} href="#contact">Contact</a>
          </div>
          <a href="#contact" className="px-4 py-2 rounded bg-blue-500 text-white">Hire Me</a>
        </nav>
      </header>

      {/* Sections */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
