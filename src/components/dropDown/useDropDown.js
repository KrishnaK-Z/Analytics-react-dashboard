import { useCallback, useRef, useState } from "react";

import { useEventListener } from "../../hooks/useEventListener";

/**
 * A React Hook for adding dropdown-related logic.
 *
 * @classdesc An object containing functions and values to add dropdown logic
 */
export const useDropdown = () => {
  const elementRef = useRef(null);
  const triggerRef = useRef(null);
  const [expanded, setExpanded] = useState(false);

  // collapse on mousedown outside of the element and trigger.
  const maybeCollapse = useCallback(({ target }) => {
    const isOutsideElement =
      !elementRef.current || !elementRef.current.contains(target);
    const isOutsideTrigger =
      !triggerRef.current || !triggerRef.current.contains(target);

    if (isOutsideElement && isOutsideTrigger) {
      setExpanded(false);
    }
  }, []);

  // add listener to document, as an effect
  useEventListener(document, "mousedown", maybeCollapse);

  return {
    elementRef,
    expanded,
    setExpanded,
    triggerRef
  };
};
