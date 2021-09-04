import React from "react";
import Stats from "../stats";
import MostViewedPages from "../Traffic/mostViewedPages";
import SocialMedia from "../Traffic/socialMedia";
import VisitorsChart from "../visitorsChart";
import Header from "./header";
import DATA from "./data";

/**
 * Main component
 *
 * @classdesc Renders the right side of the page content.
 */
const Main = () => {
  return (
    <div className="right-side__wrapper">
      <Header />
      <main className="main-content__wrapper">
        <VisitorsChart />
        <div className="stats-wrapper">
          {DATA.map(data => (
            <Stats key={data.id} {...data} />
          ))}
        </div>
        <div className="traffic-stats">
          <MostViewedPages />
          <SocialMedia />
        </div>
      </main>
    </div>
  );
};

export default Main;
