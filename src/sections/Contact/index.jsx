import React, { useRef, useState } from "react";
import SectionHeading from "../../components/common/SectionHeading.jsx";

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
      // keep inbox tidy
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
        setStatus({
          ok: false,
          msg: "Oops! Something went wrong. Please try again.",
        });
      }
    } catch {
      setStatus({
        ok: false,
        msg: "Network error. Check your internet and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-16 md:py-20 border-t">
      <div className="container">
        <SectionHeading eyebrow="CONTACT" title="Let’s work together" />

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Left: form (same two-box layout, premium styles) */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="card p-4 md:p-5 space-y-3"
            aria-busy={isSubmitting}
          >
            {/* Honeypot (spam protection) */}
            <input type="text" name="_gotcha" className="hidden" tabIndex="-1" autoComplete="off" />

            <input
              className="input"
              name="name"
              placeholder="Name"
              required
            />
            <input
              className="input"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <textarea
              className="textarea"
              rows="6"
              name="message"
              placeholder="Message"
              required
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary btn-block sm:w-auto"
            >
              {isSubmitting && (
                <svg
                  className="h-4 w-4 animate-spin -ms-1 me-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle
                    className="opacity-25"
                    cx="12" cy="12" r="10"
                    stroke="currentColor" strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  />
                </svg>
              )}
              {isSubmitting ? "Sending…" : "Send"}
            </button>

            {/* status message */}
            {status.msg && (
              <p
                className={`text-sm pt-1 ${
                  status.ok ? "text-green-600" : "text-red-600"
                }`}
                aria-live="polite"
              >
                {status.msg}
              </p>
            )}
          </form>

          {/* Right: contact details (same second box, just premium card) */}
          <div className="card p-4 md:p-5">
            <p>
              Email:{" "}
              <a href="mailto:gourfaheem55@gmail.com">
                gourfaheem55@gmail.com
              </a>
            </p>
            <p className="mt-2">
              Phone/WhatsApp:{" "}
              <a
                href="https://wa.me/918979391273"
                target="_blank"
                rel="noreferrer"
              >
                8979391273
              </a>
            </p>
            <p className="mt-2">
              Links:{" "}
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>{" "}
              ·{" "}
              <a href="https://github.com" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
