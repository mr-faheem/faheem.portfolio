import { useEffect, useState } from "react";

export default function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0] ?? null);

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return undefined;

    let frame = 0;

    const updateByCenter = () => {
      frame = 0;

      const centerY = window.innerHeight / 2;
      let current = sections[0].id;
      let nearestDistance = Number.POSITIVE_INFINITY;

      for (const section of sections) {
        const rect = section.getBoundingClientRect();

        if (rect.top <= centerY && rect.bottom >= centerY) {
          current = section.id;
          nearestDistance = 0;
          break;
        }

        const distance = Math.min(
          Math.abs(rect.top - centerY),
          Math.abs(rect.bottom - centerY)
        );

        if (distance < nearestDistance) {
          nearestDistance = distance;
          current = section.id;
        }
      }

      setActive((previous) =>
        previous === current ? previous : current
      );
    };

    const scheduleUpdate = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(updateByCenter);
      }
    };

    updateByCenter();

    window.addEventListener("scroll", scheduleUpdate, {
      passive: true,
    });

    window.addEventListener("resize", scheduleUpdate);

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);

      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, [ids]);

  return active;
}