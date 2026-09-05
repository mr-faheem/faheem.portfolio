import React from "react";
import SectionHeading from "../../components/common/SectionHeading.jsx";
import Icon from "../../components/common/Icons.jsx";
import nexoraPreview from "../../assets/images/projects/nexora-home.png";

const items = [
  {
    id: 1,
    title: "Nexora E-Commerce",
    desc: "A full-stack fashion e-commerce platform with a polished storefront, product discovery, shopping flows and an admin dashboard for managing products, orders, users and store activity.",
    accent: "from-cyan-500/20 via-blue-500/10 to-violet-500/15",
    image: nexoraPreview,
    tags: ["React", "Node.js", "Express", "MongoDB"],
    liveUrl: "https://nexora-ecommerce-psi.vercel.app/",
    repoUrl: "https://github.com/mr-faheem/nexora-ecommerce",
  },
  {
    id: 2,
    title: "Project 2",
    desc: "Short description…",
    accent: "from-violet-500/20 via-fuchsia-500/10 to-blue-500/15",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 3,
    title: "Project 3",
    desc: "Short description…",
    accent: "from-emerald-500/20 via-cyan-500/10 to-blue-500/15",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 4,
    title: "Project 4",
    desc: "Short description…",
    accent: "from-amber-500/15 via-orange-500/10 to-rose-500/15",
    tags: ["React", "Node.js", "MongoDB"],
  },
];

function Preview({ item }) {
  return (
    <div className={`project-preview bg-gradient-to-br ${item.accent}`}>
      <div className="project-browser flex flex-col">
        <div className="flex shrink-0 items-center gap-1.5 border-b border-white/10 px-3 py-2">
          <span className="h-1.5 w-1.5 rounded-full bg-rose-400/80" />
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400/80" />
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
        </div>

        {item.image ? (
          <div className="min-h-0 flex-1 overflow-hidden bg-white">
            <img
              src={item.image}
              alt={`${item.title} website preview`}
              className="h-full w-full object-cover object-top"
            />
          </div>
        ) : (
          <div className="grid min-h-0 flex-1 place-items-center px-6 pb-8 pt-5 text-center">
            <div>
              <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/10 text-white shadow-lg backdrop-blur">
                <Icon name="code" size={23} />
              </span>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.22em] text-white/65">Project Preview</p>
              <p className="mt-1 text-sm font-semibold text-white">{item.title}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-shell section-tint">
      <div className="container">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="PROJECTS"
            title="Selected work & experiments."
            subtitle="A cleaner showcase for live builds, source code and the technologies used behind each project."
          />
          <a
            href="https://github.com/mr-faheem"
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary mb-10 w-fit"
          >
            <Icon name="github" size={17} />
            GitHub Profile
            <Icon name="arrowUpRight" size={15} />
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2" data-reveal>
          {items.map((p) => (
            <article key={p.id} className="project-card group">
              <Preview item={p} />

              <div className="p-5 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-600 dark:text-primary-300">Featured Project</p>
                    <h3 className="mt-2 text-xl font-semibold text-slate-950 dark:text-white">{p.title}</h3>
                  </div>
                  <span className="project-number">0{p.id}</span>
                </div>

                <p className="mt-3 text-sm leading-7 text-slate-500 dark:text-slate-400">{p.desc}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span key={tag} className="tech-chip">{tag}</span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3 border-t border-slate-200/70 pt-5 dark:border-white/10">
                  <a
                    href={p.liveUrl || "#"}
                    target={p.liveUrl ? "_blank" : undefined}
                    rel={p.liveUrl ? "noreferrer" : undefined}
                    className="project-link"
                    aria-label={`${p.title} live demo`}
                  >
                    <Icon name="external" size={16} /> Live Demo
                  </a>
                  <a
                    href={p.repoUrl || "#"}
                    target={p.repoUrl ? "_blank" : undefined}
                    rel={p.repoUrl ? "noreferrer" : undefined}
                    className="project-link"
                    aria-label={`${p.title} GitHub repository`}
                  >
                    <Icon name="github" size={16} /> Source Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
