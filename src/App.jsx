import React, { useEffect, useRef, useState } from "react";

import Hero from "./sections/Hero/index.jsx";
import About from "./sections/About/index.jsx";
import Skills from "./sections/Skills/index.jsx";
import Projects from "./sections/Projects/index.jsx";
import Experience from "./sections/Experience/index.jsx";
import Contact from "./sections/Contact/index.jsx";
import Footer from "./sections/Footer/index.jsx";

import Icon from "./components/common/Icons.jsx";
import useActiveSection from "./hooks/useActiveSection.js";
import useTheme from "./hooks/useTheme.js";
import useReveal from "./hooks/useReveal.js";

const navItems = [
  ["about", "About"],
  ["skills", "Skills"],
  ["projects", "Projects"],
  ["experience", "Experience"],
  ["contact", "Contact"],
];

const sectionIds = ["hero", ...navItems.map(([id]) => id)];

export default function App() {
  const active = useActiveSection(sectionIds);
  const { theme, toggle } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const progressRef = useRef(null);

  useReveal();

  useEffect(() => {
    let frame = 0;

    const updateScrollUi = () => {
      frame = 0;

      headerRef.current?.classList.toggle(
        "site-header-scrolled",
        window.scrollY > 16
      );

      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const progress =
        max > 0 ? Math.min(1, window.scrollY / max) : 0;

      progressRef.current?.style.setProperty(
        "--scroll-progress",
        progress.toFixed(4)
      );
    };

    const scheduleUpdate = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(updateScrollUi);
      }
    };

    updateScrollUi();

    window.addEventListener("scroll", scheduleUpdate, {
      passive: true,
    });

    window.addEventListener("resize", scheduleUpdate);

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);

      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [active]);

  const linkClass = (id) =>
    `nav-link ${active === id ? "nav-link-active" : ""}`;

  return (
    <main className="min-h-screen overflow-x-clip">
      <div className="ambient-bg" aria-hidden="true" />

      <header ref={headerRef} className="site-header">
        <nav className="container flex h-[72px] items-center justify-between gap-4">
          <a
            href="#hero"
            className="brand-mark"
            aria-label="Mohd Faheem home"
          >
            <span className="brand-symbol">F</span>

            <span className="hidden xs:inline sm:inline">
              Faheem
            </span>

            <span className="brand-dot" />
          </a>

          <div className="hidden md:flex items-center rounded-full border border-slate-200/70 bg-white/65 p-1 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/45">
            {navItems.map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                className={linkClass(id)}
                aria-current={
                  active === id ? "page" : undefined
                }
              >
                {label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggle}
              role="switch"
              aria-checked={theme === "dark"}
              aria-label={`Switch to ${
                theme === "dark" ? "light" : "dark"
              } mode`}
              className={`theme-switch ${
                theme === "dark"
                  ? "theme-switch-dark"
                  : ""
              }`}
              title={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
            >
              <span
                className="theme-switch-icon theme-switch-sun"
                aria-hidden="true"
              >
                <Icon name="sun" size={15} />
              </span>

              <span
                className="theme-switch-icon theme-switch-moon"
                aria-hidden="true"
              >
                <Icon name="moon" size={15} />
              </span>

              <span
                className="theme-switch-thumb"
                aria-hidden="true"
              >
                <Icon
                  name={
                    theme === "dark"
                      ? "moon"
                      : "sun"
                  }
                  size={15}
                />
              </span>
            </button>

            <a
              href="#contact"
              className="btn btn-primary hidden sm:inline-flex"
            >
              Let&apos;s Talk
              <Icon
                name="arrowUpRight"
                size={16}
              />
            </a>

            <button
              type="button"
              onClick={() =>
                setMenuOpen((v) => !v)
              }
              className="icon-button md:hidden"
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
            >
              <Icon
                name={
                  menuOpen ? "close" : "menu"
                }
                size={20}
              />
            </button>
          </div>
        </nav>

        <div
          id="mobile-navigation"
          className={`mobile-nav md:hidden ${
            menuOpen ? "mobile-nav-open" : ""
          }`}
        >
          <div className="container pb-4">
            <div className="rounded-2xl border border-slate-200/80 bg-white/95 p-2 shadow-xl shadow-slate-900/10 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/95">
              {navItems.map(([id, label]) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className={linkClass(id)}
                  aria-current={
                    active === id
                      ? "page"
                      : undefined
                  }
                  onClick={() =>
                    setMenuOpen(false)
                  }
                >
                  {label}
                </a>
              ))}

              <a
                href="#contact"
                className="btn btn-primary mt-2 w-full"
                onClick={() =>
                  setMenuOpen(false)
                }
              >
                Let&apos;s Talk
                <Icon
                  name="arrowUpRight"
                  size={16}
                />
              </a>
            </div>
          </div>
        </div>

        <div
          className="nav-progress-track"
          aria-hidden="true"
        >
          <div
            ref={progressRef}
            className="nav-progress-bar"
          />
        </div>
      </header>

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