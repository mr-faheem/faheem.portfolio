import React from "react";
import SectionHeading from "../../components/common/SectionHeading.jsx";
import Icon from "../../components/common/Icons.jsx";

const items = [
  { name: "HTML", icon: "code", label: "Structure" },
  { name: "CSS", icon: "code", label: "Styling" },
  { name: "JavaScript", icon: "braces", label: "Language" },
  { name: "React", icon: "orbit", label: "Frontend" },
  { name: "Node.js", icon: "server", label: "Runtime" },
  { name: "Express", icon: "route", label: "Backend" },
  { name: "MongoDB", icon: "database", label: "Database" },
  { name: "Git / GitHub", icon: "git", label: "Version Control" },
];

export default function Skills() {
  return (
    <section id="skills" className="section-shell">
      <div className="container">
        <SectionHeading
          eyebrow="SKILLS"
          title="The stack I build with."
          subtitle="A focused set of technologies for building complete modern web applications."
        />

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4" data-reveal>
          {items.map((skill, index) => (
            <article key={skill.name} className="skill-card group" style={{ "--delay": `${index * 40}ms` }}>
              <div className="skill-icon-wrap">
                <Icon name={skill.icon} size={22} />
              </div>
              <div className="min-w-0">
                <h3 className="truncate text-sm font-semibold text-slate-950 dark:text-white sm:text-base">{skill.name}</h3>
                <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-slate-400">{skill.label}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
