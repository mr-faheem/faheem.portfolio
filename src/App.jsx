import React from "react";

// Sections
import Hero from "./sections/Hero/index.jsx";
import About from "./sections/About/index.jsx";
import Skills from "./sections/Skills/index.jsx";
import Projects from "./sections/Projects/index.jsx";
import Experience from "./sections/Experience/index.jsx";
import Contact from "./sections/Contact/index.jsx";
import Footer from "./sections/Footer/index.jsx";

// Active section hook (center-of-viewport version)
import useActiveSection from "./hooks/useActiveSection.js";

export default function App() {
  // NOTE: IDs MUST match your <section id="..."> attributes
  const ids = ["hero", "about", "skills", "projects", "experience", "contact"];
  // a bit top-safe (header height) + center bias
  const active = useActiveSection(ids, "-64px 0px -40% 0px");

  const linkClass = (id) =>
    `px-2 py-1 rounded transition-colors ${
      active === id
        ? "text-blue-600 font-semibold"
        : "text-slate-600 hover:text-slate-900"
    }`;

  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <nav className="container px-4 sm:px-6 md:px-8 flex items-center justify-between h-14 md:h-16">
          <a href="#hero" className="font-semibold select-none">
            Faheem
          </a>

          {/* Desktop links */}
          <div className="hidden sm:flex items-center gap-6 text-sm">
            <a
              href="#about"
              className={linkClass("about")}
              aria-current={active === "about" ? "page" : undefined}
            >
              About
            </a>
            <a
              href="#skills"
              className={linkClass("skills")}
              aria-current={active === "skills" ? "page" : undefined}
            >
              Skills
            </a>
            <a
              href="#projects"
              className={linkClass("projects")}
              aria-current={active === "projects" ? "page" : undefined}
            >
              Projects
            </a>
            <a
              href="#experience"
              className={linkClass("experience")}
              aria-current={active === "experience" ? "page" : undefined}
            >
              Experience
            </a>
            <a
              href="#contact"
              className={linkClass("contact")}
              aria-current={active === "contact" ? "page" : undefined}
            >
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition font-medium"
          >
            Hire Me
          </a>
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
