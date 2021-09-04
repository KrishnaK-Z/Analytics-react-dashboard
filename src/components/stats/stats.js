import React from "react";
import "./stats.scss";
import Chart from "react-apexcharts";
import { BsBoxArrowDownRight, BsBoxArrowInUpRight } from "react-icons/bs";

/**
 * Stats Component
 *
 * @param {string} label
 * @param {number} number
 * @param {boolean} uptrend
 * @param {string} trendValue
 * @param {object} chartData
 */
const Stats = ({ label, number, uptrend, trendValue, chartData }) => {
  return (
    <div className="stats-card">
      <h3 className="label">{label}</h3>
      <h1 className="number">{number}</h1>
      <div className="trend-wrapper">
        <p className={uptrend ? "up-trend" : "down-trend"}>{trendValue}</p>
        {uptrend ? (
          <BsBoxArrowInUpRight color={"#38b249"} />
        ) : (
          <BsBoxArrowDownRight color={"#e6492d"} />
        )}
      </div>
      <Chart {...chartData} />
    </div>
  );
};

export default Stats;
