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
      // Optional subject to keep mails tidy
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
    <section id="contact" className="py-16 border-t">
      <div className="container">
        <SectionHeading eyebrow="CONTACT" title="Let’s work together" />
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left: form (unchanged layout) */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="rounded border p-4 space-y-3"
            aria-busy={isSubmitting}
          >
            <input
              className="w-full border rounded px-3 py-2"
              name="name"
              placeholder="Name"
              required
            />
            <input
              className="w-full border rounded px-3 py-2"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <textarea
              className="w-full border rounded px-3 py-2"
              rows="6"
              name="message"
              placeholder="Message"
              required
            ></textarea>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-5 py-2 rounded bg-primary-600 text-white transition
                disabled:opacity-60 disabled:cursor-not-allowed flex items-center gap-2`}
            >
              {isSubmitting && (
                <svg
                  className="h-4 w-4 animate-spin"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
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

          {/* Right: contact details (as-is) */}
          <div className="rounded border p-4">
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
