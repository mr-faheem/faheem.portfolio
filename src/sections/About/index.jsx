import React from "react";

import SectionHeading from "../../components/common/SectionHeading.jsx";
export default function About() {
  return (
      <section id="about" className="py-16 border-t">
      <div className="container">
        <SectionHeading id="about" eyebrow="ABOUT" title="About Me" subtitle="Short intro & journey" />
        <p className="max-w-3xl">
          I’m a Full Stack Developer focused on building fast, clean and
          accessible web applications. I love React on the frontend and Node +
          Express on the backend.
        </p>
      </div>
    </section>
  );
}
