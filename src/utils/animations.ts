import { useCallback, useMemo, useRef } from "react";
import gsap from "gsap";

type QuickToFuncParams = number | [number, number];
type QuickToProperties = Record<
  string,
  gsap.TweenVars | ((node: HTMLElement) => gsap.TweenVars)
>;
type QuickToResponse<T> = {
  initialize: (node: HTMLElement) => void;
  quickTo: (values: Partial<Record<keyof T, QuickToFuncParams>>) => void;
  getTween: (key: keyof T) => gsap.core.Tween | undefined;
};

export const useQuickTo = <T extends QuickToProperties>(
  properties: T,
): QuickToResponse<T> => {
  const animations = useRef<Record<keyof T, gsap.QuickToFunc>>();

  const initialize = useCallback(
    (node: HTMLElement) => {
      const entries = Object.entries(properties);
      entries.forEach(([k, v]) => {
        const key = k as keyof T;
        const value = typeof v === "function" ? v(node) : v;
        const quickTo = gsap.quickTo(node, k, value);
        if (!animations.current) {
          animations.current = {} as Record<keyof T, gsap.QuickToFunc>;
        }
        animations.current[key] = quickTo;
      });
    },
    [properties],
  );

  const quickTo = useCallback(
    (values: Partial<Record<keyof T, QuickToFuncParams>>) => {
      const entries = Object.keys(values);
      entries.forEach((key) => {
        const value = values[key] as QuickToFuncParams;
        const quickTo = animations.current?.[key];
        if (typeof value === "number") {
          // To
          quickTo?.(value);
        } else {
          // To, from
          const [to, from] = value;
          quickTo?.(to, from);
        }
      });
    },
    [],
  );

  const getTween = useCallback(
    (key: keyof T) => animations.current?.[key]?.tween,
    [],
  );

  return useMemo(
    () => ({
      initialize,
      quickTo,
      getTween,
    }),
    [initialize, quickTo],
  );
};
