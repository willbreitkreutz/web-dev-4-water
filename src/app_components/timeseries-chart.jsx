import Chart from "chart.js/auto";
import { useRef, useEffect } from "react";

function TSChart({ timeseries }) {
  const columns = timeseries["value-columns"];
  const values = timeseries.values;
  const chartRef = useRef(null);
  const chartId = useRef(null);

  useEffect(() => {
    if (chartId.current !== null) {
      return;
    }
    const chart = new Chart(chartRef.current, {
      type: "line",
      data: {
        labels: values.map((val) => {
          return new Date(val[0]).toLocaleTimeString();
        }),
        datasets: [
          {
            label: timeseries.name,
            data: values.map((val) => {
              return val[1];
            }),
          },
        ],
      },
    });
    chartId.current = chart.id;
  }, [timeseries]);

  return (
    <div>
      <canvas ref={chartRef}></canvas>
    </div>
  );
}

export default TSChart;
