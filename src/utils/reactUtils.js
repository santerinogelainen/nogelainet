import React from "react";
import { useSelector } from "react-redux";

/**
 * Add an event listened to a ref that is also cleaned up afterwards
 */
export const useEventListener = (ref, type, callback) => {
  React.useEffect(() => {
    const current = ref.current;

    current.addEventListener(type, callback);

    return () => current.removeEventListener(type, callback);
  });
};

export const useWindowEventListener = (type, callback) => {
  React.useEffect(() => {
    window.addEventListener(type, callback);
    return () => window.removeEventListener(type, callback);
  }, [type, callback]);
};

/**
 * Similar to componentDidUpdate, use effect only after the first mount
 */
export const useDidUpdateEffect = (callback, inputs) => {
  const loaded = React.useRef(false);

  React.useEffect(() => {
    if (loaded.current) {
      return callback();
    }

    loaded.current = true;
  }, inputs);
};

/**
 * Similar to componentDidMount, use effect only on the mount
 */
export const useDidMountEffect = (callback, inputs) => {
  const loaded = React.useRef(false);

  React.useEffect(() => {
    if (!loaded.current) {
      return callback();
    }

    loaded.current = true;
  }, inputs);
};

/**
 * Use and cleanup an interval
 */
export const useIntervalEffect = (callback, speed, inputs) => {
  React.useEffect(() => {
    const interval = setInterval(callback, speed);
    return () => clearInterval(interval);
  }, inputs);
};

export const useTimeoutState = () => {
  const [timeoutPointer, setTimeoutPointer] = React.useState(null);
  const set = React.useCallback((callback, delay) => {
    setTimeoutPointer(setTimeout(callback, delay));
  }, []);
  const clear = React.useCallback(() => {
    clearTimeout(timeoutPointer);
  }, [timeoutPointer]);
  return {
    set,
    clear
  }
}

export const useCallbackRef = (callback) => {
  const ref = React.useMemo(
    () =>
      Object.assign(
        (node) => {
          ref.current = node;
          if (node) {
            callback(node);
          }
        },
        { current: null }
      ),
    []
  );
  return ref;
};