import React from "react";

export default function SectionHeading({ id, eyebrow, title, subtitle }) {
  return (
    <header id={id} className="mb-8 md:mb-10">
      {eyebrow && (
        <span
          className="inline-block rounded-full bg-blue-50 text-blue-700
                     px-2.5 py-1 text-xs font-medium tracking-wider
                     dark:bg-sky-900/40 dark:text-sky-200"
        >
          {eyebrow}
        </span>
      )}

      <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-2 text-slate-600 max-w-prose">
          {subtitle}
        </p>
      )}

      {/* subtle divider */}
      <div className="mt-4 h-px bg-gradient-to-r from-slate-200 via-slate-200/60 to-transparent dark:from-slate-700 dark:via-slate-700/60" />
    </header>
  );
}
