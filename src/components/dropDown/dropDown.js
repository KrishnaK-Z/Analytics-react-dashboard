import React, { Fragment, useState } from "react";

/**
 * Drop Down component.
 *
 * @classdesc Drop down options.
 *
 * @param items
 */
const DropDown = ({ items }) => {
  // Show/Hide the drop down items.
  const [showItems, setShowItems] = useState(false);

  // Default item.
  const defaultItem = items.filter(item => item.default);

  // Set the field value to the selected item.
  const [value, setValue] = useState(defaultItem[0].name);

  return (
    <div className="drop-down">
      <input type="hidden" value={value} />
      <div className="label" onClick={() => setShowItems(value => !value)}>
        {defaultItem.map(({ id, imgSrc, name }) => (
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

      <ul className={`drop-down__items ${showItems ? "open" : ""}`}>
        {items.map(({ imgSrc, name, id }) => (
          <li key={id} onClick={() => setValue(name)}>
            {imgSrc && <img width={20} height={20} src={imgSrc} alt={name} />}
            <span>{name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Export
export default DropDown;
