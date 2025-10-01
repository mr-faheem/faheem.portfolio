import React from "react";

import SectionHeading from "../../components/common/SectionHeading.jsx";
export default function Skills() {
  const items = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB", "Git/GitHub"];
  return (
    <section id="skills" className="py-16 border-t">

      <div className="container">
        <SectionHeading id="skills" eyebrow="SKILLS" title="Tech Stack" />
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {items.map((sk) => (
            <li key={sk} className="rounded border px-3 py-2">{sk}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
