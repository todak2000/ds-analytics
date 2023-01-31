import React from "react";
import type { ChartData } from "chart.js";
import { BarChartProps } from "./BarChart.types";
import { Bar } from "react-chartjs-2";


const DSBarChart: React.FC<BarChartProps> = ({ 
  Ydataset,
  Xlabels,
  title,
  stepSize = 50,
  min = 50,
  max = 500,
  aspectRatio = 1,
  backgroundColor = "#A954EB",
  borderColor = "rgb(255, 99, 132)",
  borderRadius = 1

}) => {

  const dataset = Ydataset;
  const labelss = Xlabels;
  const data: ChartData<"bar", any[], string> = {
    labels: labelss || [
      "Login",
      "Register",
      "Dashboard",
      "Forgot Password",
      "Services",
    ],
    datasets: [
      {
        label: title,
        data: dataset,
        borderColor: borderColor,
        backgroundColor: backgroundColor,
        borderRadius: borderRadius,
      },
    ],
  };
  return (
    <Bar
      options={{
        responsive: true,
        plugins: {
          legend: { display: false },
          title: { display: false },
        },
        scales: {
          x: { grid: { display: false } },
          y: {
            grid: { display: false },
            ticks: { display: false, stepSize: stepSize },
            min: min,
            max: max,
          },
        },
        aspectRatio: aspectRatio,
      }}
      data={data}
    />
  )
};

export default DSBarChart;
