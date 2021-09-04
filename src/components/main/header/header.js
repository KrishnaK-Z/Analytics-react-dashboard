import React from "react";
import DropDown from "../../dropDown";
import { data } from "./data";

/**
 * Header component
 *
 * @classdesc Top header of the main page.
 */
const Header = () => {
  const { countries } = data;

  return (
    <header className="main__header">
      <h2>Dashboard</h2>
      <DropDown items={countries} />
    </header>
  );
};

export default Header;
