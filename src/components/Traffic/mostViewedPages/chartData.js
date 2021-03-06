function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

export const constructChartData = data => {
  return {
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
        custom: function({ series, seriesIndex, dataPointIndex, w }) {
          return (
            '<div class="arrow_box">' +
            "<span>Visitors: " +
            series[seriesIndex][dataPointIndex] +
            "</span>" +
            "</div>"
          );
        }
      }
    },
    series: [
      {
        data: shuffle(data)
      }
    ]
  };
};
