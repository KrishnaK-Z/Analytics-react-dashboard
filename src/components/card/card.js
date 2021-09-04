import React from "react";
import "./card.scss";

/**
 * Card component
 *
 * @classdesc card wrapper style.
 *
 * @param header
 * @param children
 * @param className
 */
const Card = ({ header, children, className }) => {
  return (
    <div className={`card ${className}`}>
      {header && <header className="header">{header}</header>}
      <div className="content">{children}</div>
    </div>
  );
};

export default Card;
