"use client";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend, Title);

export default function Chart() {
  const options = {
    responsive: true,
    // cutout: "65%",
    border: "1%",
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "My First Dataset",
        data: [15, 150, 133, 40],
        backgroundColor: ["#626070", "#F2CDAC", "#82C9D7", "#277C78"],
        hoverOffset: 4,
        borderWidth: 0,
        cutout: "52%", // Larger inner space to create an overlapping effect
      },
      {
        data: [15, 150, 133, 40],
        backgroundColor: [
          "rgba(98, 96, 112, 0.7)",
          "rgba(242, 205, 172, 0.7)",
          "rgba(130, 201, 215, 0.7)",
          "rgba(39, 124, 120, 0.7)",
        ],
        hoverOffset: 4,
        borderWidth: 0,
        cutout: "62%",
      },
    ],
  };

  return (
    <div className="size-[240px] flex justify-center relative text-center">
      <Doughnut data={data} options={options} />

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <p className="font-bold text-[32px] text-gray-900">$338</p>
        <p className="font-normal text-[12px] text-gray-500">of $ limit</p>
      </div>
    </div>
  );
}
