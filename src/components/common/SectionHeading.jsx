import React from "react";

export default function SectionHeading({ eyebrow, title, subtitle, align = "left" }) {
  const centered = align === "center";

  return (
    <header className={`section-heading ${centered ? "text-center mx-auto" : ""}`} data-reveal>
      {eyebrow && (
        <div className={`eyebrow ${centered ? "mx-auto" : ""}`}>
          <span className="eyebrow-dot" />
          {eyebrow}
        </div>
      )}

      <h2 className="section-title">{title}</h2>

      {subtitle && (
        <p className={`section-subtitle ${centered ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </header>
  );
}
