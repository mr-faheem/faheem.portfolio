import React from "react";

import SectionHeading from "../../components/common/SectionHeading.jsx";
export default function Projects() {
  return (
    <section id="projects" className="py-16 border-t">
      <div className="container">
        <SectionHeading id="projects" eyebrow="PROJECTS" title="Recent Work" />
        <div className="grid md:grid-cols-2 gap-6">
          {[1,2,3,4].map((i)=>(
            <article key={i} className="rounded-lg border p-4">
              <h3 className="font-semibold">Project {i}</h3>
              <p className="mt-1 text-sm text-slate-600">Short description…</p>
              <div className="mt-3 flex gap-3">
                <a className="text-sm" href="#">Live</a>
                <a className="text-sm" href="#">GitHub</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
