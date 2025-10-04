import React from "react";
import SectionHeading from "../../components/common/SectionHeading.jsx";

export default function Skills() {
  const items = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Git/GitHub",
  ];

  return (
    <section id="skills" className="py-16 md:py-20 border-t">
      <div className="container">
        <SectionHeading id="skills" eyebrow="SKILLS" title="Tech Stack" />

        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
          {items.map((sk) => (
            <li
              key={sk}
              className="rounded-xl border px-4 py-3 shadow-sm md:hover:shadow transition
                         text-sm text-slate-700 dark:text-slate-200
                         bg-white/90 dark:bg-slate-900/90"
            >
              {sk}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
