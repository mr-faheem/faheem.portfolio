import React, { useRef, useState } from "react";
import SectionHeading from "../../components/common/SectionHeading.jsx";
import Icon from "../../components/common/Icons.jsx";

const FORM_ENDPOINT = "https://formspree.io/f/xqaypyke";

export default function Contact() {
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ ok: null, msg: "" });

  async function handleSubmit(e) {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setStatus({ ok: null, msg: "" });

    try {
      const fd = new FormData(formRef.current);
      fd.append("_subject", `New message from ${fd.get("name")} — Portfolio`);

      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: fd,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus({ ok: true, msg: "Thanks! Your message has been sent ✅" });
        formRef.current.reset();
      } else {
        setStatus({ ok: false, msg: "Oops! Something went wrong. Please try again." });
      }
    } catch {
      setStatus({ ok: false, msg: "Network error. Check your internet and try again." });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="section-shell section-tint">
      <div className="container">
        <SectionHeading
          eyebrow="CONTACT"
          title="Let’s build something useful."
          subtitle="Have an opportunity, project or idea? Send a message and I’ll get back to you."
        />

        <div className="contact-grid" data-reveal>
          <aside className="contact-panel">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-600 dark:text-primary-300">Start a conversation</p>
              <h3 className="mt-3 max-w-md text-2xl font-semibold leading-tight text-slate-950 dark:text-white sm:text-3xl">Open to developer opportunities and project conversations.</h3>
              <p className="mt-4 max-w-md text-sm leading-7 text-slate-500 dark:text-slate-400">Email, WhatsApp or use the form. The current Formspree setup remains unchanged.</p>
            </div>

            <div className="mt-8 space-y-3">
              <a className="contact-method" href="mailto:gourfaheem55@gmail.com">
                <span><Icon name="mail" size={18} /></span>
                <div><small>Email</small><strong>gourfaheem55@gmail.com</strong></div>
                <Icon name="arrowUpRight" size={16} className="ml-auto" />
              </a>
              <a className="contact-method" href="https://wa.me/918979391273" target="_blank" rel="noreferrer">
                <span><Icon name="message" size={18} /></span>
                <div><small>WhatsApp</small><strong>+91 89793 91273</strong></div>
                <Icon name="arrowUpRight" size={16} className="ml-auto" />
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://www.linkedin.com/in/mohd-faheem-b8782726a/" target="_blank" rel="noreferrer" className="btn btn-secondary">
                <Icon name="linkedin" size={17} /> LinkedIn
              </a>
              <a href="https://github.com/mr-faheem" target="_blank" rel="noreferrer" className="btn btn-secondary">
                <Icon name="github" size={17} /> GitHub
              </a>
            </div>
          </aside>

          <form ref={formRef} onSubmit={handleSubmit} className="premium-card p-5 sm:p-7" aria-busy={isSubmitting}>
            <input type="text" name="_gotcha" className="hidden" tabIndex="-1" autoComplete="off" />

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="field-label">
                <span>Name</span>
                <input className="input" name="name" placeholder="Your name" required />
              </label>
              <label className="field-label">
                <span>Email</span>
                <input className="input" type="email" name="email" placeholder="you@example.com" required />
              </label>
            </div>

            <label className="field-label mt-4 block">
              <span>Message</span>
              <textarea className="textarea" rows="6" name="message" placeholder="Tell me a little about your project or opportunity..." required />
            </label>

            <button type="submit" disabled={isSubmitting} className="btn btn-primary btn-lg mt-5 w-full sm:w-auto">
              {isSubmitting ? (
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
              ) : (
                <Icon name="send" size={17} />
              )}
              {isSubmitting ? "Sending…" : "Send Message"}
            </button>

            {status.msg && (
              <p className={`mt-4 text-sm ${status.ok ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"}`} aria-live="polite">
                {status.msg}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
