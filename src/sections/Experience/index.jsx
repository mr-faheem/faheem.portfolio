import React from "react";
import SectionHeading from "../../components/common/SectionHeading.jsx";
import Icon from "../../components/common/Icons.jsx";

// Verified only — see audit notes in the Phase 6 report before editing this.
// "Guest House Manager" is a real, non-technical role and must stay titled
// exactly that — never reworded into a technical/IT job title.
const journey = [
  {
    id: "development",
    icon: "code",
    category: "Independent Development",
    role: "Independent Full-Stack Development",
    org: "Personal projects, portfolio work & continuous development practice",
    date: "Active",
    points: [
      "Building responsive interfaces with React, JavaScript, HTML and CSS.",
      "Developing APIs and server-side features with Node.js, Express and MongoDB.",
      "Using Git/GitHub, Vite builds and GitHub Pages deployment workflows.",
    ],
    tags: ["React", "JavaScript", "Node.js", "Express", "MongoDB", "Git/GitHub"],
  },
  {
    id: "work",
    icon: "briefcase",
    category: "Work Experience",
    role: "Guest House Manager",
    org: "Private Guest House",
    date: "2023 — Present",
    points: [
      "Front-desk, customer handling, check-in/out & issue resolution.",
      "Daily accounts, cash/UPI/card reconciliation & vendor payments.",
      "Room inventory, staff scheduling & housekeeping coordination.",
    ],
    tags: ["Customer Service", "Operations", "Team Coordination"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-shell">
      <div className="container">
        <SectionHeading
          eyebrow="EXPERIENCE"
          title="Experience & engineering journey."
          subtitle="Hands-on development practice alongside real, non-technical professional responsibility — kept clearly distinct."
        />

        <div className="journey-timeline" data-reveal>
          <div className="journey-spine" aria-hidden="true" />

          {journey.map((entry, index) => (
            <article
              key={entry.id}
              data-reveal
              style={{ "--delay": `${index * 100}ms` }}
              className="journey-node"
            >
              <div className="journey-marker">
                <Icon name={entry.icon} size={18} />
              </div>

              <div className="premium-card journey-card">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <span className="timeline-type">{entry.category}</span>
                    <h3 className="mt-2 text-xl font-semibold text-slate-950 dark:text-white">{entry.role}</h3>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{entry.org}</p>
                  </div>
                  <span className="date-chip">{entry.date}</span>
                </div>

                <ul className="mt-6 grid gap-3 text-sm leading-6 text-slate-600 dark:text-slate-300 md:grid-cols-3">
                  {entry.points.map((point) => (
                    <li key={point} className="experience-point">
                      <Icon name="check" size={15} />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {entry.tags.map((tag) => (
                    <span key={tag} className="tech-chip">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
