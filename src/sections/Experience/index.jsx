import React from "react";
import SectionHeading from "../../components/common/SectionHeading.jsx";

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-20 border-t">
      <div className="container">
        <SectionHeading
          id="experience"
          eyebrow="EXPERIENCE"
          title="Qualifications & Experience"
        />

        <ul className="space-y-4 md:space-y-5">
          {/* Guest House Manager */}
          <li className="card p-4 md:p-5">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="font-semibold text-base md:text-lg">
                Guest House Manager — <span className="text-slate-700">Private Guest House</span>
              </h3>
              <span className="ms-auto text-xs rounded-full border px-2 py-0.5 text-slate-600">
                2023 — Present · 2+ yrs
              </span>
            </div>

            <ul className="mt-2 list-disc pl-5 text-slate-600 text-sm space-y-1.5">
              <li>Front-desk & customer handling: check-in/out, issue resolution, upselling.</li>
              <li>Daily accounts: cash/UPI/card reconciliation, invoices, vendor payments.</li>
              <li>Operations: room inventory, staff scheduling, housekeeping coordination.</li>
            </ul>

            {/* skill tags (optional, looks professional) */}
            <ul className="mt-3 flex flex-wrap gap-2 text-xs text-slate-600">
              <li className="px-2.5 py-1 rounded-full border">Customer Service</li>
              <li className="px-2.5 py-1 rounded-full border">Accounting</li>
              <li className="px-2.5 py-1 rounded-full border">Operations</li>
            </ul>
          </li>

          {/* Education / other experience */}
          <li className="card p-4 md:p-5">
            BCA (Running) — Maa Shakumbhari University
          </li>
          <li className="card p-4 md:p-5">
            12th — Islamia Inter College
          </li>
          <li className="card p-4 md:p-5">
            2 Years Accounting — Sabzi Mandi
          </li>
          <li className="card p-4 md:p-5">
            Freelance/Personal Projects — Web Development
          </li>
        </ul>
      </div>
    </section>
  );
}
