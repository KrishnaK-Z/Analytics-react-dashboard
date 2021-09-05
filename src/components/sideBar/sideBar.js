import React from "react";
import Home from "../../assets/icons/icons8-home.svg";
import MenuList from "../menuList";
import ProfileCard from "../profileCard";
import "./sideBar.scss";
import { BsArrowRight } from "react-icons/bs";
import { NAV_ITEMS, RECENTLY_VIEWS } from "./navItems";

/**
 * Side Bar
 *
 * @classdesc Renders the Side bar and the navigation link items.
 */
const SideBar = () => {
  return (
    <nav className="nav-bar">
      <header className="header flex-center">
        <img src={Home} alt="home" />
      </header>
      <div className="nav-bar-scroll">
        <ProfileCard />
        <MenuList menuItems={NAV_ITEMS} />
        <section className="recently-viewed">
          <h2 className="title">Recently viewed</h2>
          <ul className="items">
            {RECENTLY_VIEWS.map(({ id, name }) => (
              <li key={id}>
                <a href="#">
                  <span>{name}</span>
                  <BsArrowRight />
                </a>
              </li>
            ))}
          </ul>
        </section>
        <footer className="credits">
          <div className="credit">
            <strong>Developed By: </strong>
            <span>github.com/KrishnaK-Z</span>
          </div>
          <div className="credit">
            <strong>Inspired By: </strong>
            <span>dribbble.com/janlosert</span>
          </div>
        </footer>
      </div>
    </nav>
  );
};

export default SideBar;
