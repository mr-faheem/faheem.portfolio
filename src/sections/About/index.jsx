import React from "react";
import SectionHeading from "../../components/common/SectionHeading.jsx";
import Icon from "../../components/common/Icons.jsx";
import { technicalLearning } from "../../data/learning.js";

const focus = [
  {
    icon: "code",
    title: "Frontend Engineering",
    text: "Responsive interfaces with React, JavaScript, HTML and CSS.",
  },
  {
    icon: "server",
    title: "Backend & APIs",
    text: "Practical APIs and server-side development with Node.js and Express.",
  },
  {
    icon: "database",
    title: "Data & Delivery",
    text: "MongoDB-backed apps, Git/GitHub workflows and production-ready builds.",
  },
];

export default function About() {
  return (
    <section id="about" className="section-shell section-tint">
      <div className="container">
        <SectionHeading
          eyebrow="ABOUT"
          title="More than just code."
          subtitle="I focus on building web experiences that are clear, responsive, maintainable and pleasant to use."
        />

        <div className="grid gap-6 lg:grid-cols-[1.15fr_.85fr] lg:gap-8">
          <article className="premium-card p-6 sm:p-8" data-reveal>
            <div className="flex items-start gap-4">
              <span className="section-icon">
                <Icon name="user" size={22} />
              </span>
              <div>
                <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
                  I&apos;m a Full Stack Developer focused on building fast, clean and accessible web applications. I enjoy crafting frontends with <strong className="text-slate-950 dark:text-white">React</strong> and shipping scalable backends with <strong className="text-slate-950 dark:text-white">Node.js + Express</strong>, using <strong className="text-slate-950 dark:text-white">MongoDB</strong> for data.
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-500 dark:text-slate-400">
                  I care about performance, maintainable code and polished UX, while continuously strengthening my JavaScript, React, database and responsive-development skills through structured learning and hands-on projects.
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {focus.map((item) => (
                <div key={item.title} className="soft-panel p-4">
                  <Icon name={item.icon} size={19} className="text-primary-500" />
                  <h3 className="mt-3 text-sm font-semibold text-slate-950 dark:text-white">{item.title}</h3>
                  <p className="mt-1.5 text-xs leading-6 text-slate-500 dark:text-slate-400">{item.text}</p>
                </div>
              ))}
            </div>
          </article>

          <div className="grid gap-6" data-reveal>
            <article className="premium-card p-6">
              <div className="flex items-center gap-3">
                <span className="section-icon section-icon-small">
                  <Icon name="graduation" size={19} />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-slate-950 dark:text-white">Education</h3>
                  <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">Academic foundation in computer applications</p>
                </div>
              </div>

              <div className="mt-5 space-y-4 border-l border-slate-200 pl-5 dark:border-white/10">
                <div className="timeline-mini-item">
                  <strong>Bachelor of Computer Applications (BCA)</strong>
                  <span>Maa Shakumbhari University · Completed 2026 · 2023–2026</span>
                </div>
                <div className="timeline-mini-item">
                  <strong>Senior Secondary (12th)</strong>
                  <span>Islamia Inter College</span>
                </div>
              </div>
            </article>

            <article className="premium-card p-6">
              <div className="flex items-center gap-3">
                <span className="section-icon section-icon-small">
                  <Icon name="certificate" size={19} />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-slate-950 dark:text-white">Certifications & Technical Learning</h3>
                  <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">Currently learning — credentials will be linked after completion</p>
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {technicalLearning.map((item) => (
                  <div key={`${item.title}-${item.provider}`} className="learning-mini-card">
                    <span className="learning-mini-icon"><Icon name={item.icon} size={16} /></span>
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
