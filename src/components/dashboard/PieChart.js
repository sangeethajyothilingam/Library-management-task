/*doughnutchart*/
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Male", "Female"],
  datasets: [
    {
      label: "# of Votes",
      data: [55, 45],
      backgroundColor: ["orange", "green"],
      borderColor: "white",
      borderwidth: 500,
      cutout: "75%",
    },
  ],
};

export function PieChart() {
  return <Doughnut data={data} />;
}
