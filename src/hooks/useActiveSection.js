import { useEffect, useState } from "react";

export default function useActiveSection(ids, rootMargin = "-60px 0px -70% 0px") {
  const [active, setActive] = useState(ids[0] ?? null);

  useEffect(() => {
    const sections = ids
      .map(id => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        // pick the most visible entry
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { root: null, threshold: [0.25, 0.5, 0.75], rootMargin }
    );

    sections.forEach(sec => io.observe(sec));
    return () => io.disconnect();
  }, [ids, rootMargin]);

  return active;
}
