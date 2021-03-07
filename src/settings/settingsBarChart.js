import "chartjs-plugin-datalabels";

export const chartBarOpenOption = {
  legend: {
    display: false,
  },
  tooltips: {
    enabled: false,
  },
  plugins: {
    datalabels: {
      padding: {
        top: "-10",
      },
      anchor: "end",
      align: "270",
      font: {
        weight: "bold",
      },
    },
  },
  responsive: true,
  scales: {
    xAxes: [
      {
        gridLines: {
          display: false,
          drawOnChartArea: false,
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
          drawOnChartArea: false,
        },
        ticks: {
          beginAtZero: true,
          display: false,
        },
      },
    ],
  },
};
export const chartBarCloseOption = {
  legend: {
    display: false,
  },
  tooltips: {
    enabled: false,
  },
  plugins: {
    datalabels: {
      display: false,
    },
  },
  responsive: true,
  scales: {
    xAxes: [
      {
        gridLines: {
          display: false,
          drawOnChartArea: false,
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
          drawOnChartArea: false,
        },
        ticks: {
          beginAtZero: true,
          display: false,
        },
      },
    ],
  },
};
export const chartBarData = (labels, values, colors, hoverColors) => {
  const data = {
    labels: labels,
    datasets: [
      {
        data: values,
        backgroundColor: colors,
        hoverBackgroundColor: hoverColors,
      },
    ],
  };
  return data;
};
export const chartDoughnutOption = {
  legend: {
    display: false,
    position: "right",
  },
  plugins: {
    datalabels: {
      display: false,
    },
  },
  cutoutPercentage: 80,
  elements: {
    arc: {
      borderWidth: 1,
    },
  },
};

export const chartDoughnutData = (labels, values, colors, hoverColors) => {
  const data = {
    maintainAspectRatio: false,
    responsive: false,
    labels: labels,
    datasets: [
      {
        data: values,
        backgroundColor: colors,
        weight: 1,
        borderWidth: 0,
        hoverBackgroundColor: hoverColors,
      },
    ],
  };
  return data;
};
export const typesSetting = (colors) => {
  const nameTypes = Object.values(colors);
  const item = nameTypes.map((itemColor) => {
    const nameCase =
      itemColor.name === undefined
        ? "other"
        : itemColor.name.toString().toLowerCase();
    switch (nameCase) {
      case "entertainment":
        return {
          color: "rgba(169,200,251,1)",
          label: itemColor.name,
          total: itemColor.total,
        };
      case "productivity":
        return {
          color: "rgba(249,160,0,1)",
          label: itemColor.name,
          total: itemColor.total,
        };
      case "social":
        return {
          color: "rgba(70,75,98,1)",
          label: itemColor.name,
          total: itemColor.total,
        };
      case "health":
        return {
          color: "rgba(41,195,125,1)",
          label: itemColor.name,
          total: itemColor.total,
        };
      case "others":
        return {
          color: "rgba(237,0,6,1)",
          label: itemColor.name,
          total: itemColor.total,
        };
      default:
        break;
    }
    return;
  });
  const settings = item.reduce(
    (p, c) => (
      console.log(p),
      p.color.push(c.color),
      p.label.push(c.label),
      p.total.push(c.total),
      p
    ),
    { color: [], label: [], total: [] }
  );
  return settings;
};
