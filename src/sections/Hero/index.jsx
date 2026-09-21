import React from "react";
import avatar from "../../assets/images/profile-premium.webp";
import Icon from "../../components/common/Icons.jsx";
import usePointerTilt from "../../hooks/usePointerTilt.js";

// Real stack, in the actual order data flows through Nexora.
// Keep this list truthful — it doubles as a claim about what I can build.
const systemStack = [
  { icon: "code", label: "React", tag: "frontend" },
  { icon: "server", label: "Node.js + Express", tag: "backend" },
  { icon: "route", label: "REST API", tag: "api layer" },
  { icon: "database", label: "MongoDB", tag: "database" },
  { icon: "external", label: "Vercel", tag: "deployment" },
];

export default function Hero() {
  const {
    ref: panelRef,
    onPointerMove,
    onPointerLeave,
  } = usePointerTilt({ maxTilt: 6 });

  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-72px)] flex items-center pt-8 pb-16 md:pt-10 md:pb-20"
    >
      <div className="hero-grid" aria-hidden="true" />

      <div className="container relative z-10 grid items-center gap-16 lg:grid-cols-[1.08fr_.92fr] lg:gap-16">
        <div className="max-w-3xl">
          <div data-reveal className="availability-pill">
            <span className="availability-dot" />
            Full Stack Developer
            <span className="text-slate-300 dark:text-slate-600">
              •
            </span>
            Open to opportunities
          </div>

          <h1 className="hero-title mt-5">
            <span
              data-reveal
              style={{ "--delay": "70ms" }}
              className="stagger-line"
            >
              I build full-stack systems —
            </span>

            <span
              data-reveal
              style={{ "--delay": "160ms" }}
              className="stagger-line gradient-text"
            >
              from React interfaces to production APIs.
            </span>
          </h1>

          <p
            data-reveal
            style={{ "--delay": "240ms" }}
            className="mt-5 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg"
          >
            Hi, I&apos;m{" "}
            <strong className="font-semibold text-slate-950 dark:text-white">
              Mohd Faheem
            </strong>{" "}
            — I design, build and ship complete web products:
            responsive React interfaces, Node.js/Express APIs, and
            MongoDB-backed data layers, deployed end to end.
          </p>

          <div
            data-reveal
            style={{ "--delay": "310ms" }}
            className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
          >
            <a
              href="#projects"
              className="btn btn-primary btn-lg group"
            >
              View Projects
              <Icon
                name="arrowRight"
                size={17}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>

            <a
              href="https://github.com/mr-faheem"
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary btn-lg"
            >
              <Icon name="github" size={17} />
              GitHub
            </a>

            <a
              href={`${import.meta.env.BASE_URL}Mohd_Faheem_Full_Stack_Developer_Resume.pdf`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary btn-lg"
            >
              <Icon name="download" size={17} />
              Resume
            </a>

            <a
              href="#contact"
              className="btn btn-ghost btn-lg"
            >
              <Icon name="mail" size={17} />
              Contact
            </a>
          </div>

          <div
            data-reveal
            style={{ "--delay": "380ms" }}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-slate-200/80 pt-6 text-sm text-slate-500 dark:border-white/10 dark:text-slate-400"
          >
            <span className="inline-flex items-center gap-2">
              <Icon
                name="code"
                size={17}
                className="text-primary-500"
              />
              React + JavaScript
            </span>

            <span className="inline-flex items-center gap-2">
              <Icon
                name="server"
                size={17}
                className="text-primary-500"
              />
              Node.js + Express
            </span>

            <span className="inline-flex items-center gap-2">
              <Icon
                name="database"
                size={17}
                className="text-primary-500"
              />
              MongoDB
            </span>
          </div>
        </div>

        <div
          className="relative mx-auto w-full max-w-[440px] pb-6 pl-5 lg:justify-self-end"
          data-reveal
          style={{ "--delay": "180ms" }}
        >
          <div className="absolute -inset-8 -z-10 rounded-[3rem] bg-gradient-to-br from-primary-500/20 via-cyan-400/10 to-violet-500/10 blur-3xl" />

          <div
            ref={panelRef}
            onPointerMove={onPointerMove}
            onPointerLeave={onPointerLeave}
            className="system-panel glass-panel-strong glow-border spotlight-surface tilt-target"
          >
            <div className="system-panel-eyebrow">
              <span>Architecture</span>

              <span className="system-panel-live">
                <span className="system-panel-live-dot" />
                Production stack
              </span>
            </div>

            <div className="mt-4 flex flex-col">
              {systemStack.map((node, i) => (
                <React.Fragment key={node.label}>
                  <div className="system-node">
                    <span className="system-node-icon">
                      <Icon
                        name={node.icon}
                        size={18}
                      />
                    </span>

                    <div className="min-w-0">
                      <p className="system-node-label">
                        {node.label}
                      </p>

                      <p className="system-node-tag">
                        {node.tag}
                      </p>
                    </div>
                  </div>

                  {i < systemStack.length - 1 && (
                    <div
                      className="system-connector"
                      aria-hidden="true"
                    />
                  )}
                </React.Fragment>
              ))}
            </div>

            <a
              href="https://nexora-ecommerce-psi.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="system-panel-footer"
            >
              <span>
                Built &amp; deployed with this stack — Nexora
                E-Commerce
              </span>

              <Icon
                name="arrowUpRight"
                size={15}
                className="shrink-0"
              />
            </a>
          </div>

          <div className="identity-card">
            <img
              src={avatar}
              alt="Mohd Faheem"
              width="900"
              height="1125"
              decoding="async"
              className="identity-avatar"
            />

            <div>
              <strong>Mohd Faheem</strong>
              <span>Full Stack Developer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}