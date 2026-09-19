import React, { useRef } from "react";
import SectionHeading from "../../components/common/SectionHeading.jsx";
import Icon from "../../components/common/Icons.jsx";

// Verified only — every entry here must be defendable in an interview.
// See Phase 3 brief: no Docker, Redux, testing, TypeScript, Next.js, AWS.
const categories = [
  {
    id: "frontend",
    icon: "code",
    name: "Frontend",
    role: "Interfaces & Interaction",
    skills: ["React", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Responsive UI", "Vite"],
  },
  {
    id: "backend",
    icon: "server",
    name: "Backend",
    role: "APIs & Application Logic",
    skills: ["Node.js", "Express.js", "REST APIs", "API Integration", "JWT Authentication"],
  },
  {
    id: "database",
    icon: "database",
    name: "Database",
    role: "Data & Persistence",
    skills: ["MongoDB", "Mongoose", "Data Modeling", "CRUD Operations"],
  },
  {
    id: "tools",
    icon: "git",
    name: "Tools",
    role: "Development Workflow",
    skills: ["Git", "GitHub", "Postman", "VS Code", "npm"],
  },
  {
    id: "deployment",
    icon: "external",
    name: "Deployment",
    role: "Shipping & Delivery",
    skills: ["Vercel", "GitHub Pages", "CI/CD (GitHub Actions)"],
  },
];

// The three-node flow strip mirrors the Hero's system panel language —
// a compact restatement of how a request actually moves through the stack.
const flow = [
  { id: "frontend", icon: "code", label: "Frontend" },
  { id: "backend", icon: "server", label: "Backend" },
  { id: "database", icon: "database", label: "Database" },
];

const ACTIVE_CARD_CLASS = "capability-card-active";
const ACTIVE_PILL_CLASS = "capability-pill-active";

export default function Skills() {
  // Deliberately NOT React state. Toggling this via setState would re-render
  // the section on every hover, and React would then rewrite each card's
  // className to match the render output — wiping out the "is-visible"
  // class that useReveal() adds imperatively (data-reveal starts at
  // opacity: 0 until that class is present). Refs + direct classList
  // mutation sidestep React's render cycle entirely, the same way
  // useReveal itself operates, so the two systems never collide.
  const cardRefs = useRef({});
  const pillRefs = useRef({});

  const setActive = (id, isActive) => {
    const card = cardRefs.current[id];
    const pill = pillRefs.current[id];
    if (card) card.classList.toggle(ACTIVE_CARD_CLASS, isActive);
    if (pill) pill.classList.toggle(ACTIVE_PILL_CLASS, isActive);
  };

  return (
    <section id="skills" className="section-shell">
      <div className="container">
        <SectionHeading
          eyebrow="SKILLS"
          title="How I build complete systems."
          subtitle="Not a list of logos — a working set of technologies that fit together across the stack."
        />

        {/* Flow strip */}
        <div data-reveal className="capability-flow">
          <p className="capability-flow-label">Full-Stack Delivery</p>
          <div className="capability-flow-row">
            {flow.map((node, i) => (
              <React.Fragment key={node.id}>
                <button
                  type="button"
                  ref={(el) => {
                    pillRefs.current[node.id] = el;
                  }}
                  className="capability-pill"
                  onMouseEnter={() => setActive(node.id, true)}
                  onMouseLeave={() => setActive(node.id, false)}
                  onFocus={() => setActive(node.id, true)}
                  onBlur={() => setActive(node.id, false)}
                >
                  <Icon name={node.icon} size={15} />
                  {node.label}
                </button>
                {i < flow.length - 1 && <span className="capability-link" aria-hidden="true" />}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Capability matrix */}
        <div className="capability-grid">
          {categories.map((cat, index) => (
            <article
              key={cat.id}
              ref={(el) => {
                cardRefs.current[cat.id] = el;
              }}
              data-reveal
              style={{ "--delay": `${index * 60}ms` }}
              className="capability-card spotlight-surface"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
                e.currentTarget.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
              }}
              onMouseEnter={() => setActive(cat.id, true)}
              onMouseLeave={() => setActive(cat.id, false)}
            >
              <div className="flex items-start justify-between gap-3">
                <span className="system-node-icon">
                  <Icon name={cat.icon} size={19} />
                </span>
                <span className="capability-index">0{index + 1}</span>
              </div>

              <h3 className="mt-4 text-lg font-semibold text-slate-950 dark:text-white">{cat.name}</h3>
              <p className="capability-role">{cat.role}</p>

              <ul className="mt-4 flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                  <li key={skill} className="tech-chip">
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
