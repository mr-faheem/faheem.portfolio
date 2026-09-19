import React from "react";
import Icon from "../../components/common/Icons.jsx";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/80 py-8 dark:border-white/10">
      <div className="container flex flex-col items-center justify-between gap-5 md:flex-row">
        <div className="text-center md:text-left">
          <a href="#hero" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-950 no-underline dark:text-white">
            <span className="brand-symbol brand-symbol-small">F</span>
            Mohd Faheem
          </a>
          <p className="mt-2 text-xs text-slate-400">© 2026 Mohd Faheem. Built with React.</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2">
          <a href="mailto:gourfaheem55@gmail.com" className="footer-icon" aria-label="Email"><Icon name="mail" size={17} /></a>
          <a href="https://www.linkedin.com/in/mohd-faheem-b8782726a/" target="_blank" rel="noreferrer" className="footer-icon" aria-label="LinkedIn"><Icon name="linkedin" size={17} /></a>
          <a href="https://github.com/mr-faheem" target="_blank" rel="noreferrer" className="footer-icon" aria-label="GitHub"><Icon name="github" size={17} /></a>
          <a href="https://wa.me/918979391273" target="_blank" rel="noreferrer" className="footer-icon" aria-label="WhatsApp"><Icon name="message" size={17} /></a>
          <a href="#hero" className="footer-icon ml-2" aria-label="Back to top"><Icon name="chevronUp" size={17} /></a>
        </div>
      </div>
    </footer>
  );
}
