import React from "react";
import Card from "../card";
import DropDown from "../dropDown";
import { data } from "./data";
import "./visitorsChart.scss";
import chartData from "./chartData";
import Chart from "react-apexcharts";

/**
 * Visitors Chart
 *
 * @classdesc Renders the Visitor chart and the tool tips.
 */
const VisitorsChart = () => {
  // Drop down options.
  const { months, years } = data;

  // Header content.
  const header = (
    <div className="visitor-chart__title">
      <h1>Daily Visitors</h1>
      <div className="drop-downs">
        <DropDown items={months} />
        <DropDown items={years} />
      </div>
    </div>
  );

  return (
    <Card header={header}>
      <Chart {...chartData} />
    </Card>
  );
};

export default VisitorsChart;
