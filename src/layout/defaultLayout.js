import React from "react";
import Main from "../components/main";
import SideBar from "../components/sideBar";

const DefaultLayout = () => {
  return (
    <div className="root__wrapper">
      <SideBar />
      <Main />
    </div>
  );
};

export default DefaultLayout;
