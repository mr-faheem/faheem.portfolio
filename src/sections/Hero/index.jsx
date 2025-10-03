// src/sections/Hero/index.jsx
import React from "react";

export default function Hero() {
  return (
    <section id="hero" className="py-16 md:py-24">
      <div className="container grid md:grid-cols-[1.2fr_.8fr] gap-10 items-center">
        {/* Left */}
        <div>
          <p className="text-sm text-primary-600">Full Stack Developer</p>
          <h1 className="mt-2 text-4xl md:text-5xl font-bold tracking-tight">
            Hi, I’m <span className="text-slate-900">Mohd Faheem</span>
          </h1>
          <p className="mt-4 max-w-2xl text-slate-600">
            I build modern web apps with <strong>React</strong>,{" "}
            <strong>Node.js</strong> and <strong>MongoDB</strong>.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Hire Me
            </a>

            {/* CV is in /public so relative url works on GH Pages */}
            <a
              href="Faheem_Resume_2025.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded border hover:bg-slate-50 transition"
            >
              Download CV
            </a>

            <a
              href="https://wa.me/918979391273"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded border hover:bg-slate-50 transition"
            >
              WhatsApp
            </a>
          </div>

          <ul className="mt-6 flex flex-wrap gap-2 text-sm text-slate-600">
            <li className="px-3 py-1 rounded-full border">Clean Architecture</li>
            <li className="px-3 py-1 rounded-full border">Performance-first</li>
            <li className="px-3 py-1 rounded-full border">Pixel-perfect UI</li>
          </ul>
        </div>

        {/* Right: empty circle with glow (no image) */}
        <div className="justify-self-center">
          <div className="relative">
            {/* soft halo */}
            <div
              className="absolute inset-0 -z-10 rounded-full
                         bg-gradient-to-br from-blue-500/25 via-cyan-400/15 to-transparent
                         blur-2xl scale-125"
              aria-hidden="true"
            />
            {/* Circle */}
            <div
              className="relative rounded-full overflow-hidden ring-4 ring-white
                         bg-sky-100 shadow-[0_18px_55px_rgba(2,132,199,.28),0_8px_24px_rgba(0,0,0,.12)]
                         w-[192px] h-[192px] md:w-[208px] md:h-[208px]
                         flex items-center justify-center"
            >
              {/* Optional initials (remove if you want pure empty circle) */}
              {/* <span className="text-3xl md:text-4xl font-semibold text-slate-700 select-none">MF</span> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
