import { Doughnut } from "react-chartjs-2";
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
  ArcElement,
} from "chart.js";

CharJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement
);
import React from "react";
import doughnutChartStyles from "../styles/DoughnutChart.module.css";

const DoughnutChart = (props) => {
  return (
    <div className={doughnutChartStyles.chartBox}>
      <Doughnut data={props.data} options={props.options} />
    </div>
  );
};

export default DoughnutChart;
