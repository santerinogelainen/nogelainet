import { useState, useEffect } from "react";

export type ElementIsVisibleThresholds = {
  top?: number;
  bottom?: number;
};

export type ScrollEventArgs = {
  y: number;
};

export type ScrollEvent = (args: ScrollEventArgs) => void;

export const useScrollEvent = (
  event: ScrollEvent,
  deps: React.DependencyList = [],
) => {
  useEffect(() => {
    const eventHandler = () => event({ y: window.scrollY });
    eventHandler();
    window.addEventListener("scroll", eventHandler);
    return () => window.removeEventListener("scroll", eventHandler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps]);
};

export const elementIsVisible = (
  element: HTMLElement,
  thresholds?: ElementIsVisibleThresholds,
) => {
  const offset = element.getBoundingClientRect();
  const elementTop = offset.top;
  const elementBottom = elementTop + element.offsetHeight;
  const thresholdBottom = window.innerHeight * (thresholds?.bottom || 0);
  const thresholdTop = window.innerHeight * (thresholds?.top || 0);
  return (
    window.innerHeight - thresholdBottom >= elementTop &&
    thresholdTop <= elementBottom
  );
};

export const useElementVisible = (
  element: React.RefObject<HTMLElement>,
  thresholds?: ElementIsVisibleThresholds,
) => {
  const [visible, setVisible] = useState(false);

  useScrollEvent(() => {
    setVisible(
      !!element.current && elementIsVisible(element.current, thresholds),
    );
  }, [thresholds]);

  return visible;
};
