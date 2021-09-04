import React, { useState } from "react";
import "./navCollapse.scss";
import MenuList from "../menuList";
import { IoIosArrowForward } from "react-icons/io";

/**
 * Nav Collapse component
 *
 * @classdesc Renders the accordion and the nested menu items.
 *
 * @param item
 */
const NavCollapse = ({ item }) => {
  const [open, setOpen] = useState(false);

  return (
    <li
      onClick={() => setOpen(value => !value)}
      key={item.id}
      className="panel panel-default"
    >
      <h2>
        {item.icon}
        <span>{item.title}</span>
        <IoIosArrowForward />
      </h2>
      <MenuList
        className={open ? "panel-collapse" : "panel-collapse panel-close"}
        menuItems={item.children}
      />
    </li>
  );
};

export default NavCollapse;
