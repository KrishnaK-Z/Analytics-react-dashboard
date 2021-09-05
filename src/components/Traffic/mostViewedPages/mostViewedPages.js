import React from "react";
import Card from "../../card";
import MOST_VIEWED_PAGES from "./data";
import "./mostViewedPages.scss";
import Chart from "react-apexcharts";
import { constructChartData } from "./chartData";
import { BsBoxArrowUpRight } from "react-icons/bs";

const MostViewedPages = () => {
  const CHART_DATA = [31, 20, 45, 22, 38, 25, 20, 24, 33, 26, 20, 35];

  // Card title.
  const header = <h1>Most Visited Pages</h1>;

  return (
    <Card className="most-viewed" header={header}>
      <table className="card-table">
        <col style={{ width: "50%" }} />
        <col style={{ width: "10%" }} />
        <col style={{ width: "30%" }} />
        <thead>
          <tr>
            <th>Page Name</th>
            <th>Visitors</th>
            <th>Unique Page Visits</th>
            <th>Bounce Rate</th>
          </tr>
        </thead>
        <tbody>
          {MOST_VIEWED_PAGES.map(
            ({ id, page, visitors, uniquePageVisits, bRate }) => (
              <tr key={id}>
                <td className="page">
                  <span>{page}</span>
                  <BsBoxArrowUpRight size={20} />
                </td>
                <td className="visitors">{visitors}</td>
                <td className="unique-page">{uniquePageVisits}</td>
                <td className="bonus-rate">
                  <span>{bRate}</span>
                  <Chart {...constructChartData([...CHART_DATA])} />
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </Card>
  );
};

export default MostViewedPages;
