import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

// Register required components for Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Web Sales",
      data: [1000, 2000, 3000, 5000, 7000, 8000],
      borderColor: "#2563eb",
      backgroundColor: "rgba(37, 99, 235, 0.5)",
      borderWidth: 2,
      tension: 0.4,
    },
    {
      label: "Offline Sales",
      data: [500, 1000, 1800, 2600, 3500, 4000],
      borderColor: "#93c5fd",
      backgroundColor: "rgba(147, 197, 253, 0.5)",
      borderWidth: 2,
      tension: 0.4,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      position: "bottom",
      labels: {
        usePointStyle: false,
      },
    },
  },
  scales: {
    x: { display: false },
    y: { display: false },
  },
};

const CustomersByDevice = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md w-full mt-4">
      <h2 className="text-lg font-semibold">Customers by device</h2>
      <div className="h-44">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default CustomersByDevice;
