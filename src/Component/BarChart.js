import React from "react";
import Chart from "chart.js/auto"
import { Bar } from "react-chartjs-2";

const BarChart = ({dataArray}) => {
    const labels = ["a","b","c"];
    const data = {
      labels: labels,
      datasets: [
        {
          label: "Object Counter",
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgb(255, 99, 132)",
          data: dataArray,
        },
      ],
    };
    return (
      <div style={{ width: "500px", height: "400px", marginLeft:"35rem",
      marginTop:"5rem" }}>
      <Bar data={data} />
      </div>
    );
  };
  
  export default BarChart;