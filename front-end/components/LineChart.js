import {
  Chart as CharJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

CharJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

import { Line } from "react-chartjs-2";

import React from "react";
import lineChartStyles from "../styles/LineChart.module.css";

const LineChart = (props) => {
  return (
    <div class={lineChartStyles.chartBox}>
      <Line data={props.data} options={props.options} />
    </div>
  );
};

export default LineChart;
