import React from "react";
import SectionHeading from "../../components/common/SectionHeading.jsx";

export default function Projects() {
  const items = [
    { id: 1, title: "Project 1", desc: "Short description…" },
    { id: 2, title: "Project 2", desc: "Short description…" },
    { id: 3, title: "Project 3", desc: "Short description…" },
    { id: 4, title: "Project 4", desc: "Short description…" },
  ];

  return (
    <section id="projects" className="py-16 md:py-20 border-t">
      <div className="container">
        <SectionHeading id="projects" eyebrow="PROJECTS" title="Recent Work" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {items.map((p) => (
            <article
              key={p.id}
              className="card card-hover card-elev p-5 transition will-change-transform"
            >
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{p.desc}</p>

              {/* chips (optional – look pro) */}
              <ul className="mt-3 flex flex-wrap gap-2 text-xs text-slate-600">
                <li className="px-2.5 py-1 rounded-full border">React</li>
                <li className="px-2.5 py-1 rounded-full border">Node.js</li>
                <li className="px-2.5 py-1 rounded-full border">MongoDB</li>
              </ul>

              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="#"
                  className="btn btn-outline"
                  aria-label={`${p.title} live demo`}
                >
                  Live
                </a>
                <a
                  href="#"
                  className="btn btn-outline"
                  aria-label={`${p.title} GitHub repository`}
                >
                  GitHub
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
