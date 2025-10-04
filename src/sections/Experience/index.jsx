import React from "react";
import SectionHeading from "../../components/common/SectionHeading.jsx";

export default function Experience() {
  return (
    <section id="experience" className="py-16 border-t">
      <div className="container">
        <SectionHeading
          id="experience"
          eyebrow="EXPERIENCE"
          title="Qualifications & Experience"
        />

        <ul className="space-y-3">
          {/* Guest House Manager */}
          <li className="rounded border p-3">
            <div className="font-medium">
              Guest House Manager — <span className="text-slate-700">Private Guest House</span>{" "}
              <span className="text-xs text-slate-500">(2023 — Present · 2+ years)</span>
            </div>
            <ul className="mt-1 list-disc pl-5 text-slate-600 text-sm space-y-1">
              <li>Front-desk & customer handling: check-in/out, issue resolution, upselling.</li>
              <li>Daily accounts: cash/UPI/card reconciliation, invoices, vendor payments.</li>
              <li>Operations: room inventory, staff scheduling, housekeeping coordination.</li>
            </ul>
          </li>

          {/* Education / other experience */}
          <li className="rounded border p-3">BCA (Running) — Maa Shakumbhari University</li>
          <li className="rounded border p-3">12th — Islamia Inter College</li>
          <li className="rounded border p-3">2 Years Accounting — Sabzi Mandi</li>
          <li className="rounded border p-3">Freelance/Personal Projects — Web Development</li>
        </ul>
      </div>
    </section>
  );
}
