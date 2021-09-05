import React, { Fragment, useState } from "react";
import { useDropdown } from "./useDropDown";

/**
 * Drop Down component.
 *
 * @classdesc Drop down options.
 *
 * @param items
 * @param className
 */
const DropDown = ({ items, className }) => {
  // Returns props necessary to render drop down.
  const { elementRef, expanded, setExpanded, triggerRef } = useDropdown();

  // Set the field value to the selected item.
  const [value, setValue] = useState(items.filter(item => item.default));

  return (
    <div className={`drop-down ${className}`} ref={triggerRef}>
      <input type="hidden" value={value[0].name} />
      <div className="label" onClick={() => setExpanded(value => !value)}>
        {value?.map(({ id, imgSrc, name }) => (
          <Fragment key={id}>
            {imgSrc && (
              <img
                className="img"
                width={20}
                height={20}
                src={imgSrc}
                alt={name}
              />
            )}
            <span>{name}</span>
          </Fragment>
        ))}
        <div className="arrows" />
      </div>

      <ul
        ref={elementRef}
        className={`drop-down__items ${expanded ? "open" : ""}`}
      >
        {items.map(item => {
          const { imgSrc, name, id } = item;
          return (
            <li
              key={id}
              onClick={() => {
                setValue([item]);
                setExpanded(value => !value);
              }}
            >
              {imgSrc && <img width={20} height={20} src={imgSrc} alt={name} />}
              <span>{name}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

// Export
export default DropDown;
