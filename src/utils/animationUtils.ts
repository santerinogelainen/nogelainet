import React from "react";
import gsap from "gsap";

export const useQuickTo = (properties) => {
  const animations = React.useRef<any>();

  const initialize = React.useCallback(
    (node) => {
      const entries = Object.entries(properties);
      entries.forEach(([key, v]) => {
        const value = typeof v === "function" ? v(node) : v;
        const quickTo = gsap.quickTo(node, key, value);
        if (!animations.current) {
          animations.current = {};
        }
        animations.current[key] = quickTo;
      });
    },
    [properties],
  );

  const quickTo = React.useCallback((values) => {
    const entries = Object.keys(values);
    entries.forEach((key) => {
      const value = values[key];
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
  }, []);

  const getTween = React.useCallback(
    (key) => animations.current?.[key]?.tween,
    [],
  );

  return React.useMemo(
    () => ({
      initialize,
      quickTo,
      getTween,
    }),
    [initialize, quickTo],
  );
};
