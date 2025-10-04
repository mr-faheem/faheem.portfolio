import { useEffect, useState } from "react";

export default function useActiveSection(
  ids,
  // header ki height approx 64px, niche 40% margin rakho
  rootMargin = "-64px 0px -40% 0px"
) {
  const [active, setActive] = useState(ids[0] ?? null);

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!sections.length) return;

    // Center-of-viewport based fallback (most reliable)
    const updateByCenter = () => {
      const y = window.innerHeight / 2; // viewport center
      let current = ids[0];
      for (const sec of sections) {
        const r = sec.getBoundingClientRect();
        if (r.top <= y && r.bottom >= y) {
          current = sec.id;
          break;
        }
      }
      setActive(current);
    };

    // Run once + on scroll/resize
    updateByCenter();
    const onScroll = () => updateByCenter();
    const onResize = () => updateByCenter();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [ids, rootMargin]);

  return active;
}
