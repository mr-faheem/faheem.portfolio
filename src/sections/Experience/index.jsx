import React from "react";

import SectionHeading from "../../components/common/SectionHeading.jsx";
export default function Experience() {
  return (
     <section id="experience" className="py-16 border-t">
      <div className="container">
        <SectionHeading id="experience" eyebrow="EXPERIENCE" title="Qualifications & Experience" />
        <ul className="space-y-3">
          <li className="rounded border p-3">BCA (Running) — Maa Shakumbhari University</li>
          <li className="rounded border p-3">12th — Islamia Inter College</li>
          <li className="rounded border p-3">2 Years Accounting — Sabzi Mandi</li>
          <li className="rounded border p-3">Freelance/Personal Projects — Web Development</li>
        </ul>
      </div>
    </section>
  );
}
