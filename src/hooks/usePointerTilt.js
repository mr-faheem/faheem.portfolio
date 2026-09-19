import { useCallback, useRef } from "react";

/**
 * usePointerTilt — feeds Phase 1's CSS primitives (.tilt-target / .spotlight-surface)
 * with live pointer coordinates. No animation of its own: it only sets CSS custom
 * properties, and .tilt-target / .spotlight-surface (defined in global.css) do the
 * actual visual work via `transition`, which the app's global
 * `prefers-reduced-motion` rule already neutralizes.
 *
 * Inert on touch devices and for reduced-motion users by design — the panel
 * still renders correctly, it just doesn't track the pointer.
 */
export default function usePointerTilt({ maxTilt = 7 } = {}) {
  const ref = useRef(null);

  const isEligible = useCallback(() => {
    if (typeof window === "undefined") return false;
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    return !coarsePointer && !reducedMotion;
  }, []);

  const onPointerMove = useCallback(
    (event) => {
      const el = ref.current;
      if (!el || !isEligible()) return;

      const rect = el.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const px = x / rect.width;
      const py = y / rect.height;

      const ry = (px - 0.5) * maxTilt * 2;
      const rx = (0.5 - py) * maxTilt * 2;

      el.style.setProperty("--rx", `${rx.toFixed(2)}deg`);
      el.style.setProperty("--ry", `${ry.toFixed(2)}deg`);
      el.style.setProperty("--spot-x", `${x}px`);
      el.style.setProperty("--spot-y", `${y}px`);
    },
    [maxTilt, isEligible]
  );

  const onPointerLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  }, []);

  return { ref, onPointerMove, onPointerLeave };
}
