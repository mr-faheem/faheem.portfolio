// src/sections/Hero/index.jsx
import React from "react";
import avatar from "../../assets/images/profile.jpg"; // <- correct relative path
console.log("HERO BUILD v9");

export default function Hero() {
  return (
    <section id="hero" className="py-16 md:py-24">
      <div className="container grid md:grid-cols-[1.2fr_.8fr] gap-10 items-center">
        {/* Left */}
        <div>
          <p className="text-sm text-primary-600">Full Stack Developer</p>

           <h1 className="mt-2 text-[2.1rem] leading-tight md:text-5xl md:leading-tight font-bold tracking-tight">
         Hi, I’m <span className="text-slate-900">Mohd Faheem</span>
          </h1>


          <p className="mt-4 max-w-2xl text-slate-600">
            I build modern web apps with <strong>React</strong>,{" "}
            <strong>Node.js</strong> and <strong>MongoDB</strong>.
          </p>

         {/* CTAs */}
<div className="mt-6 grid gap-3 sm:flex sm:flex-wrap">
  <a
    href="#contact"
    className="w-full sm:w-auto px-4 py-3 rounded bg-blue-600 text-white hover:bg-blue-700 transition text-center"
  >
    Hire Me
  </a>

  <a
    href="Faheem_Resume_2025.pdf"
    target="_blank"
    rel="noreferrer"
    className="w-full sm:w-auto px-4 py-3 rounded border hover:bg-slate-50 transition text-center"
  >
    Download CV
  </a>

  <a
    href="https://wa.me/918979391273"
    target="_blank"
    rel="noreferrer"
    className="w-full sm:w-auto px-4 py-3 rounded border hover:bg-slate-50 transition text-center"
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

        {/* Right: circle + photo (top/bottom tight, left/right gap) — DO NOT CHANGE */}
        <div className="justify-self-center">
          <div className="relative">
            {/* soft halo */}
            <div
              className="absolute inset-0 -z-10 rounded-full
                         bg-gradient-to-br from-blue-500/25 via-cyan-400/15 to-transparent
                         blur-2xl scale-125"
              aria-hidden="true"
            />
            {/* circle (no padding!) */}
            <div
              className="relative rounded-full overflow-hidden ring-4 ring-white
                         bg-sky-100 shadow-[0_18px_55px_rgba(2,132,199,.28),0_8px_24px_rgba(0,0,0,.12)]
                         w-[192px] h-[192px] md:w-[208px] md:h-[208px]"
              data-hero="v8" // debug marker
            >
              <img
                src={avatar}
                alt="Mohd Faheem"
                /* exact settings you locked earlier */
                style={{
                  height: "100%",
                  width: "auto",
                  display: "block",
                  margin: "0 auto",
                  objectPosition: "center",
                  transform: "scale(1.00)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
