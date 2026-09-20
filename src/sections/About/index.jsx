import React from "react";
import SectionHeading from "../../components/common/SectionHeading.jsx";
import Icon from "../../components/common/Icons.jsx";
import { technicalLearning } from "../../data/learning.js";

// WHY/HOW I build — not a tech list (that's Skills' job).
const approach = [
  { key: "BUILD", icon: "code", text: "Responsive React interfaces" },
  { key: "ENGINEER", icon: "server", text: "Node.js / Express APIs" },
  { key: "DATA", icon: "database", text: "MongoDB-backed application flows" },
  { key: "SHIP", icon: "git", text: "Deployment and Git/GitHub workflow" },
];

const education = [
  {
    title: "Bachelor of Computer Applications (BCA)",
    meta: "Maa Shakumbhari University · 2023 – 2026",
  },
  {
    title: "Senior Secondary (12th)",
    meta: "Islamia Inter College",
  },
];

export default function About() {
  return (
    <section id="about" className="section-shell section-tint">
      <div className="container">
        <SectionHeading
          eyebrow="ABOUT"
          title="More than just code."
          subtitle="How I think about building software — not just the tools I use."
        />

        <div className="grid gap-6 lg:grid-cols-[1.15fr_.85fr] lg:gap-8">
          {/* Developer profile / philosophy */}
          <article className="premium-card spotlight-surface p-6 sm:p-8" data-reveal
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              e.currentTarget.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
              e.currentTarget.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
            }}
          >
            <div className="flex items-start gap-4">
              <span className="system-node-icon">
                <Icon name="user" size={19} />
              </span>
              <div>
                <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
                  I&apos;m a <strong className="text-slate-950 dark:text-white">Full Stack Developer</strong> who
                  thinks in systems — how data moves from the database, through the API, into the interface someone
                  actually uses. I like owning a feature end to end rather than working in just one layer.
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-500 dark:text-slate-400">
                  Right now I&apos;m deepening that end-to-end approach — strengthening my JavaScript fundamentals,
                  React patterns, backend/API design and database modeling through structured learning and
                  hands-on projects.
                </p>
              </div>
            </div>

            <div className="approach-grid">
              {approach.map((item) => (
                <div key={item.key} className="approach-block">
                  <div className="flex items-center gap-2">
                    <Icon name={item.icon} size={16} className="text-primary-500" />
                    <span className="approach-key">{item.key}</span>
                  </div>
                  <p className="approach-text">{item.text}</p>
                </div>
              ))}
            </div>
          </article>

          {/* Profile / Education console */}
          <div className="grid gap-6" data-reveal style={{ "--delay": "120ms" }}>
            <article className="premium-card p-6">
              <p className="console-header">
                <span className="console-dot" />
                Education
              </p>

              <div className="mt-5 flex flex-col gap-4">
                {education.map((item) => (
                  <div key={item.title} className="console-row">
                    <strong>{item.title}</strong>
                    <span>{item.meta}</span>
                  </div>
                ))}
              </div>
            </article>

            <article className="premium-card p-6">
              <p className="console-header">
                <span className="console-dot" />
                Currently Improving
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {technicalLearning.map((item) => (
                  <div key={`${item.title}-${item.provider}`} className="learning-mini-card">
                    <span className="learning-mini-icon">
                      <Icon name={item.icon} size={16} />
                    </span>
                    <div className="min-w-0">
                      <strong>{item.title}</strong>
                      <span>{item.provider}</span>
                    </div>
                    <span className="learning-status">{item.status}</span>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
