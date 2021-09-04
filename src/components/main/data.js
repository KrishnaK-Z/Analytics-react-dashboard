// Chart data.
const realTimeUserChartData = {
  type: "area",
  height: 55,
  options: {
    chart: {
      id: "support-chart",
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ["#1665D8"],
    stroke: {
      curve: "smooth",
      width: 2
    },
    tooltip: {
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },
      y: {
        title: {
          formatter: seriesName => "Ticket "
        }
      },
      marker: {
        show: false
      }
    }
  },
  series: [
    {
      data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
    }
  ]
};

// List of stats data.
const DATA = [
  {
    id: 1,
    label: "Realtime Users",
    number: "56",
    uptrend: true,
    trendValue: "+9.8%",
    chartData: {
      ...realTimeUserChartData,
      options: {
        ...realTimeUserChartData.options,
        colors: ["#1665D8"]
      },
      series: [
        {
          data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
        }
      ]
    }
  },
  {
    id: 2,
    label: "Total Visits",
    number: "54,598",
    uptrend: false,
    trendValue: "-11.9%",
    chartData: {
      ...realTimeUserChartData,
      options: {
        ...realTimeUserChartData.options,
        colors: ["#38b249"]
      },
      series: [
        {
          data: [24, 33, 26, 21, 20, 6, 8, 15, 10, 45, 52, 38]
        }
      ]
    }
  },
  {
    id: 3,
    label: "Bonus Rate",
    number: "73.67%",
    uptrend: true,
    trendValue: "+12.2%",
    chartData: {
      ...realTimeUserChartData,
      options: {
        ...realTimeUserChartData.options,
        colors: ["#6977FF"]
      },
      series: [
        {
          data: [45, 21, 20, 6, 28, 15, 10, 52, 38, 24, 33, 26]
        }
      ]
    }
  },
  {
    id: 4,
    label: "Visit Duration",
    number: "1m 4s",
    uptrend: true,
    trendValue: "+19.6%",
    chartData: {
      ...realTimeUserChartData,
      options: {
        ...realTimeUserChartData.options,
        colors: ["#FACF55"]
      },
      series: [
        {
          data: [24, 45, 52, 38, 20, 26, 8, 15, 12, 33, 26, 21]
        }
      ]
    }
  }
];

export default DATA;
