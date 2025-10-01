import React from "react";

export default function SectionHeading({ id, eyebrow, title, subtitle }) {
  return (
    <header id={id} className="mb-8">
      {eyebrow && <p className="text-sm tracking-wider text-primary-600">{eyebrow}</p>}
      <h2 className="mt-1 text-2xl md:text-3xl font-semibold">{title}</h2>
      {subtitle && <p className="mt-2 text-slate-600">{subtitle}</p>}
    </header>
  );
}
