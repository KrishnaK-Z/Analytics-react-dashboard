// Visitors chat data.
const chartData = {
  height: 230,
  type: "bar",
  options: {
    chart: {
      id: "bar-chart",
      toolbar: {
        show: false
      }
    },
    colors: ["#1665D8"],
    stroke: {
      curve: "smooth",
      width: 1
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "34%"
      }
    },
    // tooltip: {
    //   fixed: {
    //     enabled: false
    //   },
    //   x: {
    //     show: false
    //   },
    //   y: {
    //     title: {
    //       formatter: seriesName => "Visits "
    //     }
    //   },
    //   marker: {
    //     show: false
    //   }
    // },
    // tooltip: {
    //   custom: data => {
    //     const { series, seriesIndex, dataPointIndex, w } = data;
    //     // console.log("s", w.globals.labels[dataPointIndex]);
    //     // console.log("w", w.globals.colors);
    //     // console.log("a", Object.keys(w.globals));
    //     // console.log(
    //     //   "v",
    //     //   Object.values(w.globals).map(val => (val ? val.toString() : null))
    //     // );
    //     return `<div class="arrow_box">
    //         <span>${series[seriesIndex][dataPointIndex]}</span>
    //       </div>`;
    //   }
    // },
    xaxis: {
      type: "category",
      categories: Array.from({ length: 30 }, (_, index) => index + 1)
    },
    yaxis: {
      opposite: true,
      tickAmount: 3,
      labels: {
        formatter: num => {
          return Math.abs(num) > 999
            ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
            : Math.sign(num) * Math.abs(num);
        }
      }
    },
    fill: {
      type: "solid",
      colors: ["#1665D8"]
    },
    dataLabels: {
      enabled: false
    }
  },
  series: [
    {
      name: "Visitors",
      data: [
        3500,
        1250,
        3500,
        3500,
        3500,
        8000,
        3500,
        2000,
        3500,
        4500,
        1500,
        7500,
        1230,
        2300,
        3400,
        2300,
        7600,
        2300,
        8400,
        3800,
        2700,
        2300,
        8000,
        3500,
        2000,
        1250,
        3500,
        3500,
        3500,
        7700
      ]
    }
  ]
};
export default chartData;
