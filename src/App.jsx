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
import useTheme from "./hooks/useTheme.js"; // <-- NEW

export default function App() {
  // NOTE: IDs MUST match your <section id="..."> attributes
  const ids = ["hero", "about", "skills", "projects", "experience", "contact"];
  // a bit top-safe (header height) + center bias
  const active = useActiveSection(ids, "-64px 0px -40% 0px");

  const { theme, toggle } = useTheme(); // <-- NEW

  const linkClass = (id) =>
    `px-2 py-1 rounded transition-colors ${
      active === id
        ? "text-blue-600 font-semibold"
        : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
    }`;

  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-white/80 dark:bg-slate-900/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-900/60">
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

          <div className="flex items-center gap-2">
            {/* Theme toggle (tiny, unobtrusive) */}
            <button
              type="button"
              onClick={toggle}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              className="rounded-xl border px-2 py-1 text-sm hover:bg-slate-50 dark:hover:bg-slate-800"
              title={theme === "dark" ? "Light mode" : "Dark mode"}
            >
              {theme === "dark" ? (
                // Sun icon
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M12 4V2M12 22v-2M4.93 4.93L3.51 3.51M20.49 20.49l-1.42-1.42M4 12H2m20 0h-2M4.93 19.07L3.51 20.49M20.49 3.51l-1.42 1.42" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6"/>
                </svg>
              ) : (
                // Moon icon
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </button>

            <a
              href="#contact"
              className="px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition font-medium"
            >
              Hire Me
            </a>
          </div>
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
