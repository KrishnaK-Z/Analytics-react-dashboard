// Chart data.
const CHART_DATA = {
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
      data: [31, 20, 45, 22, 38, 25, 20, 24, 33, 26, 20, 35]
    }
  ],
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      stops: [0, 90, 100]
    }
  }
};

export default CHART_DATA;
