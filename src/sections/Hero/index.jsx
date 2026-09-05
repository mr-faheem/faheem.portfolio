import React from "react";
import avatar from "../../assets/images/profile-premium.webp";
import Icon from "../../components/common/Icons.jsx";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[calc(100vh-72px)] flex items-center pt-14 pb-20 md:pt-20 md:pb-24">
      <div className="hero-grid" aria-hidden="true" />

      <div className="container relative z-10 grid items-center gap-14 lg:grid-cols-[1.08fr_.92fr] lg:gap-16">
        <div data-reveal className="max-w-3xl">
          <div className="availability-pill">
            <span className="availability-dot" />
            Full Stack Developer
            <span className="text-slate-300 dark:text-slate-600">•</span>
            Open to opportunities
          </div>

          <h1 className="hero-title mt-7">
            I build modern web experiences that feel
            <span className="gradient-text"> fast, clean & polished.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
            Hi, I&apos;m <strong className="font-semibold text-slate-950 dark:text-white">Mohd Faheem</strong> — a Full Stack Developer building responsive interfaces and practical web applications with React, Node.js, Express and MongoDB.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="#projects" className="btn btn-primary btn-lg group">
              View My Work
              <Icon name="arrowRight" size={17} className="transition-transform group-hover:translate-x-0.5" />
            </a>

            <a
              href={`${import.meta.env.BASE_URL}Mohd_Faheem_Full_Stack_Developer_Resume.pdf`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary btn-lg"
            >
              <Icon name="download" size={17} />
              Download CV
            </a>

            <a
              href="https://wa.me/918979391273"
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost btn-lg"
            >
              <Icon name="message" size={17} />
              WhatsApp
            </a>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-slate-200/80 pt-6 text-sm text-slate-500 dark:border-white/10 dark:text-slate-400">
            <span className="inline-flex items-center gap-2">
              <Icon name="code" size={17} className="text-primary-500" />
              React + JavaScript
            </span>
            <span className="inline-flex items-center gap-2">
              <Icon name="server" size={17} className="text-primary-500" />
              Node.js + Express
            </span>
            <span className="inline-flex items-center gap-2">
              <Icon name="database" size={17} className="text-primary-500" />
              MongoDB
            </span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[500px] lg:justify-self-end" data-reveal>
          <div className="absolute -inset-8 -z-10 rounded-[3rem] bg-gradient-to-br from-primary-500/20 via-cyan-400/10 to-violet-500/10 blur-3xl" />

          <div className="profile-frame">
            <div className="profile-orb profile-orb-one" aria-hidden="true" />
            <div className="profile-orb profile-orb-two" aria-hidden="true" />

            <div className="relative overflow-hidden rounded-[1.65rem] bg-slate-100 dark:bg-slate-900">
              <img
                src={avatar}
                alt="Mohd Faheem — Full Stack Developer"
                className="aspect-[4/5] h-full w-full object-cover object-center"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-slate-950/35 to-transparent" />
            </div>

            <div className="profile-status-card">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary-500/10 text-primary-600 dark:bg-primary-400/10 dark:text-primary-300">
                  <Icon name="code" size={19} />
                </span>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">Current focus</p>
                  <p className="mt-0.5 text-sm font-semibold text-slate-900 dark:text-white">Full Stack Web Development</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
