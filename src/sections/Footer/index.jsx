import React from "react";

export default function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="container">
        <div className="flex flex-col items-center gap-4 text-sm text-slate-500 md:flex-row md:justify-between">
          {/* left: copyright */}
          <p className="text-center md:text-left">
            © 2025 Mohd Faheem — All rights reserved.
          </p>

          {/* right: quick links */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:gourfaheem55@gmail.com"
              className="hover:text-slate-700"
              aria-label="Email"
              title="Email"
            >
              Email
            </a>
            <span className="text-slate-300">•</span>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-700"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              LinkedIn
            </a>
            <span className="text-slate-300">•</span>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-700"
              aria-label="GitHub"
              title="GitHub"
            >
              GitHub
            </a>
            <span className="text-slate-300">•</span>
            <a
              href="https://wa.me/918979391273"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-700"
              aria-label="WhatsApp"
              title="WhatsApp"
            >
              WhatsApp
            </a>

            {/* back to top */}
            <span className="hidden sm:inline text-slate-300">•</span>
            <a
              href="#hero"
              className="hidden sm:inline hover:text-slate-700"
              aria-label="Back to top"
              title="Back to top"
            >
              ↑ Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
