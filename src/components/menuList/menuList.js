import React from "react";
import NavCollapse from "./navCollapse";

/**
 * Menu Items
 *
 * @classdesc List of nav menu items
 *
 * @param menuItems
 * @param className
 */
const MenuList = ({ menuItems, className }) => {
  const navItems = menuItems.map(item => {
    switch (item.type) {
      case "collapse":
        return <NavCollapse key={item.id} item={item} />;
      case "item":
        return (
          <li key={item.id}>
            <h2>
              {item.icon}
              <span>{item.title}</span>
            </h2>
          </li>
        );
      default:
        return <span key={item.id}>Menu Items Error</span>;
    }
  });

  return <ul className={`nav-links ${className}`}>{navItems}</ul>;
};

export default MenuList;
