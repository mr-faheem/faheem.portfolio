import React from "react";
import SectionHeading from "../../components/common/SectionHeading.jsx";
import Icon from "../../components/common/Icons.jsx";
import usePointerTilt from "../../hooks/usePointerTilt.js";
import { projects } from "../../data/projects.js";

// Strips a live URL down to a bare host for the browser-frame address bar,
// e.g. "https://nexora-ecommerce-psi.vercel.app/" -> "nexora-ecommerce-psi.vercel.app"
function toDisplayUrl(url, fallback) {
  if (!url) return fallback;
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

function FlagshipProject({ project, index }) {
  const {
    ref: mediaRef,
    onPointerMove,
    onPointerLeave,
  } = usePointerTilt({ maxTilt: 4 });

  return (
    <article data-reveal className="flagship-card">
      <div className="flagship-grid">
        {/* Media first in source order: image-on-top on mobile, image-on-left on desktop */}
        <div className="flagship-media">
          <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-primary-500/15 via-cyan-400/10 to-violet-500/10 blur-3xl" />

          <div
            ref={mediaRef}
            onPointerMove={onPointerMove}
            onPointerLeave={onPointerLeave}
            className="flagship-browser tilt-target spotlight-surface glow-border"
          >
            <div className="flagship-browser-chrome">
              <span className="h-1.5 w-1.5 rounded-full bg-rose-400/80" />
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400/80" />
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80" />

              <span className="flagship-browser-url">
                {toDisplayUrl(project.liveUrl, project.name)}
              </span>
            </div>

            <div className="flagship-browser-viewport">
              <img
                src={project.image}
                alt={project.imageAlt}
                width="1918"
                height="829"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>
        </div>

        <div className="flagship-content">
          <p className="flagship-eyebrow">
            <span className="capability-index">
              0{index + 1}
            </span>{" "}
            Flagship Project
          </p>

          <h3 className="flagship-title">
            {project.name}
          </h3>

          <p className="flagship-subtitle">
            {project.subtitle}
          </p>

          <p className="flagship-desc">
            {project.description}
          </p>

          <ul className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li key={tech} className="tech-chip">
                {tech}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-3 border-t border-slate-200/70 pt-5 dark:border-white/10">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary w-full sm:w-auto"
                aria-label={`Open ${project.name} live demo in a new tab`}
              >
                <Icon name="external" size={16} />
                Live Demo
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary w-full sm:w-auto"
                aria-label={`Open ${project.name} GitHub repository in a new tab`}
              >
                <Icon name="github" size={16} />
                GitHub Repository
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="flagship-highlights">
        {project.highlights.map((h, i) => (
          <div
            key={h.label}
            data-reveal
            style={{
              "--delay": `${i * 60}ms`,
            }}
            className="highlight-card"
          >
            <span className="system-node-icon">
              <Icon
                name={h.icon}
                size={17}
              />
            </span>

            <div className="min-w-0">
              <p className="highlight-label">
                {h.label}
              </p>

              <p className="highlight-detail">
                {h.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

export default function Projects() {
  const featuredProjects = projects.filter(
    (p) => p.featured
  );

  return (
    <section
      id="projects"
      className="section-shell section-tint"
    >
      <div className="container">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="PROJECTS"
            title="Selected engineering work."
            subtitle="One flagship build, shown in full — a real full-stack commerce system, not a tutorial clone."
          />

          <a
            href="https://github.com/mr-faheem"
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary mb-10 w-fit"
          >
            <Icon name="github" size={17} />
            GitHub Profile
            <Icon
              name="arrowUpRight"
              size={15}
            />
          </a>
        </div>

        {featuredProjects.map(
          (project, index) => (
            <FlagshipProject
              key={project.id}
              project={project}
              index={index}
            />
          )
        )}

        {/*
          Non-featured projects (project.featured === false) would render
          here later through a secondary, more compact layout — intentionally
          not built yet, per the brief. See src/data/projects.js for the
          full schema and how to add a project.
        */}
      </div>
    </section>
  );
}