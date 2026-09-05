import React from "react";
import SectionHeading from "../../components/common/SectionHeading.jsx";
import Icon from "../../components/common/Icons.jsx";
import { technicalLearning } from "../../data/learning.js";

export default function Experience() {
  return (
    <section id="experience" className="section-shell">
      <div className="container">
        <SectionHeading
          eyebrow="EXPERIENCE"
          title="Experience & qualifications."
          subtitle="Hands-on development, professional responsibility, education and continuous technical learning."
        />

        <div className="experience-timeline" data-reveal>
          <article className="experience-row">
            <div className="timeline-marker"><Icon name="code" size={18} /></div>
            <div className="premium-card experience-card">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <span className="timeline-type">Hands-on Technical Experience</span>
                  <h3 className="mt-2 text-xl font-semibold text-slate-950 dark:text-white">Independent Full-Stack Development</h3>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Personal projects, portfolio work & continuous development practice</p>
                </div>
                <span className="date-chip">Active</span>
              </div>

              <ul className="mt-6 grid gap-3 text-sm leading-6 text-slate-600 dark:text-slate-300 md:grid-cols-3">
                <li className="experience-point"><Icon name="check" size={15} /> Building responsive interfaces with React, JavaScript, HTML and CSS.</li>
                <li className="experience-point"><Icon name="check" size={15} /> Developing APIs and server-side features with Node.js, Express and MongoDB.</li>
                <li className="experience-point"><Icon name="check" size={15} /> Using Git/GitHub, Vite builds and GitHub Pages deployment workflows.</li>
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {["React", "JavaScript", "Node.js", "Express", "MongoDB", "Git/GitHub"].map((tag) => (
                  <span key={tag} className="tech-chip">{tag}</span>
                ))}
              </div>
            </div>
          </article>

          <article className="experience-row">
            <div className="timeline-marker"><Icon name="briefcase" size={18} /></div>
            <div className="premium-card experience-card">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <span className="timeline-type">Professional Experience</span>
                  <h3 className="mt-2 text-xl font-semibold text-slate-950 dark:text-white">Guest House Manager</h3>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Private Guest House</p>
                </div>
                <span className="date-chip">2023 — Present</span>
              </div>

              <ul className="mt-6 grid gap-3 text-sm leading-6 text-slate-600 dark:text-slate-300 md:grid-cols-3">
                <li className="experience-point"><Icon name="check" size={15} /> Front-desk, customer handling, check-in/out & issue resolution.</li>
                <li className="experience-point"><Icon name="check" size={15} /> Daily accounts, cash/UPI/card reconciliation & vendor payments.</li>
                <li className="experience-point"><Icon name="check" size={15} /> Room inventory, staff scheduling & housekeeping coordination.</li>
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {["Customer Service", "Operations", "Team Coordination"].map((tag) => (
                  <span key={tag} className="tech-chip">{tag}</span>
                ))}
              </div>
            </div>
          </article>

          <article className="experience-row">
            <div className="timeline-marker"><Icon name="graduation" size={18} /></div>
            <div className="premium-card experience-card">
              <span className="timeline-type">Education</span>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <div className="soft-panel p-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-base font-semibold text-slate-950 dark:text-white">Bachelor of Computer Applications (BCA)</h3>
                    <span className="learning-status learning-status-complete">Completed</span>
                  </div>
                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Maa Shakumbhari University</p>
                  <p className="mt-1 text-xs font-medium text-primary-600 dark:text-primary-300">2023 — 2026 · Completed in 2026</p>
                </div>
                <div className="soft-panel p-4">
                  <h3 className="text-base font-semibold text-slate-950 dark:text-white">Senior Secondary (12th)</h3>
                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Islamia Inter College</p>
                </div>
              </div>
            </div>
          </article>

          <article className="experience-row">
            <div className="timeline-marker"><Icon name="certificate" size={18} /></div>
            <div className="premium-card experience-card">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <span className="timeline-type">Certifications & Technical Learning</span>
                  <h3 className="mt-2 text-xl font-semibold text-slate-950 dark:text-white">Currently building stronger technical credentials</h3>
                </div>
                <span className="date-chip">In Progress</span>
              </div>

              <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-500 dark:text-slate-400">
                These learning tracks are currently in progress. Certificate links and credentials will be added here after successful completion.
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {technicalLearning.map((item) => (
                  <div key={`${item.title}-${item.provider}`} className="soft-panel learning-card">
                    <span className="learning-card-icon"><Icon name={item.icon} size={19} /></span>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm font-semibold text-slate-950 dark:text-white">{item.title}</h3>
                      <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{item.provider}</p>
                    </div>
                    <span className="learning-status">{item.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
