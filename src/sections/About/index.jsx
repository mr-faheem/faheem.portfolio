import React from "react";
import SectionHeading from "../../components/common/SectionHeading.jsx";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-20 border-t">
      <div className="container">
        <SectionHeading
          id="about"
          eyebrow="ABOUT"
          title="About Me"
          subtitle="Short intro & journey"
        />

        {/* intro */}
        <p className="max-w-prose text-slate-700 dark:text-slate-200">
          I’m a Full Stack Developer focused on building fast, clean and accessible web
          applications. I enjoy crafting frontends with <strong>React</strong> and shipping
          scalable backends with <strong>Node.js</strong> + <strong>Express</strong>, using
          <strong> MongoDB</strong> for data. I care about performance, maintainable code and
          polished UX.
        </p>

        {/* highlights */}
        <ul className="mt-5 flex flex-wrap gap-2 text-sm">
          <li className="px-3 py-1 rounded-full border">Clean Architecture</li>
          <li className="px-3 py-1 rounded-full border">Performance-first</li>
          <li className="px-3 py-1 rounded-full border">Pixel-perfect UI</li>
        </ul>

        {/* timeline */}
        <div className="mt-8 grid md:grid-cols-2 gap-6 md:gap-8">
          {/* left column: education + accounting */}
          <div className="card p-4 md:p-5">
            <h3 className="font-semibold text-base md:text-lg">Education & Early Experience</h3>
            <ol className="mt-3 relative border-s border-slate-200 ps-4 space-y-4">
              <li className="relative">
                <span className="absolute -start-[9px] top-1.5 h-2 w-2 rounded-full bg-blue-500" />
                <p className="text-sm text-slate-600">
                  <span className="font-medium">BCA (Running)</span> — Maa Shakumbhari University
                </p>
              </li>
              <li className="relative">
                <span className="absolute -start-[9px] top-1.5 h-2 w-2 rounded-full bg-blue-500" />
                <p className="text-sm text-slate-600">
                  <span className="font-medium">12th</span> — Islamia Inter College
                </p>
              </li>
              <li className="relative">
                <span className="absolute -start-[9px] top-1.5 h-2 w-2 rounded-full bg-blue-500" />
                <p className="text-sm text-slate-600">
                  <span className="font-medium">Accounting (2 Years)</span> — Sabzi Mandi
                </p>
              </li>
            </ol>
          </div>

          {/* right column: manager + projects */}
          <div className="card p-4 md:p-5">
            <h3 className="font-semibold text-base md:text-lg">Managerial & Projects</h3>
            <ol className="mt-3 relative border-s border-slate-200 ps-4 space-y-4">
              <li className="relative">
                <span className="absolute -start-[9px] top-1.5 h-2 w-2 rounded-full bg-blue-500" />
                <p className="text-sm text-slate-600">
                  <span className="font-medium">Guest House Manager</span> (2023 — Present): customer handling,
                  daily accounts, operations & team coordination.
                </p>
              </li>
              <li className="relative">
                <span className="absolute -start-[9px] top-1.5 h-2 w-2 rounded-full bg-blue-500" />
                <p className="text-sm text-slate-600">
                  <span className="font-medium">Freelance/Personal Projects</span>: E-commerce, Portfolio, To-Do,
                  Chat App (React, Node.js, MongoDB).
                </p>
              </li>
            </ol>

            {/* quick tags */}
            <ul className="mt-3 flex flex-wrap gap-2 text-xs text-slate-600">
              <li className="px-2.5 py-1 rounded-full border">Customer Service</li>
              <li className="px-2.5 py-1 rounded-full border">Accounting</li>
              <li className="px-2.5 py-1 rounded-full border">Operations</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
