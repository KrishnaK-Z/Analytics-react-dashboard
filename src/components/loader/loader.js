import React from "react";
import "./loader.scss";

const Loader = () => {
  return (
    <div className="loader-ring">
      <h2>Loading...</h2>
      <div className="loader-ring-light" />
    </div>
  );
};

export default Loader;
