import { useEffect } from "react";

/**
 * Event Listener Hook.
 *
 * @param target
 * @param type
 * @param listener
 * @param rest
 *
 * @classdesc This function attaches an event listener to a target object on mount
 * and removes the listener on unmount.
 */
export const useEventListener = (target, type, listener, ...rest) => {
  useEffect(() => {
    // in a Node environment, exit early
    if (!target || typeof target.addEventListener !== "function") {
      return;
    }

    target.addEventListener(type, listener, ...rest);

    // return a callback, which is called on unmount
    return () => {
      target.removeEventListener(type, listener, ...rest);
    };
  }, [listener, rest, target, type]);
};
